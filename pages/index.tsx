import type { NextPage } from "next";
import Head from "next/head";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import UIShowcase from "@/components/UIShowcase";
import PillarsSection from "@/components/PillarsSection";
import TabbedTestimonial from "@/components/TabbedTestimonial";
import MapSection from "@/components/MapSection";
import OnPremSection from "@/components/OnPremSection";
import CTASection from "@/components/CTASection";

const HomePage: NextPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>SaveADay — Turn more enquiries into customers</title>
        <meta
          name="description"
          content="SaveADay keeps customer questions, follow-ups, bookings, and records together so your team always knows what needs attention next."
        />
      </Head>

      <Header />

      <main className="flex flex-col">
        <HeroSection />
        <HowItWorksSection />
        <UIShowcase />
        <PillarsSection />
        <TabbedTestimonial />
        <MapSection />
        <OnPremSection />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
