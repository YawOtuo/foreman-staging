"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import TabSelect from "./components/TabSelect";
import { TbCircleNumber1 } from "react-icons/tb";

/* eslint-disable react/no-unescaped-entities */
function Warehousing() {
  const [isClicked, setIsClicked] = useState<string>("just buy");

  const handleClick = (tab: string) => {
    if (tab === "just buy") {
      setIsClicked("just buy");
    } else {
      setIsClicked("project");
    }
  };

  return (
    <main>
      <header className="bg-gray-300 w-full p-6">
        <h6 className="font-semibold text-2xl">Flexi Plan</h6>
        <p>BUY NOW COLLECT LATER</p>
      </header>
      <section className=" px-6">
        <div className="flex flex-col md:flex-row w-full py-5 md:pt-10  md:gap-10">
          <div className="flex justify-center items-center mt-6 md:mt-0 w-full">
            <div className="relative w-full h-full">
              <Image
                src={"/warehousePic.jpg"}
                alt={"couple"}
                objectFit="cover"
                fill
                className="rounded-md"
              />
            </div>
          </div>
          <div className="w-full">
            <div className="space-y-3">
              <p>
                Make your dream home or project a reality with the Foreman
                Flexi Plan option. The best preparation for tomorrow is doing
                your best today.
              </p>
              <p>
                "Start where you are. Use what you have. Do what you can. One
                day at a time”. Quantify the major building materials you will
                need for your project and buy them in smaller quantities over a
                period of time.
              </p>
              <p>
                We will store them for you until you are ready to build. It's
                that simple and convenient. You can build it….
                <Link href={"#"} className="text-yellow-400 hover:underline">
                  Start today!
                </Link>
              </p>
            </div>
            <section className="py-10">
              <p className="font-semibold pb-3">How it works</p>
              <ol className="space-y-3">
                <li>Buy building materials from us</li>
                <li>
                  Keep your purchased goods with us for a limited period (no
                  extra cost)
                </li>
                <li>Request for delivery at a later date</li>
              </ol>
            </section>

            <section className="flex justify-start pb-10">
              <p className="font-bold text-3xl text-primary">Coming Soon</p>
            </section>
          </div>
        </div>
      </section>

      {/* <section className="w-full flex flex-col p-6 pb-20">
        <>
          <TabSelect isClicked={isClicked} handleClick={handleClick} />
        </>
        <div className="mt-10 w-full flex justify-center">
          {isClicked === "just buy" && (
            <div className="w-[85%] ">
              <div className="flex space-x-3">
                <div className="w-1/6 hidden sm:block">
                  <TbCircleNumber1 size={50} />
                </div>
                <div>
                  <h2 className="text-base font-semibold pb-4">
                    Deposite Funds & Buy
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Similique, corporis voluptas, ducimus accusantium quo fuga
                    hic ratione assumenda sit tenetur libero fugiat non officiis
                    quis earum nemo porro minima totam? Lorem ipsum dolor sit
                    amet consectetur adipisicing elit. Consectetur doloremque
                    earum vero accusantium iure, nostrum adipisci assumenda
                    quidem voluptas aliquid voluptatum qui suscipit dignissimos
                    id a sapiente? Doloribus, sed minima.
                  </p>
                </div>
              </div>
            </div>
          )}
          {isClicked === "project" && (
            <div className="w-4/5">
              <p>Buy for a project content will be here</p>
            </div>
          )}
        </div>
      </section> */}
    </main>
  );
}

export default Warehousing;
