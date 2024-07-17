"use client";
import Link from "next/link";
import React from "react";
import { RiWhatsappFill } from "react-icons/ri";

const WhatsAppIcon = () => {
  const phoneNumber = "+233249911264";
  const message = "Hello, I have a question";

  const handleWhatsAppClick = () => {
    const whatsappUri = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUri, "_blank");
  };
  return (
    <>
      <Link
        href="#"
        onClick={handleWhatsAppClick}
        className="fixed top-1/2 text-green-600 shadow-sm bg-white shadow-gray-500 bg-trnsparent rounded-full p-2 border-[2px] border-green-600 hover:scale-110 transition-transform duration-300 ease-in z-50 right-[2%]"
      >
        <RiWhatsappFill className="text-3xl sm:text-4xl" />
      </Link>
    </>
  );
};

export default WhatsAppIcon;
