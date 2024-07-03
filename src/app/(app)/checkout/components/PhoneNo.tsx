import React from "react";
import "react-phone-number-input/style.css";
import PhoneInputWithCountry from "react-phone-number-input/react-hook-form";
import { useFormContext, Control } from "react-hook-form";
import { isPossiblePhoneNumber } from "react-phone-number-input";
import "./phoneInput.css";

const PhoneNoInput = () => {
  const { control } = useFormContext();

  return (
    <div className="phone-input-container">
      <PhoneInputWithCountry
        name="address.phone"
        control={control as unknown as Control}
        rules={{
          required: true,
          validate: (value: string) => isPossiblePhoneNumber(value),
        }}
        defaultCountry="GH"
        international
        countryCallingCodeEditable={false}
        placeholder="Enter phone number"
      />
    </div>
  );
};

export default PhoneNoInput;
