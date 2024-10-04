import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "@/app/firebase";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useRouter, useSearchParams } from "next/navigation";
import FormInput from "../../components/FormInput";
import LoginButton from "../../components/LoginButton";
import { firebaseErrorMap } from "@/lib/utils/firebaseErrorMap";
import { useState } from "react";

function useLogin() {
  const { toast } = useToast();
  const searchParams = useSearchParams();
  const [emailIsLoading, setEmailIsLoading] = useState<boolean>(false);
  const [isGoogleLoading, setGoogleIsLoading] = useState<boolean>(false);

  const router = useRouter();
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setEmailIsLoading(true);

    try {
      const formData = new FormData(e.currentTarget);
      const email = formData.get("email") as string;
      const password = formData.get("password") as string;
      console.log({ email, password });

      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential;

      toast({
        title: `Welcome`,
        description: `You have successfully logged in with ${email}`,
        variant: "success",
      });

      if (searchParams.get("redirect-url") == "checkout") {
        router.push("/checkout");
      } else {
        router.push("/dashboard");
      }
    } catch (error: any) {
      const errorCode = error.code;
      const errorData = firebaseErrorMap[errorCode] || error.message;
      toast({
        title: errorData.title,
        description: errorData.msg,
        variant: "destructive",
      });
    } finally {
      // reset form
      setEmailIsLoading(false);
      e.currentTarget.reset();
    }
  }

  async function GoogleSignIn() {
    // Sign in with Google
    setGoogleIsLoading(true);

    try {
      const googleProvider = new GoogleAuthProvider();
      googleProvider.setCustomParameters({
        prompt: "select_account",
      });

      const result = await signInWithPopup(auth, googleProvider);
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
    } catch (error: any) {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      toast({
        title: `Error ${errorCode}`,
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setGoogleIsLoading(false);
    }
  }

  return {
    handleSubmit,
    GoogleSignIn,
    emailIsLoading,
    isGoogleLoading,
  };
}

export default useLogin;
