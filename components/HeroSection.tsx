import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
export default function HeroSection() {
  return <section className="relative flex min-h-[90svh] items-center overflow-hidden bg-[#111] pt-20">
    <div className="absolute inset-0 bg-cover bg-[position:58%_center] sm:bg-center" style={{ backgroundImage: "url('/images/hero_bg.jpg')" }} />
    <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/75 to-black/25" />
    <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/30" />
    <div className="relative mx-auto w-full max-w-[1400px] px-5 py-20 sm:px-8 lg:px-12"><div className="max-w-[680px]">
      <p className="mb-6 text-xs font-semibold uppercase tracking-[.2em] text-[#f69a39]">Make every day work better.</p>
      <h1 className="font-serif text-[clamp(3.3rem,8vw,5.5rem)] leading-[1.04] tracking-[-.035em] text-white">Less busywork.<br /><em className="brand-highlight font-normal">Better business.</em></h1>
      <p className="mt-7 max-w-[520px] text-base leading-8 text-white/80 sm:text-lg">When someone needs you, be there. Saveaday helps with the questions, bookings and follow-ups that fill your day.</p>
      <div className="mt-9 flex flex-col gap-4 sm:flex-row"><Link href="/contact/" className="inline-flex min-h-12 items-center justify-center gap-5 bg-[#f69a39] px-7 py-4 text-sm font-semibold text-[#261d2c] hover:bg-white">Request a demo <ArrowUpRight size={18} /></Link><a href="#use-cases" className="inline-flex min-h-12 items-center justify-center border border-white/30 px-7 py-4 text-sm text-white hover:border-[#f69a39]">See it in action</a></div>
      <p className="mt-8 text-xs tracking-wide text-white/55">Less chasing details. More time for people.</p>
    </div></div>
  </section>;
}
