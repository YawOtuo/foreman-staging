import Image from "next/image";
import Link from "next/link";
import { IoCartOutline } from "react-icons/io5";

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
          <Link href={r?.url} key={index}>
            {r.name}
          </Link>
        ))}
        <Link className="" href={'/cart'}>
          <IoCartOutline size={20} />
        </Link>
        <Link className="" href={"/login"}>
          Login
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
