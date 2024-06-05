"use client";
import Link from "next/link";
import FormInput from "../components/FormInput";
import FormWrapper from "../components/FormWrapper";
import LoginButton from "../components/LoginButton";
import { PiFacebookLogoDuotone, PiGoogleLogo, PiSignInDuotone } from "react-icons/pi";


function Page() {

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const email = formData.get("email") as string;
        const name = formData.get("name") as string;
        const password = formData.get("password") as string;
        console.log({ email, name, password });

        // rest form
        e.currentTarget.reset();   
    }


    return (
        <div className="relative flex items-center justify-center min-h-screen bg-[url('/login4.png')] px-5 lg:px-0 bg-no-repeat bg-cover bg-bottom  lg:bg-center text-white">
            {/* Blur and darken overlay */}
            <div className="absolute insert-0 backdrop-blur-lg bg-black bg-opacity-75 w-full h-full z-[1]"></div>

            {/* Content container */}
            <div className="relative z-[1] flex flex-col items-center justify-center w-full md:w-[40%] gap-5  min-h-[50vh]">

                <FormWrapper
                    title="Welcome Back"
                    description="Login to your account to continue"
                    onSubmit={handleSubmit}
                    className="w-full flex flex-col gap-3 sm:w-[60%] lg:w-[60%] p-5 bg-white text-black"
                >
                    <FormInput label="Email" type="" placeholder="Enter your email" value="" name="email" />
                    <FormInput label="Name" type="text" placeholder="Enter your name" value="" name="name" />
                    <FormInput label="Password" type="password" placeholder="Enter your password" value="" name="password" />
                    <LoginButton type="submit" name="Login" icon={<PiSignInDuotone />} />

                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1">
                            <input type="checkbox" />
                            <label>Remember me</label>
                        </div>
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

                    <LoginButton icon={<PiGoogleLogo />} onClick={() => { }} type="button" name="Continue with Google" className="bg-[#DB4437]" />
                    <LoginButton icon={<PiFacebookLogoDuotone />} onClick={() => { }} type="button" name="Continue with Facebook" className="bg-[#1877F2]" />
                </FormWrapper>
            </div>
        </div>
    );
}

export default Page;
