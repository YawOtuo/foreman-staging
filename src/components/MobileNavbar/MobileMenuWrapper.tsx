"use client";
import React from "react";
import { useMobileNavStore } from "./components/useMobileNavStore";
import { MobileMenu } from "./MobileMenu";

type Props = {
  children: React.ReactNode;
  data: any
};

const MobileMenuWrapper = ({ children, data }: Props) => {
  const mobileMenuStore = useMobileNavStore((state) => state.MobileMenuStore);
  return (
    <>
      <MobileMenu isOpen={mobileMenuStore} data={data}  layout />
      {children}
    </>
  );
};

export default MobileMenuWrapper;
