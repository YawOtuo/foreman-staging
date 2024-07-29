import React from "react";
import { MobileMenuDetails } from "./MobileMenuDetails";
import { AiFillCloseCircle } from "react-icons/ai";
import { useMobileNavStore } from "../useMobileNavStore";
import Link from "next/link";
import Image from "next/image";

const MobileMenuArea = (props: any) => {
  const { setMobileMenuStore } = useMobileNavStore();
  0;
  return (
    <div className={"flex flex-col "}>
      <div className="flex flex-col lg:gap-10">
        <div className={"flex items-center px-8 "}>
          <div
            className={"flex w-full flex-row items-center justify-between  "}>
            <Link href={"/"} className="w-full">
              <div className="relative w-full aspect-[178/36] max-w-[100px] lg:max-w-[180px]">
                {" "}
                <Image
                  src={"/logo-shop.png"}
                  alt="Logo"
                  fill
                  objectFit="cover"
                />
              </div>
            </Link>
            <button className="relative transition-transform duration-300 hover:rotate-[360deg] lg:right-10">
              <AiFillCloseCircle
                onClick={() => setMobileMenuStore(false)}
                color="white"
                size={30}
              />
            </button>
          </div>
        </div>
        <div className={"mt-20"}>
          <MobileMenuDetails />
        </div>
      </div>
    </div>
  );
};

export default MobileMenuArea;
