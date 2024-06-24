import { FormFields } from "@/lib/types/form";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import IntlTelInput from "react-intl-tel-input";
import "react-intl-tel-input/dist/main.css";

const PhoneInput = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext<FormFields>();

  return (
    <>
      <Controller
        name="address.phone"
        control={control}
        rules={{
          required: "Phone number is required",
          validate: (value) => {
            return (value && value.length >= 10) || "Invalid phone number";
          },
        }}
        render={({ field: { onChange, value } }) => (
          <IntlTelInput
            value={value}
            onPhoneNumberChange={(
              isValid,
              value,
              selectedCountryData,
              fullNumber,
              extension
            ) => {
              onChange(fullNumber);
            }}
            preferredCountries={["gh", "us"]}
            containerClassName="intl-tel-input"
            inputClassName="form-control focus:outline-none focus:ring-0 w-full"
            formatOnInit={true}
          />
        )}
      />
    </>
  );
};

export default PhoneInput;
