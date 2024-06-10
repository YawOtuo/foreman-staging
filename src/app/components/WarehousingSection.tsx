import Image from "next/image";
import { GrLike } from "react-icons/gr";

export default function WarehousingSection() {
    return (
        <section className="w-full flex items-center justify-center gap-10 sm:flex-nowrap flex-wrap mx-auto my-14">
            <div className="image">
                <Image src={"/WarehousingSection.png"} width={500} height={500} alt="An Illustration displayng warehousing " />
            </div>
            <div className="text" >
                <h2 className="text-6xl font-bold mb-6">Innovative Warehousing</h2>
                <p className="mb-6">
                    Need a place to store your materials? <br /> We offer warehousing services to keep your materials safe and secure.
                </p>
                <ul>
                    <li className="flex gap-3 items-center p-3 ">
                        <GrLike className="w-5 h-5 text-primary-100" />
                        <p>
                            Very Secure and Safe Warehousing Facilities
                        </p>
                    </li>
                    <li className="flex gap-3 items-center p-3 ">
                        <GrLike className="w-5 h-5 text-primary-100" />
                        <p>
                            Climate Controlled Warehousing
                        </p>
                    </li>
                    <li className="flex gap-3 items-center p-3 ">
                        <GrLike className="w-5 h-5 text-primary-100" />
                        <p>
                            24/7 Security
                        </p>
                    </li>
                </ul>
            </div>
        </section>
    );
}