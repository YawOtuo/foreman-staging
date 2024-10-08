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
import { useRouter, useSearchParams } from "next/navigation";
import useSignUpStore from "./useSignUpStore";
import { firebaseErrorMap } from "@/lib/utils/firebaseErrorMap";
import { FetchOrCreateResponse, fetchOrCreateUserByUid } from "@/lib/api/users";
import useSignUp from "./useSignUp";

function Page() {
  const { handleSubmit, GoogleSignIn } = useSignUp();
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
