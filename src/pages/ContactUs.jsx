import React from "react";
import second from "../assets/transfer/1.1-02.png";

const ContactUs = () => {
  return (
    <section
      id="contact"
      className=" relative bg-cover bg-center bg-fixed bg-no-repeat h-[600px]"
      style={{ backgroundImage: `url(${second})` }}
    >
      <div className="absolute inset-0 bg-black/40 z-0" />

      <div className="relative z-10 max-w-7xl lg:mx-auto py-20 px-5 text-white">
        <div className="flex flex-col md:flex-row gap-16">

          <div className="md:w-1/2">
            <h2 className="text-3xl font-light mb-10">
              Let’s get in touch
            </h2>

            <form className="space-y-8">

              <div>
                <label className="block text-sm ">Full Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-transparent border-b border-gray-300 placeholder-white/60 focus:outline-none focus:border-white py-2"
                />
              </div>

              <div>
                <label className="block text-sm ">Telephone Number</label>
                <input
                  type="tel"
                  placeholder="+971 50 123 4567"
                  className="w-full bg-transparent border-b border-gray-300 placeholder-white/60 focus:outline-none focus:border-white py-2"
                />
              </div>

              <div>
                <label className="block text-sm ">Message Title</label>
                <input
                  type="text"
                  placeholder="Request for product information"
                  className="w-full bg-transparent border-b border-gray-300 placeholder-white/60 focus:outline-none focus:border-white py-2"
                />
              </div>

              <div>
                <label className="block text-sm ">Message</label>
                <textarea
                  rows="4"
                  placeholder="Please provide more details about your products and pricing."
                  className="w-full bg-transparent border-b border-gray-300 placeholder-white/60 focus:outline-none focus:border-white py-2 resize-none"
                />
              </div>
            </form>
          </div>

          <div className="md:w-1/2 py-[75px]">


            <div className="space-y-8">

              <div>
                <label className="block text-sm ">Email</label>
                <input
                  type="email"
                  placeholder="example@company.com"
                  className="w-full bg-transparent border-b border-gray-300 placeholder-white/60 focus:outline-none focus:border-white py-2"
                />
              </div>

              <div>
                <label className="block text-sm ">Company</label>
                <input
                  type="text"
                  placeholder="ABC Building Materials LLC"
                  className="w-full bg-transparent border-b border-gray-300 placeholder-white/60 focus:outline-none focus:border-white py-2"
                />
              </div>

              <div>
                <label className="block text-sm ">Country of Interest</label>
                <input
                  type="text"
                  placeholder="United Arab Emirates"
                  className="w-full bg-transparent border-b border-gray-300 placeholder-white/60 focus:outline-none focus:border-white py-2"
                />
              </div>

              <button
                type="submit"
                className="mt-10 px-10 py-3 border border-white rounded-full text-sm tracking-wide hover:bg-white hover:text-black transition"
              >
                Send Message
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactUs;
