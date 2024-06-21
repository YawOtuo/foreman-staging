import DashboardSideMenu from "./components/DashboardSideMenu";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white h-screen grid grid-cols-5">
      <DashboardSideMenu />
      <div className="w-full col-span-4"> {children}</div>
    </div>
  );
}

export default Layout;
