"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React from "react";
import useAuthState from "../hooks/useAuthState";
import { auth } from "@/app/firebase";
import { CurrencyProvider } from "@/context/CurrencyContext";

function Providers({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient();
  useAuthState(auth);

  return (
    <QueryClientProvider client={queryClient}>
      <CurrencyProvider>{children}</CurrencyProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default Providers;
