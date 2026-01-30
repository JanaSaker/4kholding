import React, { useState, useEffect } from "react";
import { FiPhone, FiMail } from "react-icons/fi";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

import logogrey from "../assets/4klogo.png";
import logoyellow from "../assets/yellowlogo (2).png";

const sections = ["home", "about", "branches", "journey", "contact"];

const COUNTRIES = [
  "Countries",
  "United Arab Emirates",
  "Saudi Arabia",
  "Qatar",
  "Sultanate of Oman",
  "Bahrain",
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [countriesOpen, setCountriesOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("Countries");
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observers = [];

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (!section) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { threshold: 0.6 }
      );

      observer.observe(section);
      observers.push(observer);
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 font-light">

      {/* ───────── TOP ANNOUNCEMENT BAR ───────── */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-2 md:h-10 flex flex-col md:flex-row md:items-center md:justify-between gap-2 text-xs text-gray-500">

          {/* LEFT: SOCIALS */}
          <div className="flex items-center gap-4 justify-center md:justify-start ml-4">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-700 transition"
            >
              <FaFacebookF size={15} />
            </a>

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-700 transition"
            >
              <FaInstagram size={16} />
            </a>
          </div>

          {/* CENTER: COUNTRIES DROPDOWN */}
          <div className="relative flex justify-center text-[14px]">
            <button
              onClick={() => setCountriesOpen(!countriesOpen)}
              className="
                border border-gray-300
                px-4 py-1
                w-[37vh]
                flex items-center gap-4
                text-gray-500
                 tracking-widest
                hover:text-gray-700
                transition
                justify-between
              "
            >
            {/* TEXT — RIGHT */}
              <span className="">
                {selectedCountry}
              </span>
              {/* ARROW — LEFT */}
              <span
                className={`transition-transform duration-300 ${
                  countriesOpen ? "rotate-180" : ""
                }`}
              >
                ▾
              </span>

      
            </button>

            {countriesOpen && (
              <div className="absolute left-1/2 -translate-x-1/2 top-full mt-1 w-[30vh] bg-white border border-gray-300 shadow-lg z-50">
                {COUNTRIES.map((country) => (
                  <button
                    key={country}
                    onClick={() => {
                      setSelectedCountry(country);
                      setCountriesOpen(false);
                    }}
                    className="
                      block w-full text-left
                      px-4 py-2
                      text-[14px]
                      tracking-widest
                      font-light
                      text-gray-500
                      hover:bg-gray-100 hover:text-gray-800
                      transition
                    "
                  >
                    {country}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* RIGHT: CONTACT */}
          <div className="flex items-center gap-4 justify-center md:justify-end">
            <a
              href="tel:+97144302687"
              className="flex items-center gap-2 text-gray-500 hover:text-gray-700 transition hover:underline"
            >
              <FiPhone size={13} />
              +971 4 430 2687
            </a>

            <a
              href="mailto:info@4kbm.com"
              className="flex items-center gap-2 text-gray-500 hover:text-gray-700 transition hover:underline"
            >
              <FiMail size={13} />
              info@4kbm.com
            </a>
          </div>

        </div>
      </div>

      {/* ───────── MAIN NAVBAR ───────── */}
      <div className="bg-black/40 backdrop-blur-md border-b border-white/10 overflow-x-hidden">
        <div className="h-[11vh] flex items-center justify-between lg:justify-evenly px-6 gap-20">

          {/* LOGO */}
          <div className="flex items-center gap-0">
            <div className="relative h-20 w-28">
              <img
                src={logoyellow}
                alt="4K Yellow Logo"
                className={`absolute inset-0 h-full w-auto transition-all duration-700
                  ${activeSection === "home"
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-95 blur-[1px]"
                  }`}
              />
              <img
                src={logogrey}
                alt="4K Grey Logo"
                className={`absolute inset-0 h-full w-auto transition-all duration-700
                  ${activeSection === "home"
                    ? "opacity-0 scale-95 blur-[1px]"
                    : "opacity-100 scale-100"
                  }`}
              />
            </div>

            <p className="lg:text-[20px] text-sm font-extrabold mt-7 text-white">
              4K Building Materials L.L.C
            </p>
          </div>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-5 font-extralight mt-7 ml-4">
            {[
              { label: "Home", href: "#home", id: "home" },
              { label: "About Us", href: "#about", id: "about" },
              { label: "The Journey", href: "#journey", id: "journey" },
              { label: "Our Branches", href: "#branches", id: "branches" },
              { label: "Contact Us", href: "#contact", id: "contact" },
            ].map((item) => (
              <a
                key={item.id}
                href={item.href}
                className={`text-[13px] uppercase tracking-widest transition
                  ${
                    activeSection === item.id
                      ? "text-white underline decoration-[#FCE501] underline-offset-4"
                      : "text-white hover:underline decoration-[#FCE501] underline-offset-4"
                  }
                `}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* HAMBURGER */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden flex flex-col gap-[6px]"
          >
            <span className="w-6 h-[1.5px] bg-white" />
            <span className="w-6 h-[1.5px] bg-white" />
            <span className="w-6 h-[1.5px] bg-white" />
          </button>
        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="lg:hidden bg-black/90 backdrop-blur-md">
            <nav className="flex flex-col items-center gap-6 py-8">
              {[
                { label: "Home", href: "#home", id: "home" },
                { label: "About Us", href: "#about", id: "about" },
                { label: "Our Branches", href: "#branches", id: "branches" },
                { label: "The Journey", href: "#journey", id: "journey" },
                { label: "Contact Us", href: "#contact", id: "contact" },
              ].map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`text-sm uppercase tracking-widest
                    ${
                      activeSection === item.id
                        ? "text-white font-semibold"
                        : "text-white/70"
                    }
                  `}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
