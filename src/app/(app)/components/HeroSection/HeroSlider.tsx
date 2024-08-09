"use client";
import Image from "next/image";
import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const images = ["/hero/slide_4.jpeg", "/hero/slide_5.jpeg",  "/hero/slide_6.jpeg","/hero/7.png",  "/hero/slide_7.jpeg",  "/hero/slide_8.jpeg",];

function HeroSlider() {
  return (
    <div className="w-full rounded-lg overflow-hidden max-h-[300px] lg:max-h-[700px]">
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
            <div className="relative w-full aspect-square">
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
