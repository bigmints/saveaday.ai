import type { NextPage } from "next";
import Head from "next/head";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
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
        <title>SaveADay — More customers. Less chasing.</title>
        <meta
          name="description"
          content="SaveADay helps every customer enquiry move forward while giving your team back the time usually lost to admin and follow-up."
        />
      </Head>

      <Header />

      <main className="flex flex-col">
        <HeroSection />
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
