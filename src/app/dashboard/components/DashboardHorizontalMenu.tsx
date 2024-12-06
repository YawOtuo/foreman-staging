"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAppStore } from "@/lib/store/useAppStore";
import { GiHamburgerMenu } from "react-icons/gi";
import { useDashboardMobileStore } from "./DashboardMobileNavbar/components/useDashboardMobileNavStore";
import { Button } from "@/components/ui/button";
import useLogout from "@/app/(app)/(auth)/login/components/useLogout";
import Link from "next/link";

function DashboardHorizonalMenu() {
  const { FBaseDetails, DBDetails } = useAppStore();
  const { setDashboardMobileMenu } = useDashboardMobileStore();
  const { logout } = useLogout();
  return (
    <div className=" flex items-center justify-between px-4 gap-5 border-b-[1px] py-1 text-sm">
      <div className="flex items-center gap-3 text-xs md:text-base w-full">
        <div className="w-full flex items-center gap-5 between text-xs">
          <Link href={"/"} className="lg:hidden text-primary font-semibold">
            <p className="">FOREMAN</p>
          </Link>{" "}
          <div className="flex items-center justify-end gap-3 text-xs w-full">
            <p>{DBDetails?.username}</p>
            <p className="hidden lg:block"> {DBDetails?.email}</p>
            <Button
              variant={"outline"}
              className="text-xs"
              onClick={() => logout()}>
              Logout
            </Button>
          </div>
        </div>
      </div>

      <div className="lg:hidden flex items-center">
        <button onClick={() => setDashboardMobileMenu(true)}>
          <GiHamburgerMenu size={30} />
        </button>
      </div>
    </div>
  );
}

export default DashboardHorizonalMenu;
