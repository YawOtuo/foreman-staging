"use client"
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { IoCartOutline } from "react-icons/io5";
import { Button } from "../ui/button";
import { signOut } from "next-auth/react";
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
    name: "Warehousing",
    url: "/warehousing",
  },
  {
    name: "Contact",
    url: "/contact",
  },
];
function Navbar() {

  const { data } = useSession()

  return (
    <div className="flex sticky bg-white z-[50] top-0 items-center justify-between lg:justify-cebter w-full py-3 px-5 lg:px-7 border-b-2 ">
      <Link href={"/"} className="w-full">
        <div className="relative w-full aspect-[178/36] max-w-[180px]">
          {" "}
          <Image src={"/logo-shop.png"} alt="Logo" fill objectFit="cover" />
        </div>
      </Link>

      <div className=" items-center gap-5   justify-center hidden lg:flex">
        {links?.map((r, index) => (
          <Link href={r?.url} key={index}>
            {r.name}
          </Link>
        ))}
        <Link className="" href={'/cart'}>
          <IoCartOutline size={20} />
        </Link>
        {!data?.user ? (<Link className="" href={"/login"}>
          Login
        </Link>) : (<>

          <Link className="" href={"/profile"}>
            {data.user.email}
            {data?.user?.name}
          </Link>
          <Button onClick={() => { signOut() }} >
            Logout
          </Button>
        </>
        )}
      </div>
    </div>
  );
}

export default Navbar;
