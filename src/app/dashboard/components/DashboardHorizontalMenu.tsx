"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAppStore } from "@/lib/store/useAppStore";
import { UserIcon } from "lucide-react";

function DashboardHorizonalMenu() {
  const { FBaseDetails, DBDetails } = useAppStore();
  return (
    <div className=" flex items-center justify-between px-4 gap-5 border-b-2 py-1 text-sm">
      <div>
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
            {<UserIcon size={15} color="black" />}
          </AvatarFallback>
        </Avatar>
      </div>
      <div className="flex items-center gap-3 ">
        <div className="flex items-center gap-5">
          {DBDetails?.name}
          {DBDetails?.email}
        </div>
      </div>
    </div>
  );
}

export default DashboardHorizonalMenu;
