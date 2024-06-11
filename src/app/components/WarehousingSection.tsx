import Image from "next/image";
import { GrLike } from "react-icons/gr";

export default function WarehousingSection() {
    return (
        <section className="lg:mt-20 w-full grid grid-cols-1 lg:grid-cols-2 gap-14  items-center justify-center lg:min-h-screen">
            <div className="w-full relative aspect-square order-2 lg:order-1">
                <Image src={"/WarehousingSection.png"} fill alt="An Illustration displayng warehousing " />
            </div>
            <div className="order-1 lg:order-2" >
                <h2 className="text-4xl lg:text-6xl font-bold mb-3 text-primary">Innovative
                <br />
                 Warehousing</h2>
                <p className="mb-6 lg:max-w-[70%]">
                    Need a place to store your materials? <br /> We offer warehousing services to keep your materials safe and secure.
                </p>
                <ul className="text-sm">
                    <li className="flex gap-3 items-center p-3 ">
                        <GrLike className="w-5 h-5 " />
                        <p>
                            Very Secure and Safe Warehousing Facilities
                        </p>
                    </li>
                    <li className="flex gap-3 items-center p-3 ">
                        <GrLike className="w-5 h-5 " />
                        <p>
                            Climate Controlled Warehousing
                        </p>
                    </li>
                    <li className="flex gap-3 items-center p-3 ">
                        <GrLike className="w-5 h-5 " />
                        <p>
                            24/7 Security
                        </p>
                    </li>
                </ul>
            </div>
        </section>
    );
}