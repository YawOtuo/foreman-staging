import { Button } from "@/components/ui/button";
import styles from "./index.module.css";
import HeroSlider from "./HeroSlider";
import Link from "next/link";

function HeroSection() {
  type SlideProps = {
    heading: string;
    subheading: string;
    button?: string;
    image: string;
  };

  return (
    <div
      className={`w-full grid grid-cols-1 lg:grid-cols-5 items-center justify-center gap-5 lg:gap-10  lg:min-h-[50vh]  px-5 lg:px-14  py-5 transition-all ${styles.heroSlideshowContainer} max-w-[1600px]`}>
      <div className="order-2 lg:order-1 col-span-2 flex flex-col gap-6 transition-all justify-center h-full">
        <div className="flex flex-col gap-3 ">
          <p className="text-3xl lg:text-5xl font-bold">
            <span className="text-prifmary">High-Quality</span> <br className="hidden 2xl:block" />
            <span className="text-primary">Construction</span> Materials for <span className="">Every Project</span> 
          </p> 
          <p className="text-base">
            Supplying builders with premium materials for over 20 years. Quality
            you can trust, prices you&apos;ll love.
          </p>
        </div>

        <div className="flex items-center justify-start gap-5">
          <Link href={"/store"}>
            <Button size={"md"} className="font-semibold" variant="default">
              Start Shopping
            </Button>{" "}
          </Link>
          <Link href={"/flexi-plan"}>
            <Button size={"md"} className="px-7" variant="outline">
              Try Flexi Plan
            </Button>
          </Link>
        </div>
      </div>
      <div className="order-1  lg:max-h-full lg:order-2 col-span-3  h-full items-center w-full  transition-all ">
        <HeroSlider />
      </div>{" "}
    </div>
  );
}

export default HeroSection;
