import Link from "next/link";
import { IoHomeOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { RiAlignItemBottomLine } from "react-icons/ri";
import { MdOutlineAccountCircle } from "react-icons/md";

const links = [
  {
    name: "Home",
    url: "/",
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
  {
    name: "Logout",
    url: "/dashboard",
    icon: <IoHomeOutline />,
  },
];
function DashboardSideMenu() {
  return (
    <div>
      <div className="hidden lg:flex flex-col gap-3 bg-primary-200 min-h-screen sticky top-0 py-10 transition-all px-3">
        {links?.map((r) => (
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
