"use client";
import { usePathname } from "next/navigation";

export default function AuthLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();
  return (
    <div className={`flex w-full justify-between `}>
      <div
        className={`left  bg-top bg-no-repeat w-[30%] ${
          pathname == "/login"
            ? "bg-[url('/login2.jpg')]"
            : "bg-[url('/login1.jpg')]"
        }   `}></div>
      <div className="right w-[70%] min-h-screen px-5 lg:px-20">
        <div className="flex flex-col gap-4 h-full w-full items-start justify-center">
          <div>
            <div className="text-base lg:text-3xl">
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
