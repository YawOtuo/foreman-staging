"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { PiSignInDuotone } from "react-icons/pi";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "@/app/firebase";
import { HiOutlineLockOpen } from "react-icons/hi";
import Link from "next/link";
import Image from "next/image";

const Page = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState(false);
  const [emailIsLoading, setEmailIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEmailIsLoading(true);
    setError("");

    try {
      await sendPasswordResetEmail(auth, email);
      setMessage(true);
    } catch (error) {
      setError("Failed to send password reset email. Please try again.");
      console.log(error);
    } finally {
      setEmailIsLoading(false);
    }
  };

  return (
    <section className="flex flex-col justify-center md:w-[550px] md:h-screen space-y-5">
      {!message ? (
        <>
          <div>
            <Image
              src={"/lock.jpg"}
              alt="lock image"
              width={100}
              height={100}
            />
          </div>
          <div className="space-y-1">
            <h1 className="font-semibold text-xl">Forgot your password?</h1>
            <p className="text-sm text-slate-500">
              Submit your email to recieve further instructions to change
              password
            </p>
          </div>
          <form onSubmit={handleSubmit} className="md:w-full w-4/5  space-y-6">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email address
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="eg. johndoe@gmail.com"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </label>
            <Button
              variant={"default"}
              type="submit"
              disabled={emailIsLoading}
              className="bg-primary-100 text-white w-full p-3 flex items-center justify-center gap-2"
            >
              {emailIsLoading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <PiSignInDuotone />
              )}
              <span>{emailIsLoading ? "Submitting..." : "Submit"}</span>
            </Button>
            {error && <div className="mt-4 text-sm text-red-600">{error}</div>}
          </form>
        </>
      ) : (
        <section className="space-y-2">
          <h1 className="font-medium sm:text-lg sm:text-slate-800">
            Password reset email has been sent to{" "}
            <span className="italic text-slate-600 underline">{email}</span>.
            Please check your inbox.
          </h1>
          <p className="text-slate-500">
            You can click{" "}
            <Link
              href="/login"
              className="underline text-black hover:text-primary-100"
            >
              here
            </Link>{" "}
            to login after password change.
          </p>
        </section>
      )}
    </section>
  );
};

export default Page;
