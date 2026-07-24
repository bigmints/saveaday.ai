"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";

const AUTH_URL = process.env.NODE_ENV === "development"
  ? "http://localhost:3010"
  : "https://app.saveaday.ai";

const navItems = [
  { label: "Why SaveADay", href: "/#why-saveaday", hasDropdown: false },
  { label: "For your business", href: "/#for-business", hasDropdown: false },
  { label: "For customers", href: "/#for-customers", hasDropdown: false },
  { label: "Private AI", href: "/#private-ai", hasDropdown: false },
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

  const headerBg = isScrolled ? "bg-black/95 backdrop-blur-md" : "bg-transparent";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}>
      <div className="mx-auto flex h-16 w-full max-w-[1400px] items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-12">
        <div className="flex items-center gap-10">
          <Link href="/" className="flex min-h-11 items-center gap-2.5 font-bold text-[13px] tracking-widest text-white transition-colors uppercase sm:gap-3 sm:text-sm" aria-label="SaveADay home">
            <Image src="/logo.svg" alt="" width={36} height={36} className="h-8 w-8 rounded-lg sm:h-9 sm:w-9 sm:rounded-xl" priority />
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
          <Link href="/contact/" className="text-[13px] text-white/90 hover:text-[#74EFC3] transition-colors">
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
          className="-mr-2 inline-flex h-11 w-11 items-center justify-center text-white lg:hidden"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label={isMobileOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isMobileOpen}
          aria-controls="mobile-navigation"
        >
          {isMobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isMobileOpen && (
        <nav id="mobile-navigation" aria-label="Mobile navigation" className="absolute left-0 top-full flex max-h-[calc(100svh-4rem)] w-full flex-col overflow-y-auto border-t border-white/10 bg-black/95 px-4 py-4 backdrop-blur-md lg:hidden">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex min-h-12 items-center justify-between border-b border-white/10 text-base text-white"
              onClick={() => setIsMobileOpen(false)}
            >
              {item.label}
              {item.hasDropdown && <ChevronDown className="w-5 h-5 text-white/50" />}
            </Link>
          ))}
          <div className="flex flex-col pt-3">
            <Link href="/contact/" className="flex min-h-12 items-center text-base text-white" onClick={() => setIsMobileOpen(false)}>Contact</Link>
            <Link href={AUTH_URL} className="flex min-h-12 items-center text-base text-white" onClick={() => setIsMobileOpen(false)}>Log in</Link>
            <Link
              href={`${AUTH_URL}/signup`}
              className="mt-3 inline-flex min-h-12 w-full items-center justify-center px-5 py-3 text-base font-medium bg-[#3CA6A6] text-[#082B2B]"
              onClick={() => setIsMobileOpen(false)}
            >
              Sign up
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
