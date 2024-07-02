import PhoneInput from "./PhoneNo";
import DropDown from "./DropDown";
import { useFormContext } from "react-hook-form";
import { FormFields } from "@/lib/types/form";

const DeliveryAddressForm = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormFields>();

  return (
    <div className="border-2   p-4 rounded-md space-y-4 w-full    flex flex-col">
      <div>
        <p>Delivery Address</p>
        <p className="text-yellow-600 text-sm sm:text-base">
          now delivering within Greater Accra and the Kasoa area
        </p>
      </div>
      <div className="flex flex-col space-y-5">
        <div className="flex flex-col md:flex-row gap-5 w-full">
          <DropDown />
        </div>
        <div className="flex flex-col md:flex-row gap-5">
          <div className="w-full md:w-1/2 flex flex-col">
            <input
              {...register("address.name", {
                required: "Enter your name",
              })}
              type="text"
              placeholder="Name of Contact"
              className="border rounded p-2 w-full h-10"
            />
            {errors.address?.name && (
              <div className="text-red-600 mt-2">
                {" "}
                {errors.address.name.message}{" "}
              </div>
            )}
          </div>
          <div className="w-full md:w-1/2 flex flex-col">
            <div className="border rounded p-2 h-10">
              <PhoneInput />
            </div>
            {errors.address?.phone && (
              <p className="text-red-600 mt-2 md:text-center">
                {" "}
                {errors.address.phone.message}{" "}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryAddressForm;
