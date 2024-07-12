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
      className={`w-full grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-10 h-[70vh] lg:h-screen max-h-[500px] lg:max-h-[900px] px-5 lg:px-14  py-5 transition-all ${styles.heroSlideshowContainer} max-w-[1600px]`}>
      <div className="flex flex-col gap-6 transition-all ">
        <div className="flex flex-col gap-3">
          <p className="text-3xl lg:text-5xl font-bold">
            High-Quality <br className="hidden 2xl:block" />
            Construction Materials for Every Project
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
          <Link href={"/warehousing"}>
            <Button size={"md"} className="px-7" variant="outline">
              Try Warehousing
            </Button>
          </Link>
        </div>
      </div>
      <div className="hidden lg:flex h-full items-center w-full  transition-all">
        <HeroSlider />
      </div>{" "}
    </div>
  );
}

export default HeroSection;
