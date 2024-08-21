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

function useLogin() {
  const { toast } = useToast();
  const searchParams = useSearchParams();

  const router = useRouter();
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    console.log({ email, password });

    // sign In with firebase email and password
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        toast({
          title: `Welcome`,
          description: `You have successfully logged in with ${email}`,
          variant: "success",
        })

        if (searchParams.get("redirect-url") == "checkout") {
          router.push("/checkout");
        } else {
          router.push("/dashboard");
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorData = firebaseErrorMap[errorCode] || error.message;
        toast({
          title: errorData.title,
          description: errorData.msg,
          variant: "destructive",
        });
      });

    // rest form
    e.currentTarget.reset();
  }

  function GoogleSignIn() {
    // Sign in with Google
    const googleProvider = new GoogleAuthProvider();
    googleProvider.setCustomParameters({
      prompt: "select_account",
    });
    // const provider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        // The signed-in user info.
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
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        toast({
          title: `Error ${errorCode}`,
          description: errorMessage,
          variant: "destructive",
        });
      });
  }

  return {
    handleSubmit,
    GoogleSignIn,
  };
}

export default useLogin;
