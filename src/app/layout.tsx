import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import Providers from "@/lib/utils/provider";
import { Toaster } from "@/components/ui/toaster";

import InfoBar from "@/components/InfoBar/infobar";
import MobileMenuWrapper from "@/components/MobileMenuWrapper";


const mont = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">


      <Providers>
        <body
          className={`${mont.className} bg-slate-50 flex flex-col justify-center items-center`}>
            <div className="w-full max-w-[1750px] flex flex-col items-center bg-white">
              <MobileMenuWrapper>
                {/* <InfoBar /> */}
                <Navbar />
                <div className=""> {children}</div>
                <div className="">
                  <Footer />
                </div>
                <Toaster />
              </MobileMenuWrapper>
            </div>
        </body>
      </Providers>
    </html>
  );
}
