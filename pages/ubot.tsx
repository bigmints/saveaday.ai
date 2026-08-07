import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { ArrowRight, Building2, Check, ShieldCheck, UsersRound } from "lucide-react";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

const benefits = [
  {
    title: "Your organization controls the AI",
    description: "Your technical team chooses where the AI runs, which model is used, and who can access it.",
    icon: ShieldCheck,
  },
  {
    title: "Your team keeps a simple workspace",
    description: "Employees continue using SaveADay to manage customers, bookings, follow-ups, and daily work.",
    icon: UsersRound,
  },
  {
    title: "Your customers get the same clear experience",
    description: "Customers can still ask questions and take the next step without needing to understand the technology behind it.",
    icon: Building2,
  },
];

const PrivateDeploymentPage: NextPage = () => {
  return (
    <div className="min-h-screen bg-[#f7faf9] text-[#18332f]">
      <Head>
        <title>Private AI deployment | SaveADay</title>
        <meta
          name="description"
          content="Use SaveADay with AI infrastructure managed by your organization while keeping the experience simple for employees and customers."
        />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://www.saveaday.ai/" />
      </Head>

      <Header />

      <main>
        <section className="bg-[#071c1a] px-4 pb-16 pt-32 text-white sm:px-6 sm:pb-20 sm:pt-36 lg:px-12">
          <div className="mx-auto max-w-[1200px]">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#74EFC3]">Private deployment</p>
            <h1 className="mt-5 max-w-4xl font-serif text-[44px] leading-[1.06] tracking-[-0.025em] sm:text-6xl">
              Use SaveADay with AI your organization controls.
            </h1>
            <p className="mt-6 max-w-2xl text-[15px] leading-7 text-white/70 sm:text-base">
              SaveADay can connect to an AI model running on systems your organization manages. Your technical team stays in control while employees and customers continue using the same simple SaveADay experience.
            </p>
            <Link href="/contact/" className="mt-8 inline-flex min-h-12 items-center gap-2 bg-[#3CA6A6] px-6 py-3 text-sm font-semibold text-[#082B2B] transition hover:bg-[#74EFC3]">
              Talk to us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-12">
          <div className="mx-auto max-w-[1200px]">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#168c7f]">What stays simple</p>
              <h2 className="mt-4 font-serif text-4xl leading-tight text-[#143a34] sm:text-5xl">More control behind the scenes. The same clear experience for people.</h2>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3 md:gap-6">
              {benefits.map(({ title, description, icon: Icon }) => (
                <article key={title} className="rounded-2xl border border-[#dfe9e6] bg-white p-6 sm:p-8">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#e5f5f0] text-[#147d72]"><Icon className="h-5 w-5" /></span>
                  <h3 className="mt-8 font-serif text-2xl leading-tight text-[#143a34]">{title}</h3>
                  <p className="mt-4 text-sm leading-6 text-[#647672]">{description}</p>
                </article>
              ))}
            </div>

            <div className="mt-12 grid gap-8 rounded-2xl bg-white p-6 sm:p-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:p-10">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#168c7f]">A good fit when</p>
                <h2 className="mt-4 font-serif text-3xl text-[#143a34]">Your organization has specific control requirements.</h2>
              </div>
              <ul className="space-y-4">
                {["Your technical team already manages approved AI infrastructure", "You need control over model access and operation", "You want that control without making SaveADay harder for everyday users"].map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-6 text-[#46625d]"><Check className="mt-1 h-4 w-4 shrink-0 text-[#3CA6A6]" />{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PrivateDeploymentPage;
