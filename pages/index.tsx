import type { NextPage } from "next";
import Head from "next/head";

import AutomationFlows from "@/components/AutomationFlows";
import MetricsSection from "@/components/MetricsSection";
import AISection from "@/components/AISection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Section from "@/components/Section";
import ChatSection from "@/components/ChatSection";
import ProblemSection from "@/components/ProblemSection";
import IntegrationsSection from "@/components/IntegrationsSection";
import AudienceSection from "@/components/AudienceSection";
import AppsSection from "@/components/AppsSection";

const HomePage: NextPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Head>
        <title>SaveADay — Agentic Customer Lifetime Value Platform</title>
        <meta
          name="description"
          content="SaveADay is a suite of 12+ AI-powered business apps that attract leads, convert bookings, nurture relationships, and reward loyalty — all working together, all manageable through a simple chat."
        />
      </Head>

      <Header />
      <HeroSection />

      <main className="space-y-0">
        {/* Section 2: Chat Interface */}
        <Section
          id="chat"
          eyebrow="Just chat"
          title="Run your entire business from a conversation"
        >
          <ChatSection />
        </Section>

        {/* Section 3: The Problem */}
        <div className="bg-muted/20">
          <Section
            id="problem"
            eyebrow="Why SaveADay exists"
            title="Your CRM tracks records. SaveADay grows your business."
          >
            <ProblemSection />
          </Section>
        </div>

        {/* Section 4: Customer Journey Flows */}
        <Section
          id="how-it-works"
          eyebrow="See it in action"
          title="One platform. Every stage of the customer journey."
          description="See how SaveADay apps hand off to each other — so you can focus on your customers, not your software."
        >
          <AutomationFlows />
        </Section>

        {/* Section 5: Integrations */}
        <div className="bg-muted/20">
          <Section
            id="integrations"
            eyebrow="No rip-and-replace"
            title="Keep your existing systems. Add superpowers."
          >
            <IntegrationsSection />
          </Section>
        </div>

        {/* Section 6: Who It's For */}
        <Section
          id="audience"
          eyebrow="Built for businesses that grow"
          title="From solo shops to enterprise teams."
        >
          <AudienceSection />
        </Section>

        {/* Section 7: The Apps */}
        <div className="bg-muted/20">
          <Section
            id="apps"
            eyebrow="12+ apps, one ecosystem"
            title="Every app your business needs. Zero setup headaches."
            description="Each app does one job brilliantly and works with every other app out of the box. No integrations to configure. No data to copy between systems."
          >
            <AppsSection />
          </Section>
        </div>

        {/* Section 8: Human + AI */}
        <Section
          id="ai"
          eyebrow="Human + AI"
          title="You decide. SaveADay delivers."
          description="SaveADay's AI doesn't just follow steps — it understands what you need and acts across your apps. You stay in control of the what. AI takes care of the how."
        >
          <AISection />
        </Section>

        {/* Section 9: Metrics */}
        <div className="bg-muted/20">
          <Section
            id="metrics"
            eyebrow="Built to show results"
            title="Know exactly how your business is growing."
          >
            <MetricsSection />
          </Section>
        </div>

        {/* Section 10: CTA */}
        <CTASection />
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
