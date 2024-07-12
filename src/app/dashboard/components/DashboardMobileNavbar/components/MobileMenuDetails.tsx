import Link from "next/link";
import { Button } from "../../../../../components/ui/button";
import { useDashboardMobileStore } from "./useDashboardMobileNavStore";
import { dashboardMenuMobilelinks } from "./content";

export const MobileMenuDetails = (props: any) => {
  // const { setToggle } = useMenuStore();
  const { setDashboardMobileMenu } = useDashboardMobileStore();

  return (
    <div
      className={`flex flex-col justify-center   gap-10 px-5  ${props?.className}`}>
      {/* <Link href={"/store"}>
        {" "}
        <Button
          size={"md"}
          className="w-fit font-semibold px-8 bg-transparent text-white rounded-sm border-primary border-2 text-lg py-5">
          Start Shopping
        </Button>
      </Link> */}

      <div className="flex flex-col gap-5">
        {dashboardMenuMobilelinks?.map((link: any, index: number) => (
          <Link
            href={`${link.url}`}
            key={index}
            className="border-2 rounded-lg border-white text-white px-4 py-3 flex gap-4 items-center"
            onClick={() => setDashboardMobileMenu(false)}>
            {link?.icon}

            <p className={"text-base !font-semibold capitalize "}>
              {link.name}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};
