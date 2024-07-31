import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdOutlineStorage } from "react-icons/md";

const ProjectManagement = () => {
  return (
    <main className="p-6">
      <div className="flex flex-col md:flex-row w-full justify-center items-center">
        <section className="space-y-4 md:w-1/2 ">
          <h1 className=" text-base sm:text-xl font-semibold">
            Project Management - Build For Me
          </h1>
          <p>
            <span className="font-medium">
              Some things are best left to the experts.
            </span>{" "}
            Whether you are a present or an absentee owner, trust Foreman to
            deliver professional construction management services for you. We
            work with a team of experienced professionals including architects,
            quantity surveyors, masons, steelbenders, electricians and
            carpenters among others to carry out quality building construction
            on your behalf.
          </p>
          <p>
            We direct and coordinate human and material resources throughout the
            various stages of your project using hands-on management techniques,
            negotiation skills and quality supervision to offer you value for
            money. Our team of relationship managers will ensure your
            participation and satisfaction every step of the way.
          </p>
          <Link href={"/contact"}>
            <p className="font-medium text-yellow-500 mt-2"> Contact Us</p>
          </Link>
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

      {/* <section className="pt-10">
        <Link href={"/warehousing"}>
          <p className="pt-8">
            Try{" "}
            <span className="hover:underline text-yellow-500 font-medium">
              FLEX PLAN{" "}
            </span>
            today
          </p>
        </Link>
      </section> */}
    </main>
  );
};

export default ProjectManagement;
