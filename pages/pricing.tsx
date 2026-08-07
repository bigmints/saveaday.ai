import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

const plans = [
  {
    name: "Starter",
    price: "Free",
    description: "For a small business putting customer work in one clear place.",
    points: "100 monthly AI points",
    outcomes: [
      "Keep customer details and activity together",
      "Publish your first catalogue, lead form, and booking flow",
      "Start without a card or monthly fee",
    ],
    action: "Start free",
    href: "https://app.saveaday.ai/signup",
  },
  {
    name: "Plus",
    price: "AED 249",
    suffix: "/month",
    description: "For a growing business handling more customers and day-to-day activity.",
    points: "2,000 monthly AI points",
    outcomes: [
      "More room for customer enquiries and bookings",
      "More capacity as your business gets busier",
      "The same customer, booking, form, and catalogue tools",
    ],
    action: "Talk to us",
    href: "/contact/",
    featured: true,
  },
  {
    name: "Pro",
    price: "AED 499",
    suffix: "/month",
    description: "For established teams that need the highest standard SaveADay capacity.",
    points: "5,000 monthly AI points",
    outcomes: [
      "The highest capacity in the standard plan range",
      "More room for a busy team and customer operation",
      "The same customer, booking, form, and catalogue tools",
    ],
    action: "Talk to us",
    href: "/contact/",
  },
];

const PricingPage: NextPage = () => {
  return (
    <div className="min-h-screen bg-[#f7faf9] text-[#18332f]">
      <Head>
        <title>SaveADay pricing</title>
        <meta
          name="description"
          content="Start SaveADay for free, then choose more capacity as your customer activity and team grow."
        />
        <link rel="canonical" href="https://www.saveaday.ai/pricing/" />
      </Head>

      <Header />

      <main>
        <section className="bg-[#071c1a] px-4 pb-16 pt-32 text-white sm:px-6 sm:pb-20 sm:pt-36 lg:px-12">
          <div className="mx-auto max-w-[1200px] text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#74EFC3]">Plans for each stage</p>
            <h1 className="mx-auto mt-5 max-w-4xl font-serif text-[44px] leading-[1.06] tracking-[-0.025em] sm:text-6xl">
              Start free. Add more capacity as your business grows.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-7 text-white/70 sm:text-base">
              Every plan includes the main SaveADay tools for handling customers, bookings, forms, and catalogues. Choose based on how busy your business is and how much AI help you want.
            </p>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-12">
          <div className="mx-auto grid max-w-[1200px] gap-5 lg:grid-cols-3 lg:gap-6">
            {plans.map((plan) => (
              <article
                key={plan.name}
                className={`flex flex-col rounded-2xl border bg-white p-6 sm:p-8 ${plan.featured ? "border-[#3CA6A6] shadow-[0_24px_60px_-38px_rgba(15,64,55,0.4)]" : "border-[#dfe9e6]"}`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="font-serif text-3xl text-[#143a34]">{plan.name}</h2>
                    <p className="mt-3 text-sm leading-6 text-[#647672]">{plan.description}</p>
                  </div>
                  {plan.featured ? <span className="rounded-full bg-[#74EFC3]/30 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#176c64]">Growing</span> : null}
                </div>

                <div className="mt-8 border-y border-[#e3ece9] py-6">
                  <p className="font-serif text-4xl text-[#102d28]">
                    {plan.price} {plan.suffix ? <span className="font-sans text-sm text-[#78908b]">{plan.suffix}</span> : null}
                  </p>
                  <p className="mt-2 text-xs text-[#78908b]">{plan.points}</p>
                </div>

                <ul className="mt-7 space-y-4">
                  {plan.outcomes.map((outcome) => (
                    <li key={outcome} className="flex gap-3 text-sm leading-6 text-[#46625d]">
                      <Check className="mt-1 h-4 w-4 shrink-0 text-[#3CA6A6]" />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={plan.href}
                  className={`mt-8 inline-flex min-h-12 items-center justify-center gap-2 px-5 py-3 text-sm font-semibold transition ${plan.featured ? "bg-[#3CA6A6] text-[#082B2B] hover:bg-[#74EFC3]" : "border border-[#b9d5d0] text-[#176c64] hover:border-[#3CA6A6] hover:bg-[#edf8f5]"}`}
                >
                  {plan.action} <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>

          <div className="mx-auto mt-10 max-w-[1200px] rounded-2xl bg-[#0c2d29] px-6 py-8 text-white sm:flex sm:items-center sm:justify-between sm:px-8">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#74EFC3]">Need a different setup?</p>
              <h2 className="mt-3 font-serif text-3xl">Talk to us about enterprise and private deployment.</h2>
              <p className="mt-3 text-sm leading-6 text-white/65">We can discuss higher capacity, a specific support commitment, or AI infrastructure managed by your organization.</p>
            </div>
            <Link href="/contact/" className="mt-6 inline-flex min-h-12 items-center gap-2 text-sm font-semibold text-[#74EFC3] sm:mt-0">
              Contact us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <p className="mx-auto mt-6 max-w-[1200px] text-xs leading-5 text-[#78908b]">
            AI points are used when SaveADay provides AI help. Paid prices are monthly and exclude VAT. Current limits and allowances are shown before a business changes plan.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PricingPage;
