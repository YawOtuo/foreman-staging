import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "@/app/firebase";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useRouter, useSearchParams } from "next/navigation";
import useSignUpStore from "./useSignUpStore";
import { firebaseErrorMap } from "@/lib/utils/firebaseErrorMap";
import { FetchOrCreateResponse, fetchOrCreateUserByUid } from "@/lib/api/users";
import { useEffect, useState } from "react";

function useSignUp() {
  const { toast } = useToast();
  const router = useRouter();
  const searchParams = useSearchParams();
  const { username, setUsername } = useSignUpStore();
  const [signUpData, setSignUpData] = useState<{
    email: string;
    password: string;
    confirmPassword: string;
  } | null>(null);

  useEffect(() => {
    if (username && signUpData) {
      // proceed with sign up
      const { email, password, confirmPassword } = signUpData;

      if (password !== confirmPassword) {
        toast({
          title: "Error",
          description: "Passwords do not match",
          variant: "destructive",
        });
        return;
      }

      createUserWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
          const user = userCredential.user;
  
          const userData: FetchOrCreateResponse = await fetchOrCreateUserByUid({
            username: user?.displayName || username || "User",
            email: String(user?.email || user?.providerData?.[0]?.email),
            uid: user?.uid,
          });

          toast({
            title: `Welcome ${username}`,
            description: `You have successfully registered with ${email}`,
            variant: "success",
          });

          if (searchParams.get("redirect-url") == "checkout") {
            router.push("/checkout");
          } else {
            router.push("/dashboard");
          }

          // router.back();
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          toast({
            title: `Error ${errorCode}`,
            description: errorMessage,
            variant: "destructive",
          });
          console.log({ errorCode, errorMessage });
        });
    }
  }, [username, signUpData, toast, router]);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    setUsername(`${formData.get("firstName")} ${formData.get("lastName")}`);

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const confirmPassword = formData.get("confirmPassword") as string;

    setSignUpData({ email, password, confirmPassword });
    // rest form
    e.currentTarget.reset();
  }

  function GoogleSignIn() {
    const googleProvider = new GoogleAuthProvider();
    googleProvider.setCustomParameters({
      prompt: "select_account",
    });
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        toast({
          title: `Welcome ${user.displayName}`,
          description: `You have successfully logged in with Google`,
          variant: "success",
        });
        if (searchParams.get("redirect-url") == "checkout") {
          router.push("/checkout");
        } else {
          router.push("/dashboard");
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorData = firebaseErrorMap[errorCode] || {
          title: "Error",
          msg: error.message,
        };
        toast({
          title: errorData.title,
          description: errorData.msg,
          variant: "destructive",
        });
      });
  }

  return {
    handleSubmit,
    GoogleSignIn,
  };
}

export default useSignUp;
