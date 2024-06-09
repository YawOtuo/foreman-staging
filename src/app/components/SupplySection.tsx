import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

export default function SupplySection() {
    return (
        <section className="w-full flex items-center justify-center gap-10 sm:flex-nowrap flex-wrap mx-auto my-14">
            <div className="image">
                <Image src={"/SupplySection.png"} width={500} height={500} alt="An Illustration displayng supply " />
            </div>
            <div className="text" >
                <h2 className="text-5xl font-bold mb-6">We Supply. You build</h2>
                <p className="mb-6">
                    Need materials? We&apos;ve got you covered! <br /> Contact us today to discuss your project needs and get a free quote.
                </p>
                <Button variant={"outline"}>
                    Get Started
                </Button>
            </div>
        </section>
    );
}