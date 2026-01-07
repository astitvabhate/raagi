import Link from "next/link";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#f6f4ef] text-black/80">
      <div className="mx-auto max-w-7xl px-6 py-20">
        {/* GRID */}
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          
          {/* BRAND */}
          <div className="col-span-2 md:col-span-1">
            <img
              src="/logo/logo_footer.png"
              alt="Raagi"
              className="h-20 mb-2"
            />
            <p className="text-sm leading-relaxed max-w-xs">
              Raagi is a contemporary Indian wear label focused on comfort,
              craftsmanship, and timeless design.
            </p>
          </div>

          {/* SHOP */}
          <div>
            <h4 className="text-sm uppercase tracking-widest mb-4">
              Shop
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/products">All Products</Link></li>
              <li><Link href="/products?category=short-kurti">Short Kurtis</Link></li>
              <li><Link href="/products?category=kurta-set">Kurta Sets</Link></li>
            </ul>
          </div>

          {/* INFO */}
          <div>
            <h4 className="text-sm uppercase tracking-widest mb-4">
              Information
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/our-story">Our Story</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/shipping">Shipping & Returns</Link></li>
            </ul>
          </div>

          {/* SOCIAL */}
          <div>
            <h4 className="text-sm uppercase tracking-widest mb-4">
              Follow Us
            </h4>
            <div className="flex gap-4 text-lg">
              <a aria-label="Instagram"><FaInstagram /></a>
              <a aria-label="Facebook"><FaFacebookF /></a>
              <a aria-label="Twitter"><FaTwitter /></a>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="my-10 h-px bg-black/10" />

        {/* BOTTOM */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between text-xs text-black/60">
          <p>© {new Date().getFullYear()} Raagi. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
