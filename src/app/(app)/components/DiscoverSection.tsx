import { StarIcon } from "lucide-react";
import Image from "next/image";
import { CiMoneyBill } from "react-icons/ci";
import { GrLike } from "react-icons/gr";

export default function DiscoverSection() {
  const whatPeopleSay = [
    {
      text: "Top Rated",
      icon: <GrLike className="w-5 h-5 text-primary-100" />,
    },
    {
      text: "Best Quality",
      icon: <StarIcon className="w-6 h-6 text-primary-100" />,
    },
    {
      text: "fairlypriced",
      icon: <CiMoneyBill className="w-7 h-7 text-primary-100" />,
    },
  ];

  return (
    <section className="w-full flex flex-col lg:flex-row items-start lg:items-center justify-center gap-10  flex-wrap  ">
      <div className="flex flex-col gap-6  ">
        <div className="flex flex-col gap-5">
            <h2 className="text-4xl lg:text-6xl text-primary font-bold ">Try Warehousing</h2>
            <p className=" text-base">
              our best-selling products, trusted by <br /> contractors and builders
              alike
            </p>
        </div >
        <div className="flex gap-4 flex-wrap ">
          {whatPeopleSay.map((wat, index) => (
            <div
              key={index}
              className="flex gap-3 rounded-full border items-center p-3 cursor-pointer ">
              {wat.icon}
              <p className="text-sm">{wat.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative aspect-[546/588] lg:basis-[55%] grow-0 w-full md:max-h-[500px] lg:max-h-full">
        <Image
          src={"/discover_section.png"}
          objectFit="cover"
          fill
          alt="An Illustration displayng supply "
        />
      </div>
    </section>
  );
}
