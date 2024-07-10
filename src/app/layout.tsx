import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import Providers from "@/lib/utils/provider";
import { Toaster } from "@/components/ui/toaster";
import MobileMenuWrapper from "@/components/MobileMenuWrapper";
import LoadingIndicator from "@/components/LoadingIndicator";
import { Suspense } from "react";
import WhatsAppIcon from "./(app)/components/WhatsAppIcon";

const mont = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Foreman",
  description: "Construction Made Easy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${mont.className} flex flex-col justify-center items-center`}
      >
        <Providers>
          <Suspense fallback={null}>
            <div className="w-full max-w-[1750px] flex flex-col items-center bg-white">
              <MobileMenuWrapper>
                <div className="w-full"> {children}</div>
                <WhatsAppIcon />

                <Toaster />
              </MobileMenuWrapper>
            </div>
            <LoadingIndicator />
          </Suspense>
        </Providers>
      </body>
    </html>
  );
}
