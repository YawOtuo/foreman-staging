"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { PiSignInDuotone } from "react-icons/pi";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "@/app/firebase";

const Page = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [emailIsLoading, setEmailIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEmailIsLoading(true);
    setMessage("");
    setError("");

    try {
      await sendPasswordResetEmail(auth, email);
      setMessage("Password reset email sent. Please check your inbox.");
    } catch (error) {
      setError("Failed to send password reset email. Please try again.");
      console.log(error);
    } finally {
      setEmailIsLoading(false);
      setEmail("");
    }
  };

  return (
    <section className="flex flex-col md:w-[550px] items-start">
      {!message ? (
        <>
          <div className="pb-6 space-y-1">
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
        <section className="">
          <h1 className="font-bold text-slate-600 sm:text-2xl sm:text-slate-800 line-clamp- sm:w-96">
            {message}
          </h1>
        </section>
      )}
    </section>
  );
};

export default Page;
