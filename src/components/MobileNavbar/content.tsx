import { IoArrowBack, IoHomeOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { RiAlignItemBottomLine } from "react-icons/ri";
import { MdOutlineAccountCircle } from "react-icons/md";
import { AiOutlineLogin } from "react-icons/ai";
import { MdOutlineWarehouse } from "react-icons/md";
import { GrContact } from "react-icons/gr";

import { MdOutlineDashboard } from "react-icons/md";

export const links: { name: string; url: string; icon: React.ReactNode }[] = [
  {
    name: "Home",
    url: "/",
    icon: <IoHomeOutline />,
  },
  {
    name: "Login",
    url: "/login",
    icon: <AiOutlineLogin />,
  },

  {
    name: "dashboard",
    url: "/dashboard",
    icon: <MdOutlineDashboard />,
  },
  {
    name: "favourites",
    url: "dashboard/favourites",
    icon: <IoMdHeartEmpty />,
  },
  {
    name: "warehousing",
    url: "/warehousing",
    icon: <MdOutlineWarehouse />,
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
    url: "/contact",
    icon: <GrContact />,
  },
];
