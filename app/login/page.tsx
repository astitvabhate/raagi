"use client";

import { useState } from "react";
import { supabase } from "@/lib/Supabase/supabaseClient";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { BsPersonFill } from "react-icons/bs";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }

    router.push("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f6f4ef] px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="w-full max-w-md bg-white border border-black/10 p-8"
      >
        {/* Header */}
        <div className="flex flex-col items-center gap-3 mb-8">
          <div className="h-12 w-12 rounded-full bg-black text-white flex items-center justify-center">
            <BsPersonFill size={20} />
          </div>
          <h1 className="text-xl uppercase tracking-wide">
            Welcome Back
          </h1>
          <p className="text-xs text-black/60 tracking-wide text-center">
            Login to continue shopping with Raagi
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full border border-black/20 px-4 py-3 text-sm outline-none focus:border-black"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full border border-black/20 px-4 py-3 text-sm outline-none focus:border-black"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black text-white py-3 text-sm uppercase tracking-widest hover:opacity-90 transition"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* Footer */}
        <div className="mt-6 text-center text-xs text-black/60">
          Don’t have an account?{" "}
          <Link href="/signup" className="underline hover:opacity-80">
            Create one
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
