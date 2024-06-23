"use client";
import { Button } from "@/components/ui/button";
import { useAppStore } from "@/lib/store/useAppStore";
import Info from "./Info";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import PhoneInput from "../checkout/components/PhoneNo";
import { SubmitHandler, useForm } from "react-hook-form";

interface SendForm {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const contactInfo = [
  {
    info_type: "Address",
    info: "Spintex Road, Accra, Ghana",
    icon: HiBuildingOffice2,
  },
  {
    info_type: "Email Address",
    info: "myforemangh@gmail.com",
    icon: HiOutlineMail,
  },
  {
    info_type: "Phone Number",
    info: "(233) 540-124783",
    icon: FiPhone,
  },
];

function Page() {
  const {
    register,
    handleSubmit,

    formState: { errors, isSubmitting },
  } = useForm<SendForm>();
  const { DBDetails } = useAppStore();

  const onSubmit: SubmitHandler<SendForm> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
  };

  return (
    <main className="flex flex-col items-center ">
      <header className="bg-gray-300 w-full p-6">
        <h6 className="font-semibold text-2xl">Feedback</h6>
      </header>
      <div className="w-full mt-16 p-6">
        <p className="text-xl font-semibold">We love hear from you!</p>
      </div>
      <section className="mt-6 w-4/5 flex flex-col justify-between md:flex-row md:mt-10 md:h-72">
        <div className="">
          {contactInfo.map((item, index) => (
            <Info
              info={item.info}
              info_type={item.info_type}
              icon={item.icon}
              key={index}
            />
          ))}
        </div>
        <div className="flex mt-24 md:mt-0  md:w-3/5">
          <form
            className="flex flex-col w-full justify-center sm:items-center space-y-5 p-2"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="w-full flex-col sm:w-4/5 md:w-full md:flex-row gap-5 flex ">
              <div className="w-full md:w-1/2">
                <input
                  {...register("name", {
                    required: "Name is required",
                  })}
                  type="text"
                  placeholder="Enter Name"
                  className="p-3 w-full bg-slate-200 rounded-lg"
                />
                {errors.name && (
                  <p className="text-red-600 mt-2"> {errors.name.message} </p>
                )}
              </div>
              <div className="w-full md:w-1/2">
                <input
                  {...register("email", {
                    required: "Email is required",
                  })}
                  type="email"
                  placeholder="Enter Email"
                  className="p-3 w-full bg-slate-200 rounded-lg"
                />
                {errors.email && (
                  <p className="text-red-600 mt-2"> {errors.email.message} </p>
                )}
              </div>
            </div>
            <div className="w-full flex-col sm:w-4/5 md:w-full md:flex-row flex gap-5">
              <div className="w-full md:w-1/2">
                <input
                  {...register("phone", {
                    required: "Phone number is required",
                  })}
                  type="text"
                  placeholder="Enter Phone number"
                  className="p-3 w-full bg-slate-200 rounded-lg"
                />
                {errors.phone && (
                  <p className="text-red-600 mt-2"> {errors.phone.message} </p>
                )}
              </div>
              <div className="w-full md:w-1/2">
                <textarea
                  {...register("message", {
                    required: "Please type your message",
                  })}
                  placeholder="Message"
                  className="p-3 w-full bg-slate-200 rounded-lg"
                />
                {errors.message && (
                  <p className="text-red-600 mt-2">
                    {" "}
                    {errors.message.message}{" "}
                  </p>
                )}
              </div>
            </div>

            <div className="w-full flex justify-center p-2">
              <Button
                disabled={isSubmitting}
                className="disabled:pointer-events-none disabled:opacity-70 uppercase w-1/2 text-xs sm:text-base"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}

export default Page;
