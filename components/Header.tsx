import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { APP_URL } from "@/lib/site";

const links = [["How it works", "/#how-it-works"], ["Business benefits", "/#for-business"], ["For your teams", "/#channels"], ["The experience", "/docs/"]];
export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => { const update = () => setScrolled(window.scrollY > 10); update(); window.addEventListener("scroll", update, { passive: true }); return () => window.removeEventListener("scroll", update); }, []);
  useEffect(() => { if (!open) return; const escape = (e: KeyboardEvent) => { if (e.key === "Escape") { setOpen(false); document.getElementById("navigation-toggle")?.focus(); } }; window.addEventListener("keydown", escape); return () => window.removeEventListener("keydown", escape); }, [open]);
  return <><a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-white focus:p-3 focus:text-black">Skip to content</a><header className={`fixed inset-x-0 top-0 z-50 transition-colors ${scrolled || open ? "bg-black/95 backdrop-blur-md" : "bg-black/30"}`}>
    <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-5 sm:px-8 lg:px-12">
      <Link href="/" aria-label="Saveaday home" className="flex items-center gap-3 text-sm font-bold tracking-[.16em] text-white"><Image src="/logo.svg" alt="" width={36} height={36} className="rounded-lg" priority /><span>SAVEADAY</span></Link>
      <nav aria-label="Primary navigation" className="hidden items-center gap-7 lg:flex">{links.map(([label, href]) => <Link key={label} href={href} className="text-sm text-white/80 hover:text-[#74EFC3]">{label}</Link>)}</nav>
      <div className="hidden items-center gap-6 lg:flex"><a href={APP_URL} className="text-sm text-white/90 hover:text-[#74EFC3]">Sign in</a><Link href="/contact/" className="bg-[#74EFC3] px-5 py-3 text-sm font-medium text-[#082B2B] hover:bg-white">Request a demo</Link></div>
      <button id="navigation-toggle" type="button" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)} className="flex size-12 items-center justify-center text-white lg:hidden">{open ? <X /> : <Menu />}</button>
    </div>
    {open && <nav id="mobile-navigation" aria-label="Mobile navigation" className="flex max-h-[calc(100svh-5rem)] flex-col overflow-y-auto border-t border-white/10 bg-black px-5 pb-6 lg:hidden">{links.map(([label, href]) => <Link key={label} href={href} onClick={() => setOpen(false)} className="py-4 text-white">{label}</Link>)}<a href={APP_URL} className="py-4 text-white">Sign in</a><Link href="/contact/" onClick={() => setOpen(false)} className="mt-3 bg-[#74EFC3] p-4 text-center font-medium text-[#082B2B]">Request a demo</Link></nav>}
  </header></>;
}
