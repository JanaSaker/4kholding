import React from "react";
import heroImage from "../assets/transfer/1.1-03.png";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <section
      id="home"
      className="relative h-[80vh] w-full"
    >
      <div className="absolute top-0 left-0 w-full z-50">
        <Navbar />
      </div>

      <img
        src={heroImage}
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/40"></div>

      <div className="font-extralight relative z-10 h-full flex items-center px-[17%] py-[28%]">
        <div className="bg-black/60 backdrop-blur-md p-8 max-w-xl font-extralight">
          <p className="text-white/80 text-lg leading-snug font-extralight">
Suppliers of premium woodworking, hardware and architectural solutions
for the Gulf construction industry
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
