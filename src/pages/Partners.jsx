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

const partners = [
  {
    company: company1,
    url: "https://www.riepe.eu/en/"
  },
  {
    company: company2,
    url: "https://www.forner.pl/en/"
  },
  {
    company: company3,
    url: ""
  },
  {
    company: company4,
    url: "http://bergopro.co.uk/"
  },
  {
    company: company5,
    url: "https://cleaf.it/en/"
  },
  {
    company: company6,
    url: "https://s-m-art.it/"
  },
  {
    company: company7,
    url: "https://www.gerflor.com/"
  }
];

const Partners = () => {
  return (
    <section className="bg-white scroll-mt-[16vh]" id="about">
      {/* TITLE */}
      <div className="max-w-7xl mx-auto px-6 mb-[3vh]">
        <h2 className="text-2xl uppercase text-center mt-8">
          4K Building Materials
        </h2>
        <div className="mt-4 h-px mx-auto bg-gray-300 w-24" />
        <div className="mt-4 text-gray-600 text-sm leading-relaxed text-center ">4K Building Materials is a trusted supplier of quality building solutions since 2007, serving the Gulf region.</div>
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
            {partners.map((partner, index) => (
              <SwiperSlide key={index}>
                <a href={partner.url !== "" ? partner.url : undefined} target="_blank">
                  <div className="flex items-center justify-center p-4 border-r border-l border-gray-300">
                    <img
                      src={partner.company}
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
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Partners;
