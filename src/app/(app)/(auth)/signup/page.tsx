"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import FormInput from "../components/FormInput";
import LoginButton from "../components/LoginButton";
import { PiGoogleLogo, PiSignInDuotone } from "react-icons/pi";
import useSignUp from "./useSignUp";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

function Page() {
  const { handleSubmit, GoogleSignIn, isSignUpLoading, isGoogleLoading } =
    useSignUp();
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
          className="self-start flex flex-col gap-4 pt-4 lg:min-w-[400px]"
        >
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
            disabled={isSignUpLoading}
            className="bg-primary-100 text-white w-full p-3 flex items-center justify-center gap-2"
          >
            {isSignUpLoading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <PiSignInDuotone />
            )}
            <span>{isSignUpLoading ? "Registering..." : "Register"}</span>
          </Button>

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
            disabled={isGoogleLoading}
            name={
              isGoogleLoading
                ? "Signing in with Google..."
                : "Continue with Goodgle"
            }
          />
        </form>
      </div>{" "}
    </>
  );
}

export default Page;
