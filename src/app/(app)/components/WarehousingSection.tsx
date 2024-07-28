/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { GrLike } from "react-icons/gr";

export default function WarehousingSection() {
  return (
    <section className="lg:mt-20 w-full md:w-[90%] pb-10 grid grid-cols-1 lg:grid-cols-2 gap-14  items-center justify-center ">
      <div className="w-full relative aspect-square order-2 lg:order-1">
        <Image
          src={"/warehouse.jpeg"}
          objectFit="cover"
          fill
          alt="An Illustration displayng warehousing "
        />
      </div>
      <div className="order-1 lg:order-2">
        <h2 className="text-4xl lg:text-6xl font-bold mb-3 text-primary">
          Innovative
          <br />
          Lay-By Model
        </h2>
        {/* <p className="mb-6 lg:max-w-[70%]">
          Need a place to store your materials? <br /> We offer warehousing
          services to keep your materials safe and secure.
        </p> */}
        <div className="mb-6 w-full space-y-4">
          <p>
            We offer a Buy Now, Collect Later model, which allows customers to
            buy building materials in piecemeal, one block or bag of cement at a
            time for future use.
          </p>
          <p>
            Customers have the option to purchase materials per their own
            preference or be guided by sample project material schedules
            provided on our website. Either way, this service comes at no extra
            cost. Your purchased materials will be delivered to your designated
            delivery address once you are ready to build or use them.
          </p>
          <p>
            Enjoy peace of mind, save on storage and avoid potential losses due
            to damages and petty theft. As a trusted companion, we are ready to
            embark on the journey with you - opt for our Flexi plan today and
            let’s help you prepare for your dream project.
          </p>
        </div>
        <ul className="text-sm">
          <li className="flex gap-3 items-center p-3 ">
            <GrLike className="w-5 h-5 " />
            <p>Very Secure and Safe Warehousing Facilities</p>
          </li>
          <li className="flex gap-3 items-center p-3 ">
            <GrLike className="w-5 h-5 " />
            <p>Climate Controlled Warehousing</p>
          </li>
          <li className="flex gap-3 items-center p-3 ">
            <GrLike className="w-5 h-5 " />
            <p>24/7 Security</p>
          </li>
        </ul>
      </div>
    </section>
  );
}
