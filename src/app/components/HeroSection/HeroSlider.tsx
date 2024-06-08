"use client";
import Image from "next/image";
import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const images = ["/hero/5.png", "/hero/6.png", "/hero/7.png"];

function HeroSlider() {
  return (
    <div className="w-full h-full">
      <Swiper
        className="w-full h-full"
        loop={true}
        modules={[EffectFade, Autoplay]}
        effect="fade"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}>
        {images.map((image, index) => (
          <SwiperSlide key={index} className="w-full h-full">
            <div className="relative w-full h-full">
              <Image
                src={image}
                fill
                alt="Hero Image"
                objectFit="cover"
                objectPosition="center"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default HeroSlider;
