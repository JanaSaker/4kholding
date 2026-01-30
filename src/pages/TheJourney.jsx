import React, { useState, useEffect } from "react";
import { HiOutlineChevronRight } from "react-icons/hi";

// images
import img1 from "../assets/Showrooms pictures/Qatar/QTR 03.jpg";
import img2 from "../assets/Showrooms pictures/Qatar/QTR 04.jpeg";
import img3 from "../assets/Showrooms pictures/Floorna/IMG_7686.jpg";
import img4 from "../assets/journey8.jfif";
import img5 from "../assets/Showrooms pictures/Bahrain/BAH 01 (1).jpg";
import img6 from "../assets/Showrooms pictures/Floorna/IMG_7700.jpg";
import img7 from "../assets/Showrooms pictures/Oman/OMN 01 (3).jpeg";
import img8 from "../assets/journey8.jfif";
import img9 from "../assets/Showrooms pictures/UAE/UAE 03.jpg";
import img10 from "../assets/Showrooms pictures/Qatar/QTR 02.jpeg";
import img11 from "../assets/Showrooms pictures/Bahrain/BAH 01 (2).jpg";
import img12 from "../assets/Showrooms pictures/Floorna/Abu Dhabi 01.jpg";
import img13 from "../assets/journey8.jfif";
import img14 from "../assets/journey8.jfif";

const items = [
  { id: 2007, image: img1, title: "THE LAUNCH OF 4K", description: "4K begins its journey, introducing premium European materials to the region." },
  { id: 2009, image: img2, title: "SECOND 4K BRANCH", description: "Expansion continues with the opening of a second strategic branch." },
  { id: 2010, image: img3, title: "NEW UAE BRANCH", description: "Strengthening presence and partnerships within the UAE market." },
  { id: 2014, image: img4, title: "4K OPENS IN KSA", description: "A major milestone as 4K enters the Saudi Arabian market." },
  { id: 2015, image: img5, title: "4K SERVING BAHRAIN", description: "Extending services and solutions to Bahrain." },
  { id: 2016, image: img6, title: "LAUNCHING IN DUBAI", description: "Dubai showroom opens, reinforcing regional leadership." },
  { id: 2019, image: img7, title: "EXPANDS INTO OMAN", description: "New operations established in the Sultanate of Oman." },
  { id: 2021, image: img8, title: "A NEW 4K IN KSA", description: "Continued growth with an additional presence in Saudi Arabia." },
  { id: 2022, image: img9, title: "1ST DUBAI BRANCH", description: "Official inauguration of the first dedicated Dubai branch." },
  { id: 2023, image: img10, title: "DOHA NEW GCC", description: "Expanding footprint with a new branch in Doha." },
  { id: 2024, image: img11, title: "NOW IN BAHRAIN", description: "Further strengthening the Bahraini market presence." },
  { id: 2025, image: img12, title: "ABU DHABI LAUNCH", description: "Opening a flagship location in Abu Dhabi." },
  { id: 2026, image: img13, title: "NOW IN RIYADH", description: "Strategic expansion into Riyadh." },
  { id: 2026, image: img14, title: "DAMMAM DEVELOPMENT", description: "New development projects launched in Dammam." },
];

const ITEMS_PER_PAGE = 7;

const TheJourney = () => {
  const [page, setPage] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const totalPages = Math.ceil(items.length / ITEMS_PER_PAGE);
  const start = page * ITEMS_PER_PAGE;
  const currentItems = items.slice(start, start + ITEMS_PER_PAGE);

  useEffect(() => {
    if (activeIndex < start || activeIndex >= start + ITEMS_PER_PAGE) {
      setActiveIndex(start);
    }
  }, [page, start, activeIndex]);

  return (
    <section id="journey" className="bg-white relative z-20 scroll-mt-[13vh]">
      {/* TITLE */}
      <div className="max-w-7xl mx-auto px-6 mb-5">
        <h2 className="text-2xl uppercase text-center pt-16">The Journey</h2>
        <div className="mt-4 h-px mx-auto bg-gray-300 w-24" />
                  <p className="mt-4 text-gray-600 text-sm leading-relaxed text-center">
Founded in 2007, 4K Building Materials began with a clear vision: quality products and reliable partnerships.
<br/>Through steady growth, innovation, and trust, we expanded our portfolio and strengthened our presence across the market.
<br/>Today in 2026, 4K stands as a proven name in building materials, built on experience and driven by the future.

          </p>
      </div>

      {/* DESKTOP */}
      <div className="hidden md:block max-h-[55vh]">
        <div className="h-[55vh] min-h-[380px] flex">
          {currentItems.map((item, i) => {
            const index = start + i;
            const isActive = index === activeIndex;

            return (
              <button
                key={`${item.id}-${index}`} 
                onClick={() => setActiveIndex(index)}
                className={`relative h-full transition-all duration-500 ease-out ${
                  isActive ? "flex-[6]" : "flex-[1.2]"
                }`}
                style={{ minWidth: isActive ? "0px" : "40px" }}
              >
                <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover" />

                <div className={`absolute inset-0 ${isActive ? "bg-black/30" : "bg-black/70"}`} />

                <div className="absolute inset-x-0 bottom-0">
                  <div className="p-8 bg-gradient-to-t from-black/70 to-transparent">
                    <div className="flex items-center gap-4">
                      <span className={`text-2xl ${isActive ? "text-white" : "text-white/40"}`}>
                        {item.id}
                      </span>
                      <HiOutlineChevronRight className="text-white text-4xl" />
                      {isActive && <span className="text-white text-2xl">{item.title}</span>}
                    </div>

                    {isActive && (
                      <p className="mt-2 max-w-lg text-sm text-white/80">
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>

                <div className="absolute top-0 right-0 h-full w-px bg-white/40" />
              </button>
            );
          })}
        </div>

<div className="flex flex-col items-center mt-6 gap-2">

  {/* PAGINATION BAR */}
  <div className="relative w-[220px] h-[2px] bg-black/20">
    <div
      className="absolute top-0 h-[2px] bg-black transition-all duration-500"
      style={{
        width: `${100 / totalPages}%`,
        left: `${(100 / totalPages) * page}%`,
      }}
    />

    <div className="absolute inset-0 flex">
      {[...Array(totalPages)].map((_, i) => (
        <button
          key={i}
          onClick={() => setPage(i)}
          className="flex-1"
        />
      ))}
    </div>
  </div>

  {/* YEAR LABELS */}
  <div className="w-[220px] flex justify-between text-[10px] text-gray-500">
    <span>2007 – 2019</span>
    <span>2021 – 2026</span>
  </div>

</div>
      </div>
       {/* ================= MOBILE ================= */}
      <div className="md:hidden">
        <div className="relative h-[70vh] overflow-hidden">
          <img
            src={items[activeIndex].image}
            alt={items[activeIndex].title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />

          <div className="relative z-10 h-full flex flex-col justify-end p-6">
            <div className="flex items-center gap-3">
              <span className="text-white text-2xl font-light">
                {items[activeIndex].id}
              </span>
              <HiOutlineChevronRight className="text-white text-5xl" />
            </div>

            <h3 className="text-white text-2xl mt-2">
              {items[activeIndex].title}
            </h3>

            <p className="text-white/80 text-sm mt-2">
              {items[activeIndex].description}
            </p>

            <div className="flex gap-3 mt-6 flex-wrap">
              {items.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`w-3 h-3 rounded-full transition ${
                    i === activeIndex
                      ? "bg-white"
                      : "bg-white/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
        </div>
    </section>
  );
};

export default TheJourney;
