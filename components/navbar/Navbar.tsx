"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseSharp } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { BsPersonFill } from "react-icons/bs";
import { IoMdCart } from "react-icons/io";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { useAuth } from "@/lib/auth/useAuth";
import { supabase } from "@/lib/Supabase/supabaseClient";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const { user, loading } = useAuth();
  const router = useRouter();

  const handleUserClick = async () => {
    if (!user) {
      router.push("/login");
    } else {
      await supabase.auth.signOut();
      router.push("/");
    }
  };

  useEffect(() => {
    const onScroll = () => {
      setDarkMode(window.scrollY < 80);
    };

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (loading) return null;

  return (
    <>
      {/* NAVBAR */}
      <div
        className={`
          fixed top-0 z-50 w-full transition-colors duration-300
          ${darkMode ? "bg-transparent text-white" : "bg-[#490605] text-white border-b border-black/10"}
        `}
      >
        <nav className="mx-auto max-w-7xl px-6">
          <div className="relative flex h-14 items-center justify-between text-[11px] uppercase tracking-[0.25em]">
            
            {/* LEFT */}
            <div className="hidden md:flex gap-8 text-sm items-center">
              <Link href="/">Home</Link>
              <Link href="/products">Products</Link>
              <Link href="/our-story">Our Story</Link>
            </div>

            {/* LOGO */}
            <div className="absolute left-1/2 -translate-x-1/2">
              <img
                src="/logo/bindi_raagi.png"
                alt="Raagi"
                className="h-40 pt-2 w-auto object-contain pb-3"
              />
            </div>

            {/* RIGHT */}
            <div className="hidden md:flex gap-8 items-center text-lg">
              <button className="hover:opacity-60 transition"><FaSearch /></button>

              <button
                onClick={handleUserClick}
                className="hover:opacity-60 transition"
                title={user ? "Logout" : "Login"}
              >
                <BsPersonFill />
              </button>

              <button className="hover:opacity-60 transition">
                <IoMdCart />
              </button>
            </div>

            {/* MOBILE */}
            <div className="flex md:hidden w-full justify-between items-center">
              <button onClick={() => setOpen(true)}>
                <RxHamburgerMenu size={18} />
              </button>

              <div className="flex gap-4 items-center">
                <IoMdCart size={18} />
                <button onClick={handleUserClick}>
                  <BsPersonFill size={18} />
                </button>
              </div>
            </div>

          </div>
        </nav>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[100] bg-[#f6f4ef] flex flex-col text-black"
          >
            <div className="flex items-center justify-between px-6 h-16 border-b border-black/10">
              <span className="text-lg">रागी</span>
              <button onClick={() => setOpen(false)}>
                <IoCloseSharp size={20} />
              </button>
            </div>

            <div className="flex flex-col items-center justify-center flex-1 gap-10 text-sm uppercase tracking-[0.35em]">
              {[
                { label: "Home", href: "/" },
                { label: "Products", href: "/products" },
                { label: "Our Story", href: "/our-story" },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="hover:opacity-60 transition"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
