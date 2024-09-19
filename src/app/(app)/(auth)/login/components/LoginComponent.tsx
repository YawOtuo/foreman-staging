"use client";
import Link from "next/link";
import {
  PiFacebookLogoDuotone,
  PiGoogleLogo,
  PiSignInDuotone,
} from "react-icons/pi";
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
import useLogin from "./useLogin";

type Props = {};

function LoginComponent({}: Props) {
  const { handleSubmit, GoogleSignIn } = useLogin();
  const searchParams = useSearchParams();

  return (
    <>
      {" "}
      <div className="w-full">
        <h2 className="text-primary-100 text-3xl lg:text-3xl font-bold ">
          Shop.
        </h2>
        <p className="text-lg lg:text-xl  text-shade-300">
          Build with Foreman today
        </p>
      </div>
      <div className="w-full">
        <form
          onSubmit={handleSubmit}
          className="self-start flex flex-col gap-4 pt-4 lg:min-w-[400px]">
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
          <Button
            variant={"default"}
            type="submit"
            className="bg-primary-100 text-white w-full p-3 flex items-center justify-center gap-2">
            <PiSignInDuotone />
            <span>Sign In</span>
          </Button>

          <div className="flex items-center justify-between">
            <a href="#" className="text-slate-500">
              Forgot Password?
            </a>
          </div>

          <div className="flex items-center gap-1 text-center">
            <label>Don&apos;t have an account?</label>
            <Link
              href={
                searchParams.get("redirect-url")
                  ? `/signup?redirect-url=${searchParams.get("redirect-url")}`
                  : "/signup"
              }
              className="text-slate-500">
              Sign up
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
          {/* <LoginButton
        icon={<PiFacebookLogoDuotone />}
        onClick={() => {}}
        type="button"
        name="Continue with Facebook"
      /> */}
        </form>
      </div>{" "}
    </>
  );
}

export default LoginComponent;
