import Button from "@/components/Button";
import styles from "./index.module.css";

function HeroSection() {
  type SlideProps = {
    heading: string;
    subheading: string;
    button?: string;
    image: string;
  };
  const Slide = ({ heading, subheading, button, image }: SlideProps) => (
    <div
      className={`w-full h-full flex flex-col items-start justify-center px-5 lg:px-20 gap-5 ${styles.heroSlide} bg-auto lg:bg-cover bg-no-repeat`}
      style={{ backgroundImage: `url(${image})` }}>
      <div>
        <h3 className="font-semibold text-base lg:text-3xl">{heading}</h3>
        <h1 className="uppercase font-bold text-lg lg:text-5xl">{subheading}</h1>
      </div>

      <Button
        content={"Shop Now"}
        className="uppercase !px-14 !py-3 font-semibold"
        variant="solid"
        color="red-600"
        textColor="white"
        rounded="2xl"
      />
    </div>
  );

  return (
    <div
      className={`w-full flex flex-col items-start justify-center gap-5 h-[30vh] lg:h-[70vh] ${styles.heroSlideshowContainer}`}>
      <Slide
        heading="Quality Afforfable Building One Place"
        subheading=" All the leading brands in one place"
        image="/hero/slide_3.jpg"
      />

      <Slide
        heading="Quality Afforfable Building One Place"
        subheading=" All the leading brands in one place"
        image="/hero/slide_1.jpg"
      />
      <Slide
        heading="Quality Afforfable Building One Place"
        subheading=" All the leading brands in one place"
        image="/hero/slide_3.jpg"
      />
    </div>
  );
}

export default HeroSection;
