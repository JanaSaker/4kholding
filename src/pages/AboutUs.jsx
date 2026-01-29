import React, { useState, useRef } from "react";

// assets
import aboutImage from "../assets/transfer/1.1-05.png";
import videoCover from "../assets/homepage.png";
import aboutVideo from "../assets/4kholdingvideo.mp4";

const AboutUs = () => {
  const [showMore, setShowMore] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlay = () => {
    if (!videoRef.current) return;
    videoRef.current.play();
    setIsPlaying(true);
  };

  return (
    <section id="about" className="bg-white relative  mt-10 ">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-20 items-center">

        {/* LEFT — TEXT */}
        <div className="lg:col-span-1">
          <h3 className="text-2xl font-light leading-snug mb-6">
            From Concept to Completion
            <br />— Trusted Building Solutions
          </h3>

          <p className="text-gray-600 text-sm leading-relaxed">
            4K is a group of family owned companies, spanning the GCC and Lebanon,
            that offers first grade European sourced products and services for the
            woodworking, architectural and general construction finishing
            materials market.
          </p>

          {showMore && (
            <p className="mt-4 text-gray-600 text-sm leading-relaxed transition-all duration-300">
              The group is focused on serving, directly and through its regional
              partners, the large-scale projects sector as well as the retail &
              distribution sectors within the furniture, interior design and
              architecture industries.
              <br /><br />
              By offering ready to assemble furniture to the reseller market as
              well as a portfolio of comprehensive furniture-manufacturing
              materials, accessories, parquet flooring, WPC decking/pergolas and
              sanitary equipment, 4K assumes a strong position in the regional
              market.
            </p>
          )}

          <button
            onClick={() => setShowMore(!showMore)}
            className="mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-black border border-black px-6 py-3 hover:bg-black hover:text-white transition"
          >
            {showMore ? "View less" : "View more"}
          </button>
        </div>

        {/* RIGHT — MEDIA */}
        <div className="lg:col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* IMAGE */}
          <div className="w-full h-[260px] sm:h-[280px] overflow-hidden">
            <img
              src={aboutImage}
              alt="4K Holding"
              className="w-full h-full object-cover"
            />
          </div>

          {/* VIDEO */}
          <div className="relative w-full h-[260px] sm:h-[280px] overflow-hidden group">
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              poster={videoCover}
              controls={isPlaying}
              muted
              playsInline
              preload="metadata"
              onEnded={() => setIsPlaying(false)}
            >
              <source src={aboutVideo} type="video/mp4" />
            </video>

            {!isPlaying && (
              <button
                onClick={handlePlay}
                className="absolute inset-0 flex items-center justify-center bg-black/40 transition"
                aria-label="Play video"
              >
                <div className="w-28 h-28 rounded-full border border-white flex items-center justify-center text-white text-xs uppercase tracking-widest transition-all duration-300 group-hover:border-dashed group-hover:scale-105">
                  Play Video
                </div>
              </button>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;
