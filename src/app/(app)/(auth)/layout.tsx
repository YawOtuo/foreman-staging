"use client";
import { usePathname } from "next/navigation";

export default function AuthLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();
  return (
    <div className={`flex flex-col lg:flex-row w-full justify-between `}>
      <div
        className={`hidden lg:block left  bg-top bg-no-repeat w-full  lg:w-[30%] h-[50vh] lg:h-screen ${
          pathname == "/login"
            ? "bg-[url('/login2.jpg')]"
            : "bg-[url('/login1.jpg')]"
        }   `}></div>
      <div className="right w-full lg:w-[70%] min-h-screen px-5 lg:px-20">
        <div className="flex flex-col gap-4 h-full w-full items-start justify-center py-5 lg:py-0">
          <div className="w-full lg:w-fit min-h-[70vh] lg:min-h-fit flex items-start flex-col justify-center lg:justify-start">
            <div className="text-2xl lg:text-3xl">
              <h2 className="text-primary-100 font-bold ">Shop.</h2>
              <p>Build with Foreman today</p>
            </div>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
