import LottieFileBuilder from "@/components/LottieFileBuilder";
import { Button } from "@/components/ui/button";
import animationData from "@/lotties/crane1.json";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function SupplySection() {
  return (
    <section className="flex flex-col lg:flex-row  lg:h-screen items-center justify-center gap-10 lg:gap-20 w-full">


      <div className="w-full order-2 lg:order-1 lg:basis-[40%] lg:grow-0">
        <LottieFileBuilder animationData={animationData} width={"100%"} />
      </div>


      <div className="flex flex-col gap-5 items-start justify-center order-1 lg:order-2 ">
        <h2 className="text-4xl lg:text-6xl text-primary font-bold">We <br /> Supply. You build</h2>
        <p className=" text-base lg:max-w-[70%]">
          Need materials? We&apos;ve got you covered! <br /> Contact us today to
          discuss your project needs and get a free quote.
        </p>
        <Link className="" href={'/login'} ><Button variant={"outline"} animated={"slide"} className="mt-5">Get Started</Button></Link>
      </div>
    </section>
  );
}
