import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

// Import company images
import company1 from "../assets/riepe.png";
import company2 from "../assets/forner.png";
import company3 from "../assets/hmp.png";
import company4 from "../assets/bergo.png";
import company5 from "../assets/Cleaf.png";
import company6 from "../assets/smart.png";
import company7 from "../assets/gerflor.png";

const images = [
  company1,
  company2,
  company3,
  company4,
  company5,
  company6,
  company7,
];

const Partners = () => {
  return (
    <section className="py-5 bg-white scroll-mt-[13vh]" id="about">
      {/* TITLE */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <h2 className="text-2xl uppercase text-center pt-14">
          4K Building Materials
        </h2>
        <div className="mt-4 h-px mx-auto bg-gray-300 w-24" />
      </div>

      {/* SLIDER STRIP */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="border-y border-gray-300">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={0}
            loop={false}
            breakpoints={{
              0: {
                slidesPerView: 2,
                loop: true,
                autoplay: { delay: 2500, disableOnInteraction: false },
              },
              640: {
                slidesPerView: 3,
                loop: true,
                autoplay: { delay: 2500, disableOnInteraction: false },
              },
              1024: {
                slidesPerView: 7,
                loop: false,
                autoplay: false,
                allowTouchMove: false,
              },
            }}
          >
            {images.map((img, index) => (
              <SwiperSlide key={index}>
                <div className="flex items-center justify-center p-4 border-r border-l border-gray-300">
                  <img
                    src={img}
                    alt={`Partner ${index + 1}`}
                    draggable={false}
                    className="
                      h-24 max-w-[100px] object-contain
                      grayscale
                      opacity-60
                      hover:grayscale-0
                      hover:opacity-100
                      transition-all
                      duration-300
                      ease-in-out
                    "
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Partners;
