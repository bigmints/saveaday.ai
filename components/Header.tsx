"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";

const AUTH_URL = process.env.NODE_ENV === "development"
  ? "http://localhost:3010"
  : "https://app.saveaday.ai";

const navItems = [
  { label: "Why SaveADay", href: "#why-saveaday", hasDropdown: false },
  { label: "For your business", href: "#for-business", hasDropdown: false },
  { label: "For customers", href: "#for-customers", hasDropdown: false },
  { label: "Private AI", href: "#private-ai", hasDropdown: false },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    setIsScrolled(window.scrollY > 10 || Boolean(window.location.hash));
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerBg = isScrolled ? "bg-black/90 backdrop-blur-md" : "bg-transparent";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}>
      <div className="mx-auto flex w-full max-w-[1400px] items-center justify-between px-6 lg:px-12 h-20">
        <div className="flex items-center gap-10">
          <Link href="/" className="flex items-center gap-3 font-bold text-sm tracking-widest text-white transition-colors uppercase" aria-label="SaveADay home">
            <Image src="/logo.svg" alt="" width={36} height={36} className="h-9 w-9 rounded-xl" priority />
            <span>SAVEADAY</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-6" aria-label="Primary navigation">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="flex items-center gap-1.5 text-[13px] text-white/90 hover:text-[#74EFC3] transition-colors"
              >
                {item.label}
                {item.hasDropdown && <ChevronDown className="w-3.5 h-3.5 opacity-60" />}
              </Link>
            ))}
          </nav>
        </div>

        <div className="hidden lg:flex items-center gap-6">
          <Link href="mailto:hello@saveaday.ai" className="text-[13px] text-white/90 hover:text-[#74EFC3] transition-colors">
            Contact
          </Link>
          <Link href={AUTH_URL} className="text-[13px] text-white/90 hover:text-[#74EFC3] transition-colors">
            Log in
          </Link>
          <Link
            href={`${AUTH_URL}/signup`}
            className="px-4 py-2 text-[13px] font-medium bg-[#3CA6A6] text-[#082B2B] hover:bg-[#74EFC3] transition-colors"
          >
            Sign up
          </Link>
        </div>

        <button
          type="button"
          className="lg:hidden text-white"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label={isMobileOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isMobileOpen}
        >
          {isMobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isMobileOpen && (
        <nav aria-label="Mobile navigation" className="absolute top-full left-0 w-full bg-black border-t border-white/10 px-6 py-6 flex flex-col gap-6 lg:hidden">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-lg text-white flex justify-between items-center"
              onClick={() => setIsMobileOpen(false)}
            >
              {item.label}
              {item.hasDropdown && <ChevronDown className="w-5 h-5 text-white/50" />}
            </Link>
          ))}
          <div className="h-px bg-white/10 my-2" />
          <div className="flex flex-col gap-4">
            <Link href="mailto:hello@saveaday.ai" className="text-lg text-white">Contact</Link>
            <Link href={AUTH_URL} className="text-lg text-white">Log in</Link>
            <Link
              href={`${AUTH_URL}/signup`}
              className="w-full text-center px-5 py-3 text-lg font-medium bg-[#3CA6A6] text-[#082B2B]"
            >
              Sign up
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
