"use client";
import Link from "next/link";
import React from "react";
import { RiWhatsappFill } from "react-icons/ri";

const WhatsAppIcon = () => {
  const phoneNumber = "+23354012483";
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
        className="fixed bottom-[20%] left-[90%] md:left-[95%] text-green-600 shadow-lg shadow-gray-500 bg-white rounded-full p-2 border-[2px] border-green-600 hover:scale-110 transition-transform duration-300 ease-in z-50"
      >
        <RiWhatsappFill className="" size={40} />
      </Link>
    </>
  );
};

export default WhatsAppIcon;
