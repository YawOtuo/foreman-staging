import React from "react";
import "react-phone-number-input/style.css";
import PhoneInputWithCountry from "react-phone-number-input/react-hook-form";
import { useFormContext, Control } from "react-hook-form";
import { isPossiblePhoneNumber } from "react-phone-number-input";
import "./phoneInput.css";
import Tip from "@/components/Tooltip";

const PhoneNoInput = () => {
  const { control } = useFormContext();

  return (
    <div className="phone-input-container">
      <Tip content="Enter phone number of recipient">
        <PhoneInputWithCountry
          name="address.phone"
          control={control as unknown as Control}
          rules={{
            required: "Enter phone number",
            validate: (value: string) =>
              isPossiblePhoneNumber(value) || "Invalid phone number",
          }}
          defaultCountry="GH"
          international
          // countryCallingCodeEditable={false}
          placeholder="Enter phone number"
        />
      </Tip>
    </div>
  );
};

export default PhoneNoInput;
