import React, { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { FormFields } from "@/lib/types/form";
import { useArea } from "@/context/AreaContext";

const DropDown = () => {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext<FormFields>();

  const selectedContituency = watch("address.city");
  const selectedArea = watch("address.suburb");

  const { deliveryLocations, areas, getAreas, setArea } = useArea();

  // fetching the areas based on the selected Contituency
  useEffect(() => {
    getAreas(selectedContituency);
    setArea(selectedArea);
  });

  return (
    <>
      <div className="flex-col flex md:w-1/2">
        <select
          {...register("address.city", { required: "Please select a city" })}
          className="border rounded p-2 w-full h-10"
        >
          <option value="">District / Constituency</option>
          {deliveryLocations?.map((item) => (
            <option key={item.id} value={item.name}>
              {item.name}
            </option>
          ))}
        </select>
        {errors.address?.city && (
          <p className="text-red-500">{errors.address?.city.message}</p>
        )}
      </div>

      <div className="flex-col flex md:w-1/2 ">
        <select
          {...register("address.suburb", {
            required: "Please select a suburb",
          })}
          className="border rounded p-2  h-10"
        >
          <option value="">Area</option>
          {areas?.map((item, index) => (
            <option key={index} value={item.name}>
              {item.name}
            </option>
          ))}
        </select>
        {errors.address?.suburb && (
          <p className="text-red-500 mt-2">{errors.address?.suburb.message}</p>
        )}
      </div>
    </>
  );
};

export default DropDown;
