"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useCurrency } from "@/context/CurrencyContext";
import React from "react";

const CurrencyConv = () => {
  const { currency, setCurrency } = useCurrency();

  const handleCurrency = (val: string) => setCurrency(val);

  return (
    <>
      <Select value={currency} onValueChange={handleCurrency}>
        <SelectTrigger className="text-black p-4 py-0">
          <SelectValue placeholder="Select Currency" />
        </SelectTrigger>
        <SelectContent className="z-999">
          <SelectItem value="GHS">GHS</SelectItem>
          <SelectItem value="GBP">GBP</SelectItem>
          <SelectItem value="USD">USD</SelectItem>
          <SelectItem value="EUR">EUR</SelectItem>
        </SelectContent>
      </Select>
    </>
  );
};

export default CurrencyConv;
