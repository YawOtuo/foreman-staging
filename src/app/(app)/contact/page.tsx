"use client";
import { Button } from "@/components/ui/button";
import { useAppStore } from "@/lib/store/useAppStore";
import Info from "./Info";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import PhoneInput from "../checkout/components/PhoneNo";
import { SubmitHandler, useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

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
    info: "(+233) 540-124783",
    icon: FiPhone,
  },
];

function Page() {
  const {
    register,
    handleSubmit,
    reset,

    formState: { errors, isSubmitting },
  } = useForm<SendForm>();
  const { DBDetails } = useAppStore();
  const { toast } = useToast();

  const onSubmit: SubmitHandler<SendForm> = async (data) => {
    toast({
      title: "Email sending ",
      variant: "loading",
    });
    emailjs
      .send(
        "service_koj8xcl",
        "contact-us",
        {
          from_name: data.name,
          from_phone: data.phone,
          from_email: data.email,
          message: data.message,
        },
        "3QqTSi4xLwu5MMz5c"
      )
      .then(
        (response) => {
          toast({
            title: "Email sent ",
            variant: "success",
          });
        },
        (err) => {
          console.log("FAILED...", err);
        }
      );
    reset();
  };

  return (
    <main className="flex flex-col items-center ">
      <header className="bg-gray-300 w-full p-6">
        <h6 className="font-semibold text-2xl">Contact Us</h6>
      </header>
      <div className="w-full mt-10 p-6">
        <p className="text-xl font-semibold">We love to hear from you!</p>
      </div>
      <section className="mt-6 w-4/5  flex flex-col justify-between md:flex-row md:mt-10 md:h-72 mb-24">
        <div className="w-full md:w-1/2">
          {contactInfo.map((item, index) => (
            <Info
              info={item.info}
              info_type={item.info_type}
              icon={item.icon}
              key={index}
            />
          ))}
        </div>
        <div className="flex mt-24 md:mt-0  w-full md:w-1/2">
          <form
            className="flex flex-col w-full justify-center sm:items-center space-y-5 p-2"
            onSubmit={handleSubmit(onSubmit)}>
            <div className="w-full flex-col md:w-full gap-5 flex ">
              <div className="w-full ">
                <Input
                  {...register("name", {
                    required: "Name is required",
                  })}
                  type="text"
                  placeholder="Enter Name"
                  className="p-3 w-full border-2 rounded-lg"
                />
                {errors.name && (
                  <p className="text-red-600 mt-2"> {errors.name.message} </p>
                )}
              </div>
              <div className="w-full ">
                <Input
                  {...register("email", {
                    required: "Email is required",
                  })}
                  type="email"
                  placeholder="Enter Email"
                  className="p-3 w-full border-2 rounded-lg"
                />
                {errors.email && (
                  <p className="text-red-600 mt-2"> {errors.email.message} </p>
                )}
              </div>
            </div>
            <div className="w-full flex-col md:w-full  flex gap-5">
              <div className="w-full ">
                <Input
                  {...register("phone", {
                    required: "Phone number is required",
                  })}
                  type="text"
                  placeholder="Enter Phone number"
                  className="p-3 w-full border-2 rounded-lg"
                />
                {errors.phone && (
                  <p className="text-red-600 mt-2"> {errors.phone.message} </p>
                )}
              </div>
              <div className="w-full ">
                <textarea
                  {...register("message", {
                    required: "Please type your message",
                  })}
                  placeholder="Message"
                  className="p-3 w-full border-2 rounded-lg"
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
                className="disabled:pointer-events-none disabled:opacity-70 uppercase w-full text-xs sm:text-base">
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
