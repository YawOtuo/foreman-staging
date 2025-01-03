import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InfoBar from "@/components/InfoBar/infobar";
import MobileMenuWrapper from "@/components/MobileMenuWrapper";

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
    <section
      className={`${mont.className} bg-slate-50 flex flex-col justify-center items-center`}
    >
      <div className="w-full max-w-[1750px] flex flex-col items-center bg-white">
        <MobileMenuWrapper>
          <InfoBar />
          <Navbar />
          <div className="w-full"> {children}</div>
          <div className="w-full">
            <Footer />
          </div>
        </MobileMenuWrapper>
      </div>
    </section>
  );
}
