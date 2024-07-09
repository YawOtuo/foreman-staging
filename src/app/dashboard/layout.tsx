"use client"
import useIsLoggedInReRoute from "@/lib/hooks/useIsLoggedInReRoute";
import DashboardHorizonalMenu from "./components/DashboardHorizontalMenu";
import DashboardMobileMenuWrapper from "./components/DashboardMobileNavbar/DashboardMobileMenuWrapper";
import DashboardSideMenu from "./components/DashboardSideMenu";

function Layout({ children }: { children: React.ReactNode }) {
  useIsLoggedInReRoute(false, "/login")
  return (
   <DashboardMobileMenuWrapper>
     <div className="flex flex-col">
      <DashboardHorizonalMenu />
        <div className="bg-white grid grid-cols-5">
          <DashboardSideMenu />
          <div className="col-span-5 w-full lg:col-span-4"> {children}</div>
        </div>
     </div>
   </DashboardMobileMenuWrapper>
  );
}

export default Layout;
