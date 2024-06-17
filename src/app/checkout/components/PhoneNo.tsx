import React from "react";
import IntlTelInput from "react-intl-tel-input";
import "react-intl-tel-input/dist/main.css";

interface PhoneInputProps {
  onPhoneNumberChange: (phone: string) => void;
}

const PhoneInput: React.FC<PhoneInputProps> = ({ onPhoneNumberChange }) => {
  return (
    <IntlTelInput
      preferredCountries={["gh", "us"]}
      containerClassName="intl-tel-input"
      inputClassName="form-control focus:outline-none focus:ring-0"
      formatOnInit={true}
      onPhoneNumberChange={(isValid, value, countryData, number, id) => {
        onPhoneNumberChange(value);
      }}
    />
  );
};

export default PhoneInput;
