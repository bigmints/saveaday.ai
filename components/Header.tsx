"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const AUTH_URL = process.env.NODE_ENV === "development"
  ? "http://localhost:3010"
  : "https://auth.saveaday.ai";

const APP_URL = process.env.NODE_ENV === "development"
  ? "http://localhost:3014"
  : "https://app.saveaday.ai";

const navItems = [
  { label: "Apps", href: "#apps" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "/pricing" },
  { label: "UBOT", href: "/ubot" },
];

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const hasSession = document.cookie.split(';').some(c => c.trim().startsWith('session='));
    setIsLoggedIn(hasSession);
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        isScrolled
          ? "border-border/60 bg-background/90 backdrop-blur-xl shadow-sm"
          : "border-transparent bg-background/60 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/logo-symbol.svg"
            alt="SaveADay"
            width={32}
            height={32}
            className="h-8 w-8 transition-transform group-hover:scale-110"
          />
          <span className="text-lg font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
            SaveADay
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Button key={item.label} variant="ghost" size="sm" className="text-sm font-medium" asChild>
              {item.href.startsWith("#") ? (
                <a href={item.href}>{item.label}</a>
              ) : (
                <Link href={item.href}>{item.label}</Link>
              )}
            </Button>
          ))}

          <div className="ml-3 h-5 w-px bg-border/60" />

          <div className="ml-3 flex items-center gap-2">
            {isLoggedIn ? (
              <Button
                size="sm"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg shadow-blue-500/25"
                asChild
              >
                <a href={`${APP_URL}/dashboard`}>Go to App</a>
              </Button>
            ) : (
              <>
                <Button variant="ghost" size="sm" className="text-sm" asChild>
                  <a href={`${AUTH_URL}/login`}>Log in</a>
                </Button>
                <Button
                  size="sm"
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg shadow-blue-500/25"
                  asChild
                >
                  <a href={`${AUTH_URL}/register`}>Start Free</a>
                </Button>
              </>
            )}
          </div>
        </nav>

        {/* Mobile menu button */}
        <Button
          variant="ghost"
          size="sm"
          className="md:hidden"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
        >
          {isMobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile nav */}
      {isMobileOpen && (
        <div className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-xl px-6 py-4 space-y-2">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href.startsWith("#") ? item.href : item.href}
              className="block py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMobileOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <div className="pt-3 border-t border-border/50 space-y-2">
            {isLoggedIn ? (
              <Button size="sm" className="w-full bg-gradient-to-r from-blue-600 to-indigo-600" asChild>
                <a href={`${APP_URL}/dashboard`}>Go to App</a>
              </Button>
            ) : (
              <>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <a href={`${AUTH_URL}/login`}>Log in</a>
                </Button>
                <Button size="sm" className="w-full bg-gradient-to-r from-blue-600 to-indigo-600" asChild>
                  <a href={`${AUTH_URL}/register`}>Start Free</a>
                </Button>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
