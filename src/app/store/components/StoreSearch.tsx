"use client";
import { FaSearch } from "react-icons/fa";
type Props = {
  setFilter: any;
};

function StoreSearch({ setFilter }: Props) {
  return (
    <div className="flex items-center w-full    border-[1px]">
      <input
        onChange={(e) => setFilter({ name: e.target.value })}
        type="
            search"
        className="w-full  px-5 py-2"
      />
      <button className="group px-5 lg:px-10 py-2 bg-primary-200 h-full ">
        <FaSearch size={30} className="text-shade-200 group-hover:text-black" />
      </button>
    </div>
  );
}

export default StoreSearch;
