import Image from "next/image";
import Link from "next/link";

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
    <div className="flex items-center justify-between lg:justify-center w-full py-5 px-5">
      <div className="relative w-full aspect-[178/36] max-w-[180px]">
        {" "}
        <Image src={"/logo-shop.png"} alt="Logo" fill objectFit="cover" />
      </div>

      <div className=" items-center gap-5 w-full  justify-center hidden lg:flex">
        {
            links?.map((r, index) => (
              <Link href={r?.url} key={index}>{r.name}</Link>
            ))
        }
      </div>
    </div>
  );
}

export default Navbar;