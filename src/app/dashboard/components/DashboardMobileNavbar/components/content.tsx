import { IoHomeOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { RiAlignItemBottomLine } from "react-icons/ri";
import { MdOutlineAccountCircle } from "react-icons/md";

export const dashboardMenuMobilelinks = [
    {
      name: "Home",
      url: "/dashboard",
      icon: <IoHomeOutline />,

    },
    {
      name: "cart",
      url: "/dashboard/cart",
      icon: <IoCartOutline />,

    },
    {
      name: "favourites",
      url: "/dashboard/favourites",
      icon: <IoMdHeartEmpty />,

    },
    {
      name: "orders",
      url: "/dashboard/orders",
      icon: <RiAlignItemBottomLine />,

    },
    {
      name: "account",
      url: "/dashboard/account",
      icon: <MdOutlineAccountCircle />,

    },

  ];