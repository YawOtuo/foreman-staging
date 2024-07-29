/* eslint-disable react/no-unescaped-entities */
import LottieFileBuilder from "@/components/LottieFileBuilder";
import { Button } from "@/components/ui/button";
import animationData from "@/lotties/crane1.json";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function SupplySection() {
  return (
    <section className="flex flex-col lg:flex-row  2xl:py-5 items-start lg:items-center justify-center gap-10 lg:gap-20 w-full">
      <div className="w-full order-2 lg:order-1 lg:basis-[40%] grow-1">
        <LottieFileBuilder animationData={animationData} width={"100%"} />
      </div>

      <div className="flex flex-col gap-5 items-start justify-center order-1 lg:order-2 ">
        <h2 className="text-4xl lg:text-6xl text-primary font-bold">
          Project Management. <br /> Let's Build For You
        </h2>
        <div className=" text-base lg:max-w-[70%] space-y-2">
          <p className="font-medium">Leave construction to the experts!</p>
          <p>
            Foreman delivers professional construction management, working with
            skilled architects, surveyors, masons, and more. Our hands-on
            management, negotiation skills, and quality supervision ensure value
            for your money.
          </p>
          <p>
            Contact us today for seamless project coordination and satisfaction.
          </p>
        </div>
        <Link className="" href={"/project-management"}>
          <Button variant={"outline"} animated={"slide"} className="mt-5">
            Get Started
          </Button>
        </Link>
      </div>
    </section>
  );
}
