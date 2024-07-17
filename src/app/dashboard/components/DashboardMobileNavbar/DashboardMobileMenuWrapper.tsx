"use client";
import React from "react";
import DashboardMobileNavBar from ".";
import { useDashboardMobileStore } from "./components/useDashboardMobileNavStore";

type Props = {
  children: React.ReactNode;
};

const DashboardMobileMenuWrapper = ({ children }: Props) => {
  const { mobileMenuStore } = useDashboardMobileStore();
  return (
    <>
      <DashboardMobileNavBar isOpen={mobileMenuStore} layout />
      {children}
    </>
  );
};

export default DashboardMobileMenuWrapper;
