"use client";
import { CustomSelect } from "@/components/ui/select";
import useCategories from "@/lib/hooks/useCategories";
import { FaSearch } from "react-icons/fa";
import { useStoreStore } from "./useStoreStore";

const productColumns = [
  { id: 1, name: "Name", value: "name" },
  // { id: 2, name: "Description", value: "description" },
  // { id: 3, name: "Category", value: "category" },
  { id: 4, name: "Price", value: "price" },
  // { id: 5, name: "Availability", value: "availability" },
  // { id: 6, name: "Status", value: "status" },
];

type Props = {
  setFilter: any;
};

function StoreSearch() {
  const { categories } = useCategories();

  const { setFilter, setAscendingOrDescending } = useStoreStore();
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center w-full    border-[1px]">
        <input
          onChange={(e) => setFilter({ search: e.target.value })}
          type="
              search"
          className="w-full  px-5 py-2"
        />
        <button className="group px-5 lg:px-10 py-2 bg-primary-200 h-full ">
          <FaSearch
            size={30}
            className="text-shade-200 group-hover:text-black"
          />
        </button>
      </div>
      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-2 lg:gap-5">
        <CustomSelect
          onChange={(value: any) => setFilter({ category__name: value })}
          data={[{ id: 0, name: "All" }, ...(categories || [])]}
          valueField={"name"}
          labelField={"name"}
          placeholder="Categories"
        />
        {/* <div className="flex gap-5 lg:gap-0 items-center"> */}
          <CustomSelect

            onChange={(value: any) => setFilter({ ordering: value })}
            labelPosition="left"
            data={productColumns}
            valueField={"value"}
            labelField={"name"}
            placeholder="Name"
            initialValue="name"
            label="Order By"
          />
          <CustomSelect
            onChange={(value: any) => setAscendingOrDescending(value)}
            data={[
              { name: "Ascending order", value: "ascending" },
              { name: "Descending order", value: "descending" },
            ]}
            valueField={"value"}
            labelField={"name"}
            initialValue=""
            placeholder="Ascending order"
            label="Sort In"

          />
        {/* </div> */}
      </div>
    </div>
  );
}

export default StoreSearch;
