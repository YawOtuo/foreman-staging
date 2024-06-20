import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";

const CurrencyConv = () => {
  return (
    <>
      <Select value="ghs">
        <SelectTrigger className="text-black p-4 py-0">
          <SelectValue placeholder="Select Currency" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="ghs">GHS</SelectItem>
          <SelectItem value="ngn">NGN</SelectItem>
          <SelectItem value="usd">USD</SelectItem>
        </SelectContent>
      </Select>
    </>
  );
};

export default CurrencyConv;
