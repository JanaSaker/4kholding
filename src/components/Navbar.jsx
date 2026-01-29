import React, { useState, useEffect } from "react";
import { FiPhone, FiMail } from "react-icons/fi";

import logogrey from "../assets/4klogo.png";
import logoyellow from "../assets/yellowlogo (2).png";

const sections = ["home", "about", "branches", "journey", "contact"];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
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

      {/* ───────── TOP BAR ───────── */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 h-10 flex items-center justify-end">
          <div className="text-gray-500 text-xs flex gap-6 items-center">

            <a
              href="tel:+97144302687"
              className="flex items-center gap-2 hover:text-gray-700 transition hover:underline"
            >
              <FiPhone size={13} />
              +971 4 430 2687
            </a>

            <a
              href="mailto:info@4kbm.com"
              className="flex items-center gap-2 hover:text-gray-700 transition hover:underline"
            >
              <FiMail size={13} />
              info@4kbm.com
            </a>

          </div>
        </div>
      </div>

      {/* ───────── NAVBAR ───────── */}
      <div className="bg-black/40 backdrop-blur-md border-b border-white/10 overflow-x-hidden">
        <div className="h-[13vh] flex items-center justify-between lg:justify-evenly overflow-x-hidden">
          {/* ───── LOGO (SMOOTH TRANSITION) ───── */}
{/* ───── LOGO + TEXT ───── */}
<div className="relative h-[9vh] flex items-center gap-3">

  {/* LOGO WRAPPER */}
  <div className="relative w-[72px] h-[8vh]">
    {/* Yellow logo (Home) */}
    <img
      src={logoyellow}
      alt="4K Yellow Logo"
      className={`
        absolute inset-0
        h-full w-auto
        transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]
        ${
          activeSection === "home"
            ? "opacity-100 scale-100 blur-0"
            : "opacity-0 scale-95 blur-[1px]"
        }
      `}
    />

    {/* Grey logo (Other sections) */}
    <img
      src={logogrey}
      alt="4K Grey Logo"
      className={`
        absolute inset-0
        h-full w-auto
        transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]
        ${
          activeSection === "home"
            ? "opacity-0 scale-95 blur-[1px]"
            : "opacity-100 scale-100 blur-0"
        }
      `}
    />
  </div>

  {/* TEXT NEXT TO LOGO */}
  <div className="leading-tight">
    <p
      className={`
        lg:text-[20px] transition-colors duration-500 font-extrabold italic text-sm
        ${
          activeSection === "home"
            ? "text-white"
            : "text-white/80"
        }
      `}
    >
      4K Building Materials L.L.C
    </p>

  </div>

</div>



          {/* ───── DESKTOP NAV ───── */}
          <nav className="hidden lg:flex items-center gap-6">
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
                className={`
                  text-[13px] uppercase tracking-widest transition-all duration-200 font-extralight 
                  ${
                    activeSection === item.id
                      ? "text-white font-light "
                      : "text-white/70 font-extralight hover:text-white"
                  }
                `}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* ───── HAMBURGER ───── */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden flex flex-col gap-[6px]"
          >
            <span className="w-6 h-[1.5px] bg-white"></span>
            <span className="w-6 h-[1.5px] bg-white"></span>
            <span className="w-6 h-[1.5px] bg-white"></span>
          </button>
        </div>

        {/* ───── MOBILE MENU ───── */}
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
                  className={`
                    text-sm uppercase tracking-widest transition
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
