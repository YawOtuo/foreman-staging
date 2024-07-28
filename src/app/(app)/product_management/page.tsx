import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdOutlineStorage } from "react-icons/md";

const ProductManagement = () => {
  return (
    <main className="p-6">
      <div className="flex flex-col md:flex-row w-full justify-center items-center">
        <section className="space-y-4 md:w-1/2 ">
          <h1 className=" text-base sm:text-xl font-semibold">
            Project Management - Build For Me
          </h1>
          <p>
            Some things are best left to the experts. Whether you are a present
            or an absentee owner, trust Foreman to deliver professional
            construction management services for you. We work with a team of
            experienced professionals including architects, quantity surveyors,
            masons, steelbenders, electricians and carpenters among others to
            carry out quality building construction on your behalf.
          </p>
          <p>
            We direct and coordinate human and material resources throughout the
            various stages of your project using hands-on management techniques,
            negotiation skills and quality supervision to offer you value for
            money. Our team of relationship managers will ensure your
            participation and satisfaction every step of the way.
          </p>
          <p>
            Talk to us today! Call and whatsapp icons - +233540124783 Request
            for Call back === This option should open up field for - Name, phone
            number, brief description of your request - SEND
          </p>
        </section>
        <div className="flex justify-center items-center md:w-1/2 mt-6 md:mt-0">
          <Image
            src={"/p_management.jpg"}
            alt={"product management"}
            objectFit="contain"
            width={600}
            height={600}
            className="rounded-lg"
          />
        </div>
      </div>

      <section className="pt-10">
        <h1 className=" text-base sm:text-xl font-semibold">
          The Foreman Flexi Plan
        </h1>
        <p>How it works</p>
        <ol className="space-y-3">
          <li>Buy building materials from us</li>
          <li>
            Keep your purchased goods with us for a limited period (no extra
            cost)
          </li>
          <li>Request for delivery at a later date</li>
        </ol>

        <div className="mt-6 space-y-3">
          <div className=" flex items-center space-x-2">
            <Image src={"/money.png"} alt="loss" width={30} height={30} />
            <p>Save on storage</p>
          </div>
          <div className=" flex items-center space-x-2">
            <Image
              src={"/peace.png"}
              alt="peace of mind"
              width={30}
              height={30}
            />
            <p>Enjoy peace of mind</p>
          </div>
          <div className=" flex items-center space-x-2">
            <Image
              src={"/warehouse.png"}
              alt="peace of mind"
              width={30}
              height={30}
            />
            <p>Avoid losses due to damages and petty theft</p>
          </div>
        </div>

        <Link href={"#"}>
          <p className="pt-8">
            Try{" "}
            <span className="hover:underline text-yellow-400">FLEX PLAN </span>
            today
          </p>
        </Link>
      </section>
    </main>
  );
};

export default ProductManagement;
