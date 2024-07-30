"use client";
import useIsLoggedInReRoute from "@/lib/hooks/useIsLoggedInReRoute";
import { usePathname } from "next/navigation";

export default function AuthLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  useIsLoggedInReRoute(true, "/dashboard");
  const pathname = usePathname();
  return (
    <div className={`flex flex-col lg:flex-row w-full justify-between `}>
      <div
        className={`left  bg-top bg-no-repeat w-full  lg:w-[30%] lg:h-screen ${
          pathname == "/login"
            ? "bg-[url('/login2.jpg')]"
            : "bg-[url('/login1.jpg')]"
        }   `}></div>
      <div className="flex items-center right w-full lg:w-[70%] py-20 lg:py-0 lg:min-h-screen px-5 lg:px-20">
        <div className="flex flex-col gap-4 h-full w-full items-start justify-center py-5 lg:py-0">
          <div className="w-full md:w-fit flex flex-col gap-3">
          {children}
          </div>
        </div>
      </div>
    </div>
  );
}
