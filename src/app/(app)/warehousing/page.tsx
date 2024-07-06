import Image from "next/image";
import Link from "next/link";

/* eslint-disable react/no-unescaped-entities */
function Warehousing() {
  return (
    <main>
      <section className="pb-10">
        <header className="bg-gray-300 w-full p-6">
          <h6 className="font-semibold text-2xl">Warehousing</h6>
          <p>BUY NOW COLLECT LATER</p>
        </header>
        <div className="flex flex-col md:flex-row w-full py-10 px-6 md:gap-6">
          <div className="md:w-1/2">
            <div className="space-y-3">
              <p>
                Make your dream home or project a reality with the Foreman
                Warehousing option. The best preparation for tomorrow is doing
                your best today.
              </p>
              <p>
                "Start where you are. Use what you have. Do what you can. One
                day at a time”. Quantify the major building materials you will
                need for your project and buy them in smaller quantities over a
                period of time.
              </p>
              <p>
                We will store them for you until you are ready to build. It's
                that simple and convenient. You can build it….
                <Link href={"#"} className="text-yellow-400 hover:underline">
                  Start today!
                </Link>
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center mt-6 md:mt-0">
            <Image
              src={"/warehousePic.jpg"}
              alt={"couple"}
              objectFit="contain"
              width={600}
              height={600}
              className="rounded-md"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Warehousing;
