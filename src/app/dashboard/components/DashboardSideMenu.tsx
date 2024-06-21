import Link from "next/link";

const links = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Cart",
    url: "/dashboard/cart",
  },
  {
    name: "Favourites",
    url: "/favourties",
  },
  {
    name: "Orders",
    url: "/dashboard",
  },
  {
    name: "Details",
    url: "/dashboard",
  },
  {
    name: "Logout",
    url: "/dashboard",
  },
];
function DashboardSideMenu() {
  return (
    <div>
      <div className="flex flex-col gap-3 bg-primary-200 h-screen py-10 transition-all px-2">
        {links?.map((r, index) => (
          <Link 
          className="hover:font-semibold hover:bg-primary transition-all ease-in-out hover:border-2 hover:border-primary rounded-md px-5  py-2"
          href={r?.url} key={index}>
            {r.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default DashboardSideMenu;
