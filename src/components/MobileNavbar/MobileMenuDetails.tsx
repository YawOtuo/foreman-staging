import Link from "next/link";
import { useMobileNavStore } from "./useMobileNavStore";
import { Button } from "../ui/button";

export const MobileMenuDetails = (props: any) => {
  const links = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "Login",
      url: "/login",
    },
    {
      name: "Store",
      url: "/store",
    },
    {
      name: "warehousing",
      url: "/warehousing",
    },
    // {
    //   name: "Project Management",
    //   url: "/",
    // },

    // {
    //   name: "workers",
    //   url: "/",
    // },
    // {
    //   name: "equip & Tool Rental",
    //   url: "/",
    // },
    {
      name: "contact us",
      url: "/contact-us",
    },
  ];
  // const { setToggle } = useMenuStore();
  const { setMobileMenuStore } = useMobileNavStore();

  return (
    <div
      className={`flex flex-col justify-center   gap-10 px-5  ${props?.className}`}>
      <Link href={"/store"}>
        {" "}
        <Button
          size={"md"}
          className="w-fit font-semibold px-8 bg-transparent text-white rounded-sm border-primary border-2 text-lg py-5">
          Start Shopping
        </Button>
      </Link>

      <div className="flex flex-col gap-2">
        {links?.map((link: any, index: number) => (
          <Link
            href={`${link.url}`}
            key={index}
            className=""
            onClick={() => setMobileMenuStore(false)}>
            <p className={"text-lg !font-semibold capitalize text-[#fff]"}>
              {link.name}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};
