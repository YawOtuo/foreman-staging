"use client";
import DashboardHorizonalMenu from "./components/DashboardHorizontalMenu";
import DashboardMobileMenuWrapper from "./components/DashboardMobileNavbar/DashboardMobileMenuWrapper";
import DashboardSideMenu from "./components/DashboardSideMenu";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <DashboardMobileMenuWrapper>
      <div className="flex flex-col">
        <div className="bg- grid grid-cols-5  bg-primary">
          <div className="hidden lg:block">
            <DashboardSideMenu />
          </div>{" "}
          <div className=" col-span-5 w-full lg:col-span-4 ">
            <div className=" bg-white flex flex-col gap-5 min-h-screen">
              <DashboardHorizonalMenu />
              {children}
            </div>
          </div>
        </div>
      </div>
    </DashboardMobileMenuWrapper>
  );
}
// #452d01

export default Layout;
