import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

// Images
import hero1 from "../assets/banner1.jpg";
import hero2 from "../assets/transfer/1.1-03.png";
import hero3 from "../assets/banner2.jpg";

const banners = [hero1, hero2, hero3];

const Home = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section
        id="home"
        className="relative h-[83vh] w-full overflow-hidden bg-gray-900"
      >
        {/* BACKGROUND CAROUSEL */}
        <Swiper
          modules={[Autoplay, Pagination, EffectFade]}
          effect="fade"
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={true}
          pagination={{
            el: ".home-pagination", 
            clickable: true,
          }}
          className="h-full w-full"
        >
          {banners.map((img, index) => (
            <SwiperSlide key={index}>
              <img
                src={img}
                alt={`Banner ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/60 z-10 pointer-events-none" />

        {/* TEXT */}
        <div className="absolute inset-0 z-20 flex items-center px-[17%] mt-[17vh]">
          <div className="bg-black/60 backdrop-blur-md p-8 max-w-xl flex flex-col gap-2">
            <h4 className="text-white/80 text-2xl font-light leading-snug">
              Suppliers of Premium Architectural Solutions
            </h4>
            <p className="text-white/80 text-sm font-extralight">
              Suppliers of premium woodworking, hardware and architectural
              solutions for the Gulf construction industry.
            </p>
          </div>
        </div>
      </section>

      {/* PAGINATION OUTSIDE THE BANNER */}
      <div className="home-pagination flex justify-center gap-[10px] py-6 bg-white" />

      {/* PAGINATION STYLING */}
      <style>{`
        .home-pagination .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: #9ca3af;
          opacity: 1;
          transition: all 0.3s ease;
        }

        .home-pagination .swiper-pagination-bullet-active {
          background: #111827;
          transform: scale(1.2);
        }
      `}</style>
    </>
  );
};

export default Home;
