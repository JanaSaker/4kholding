import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import in2info from "../assets/in2info-logo-white1.png";
import worldMap from "../assets/";
import logo4k from '../assets/4klogo.png'

/* ================== BRANCH DATA ================== */
const branches = [
  {
    country: "Oman",
    address:
      "Store 01, Plot 443, Al Wasit Industrial Estate, Barka State - Sultanate of Oman",
    phone: "+968 9924 2594",
    mapLink:
      "https://www.google.com/maps/place/Four+K+Building+Materials+LLC+(Oman+-+Barka)/@22681279,57.8557128,17z",
    top: "64%",
    left: "67%",
  },
  {
    country: "Dubai",
    address:
      "4K EM Wood Manufacturing L.L.C. Dubai Industrial City, Phase 1, Warehouse No L-10, UAE",
    phone: "+971 4 430 2687",
    mapLink:
      "https://www.google.com/maps/place/Four+K+Building+Materials+LLC/@24.844649,55.074904,14z",
    top: "59%",
    left: "70%",
  },
  {
    country: "Abu Dhabi",
    address: "Four K Building Materials, Abu Dhabi, UAE",
    phone: "+971 4 000 0002",
    mapLink:
      "https://www.google.com/maps/search/?api=1&query=Four+K+Building+Materials+Abu+Dhabi",
    top: "73%",
    left: "60%",
  },
  {
    country: "Qatar",
    address:
      "4K Qatar W.L.L, Industrial Area, Street 50, Zone 57, Building 74, Doha, Qatar",
    phone: "+974 4416 1870",
    mapLink:
      "https://www.google.com/maps/search/?api=1&query=Four+K+Building+Materials+Qatar",
    top: "50%",
    left: "63%",
  },
  {
    country: "KSA – Dammam",
    address:
      "4K Building Materials L.L.C, Salman Al Farisi Street, Dammam, KSA",
    phone: "+966 13 830 3175",
    mapLink: "https://maps.app.goo.gl/dFrchPsF9QFbgceh7",
    top: "53%",
    left: "58%",
  },
  {
    country: "KSA – Riyadh",
    address:
      "4K Building Materials L.L.C, Warehouse #445, Prince Mohammed Bin Abdulrahman, Riyadh, KSA",
    phone: "+966 13 830 3175",
    mapLink:
      "https://www.google.com/maps/place/4K+Building+Materials+-+Riyadh/@24.6084571,46.8565961,17z",
    top: "61%",
    left: "56%",
  },
  {
    country: "Bahrain – Tubli",
    address:
      "4K Building Materials Co W.L.L, Building 283, Road 13, Block 701, Tubli, Bahrain",
    phone: "+973 1770 4706",
    mapLink: "https://maps.app.goo.gl/VwanBgLdwtFwo6Fs6",
    top: "54%",
    left: "59%",
  },
  {
    country: "Bahrain – Hidd",
    address:
      "4K Bahrain Manufacturing W.L.L, Flat 29, Building 2639, Road 1537, Block 1150, Hidd, Bahrain",
    phone: "+973 1725 4702",
    mapLink: "https://maps.app.goo.gl/NqfDZErLd9dUYcvA8",
    top: "55%",
    left: "60%",
  },
];

/* ================== FOOTER ================== */
const Footer = () => {
  return (
    <footer className="w-full">
      <div className="bg-gradient-to-r from-[#0f1a1c] to-[#1c2a2e] text-white">

        {/* MAIN FOOTER */}
        <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* COLUMN 1 */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold tracking-wide">
              < img alt="4K Holding Logo"
              src={logo4k}
              className="w-20 h-30"/>
            </h2>
            <p className="text-sm text-white/60 max-w-xs">
4K Building Materials is in a unique position with a complete and exclusive range of premium high end products for the woodworking and aluminum joineries.
</p>
            <div className="flex gap-4 pt-4">
              <a
                href="https://www.facebook.com/4kholding"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center border border-white/30 rounded-full hover:bg-white hover:text-black transition"
              >
                <FaFacebookF size={14} />
              </a>

              <a
                href="https://www.instagram.com/4kholding/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center border border-white/30 rounded-full hover:bg-white hover:text-black transition"
              >
                <FaInstagram size={14} />
              </a>
            </div>
          </div>

          {/* COLUMN 2 */}
          <div>
            <h3 className="text-lg mb-6">Company</h3>
            <ul className="space-y-3 text-sm text-white/70">
              <li><a href="#home" className="hover:text-white">Home</a></li>
              <li><a href="#about" className="hover:text-white">About Us</a></li>
              <li><a href="#branches" className="hover:text-white">Our Branches</a></li>
              <li><a href="#journey" className="hover:text-white">The Journey</a></li>
              <li><a href="#contact" className="hover:text-white">Contact Us</a></li>
            </ul>
          </div>

          {/* COLUMN 3 */}
          <div>
            <h3 className="text-lg mb-6">Branches</h3>
            <ul className="space-y-3 text-sm text-white/70">
              {branches.map((b, i) => (
                <li key={i}>{b.country}</li>
              ))}
            </ul>
          </div>

          {/* COLUMN 4 — MAP */}
          <div className="relative">
            <h3 className="text-lg mb-6">Where can you find us?</h3>

            <div className="relative w-full h-[220px]">
              <img
                src={worldMap}
                alt="Middle East Map"
                className="absolute inset-0 w-full h-full object-contain opacity-70"
              />

              {branches.map((branch, index) => (
                <a
                  key={index}
                  href={branch.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group absolute"
                  style={{ top: branch.top, left: branch.left }}
                >
                  {/* PIN */}
                  <span
                    className="block w-[7px] h-[8px] rounded-full bg-yellow-400
                               -translate-x-1/2 -translate-y-1/2
                               motion-safe:animate-ping-slow"
                  />

                  {/* TOOLTIP */}
                  <div
                    className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2
                               w-64 bg-black/90 text-white text-xs
                               rounded-lg p-3 opacity-0 scale-95
                               group-hover:opacity-100 group-hover:scale-100
                               transition-all duration-200 z-50"
                  >
                    <p className="font-semibold mb-1">{branch.country}</p>
                    <p className="text-white/80 mb-1">{branch.address}</p>
                    <p className="text-yellow-400">{branch.phone}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between gap-3 text-xs text-white/60">
            <span>© 2026 4K Holding. All Rights Reserved.</span>

            <span className="flex items-center gap-2">
              <span>SITE MANAGER V4.0 —</span>
              <a
                href="https://in2info.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition"
              >
                <img src={in2info} className="w-[70px]" alt="In2Info" />
              </a>
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
