import Link from "next/link";
import { IoArrowBack, IoHomeOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { RiAlignItemBottomLine } from "react-icons/ri";
import { MdOutlineAccountCircle } from "react-icons/md";
import { useAppStore } from "@/lib/store/useAppStore";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { UserIcon } from "lucide-react";

export const dashboardMenuLinks = [
  {
    name: "Home",
    url: "/dashboard",
    icon: <IoHomeOutline />,
  },
  {
    name: "Cart",
    url: "/dashboard/cart",
    icon: <IoCartOutline />,
  },
  {
    name: "Favourites",
    url: "/dashboard/favourites",
    icon: <IoMdHeartEmpty />,
  },
  {
    name: "Orders",
    url: "/dashboard/orders",
    icon: <RiAlignItemBottomLine />,
  },
  {
    name: "Account",
    url: "/dashboard",
    icon: <MdOutlineAccountCircle />,
  },
  // {
  //   name: "Logout",
  //   url: "/dashboard",
  //   icon: <IoHomeOutline />,
  // },
  {
    name: "Back to site",
    url: "/",
    icon: <IoArrowBack />,
  },
];
function DashboardSideMenu() {
  const { FBaseDetails, DBDetails } = useAppStore();

  return (
    <div className="flex flex-col justify-start sticky top-0 h-screen">
      <div className="px-10 py-10">
        <p className="text-white uppercase font-bold">Foreman</p>

        <div className="flex items-center gap-3">
          <Avatar className="border-2 border-white">
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
            <AvatarFallback>{<UserIcon color="white" />}</AvatarFallback>
          </Avatar>

          <p className="hidden lg:block text-white">{DBDetails?.username}</p>
        </div>
      </div>
      <div className="hidden lg:flex flex-col gap-1 text-white min-h-screen sticky top-0 py-10 transition-all px-3 font-semibold rounded-l-2xl">
        {dashboardMenuLinks?.map((r) => (
          <Link
            className="hover:font-semibold hover:border-primary transition-all  ease-in-out border-2 border-transparent rounded-md px-7 duration-[250ms]  py-2 flex items-center gap-3"
            href={r?.url}
            key={r?.name}>
            {r?.icon}
            {r.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default DashboardSideMenu;
