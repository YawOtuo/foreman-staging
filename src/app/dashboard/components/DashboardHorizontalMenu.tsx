"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAppStore } from "@/lib/store/useAppStore";
import { UserIcon } from "lucide-react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useDashboardMobileStore } from "./DashboardMobileNavbar/components/useDashboardMobileNavStore";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";
import { auth } from "@/app/firebase";
import useLogout from "@/app/(app)/(auth)/login/components/useLogout";

function DashboardHorizonalMenu() {
  const { FBaseDetails, DBDetails } = useAppStore();
  const { setDashboardMobileMenu } = useDashboardMobileStore();
  const { logout } = useLogout();
  return (
    <div className=" flex items-center justify-between px-4 gap-5 border-b-[1px] py-1 text-sm">
  
      <div className="flex items-center gap-3 text-xs md:text-base w-full">
        <div className="w-full flex items-center gap-5 justify-end text-xs">
          <p>{DBDetails?.username}</p>
          <p  className="hidden lg:block" > {DBDetails?.email}</p>
          <Button
            variant={"outline"}
            className="text-xs"
            onClick={() => logout()}>
            Logout
          </Button>
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
