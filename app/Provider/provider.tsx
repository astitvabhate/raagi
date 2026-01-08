"use client";

import { supabase } from "@/lib/Supabase/supabaseClient";
import { useEffect } from "react";

export default function Providers() {
  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      console.log("AUTH EVENT:", event, session?.user?.email);
    });

    return () => subscription.unsubscribe();
  }, []);

  return null;
}
