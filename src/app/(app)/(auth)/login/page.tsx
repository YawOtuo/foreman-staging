"use client";
import Link from "next/link";
import FormInput from "../components/FormInput";
import FormWrapper from "../components/FormWrapper";
import LoginButton from "../components/LoginButton";
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
import { useRouter } from "next/navigation";
import LoginComponent from "./components/LoginComponent";

function Page() {
  return <LoginComponent />;
}

export default Page;
