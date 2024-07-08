import React from "react";
import { IoDiamondOutline } from "react-icons/io5";
import { FaRegCircleCheck } from "react-icons/fa6";

type TabSelectProps = {
  isClicked: string;
  handleClick: (val: string) => void;
};

const TabSelect = ({ isClicked, handleClick }: TabSelectProps) => {
  return (
    <div className="flex  justify-center pt-3 px-2 ">
      <aside
        className={`flex pb-5 space-x-4 justify-center sm:justify-start items-center w-1/2 hover:cursor-pointer ${
          isClicked === "just buy"
            ? "border-b-4 border-red-500 "
            : "border-b-[1px] border-gray-300"
        }`}
        onClick={() => handleClick("just buy")}
      >
        <IoDiamondOutline
          //   size={60}
          className={`${
            isClicked === "just buy" ? "text-red-500" : "text-gray-500 "
          } sm:text-6xl text-5xl`}
        />
        <div className="hidden sm:block">
          <h1 className="text-xl font-semibold">JUST BUY</h1>
          <p className="text-sm">Lorem ipsum dolor sit amet consecture</p>
        </div>
      </aside>
      <aside
        className={`flex justify-center sm:justify-start pb-5 space-x-4 items-center w-1/2 hover:cursor-pointer ${
          isClicked === "project"
            ? "border-b-4 border-red-500"
            : "border-b-[1px] border-gray-500"
        }`}
        onClick={() => handleClick("project")}
      >
        <FaRegCircleCheck
          //   size={60}
          className={`${
            isClicked === "project" ? "text-red-500" : "text-gray-300"
          } sm:text-6xl text-5xl`}
        />
        <div className="hidden sm:block">
          <h1 className="text-xl font-semibold">BUY FOR A PROJECT</h1>
          <p className="text-sm">Lorem ipsum dolor sit amet consecture</p>
        </div>
      </aside>
    </div>
  );
};

export default TabSelect;
