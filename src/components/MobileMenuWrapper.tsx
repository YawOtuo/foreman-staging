"use client";
import React from "react";
import { useMobileNavStore } from "./MobileNavbar/useMobileNavStore";
import MobileNavBar from "./MobileNavbar";

type Props = {
  children: React.ReactNode;
};

const MobileMenuWrapper = ({ children }: Props) => {
  const { MobileMenuStore } = useMobileNavStore();
  return (
    <>
      <MobileNavBar isOpen={MobileMenuStore} layout />
      {children}
    </>
  );
};

export default MobileMenuWrapper;
