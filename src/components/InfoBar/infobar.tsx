"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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

export default function InfoBar() {
  //   const { data, error, isLoading } = useAuthState(auth);
  //   const { user } = useUser();
  const { DBDetails, FBaseDetails } = useAppStore();
  const router = useRouter();

  return (
    <div className="flex flex-row gap-3 items-center justify-between p-1 px-8 bg-shade-300 text-white w-full text-sm">
      <div className="flex gap-3 items-center">
        <a className="flex items-center gap-2" href="tel:+23354012483">
          <PhoneCallIcon size={18} />
          (233) 540-124-83
        </a>
        <a
          className="flex items-center gap-2"
          href="mailto:myforemangh@gmail.com">
          <MailIcon size={18} />
          myforemangh@gmail.com
        </a>
      </div>
      <div className="flex gap-3 items-center">
        {Object.keys(FBaseDetails).length > 0 ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar>
                {FBaseDetails?.photoURL ? (
                  <AvatarImage src={FBaseDetails?.photoURL} />
                ) : (
                  <AvatarImage
                    src={
                      `https://api.dicebear.com/8.x/adventurer/svg?seed=$` +
                      DBDetails?.email +
                      `&backgroundType=gradientLinear&backgroundColor=b6e3f4,c0aede,ffd5dc,ffdfbf,d1d4f9`
                    }
                  />
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
              <DropdownMenuItem 
              onClick={() => router.push('/dashboard')}
              
              >Dashboard</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => {
                  signOut(auth);
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

        <Select value="ghs">
          <SelectTrigger className="text-black p-4 py-0">
            <SelectValue placeholder="Select Currency" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="ghs">GHS</SelectItem>
            <SelectItem value="ngn">NGN</SelectItem>
            <SelectItem value="usd">USD</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
