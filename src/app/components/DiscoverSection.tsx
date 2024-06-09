import { StarIcon } from "lucide-react";
import Image from "next/image";
import { CiMoneyBill } from "react-icons/ci";
import { GrLike } from "react-icons/gr";

export default function DiscoverSection() {

    const whatPeopleSay = [
        {
            text: "Top Rated",
            icon: <GrLike  className="w-5 h-5 text-primary-100" />
        },
        {
            text: "Best Quality",
            icon: <StarIcon className="w-6 h-6 text-primary-100" />
        },
        {
            text: "fairlypriced",
            icon: <CiMoneyBill className="w-7 h-7 text-primary-100" />
        }
    ]

    return <section className="w-full flex items-center justify-center gap-10 sm:flex-nowrap flex-wrap mx-auto my-14">
        <div className="text" >
            <h2 className="text-7xl font-bold mb-6">Discover</h2>
            <p className="mb-4 text-2xl">
                our best-selling products, trusted by <br /> contractors and builders alike
            </p>
            <div className="flex gap-4 flex-wrap">
                {whatPeopleSay.map((wat, index) => <div key={index} className="flex gap-3 rounded-full border items-center p-3 ">
                    {wat.icon}
                    <p>{wat.text}</p>
                </div>)}
            </div>
        </div>
        <div className="image">
            <Image className="bg-cover h-full" src={"/discover_section.png"} width={546} height={588} alt="An Illustration displayng supply " />
        </div>
    </section>
}