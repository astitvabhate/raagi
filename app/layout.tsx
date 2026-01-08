import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import { Amita, Great_Vibes } from "next/font/google";
import Footer from "@/components/footer/Footer";
import Providers from "./Provider/provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: " Raagi - रागी",
  description: "Welcome to Raagi - Embrace Tradition with Style",
  icons: {
    icon: "/logo/image.png",
  }
};
const amita = Amita({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-amita",
  display: "swap",
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-great-vibes",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Navbar />
      <body
        className={`${amita.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Providers />
        {children}  
        <Footer />
      </body>
    </html>
  );
}
