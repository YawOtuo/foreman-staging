import { useState } from "react";
import PhoneInput from "./PhoneNo";
import DropDown from "./DropDown";

interface DeliveryAddressFormProps {
  address: {
    city: string;
    suburb: string;
    name: string;
    phone: string;
  };
  updateAddress: (field: string, value: string) => void;
}

const DeliveryAddressForm: React.FC<DeliveryAddressFormProps> = ({
  address,
  updateAddress,
}) => {
  const [phone, setPhone] = useState<string>("");

  const handlePhoneumberChange = (value: string) => {
    setPhone(value);
  };

  return (
    <div className="border p-4 rounded-md space-y-2 w-[300px]  sm:w-full flex flex-col">
      <p>Delivery Address</p>
      <p className="text-red-600 text-sm sm:text-base">
        now delivering within Greater Accra and the Kasoa area
      </p>
      <div className="flex flex-col space-y-2">
        <div className="flex flex-col md:flex-row gap-3 w-full">
          <DropDown address={address} onAddress={updateAddress} />
        </div>
        <div className="flex flex-col md:flex-row gap-3">
          <input
            type="text"
            value={address.name}
            onChange={(e) => updateAddress("name", e.target.value)}
            placeholder="Name"
            className="border rounded p-2 md:w-1/2"
          />
          <div className="border rounded p-2 md:w-1/2">
            <PhoneInput onPhoneNumberChange={handlePhoneumberChange} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryAddressForm;
