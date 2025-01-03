/* eslint-disable react/no-unescaped-entities */
import LottieFileBuilder from "@/components/LottieFileBuilder";
import { Button } from "@/components/ui/button";
import animationData from "@/lotties/crane1.json";
import Link from "next/link";
import React from "react";

export default function SupplySection() {
  return (
    <section className="flex flex-col lg:flex-row  2xl:py-5 items-start lg:items-center justify-center gap-10 lg:gap-20 w-full">
      <div className="w-full order-1 lg:order-2 lg:w-[40%] grow-1">
        <LottieFileBuilder animationData={animationData} width={"100%"} />
      </div>

      <div className="w-full lg:w-[50%] flex flex-col gap-5 items-start justify-center order-2 lg:order-1">
        <div className="space-y-2">
          <p className="landing-page-section-title">Project Management</p>
          <p className="text-xl lg:text-3xl text-gray-500 font-medium">
            Let's Build For You
          </p>
        </div>

        <div className=" text-base lg:max-w-[70%] space-y-2">
          <p className="font-medium">Leave construction to the experts!</p>
          <p>
            Foreman delivers professional construction management, working with
            skilled architects, surveyors, masons, and more. Our hands-on
            management, negotiation skills, and quality supervision ensure value
            for your money.
          </p>
      
        </div>
        <Link className="" href={"/project-management"}>
          <Button
            // variant={"outline"}
            // animated={"slide"}
            className=" bg-yellow-500 text-white"
          >
            Learn More
          </Button>
        </Link>
      </div>
    </section>
  );
}
