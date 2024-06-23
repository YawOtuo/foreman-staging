import DashboardHorizonalMenu from "./components/DashboardHorizontalMenu";
import DashboardSideMenu from "./components/DashboardSideMenu";

function Layout({ children }: { children: React.ReactNode }) {
  return (
   <div className="flex flex-col">
    <DashboardHorizonalMenu />
      <div className="bg-white grid grid-cols-5">
        <DashboardSideMenu />
        <div className="w-full col-span-4"> {children}</div>
      </div>
   </div>
  );
}

export default Layout;
