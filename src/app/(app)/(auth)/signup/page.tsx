"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import FormInput from "../components/FormInput";
import LoginButton from "../components/LoginButton";
import { PiGoogleLogo, PiSignInDuotone } from "react-icons/pi";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "@/app/firebase";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import useSignUpStore from "./useSignUpStore";
import { firebaseErrorMap } from "@/lib/utils/firebaseErrorMap";
import { FetchOrCreateResponse, fetchOrCreateUserByUid } from "@/lib/api/users";

function Page() {
  const { toast } = useToast();
  const router = useRouter();
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
          console.log(user);

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
          // router.push("/");
          router.back();
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
        console.log(user);
        toast({
          title: `Welcome ${user.displayName}`,
          description: `You have successfully logged in with Google`,
          variant: "success",
        });
        router.back();
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

  return (
    <>
      {" "}
      <div className="w-full">
        <h2 className="text-primary-100 text-3xl lg:text-3xl font-bold ">
          Register.
        </h2>
        <p className="text-lg lg:text-xl  text-shade-300">
          Your construction journey begins today{" "}
        </p>
      </div>
      <div className="w-full">
        <form
          onSubmit={handleSubmit}
          className="self-start flex flex-col gap-4 pt-4 lg:min-w-[400px]">
          <FormInput
            required
            label="Name"
            type=""
            placeholder="Enter First Name"
            value=""
            name="firstName"
          />
          <FormInput
            required
            label="Last Name"
            type=""
            placeholder="Enter Last Name"
            value=""
            name="lastName"
          />
          <FormInput
            required
            label="Email"
            type=""
            placeholder="Enter your email"
            value=""
            name="email"
          />
          <FormInput
            required
            label="Password"
            type="password"
            placeholder="Enter your password"
            value=""
            name="password"
          />
          <FormInput
            required
            label="Confirm Password"
            type="password"
            placeholder="Confirm your password"
            value=""
            name="confirmPassword"
          />
          <Button
            variant={"default"}
            type="submit"
            className="bg-primary-100 text-white w-full p-3 flex items-center justify-center gap-2">
            <PiSignInDuotone />
            <span>Register</span>
          </Button>
          <div className="flex items-center justify-between">
            <a href="#" className="text-slate-500">
              Forgot Password?
            </a>
          </div>

          <div className="flex items-center gap-1 text-center">
            <label>Already have an account?</label>
            <Link href="/login" className="text-slate-500">
              Login
            </Link>
          </div>

          <div className="flex flex-row gap-3 items-center">
            <hr className="w-full" />
            <span className="text-center">Or</span>
            <hr className="w-full" />
          </div>

          <LoginButton
            icon={<PiGoogleLogo />}
            onClick={GoogleSignIn}
            type="button"
            name="Continue with Google"
          />
        </form>
      </div>{" "}
    </>
  );
}

export default Page;
