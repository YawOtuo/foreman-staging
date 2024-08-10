import React from "react";
import SideBar from "./components/SideBar";
import Terms_Cond from "./components/Terms_Cond";
import Link from "next/link";

const Terms = () => {
  return (
    <div className="px-5">
      <div className="w-full border-b-2 border-gray-600 flex  p-10">
        <h1 className="font-bold uppercase text-2xl">Terms & Conditions</h1>
      </div>
      <div className=" flex">
        <SideBar />
        <div className="flex-1 p-5">
          <Terms_Cond />
          <Link
            href="/policies"
            className="text-center hover:text-red-500 underline"
          >
            View Company Policies
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Terms;
