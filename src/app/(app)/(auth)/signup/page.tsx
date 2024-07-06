"use client";
import Link from "next/link";
import FormInput from "../components/FormInput";
import LoginButton from "../components/LoginButton";
import { PiFacebookLogoDuotone, PiGoogleLogo, PiSignInDuotone } from "react-icons/pi";
import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth } from "@/app/firebase";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

function Page() {
    const { toast } = useToast();
    const router = useRouter();
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;
        console.log({ email, name, password });

        // sign Up with firebase email, name and password 
        createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
            toast({
                title: `Welcome`,
                description: `You have successfully registered with ${email}`,
                variant: "success"
            })
            router.push("/");
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            toast({
                title: `Error ${errorCode}`,
                description: errorMessage,
                variant: "error"
            })
            console.log({ errorCode, errorMessage });
        });
        // rest form
        e.currentTarget.reset();
    }

    function GoogleSignIn() {
        // Sign in with Google
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider).then((result) => {
            // The signed-in user info.
            const user = result.user;
            console.log(user);
            toast({
                title: `Welcome ${user.displayName}`,
                description: `You have successfully logged in with Google`,
                variant: "success"
            })
            router.push("/");
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            toast({
                title: `Error ${errorCode}`,
                description: errorMessage,
                variant: "destructive"
            })
        });
    }

    return (

        <form onSubmit={handleSubmit} className="self-start flex flex-col gap-4 pt-4">
            <FormInput required label="Email" type="" placeholder="Enter your email" value="" name="email" />
            <FormInput required label="Password" type="password" placeholder="Enter your password" value="" name="password" />
            <Button variant={"default"} type="submit" className="bg-primary-100 text-white w-full p-3 flex items-center justify-center gap-2">
                <PiSignInDuotone />
                <span>Register</span>
            </Button>
            <div className="flex items-center justify-between">
             
                <a href="#" className="text-slate-500">Forgot Password?</a>
            </div>

            <div className="flex items-center gap-1 text-center">
                <label>Already have an account?</label>
                <Link href="/login" className="text-slate-500">Login</Link>
            </div>

            <div className="flex flex-row gap-3 items-center">
                <hr className="w-full" />
                <span className="text-center">Or</span>
                <hr className="w-full" />
            </div>

            <LoginButton icon={<PiGoogleLogo />} onClick={GoogleSignIn} type="button" name="Continue with Google"  />
            {/* <LoginButton icon={<PiFacebookLogoDuotone />} onClick={() => { }} type="button" name="Continue with Facebook"  /> */}
        </form>
    );
}

export default Page;