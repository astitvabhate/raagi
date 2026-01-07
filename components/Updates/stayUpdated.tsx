"use client";

import { FaInstagram, FaWhatsapp } from "react-icons/fa";
export default function StayUpdated() {
  return (
    <section className="bg-amber-50 py-16">
      <div className="max-w-xl mx-auto text-center px-2">
        
        {/* Heading */}
        <h1 className="text-[#7a3b18] text-3xl md:text-4xl font-semibold tracking-wide">
          Stay Updated With Us
        </h1>

        <p className="mt-3 text-sm text-[#7a3b18]/70">
          Handcrafted stories, new collections & timeless traditions.
        </p>

        {/* Subscribe Box */}
        <div className="mt-10 border border-[#7a3b18]/40 rounded-lg bg-white px-6 py-8 shadow-sm">
          <form className="flex items-center gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="
                flex-1
                px-4
                py-2.5
                border-b
                border-[#7a3b18]/50
                bg-transparent
                text-sm
                focus:outline-none
                focus:border-[#7a3b18]
                placeholder:text-[#7a3b18]/50
              "
            />
            <button
              type="submit"
              className="
                text-sm
                px-5
                py-2.5
                border
                border-[#7a3b18]
                text-[#7a3b18]
                hover:bg-[#7a3b18]
                hover:text-white
                transition
                rounded-md
              "
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Divider */}
        <div className="mt-10 flex items-center justify-center gap-4 text-[#7a3b18]/40 text-xs">
          <span className="h-px w-12 bg-[#7a3b18]/40" />
          connect with us
          <span className="h-px w-12 bg-[#7a3b18]/40" />
        </div>

        {/* Social Links */}
        <div className="mt-6 flex justify-center gap-10 text-sm">
          <a
            href="https://instagram.com/raagi.idr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#7a3b18] hover:opacity-70 transition"
          >
            <div className="flex items-center gap-2">
                <FaInstagram /> 
                Instagram
            </div>
          </a>

          <a
            href="https://wa.me/919111838314"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#7a3b18] hover:opacity-70 transition"
          >
            <div className="flex items-center gap-2">
                <FaWhatsapp />
                WhatsApp
            </div>
          </a>
        </div>

      </div>
    </section>
  );
}
