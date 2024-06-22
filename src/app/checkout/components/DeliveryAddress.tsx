import { useState } from "react";
import PhoneInput from "./PhoneNo";
import DropDown from "./DropDown";
import { useFormContext, Controller } from "react-hook-form";
import { AddressProps } from "@/lib/types/form";

interface DeliveryAddressFormProps {
  address: AddressProps;
  // updateAddress: (field: string, value: string) => void;
}

const DeliveryAddressForm: React.FC<DeliveryAddressFormProps> = ({
  address,
  // updateAddress,
}) => {
  const {
    register,
    formState: { errors, isSubmitting },
  } = useFormContext<AddressProps>();

  return (
    <div className="border-[1px] border-gray-500 p-4 rounded-md space-y-4 w-[300px]  sm:w-full flex flex-col">
      <p>Delivery Address</p>
      <p className="text-red-600 text-sm sm:text-base">
        now delivering within Greater Accra and the Kasoa area
      </p>
      <div className="flex flex-col space-y-5">
        <div className="flex flex-col md:flex-row gap-5 w-full">
          <DropDown address={address} />
        </div>
        <div className="flex flex-col md:flex-row gap-5">
          <div className="w-full md:w-1/2">
            <input
              {...register("name", {
                required: "Enter your name",
              })}
              // value={address.name}
              // onChange={(e) => updateAddress("name", e.target.value)}
              type="text"
              placeholder="Name"
              className="border rounded p-2 w-full"
            />
            {errors.name && (
              <div className="text-red-600 mt-2"> {errors.name.message} </div>
            )}
          </div>
          <div className="border rounded p-2 md:w-1/2">
            <PhoneInput
            // onPhoneNumberChange={(phone) => updateAddress("phone", phone)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryAddressForm;
