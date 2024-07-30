import Link from "next/link";
import { useMobileNavStore } from "../useMobileNavStore";
import { Button } from "../../ui/button";
import { links } from "../content";
import { IoCartOutline } from "react-icons/io5";
import { useAppStore } from "@/lib/store/useAppStore";

export const MobileMenuDetails = (props: any) => {
  // const { setToggle } = useMenuStore();
  const { setMobileMenuStore } = useMobileNavStore();
  const { DBDetails } = useAppStore();

  return (
    <div
      className={`flex flex-col justify-center   gap-10 px-5  ${props?.className}`}>
      <Link href={"/store"}>
        {" "}
        <Button
          size={"md"}
          className="w-fit font-semibold px-8 bg-transparent text-white rounded-sm border-primary border-2 text-lg py-5">
          <IoCartOutline className="mr-2" />
          <p>Continue Shopping</p>
        </Button>
      </Link>

      <div className="flex flex-col gap-2">
        {links?.map((link: any, index: number) => {
          if (link.name.toLowerCase() === "favourites" && !DBDetails?.email) {
            // If the link is "favourites" and the user is not logged in, do not render it
            return null;
          }

          return (
            <Link
              href={`${link.url}`}
              key={index}
              className="flex items-center gap-3 text-white"
              onClick={() => setMobileMenuStore(false)}>
              {link?.icon}
              <p className="text-lg !font-semibold capitalize">{link.name}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
