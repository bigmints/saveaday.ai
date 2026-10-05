import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
export default function HeroSection() {
  return <section className="relative flex min-h-[90svh] items-center overflow-hidden bg-[#111] pt-20">
    <div className="absolute inset-0 bg-cover bg-[position:58%_center] sm:bg-center" style={{ backgroundImage: "url('/images/hero_bg.jpg')" }} />
    <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/75 to-black/25" />
    <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/30" />
    <div className="relative mx-auto w-full max-w-[1400px] px-5 py-24 sm:px-8 lg:px-12"><div className="max-w-[680px]">
      <p className="mb-6 text-xs font-semibold uppercase tracking-[.2em] text-[#74EFC3]">For businesses with teams on the ground.</p>
      <h1 className="font-serif text-[clamp(3.3rem,8vw,5.5rem)] leading-[1.04] tracking-[-.035em] text-white">Keep your business<br /><em className="font-normal text-[#74EFC3]">moving.</em></h1>
      <p className="mt-7 max-w-[520px] text-base leading-8 text-white/80 sm:text-lg">Give your teams a simple way to report problems, and your managers a clear view of what needs attention. Less time chasing details. More time running the business.</p>
      <div className="mt-9 flex flex-col gap-4 sm:flex-row"><Link href="/contact/" className="inline-flex min-h-12 items-center justify-center gap-5 bg-[#74EFC3] px-7 py-4 text-sm font-semibold text-[#082B2B] hover:bg-white">Request a demo <ArrowUpRight size={18} /></Link><a href="#how-it-works" className="inline-flex min-h-12 items-center justify-center border border-white/30 px-7 py-4 text-sm text-white hover:border-[#74EFC3]">See how it works</a></div>
      <p className="mt-8 text-xs tracking-wide text-white/55">Clearer communication · Better visibility · Less follow-up</p>
    </div></div>
  </section>;
}
