import React from "react";
import second from "../assets/transfer/1.1-02.png";

const ContactUs = () => {
  return (
    <section
      id="contact"
      className="relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${second})` }}
    >
      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/40 z-0" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto py-16 md:py-20 px-5 text-white">
        <div className="flex flex-col md:flex-row gap-14 md:gap-16">

          {/* LEFT — FORM PART 1 */}
          <div className="md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-light mb-8 md:mb-10">
              Let’s get in touch
            </h2>

            <form className="space-y-6 md:space-y-8">

              <div>
                <label className="block text-sm mb-1">Full Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-transparent border-b border-white/50 placeholder-white/60 focus:outline-none focus:border-white py-2"
                />
              </div>

              <div>
                <label className="block text-sm mb-1">Telephone Number</label>
                <input
                  type="tel"
                  placeholder="+971 50 123 4567"
                  className="w-full bg-transparent border-b border-white/50 placeholder-white/60 focus:outline-none focus:border-white py-2"
                />
              </div>

              <div>
                <label className="block text-sm mb-1">Message Title</label>
                <input
                  type="text"
                  placeholder="Request for product information"
                  className="w-full bg-transparent border-b border-white/50 placeholder-white/60 focus:outline-none focus:border-white py-2"
                />
              </div>

              <div>
                <label className="block text-sm mb-1">Message</label>
                <textarea
                  rows="4"
                  placeholder="Please provide more details about your products and pricing."
                  className="w-full bg-transparent border-b border-white/50 placeholder-white/60 focus:outline-none focus:border-white py-2 resize-none"
                />
              </div>
            </form>
          </div>

          {/* RIGHT — FORM PART 2 */}
          <div className="md:w-1/2 flex flex-col justify-center">

            <div className="space-y-6 md:space-y-8">

              <div>
                <label className="block text-sm mb-1">Email</label>
                <input
                  type="email"
                  placeholder="example@company.com"
                  className="w-full bg-transparent border-b border-white/50 placeholder-white/60 focus:outline-none focus:border-white py-2"
                />
              </div>

              <div>
                <label className="block text-sm mb-1">Company</label>
                <input
                  type="text"
                  placeholder="ABC Building Materials LLC"
                  className="w-full bg-transparent border-b border-white/50 placeholder-white/60 focus:outline-none focus:border-white py-2"
                />
              </div>

              <div>
                <label className="block text-sm mb-1">Country of Interest</label>
                <input
                  type="text"
                  placeholder="United Arab Emirates"
                  className="w-full bg-transparent border-b border-white/50 placeholder-white/60 focus:outline-none focus:border-white py-2"
                />
              </div>

              {/* BUTTON */}
              <div className="pt-6 md:pt-10 flex justify-center md:justify-start">
                <button
                  type="submit"
                  className="px-10 py-3 border border-white rounded-full text-sm tracking-wide hover:bg-white hover:text-black transition"
                >
                  Send Message
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactUs;
