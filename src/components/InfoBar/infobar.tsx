"use client";
import { MailIcon, PhoneCallIcon, UserIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import useAuthState from "@/lib/hooks/useAuthState";
import { signOut } from "firebase/auth";
import { auth } from "@/app/firebase";
import Link from "next/link";
import { useAppStore } from "@/lib/store/useAppStore";
import { useRouter } from "next/navigation";
import CurrencyConv from "@/app/(app)/components/CurrencyConv";
import useLogout from "@/app/(app)/(auth)/login/components/useLogout";

export default function InfoBar() {
  //   const { data, error, isLoading } = useAuthState(auth);
  //   const { user } = useUser();
  const {logout} = useLogout()
  const { DBDetails, FBaseDetails, setDBDetails,setFBaseDetails } = useAppStore();
  const router = useRouter();

  return (
    <div className="flex flex-row gap-3 items-center justify-between p-1 px-5 lg:px-8 bg-shade-300 text-white w-full text-xs lg:text-sm">
      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-1 lg:gap-3 ">
        <a className="flex items-center gap-2" href="tel:+23354012483">
          <PhoneCallIcon size={18} />
          (233) 540-124-83
        </a>
        <a
          className="flex items-center gap-2"
          href="mailto:myforemangh@gmail.com"
        >
          <MailIcon size={18} />
          myforemangh@gmail.com
        </a>
      </div>
      <div className="flex gap-3 items-center">
        {Object.keys(FBaseDetails).length > 0 ? (
          <DropdownMenu >
            <DropdownMenuTrigger asChild className="">
              <Avatar>
                {FBaseDetails?.photoURL ? (
                  <AvatarImage src={FBaseDetails?.photoURL} />
                ) : (
                  <UserIcon size={24} color="black" />
                )}
                <AvatarFallback>
                  {<UserIcon size={24} color="black" />}
                </AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>
                My Account <br />
                <span className="font-normal">
                  {DBDetails ? DBDetails?.email : ""}
                </span>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => router.push("/dashboard")}>
                Dashboard
              </DropdownMenuItem>
              {/* <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem> */}
              <DropdownMenuItem
                onClick={() => {
                 logout()
                }}>
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Link href="/login" className="text-white">
            Login
          </Link>
        )}

        <CurrencyConv />
      </div>
    </div>
  );
}
