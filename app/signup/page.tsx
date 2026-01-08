"use client";

import { useState } from "react";
import { supabase } from "@/lib/Supabase/supabaseClient";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }

    // User is already logged in (email confirmation OFF)
    if (data.session) {
      router.push("/");
    } else {
      // fallback (if email confirmation is ON later)
      alert("Account created. Please check your email.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f6f4ef] px-4">
      <motion.form
        onSubmit={handleSignup}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="w-full max-w-md bg-white border border-black/10 p-8 space-y-5"
      >
        <h1 className="text-xl uppercase tracking-widest text-center">
          Create Account
        </h1>

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
          placeholder="Password (min 6 characters)"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          minLength={6}
          className="w-full border border-black/20 px-4 py-3 text-sm outline-none focus:border-black"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-black text-white py-3 text-sm uppercase tracking-widest hover:opacity-90 transition"
        >
          {loading ? "Creating..." : "Create Account"}
        </button>

        <p className="text-xs text-center text-black/60">
          Already have an account?{" "}
          <Link href="/login" className="underline">
            Login
          </Link>
        </p>
      </motion.form>
    </div>
  );
}
