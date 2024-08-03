"use client";
import Image from "next/image";
import Link from "next/link";
import { IoCartOutline } from "react-icons/io5";
import { Button } from "../ui/button";
import useAuthState from "@/lib/hooks/useAuthState";
import { auth } from "@/app/firebase";
import { signOut } from "firebase/auth";
import { useMobileNavStore } from "../MobileNavbar/useMobileNavStore";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoHeartSharp } from "react-icons/io5";
import { useAppStore } from "@/lib/store/useAppStore";
import useCart from "@/lib/hooks/useCart";
import CaCartIcon from "./CaCartIcon";

const links = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Store",
    url: "/store",
  },

  {
    name: "Flexi-Plan",
    url: "/warehousing",
  },
  {
    name: "Abous Us",
    url: "/about",
  },
  {
    name: "Contact Us",
    url: "/contact",
  },
];
function Navbar() {
  const { setMobileMenuStore } = useMobileNavStore();
  const { DBDetails } = useAppStore();

  return (
    <div className="flex sticky bg-white z-[50] top-0 items-center justify-between lg:justify-cebter w-full py-3 px-5 lg:px-7 border-b-2 ">
      <Link href={"/"} className="w-full">
        <div className="relative w-full aspect-[178/36] max-w-[100px] lg:max-w-[180px]">
          {" "}
          <Image src={"/logo-shop.png"} alt="Logo" fill objectFit="cover" />
        </div>
      </Link>

      <div className=" items-center gap-5   justify-center hidden lg:flex">
        {links?.map((r, index) => (
          <Link href={r?.url} key={index} className="whitespace-nowrap text-sm">
            {r.name}
          </Link>
        ))}
        {DBDetails?.email && (
          <Link className="" href={"/dashboard/favourites"}>
            <IoHeartSharp className="text-lg text-red-700" />
          </Link>
        )}

        <CaCartIcon />
      </div>

      <div className="lg:hidden flex gap-4 items-center">
        <CaCartIcon />
        <button onClick={() => setMobileMenuStore(true)}>
          <GiHamburgerMenu size={30} />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
