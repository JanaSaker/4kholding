import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import {
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
} from "react-icons/hi";

// MAP ICONS
import iconOman from "../assets/Maps-OMN.png";
import iconDubai from "../assets/Maps-DUBAI.png";
import iconUAE from "../assets/Maps-UAE.png";
import iconAbuDhabi from "../assets/Maps-ABUDHABI.png";
import iconQatar from "../assets/Maps-QTR.png";
import iconKSA from "../assets/Maps-KSA.png";
import iconBahrain from "../assets/Maps-BAH.png";

// BRANCH DATA
const branches = [
  {
    country: "Oman",
    icon: iconOman,
    address:
      "Store 01, Plot 443,\nAl Wasit Industrial Estate,\nBarka State - Sultanate of Oman",
    mapLink:
      "https://www.google.com/maps/place/Four+K+Building+Materials+LLC+(Oman+-+Barka)/@23.5681279,57.8557128,17z",
    phone: "+96899242594",
  },
  {
    country: "Dubai",
    icon: iconDubai,
    address:
      "4K EM Wood Manufacturing L.L.C.\nDubai Industrial City\nPhase 1, Warehouse No L-10 UAE",
    mapLink:
      "https://www.google.com/maps/place/Four+K+Building+Materials+LLC/",
    phone: "+97144302687",
  },
  {
    country: "UAE",
    icon: iconUAE,
    address:
      "4K Building Materials L.L.C.\nPhase 2, Warehouse No D-7 UAE",
    mapLink:
      "https://www.google.com/maps/place/Four+K+Building+Materials+LLC/",
    phone: "+97145136420",
  },
  {
    country: "Abu Dhabi",
    icon: iconAbuDhabi,
    address: "Four K Building Materials\nAbu Dhabi, UAE",
    mapLink:
      "https://www.google.com/maps/search/?api=1&query=Four+K+Building+Materials+Abu+Dhabi",
    phone: "+97140000002",
  },
  {
    country: "Qatar",
    icon: iconQatar,
    address:
      "4K Qatar w.l.l.\nIndustrial Area\nStreet 50, Zone 57,\nBuilding 74\nDoha, Qatar",
    mapLink:
      "https://www.google.com/maps/search/?api=1&query=Four+K+Building+Materials+Qatar",
    phone: "+97444161870",
  },
  {
    country: "KSA - Dammam",
    icon: iconKSA,
    address:
      "4K BUILDING MATERIALS L.L.C\nSalman Al Farisi Street,\nDammam, KSA",
    mapLink: "https://maps.app.goo.gl/dFrchPsF9QFbgceh7",
    phone: "+966138303175",
  },
  {
    country: "KSA - Riyadh",
    icon: iconKSA,
    address:
      "4K BUILDING MATERIALS L.L.C\nWarehouse #445,\nRiyadh, KSA",
    mapLink:
      "https://www.google.com/maps/place/4K+Building+Materials+-+Riyadh/",
    phone: "+966138303175",
  },
  {
    country: "Bahrain",
    icon: iconBahrain,
    address:
      "4K Building Materials Co W.L.L\nBuilding 283, Road 13,\nBlock 701, Tubli, Bahrain",
    mapLink: "https://maps.app.goo.gl/VwanBgLdwtFwo6Fs6",
    phone: "+97317704706",
  },
  {
    country: "Bahrain",
    icon: iconBahrain,
    address:
      "4K Bahrain Manufacturing W.L.L.\nFlat 29, Building 2639,\nHidd, Bahrain",
    mapLink: "https://maps.app.goo.gl/NqfDZErLd9dUYcvA8",
    phone: "+97317254702",
  },
];

const Branches = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section id="branches" className="bg-[#ffffff] py-[6%] relative">

      {/* TITLE */}
      <div className="max-w-7xl mx-auto pb-[4%]">
        <h2 className="text-2xl uppercase text-center">Our Branches</h2>
        <div className="mt-4 h-px mx-auto bg-gray-300 w-24" />
      </div>

      {/* SLIDER */}
      <div className="max-w-7xl mx-auto relative px-4">

        {/* ICON-ONLY ARROWS (ONE SET) */}
        <button
          ref={prevRef}
          className="absolute left-2 md:-left-10 top-1/2 -translate-y-1/2
          z-20 text-black hover:text-gray-500 transition"
        >
          <HiOutlineChevronLeft size={32} />
        </button>

        <button
          ref={nextRef}
          className="absolute right-2 md:-right-10 top-1/2 -translate-y-1/2
          z-20 text-black hover:text-gray-500 transition"
        >
          <HiOutlineChevronRight size={32} />
        </button>

        <Swiper
          modules={[Navigation, Autoplay]}
          loop
          grabCursor
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
        >
          {branches.map((branch, index) => (
            <SwiperSlide key={index}>
              <div className="h-full border-r border-gray-300 last:border-r-0
               px-2">

                <img
                  src={branch.icon}
                  alt={branch.country}
                  className="h-28 mb-6 opacity-70 mx-auto"
                />

                <h3 className="text-lg mb-4 text-center font-medium">
                  {branch.country}
                </h3>

                <div className="text-[12px] text-gray-600 leading-relaxed
                  text-center px-4 space-y-3">
                  <a
                    href={branch.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block whitespace-pre-line hover:text-black hover:underline transition"
                  >
                    {branch.address}
                  </a>

                  <a
                    href={`tel:${branch.phone}`}
                    className="block font-medium text-gray-700 hover:text-black hover:underline transition"
                  >
                    {branch.phone}
                  </a>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
};

export default Branches;
