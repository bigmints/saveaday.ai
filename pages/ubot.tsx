import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import {
  Check,
  Minus,
  Sparkles,
  ArrowRight,
  Monitor,
  Cloud,
  Globe,
  Shield,
  Cpu,
  MessageSquare,
  Zap,
  Database,
  Bot,
  Lock,
  Server,
  Users,
} from "lucide-react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

/* ─── Tier Definitions ──────────────────────────────────── */

const tiers = [
  {
    id: "local",
    name: "Self-Hosted",
    tagline: "Full power on your machine",
    price: "License",
    icon: Monitor,
    gradient: "from-emerald-500 to-green-600",
    desc: "Install on your own hardware. Complete control, all features unlocked, your data never leaves your network.",
    highlights: [
      "Runs on macOS / Linux",
      "SQLite — zero cloud dependencies",
      "All AI models including local Ollama",
      "WhatsApp, Telegram, iMessage, Webchat",
      "Full filesystem & CLI access",
    ],
  },
  {
    id: "cloud",
    name: "Cloud Dedicated",
    tagline: "Managed hosting, your own instance",
    price: "Subscription",
    icon: Cloud,
    gradient: "from-blue-500 to-indigo-600",
    popular: true,
    desc: "A dedicated Cloud Run instance just for you. We handle infra, you focus on your business.",
    highlights: [
      "Dedicated Cloud Run instance",
      "Own Firebase database",
      "SaveADay SSO single sign-on",
      "Telegram + Webchat channels",
      "Custom skills & MCP servers",
    ],
  },
  {
    id: "shared",
    name: "Cloud SaaS",
    tagline: "Get started in seconds",
    price: "Freemium",
    icon: Globe,
    gradient: "from-violet-500 to-purple-600",
    desc: "Multi-tenant shared platform at app.saveaday.ai. Sign up and start chatting with your AI assistant instantly.",
    highlights: [
      "No setup required",
      "Tenant-isolated data",
      "SaveADay SSO",
      "Webchat channel",
      "All SaveADay apps included",
    ],
  },
];

/* ─── Feature Matrix ────────────────────────────────────── */

const featureGroups = [
  {
    title: "AI Engine",
    features: [
      { name: "Gemini (Google AI)", local: "✓", cloud: "✓", shared: "✓" },
      { name: "OpenAI (GPT-4o)", local: "✓", cloud: "✓", shared: "✓" },
      { name: "Ollama (local LLMs)", local: "✓", cloud: "x", shared: "x" },
      { name: "Multi-turn sessions", local: "✓", cloud: "✓", shared: "✓" },
      { name: "Smart tool routing", local: "✓", cloud: "✓", shared: "✓" },
      { name: "Memory & context", local: "✓", cloud: "✓", shared: "✓" },
      { name: "Soul (personality)", local: "✓", cloud: "✓", shared: "✓" },
      { name: "Session limit", local: "Unlimited", cloud: "Unlimited", shared: "Rate limited" },
    ],
  },
  {
    title: "SaveADay Apps",
    features: [
      { name: "Contacts CRM", local: "✓", cloud: "✓", shared: "✓" },
      { name: "Bookings", local: "✓", cloud: "✓", shared: "✓" },
      { name: "Catalogues", local: "✓", cloud: "✓", shared: "✓" },
      { name: "Feeds (CMS)", local: "✓", cloud: "✓", shared: "✓" },
      { name: "Lead forms", local: "✓", cloud: "✓", shared: "✓" },
      { name: "Link pages", local: "✓", cloud: "✓", shared: "✓" },
      { name: "Referrals", local: "✓", cloud: "✓", shared: "✓" },
      { name: "Rewards", local: "✓", cloud: "✓", shared: "✓" },
      { name: "Surveys", local: "✓", cloud: "✓", shared: "✓" },
      { name: "Tasks / boards", local: "✓", cloud: "✓", shared: "✓" },
      { name: "Waitlists", local: "✓", cloud: "✓", shared: "✓" },
      { name: "Dashboard", local: "✓", cloud: "✓", shared: "✓" },
    ],
  },
  {
    title: "Google Workspace",
    features: [
      { name: "Google Calendar", local: "✓", cloud: "✓", shared: "✓" },
      { name: "Gmail", local: "✓", cloud: "✓", shared: "✓" },
      { name: "Google Contacts", local: "✓", cloud: "✓", shared: "✓" },
      { name: "Google Drive", local: "✓", cloud: "✓", shared: "✓" },
      { name: "Google Docs", local: "✓", cloud: "✓", shared: "✓" },
    ],
  },
  {
    title: "Channels",
    features: [
      { name: "Webchat (embeddable)", local: "✓", cloud: "✓", shared: "✓" },
      { name: "Telegram bot", local: "✓", cloud: "✓", shared: "x" },
      { name: "WhatsApp (Baileys)", local: "✓", cloud: "x", shared: "x" },
      { name: "iMessage (macOS)", local: "✓", cloud: "x", shared: "x" },
    ],
  },
  {
    title: "Automation",
    features: [
      { name: "Task scheduler (cron)", local: "✓", cloud: "✓", shared: "✓" },
      { name: "Owner approvals", local: "✓", cloud: "✓", shared: "✓" },
      { name: "Follow-up chains", local: "✓", cloud: "✓", shared: "✓" },
      { name: "Custom skills", local: "✓", cloud: "✓", shared: "x" },
      { name: "Safety agent", local: "✓", cloud: "✓", shared: "✓" },
    ],
  },
  {
    title: "Integrations",
    features: [
      { name: "MCP servers (external)", local: "✓", cloud: "✓", shared: "✓" },
      { name: "Custom MCP servers", local: "✓", cloud: "✓", shared: "x" },
      { name: "Web search (Serper)", local: "✓", cloud: "✓", shared: "✓" },
      { name: "Vault (secrets)", local: "✓", cloud: "✓", shared: "✓" },
    ],
  },
  {
    title: "Local-Only Capabilities",
    features: [
      { name: "Apple Calendar / Contacts / Notes / Mail", local: "✓", cloud: "x", shared: "x" },
      { name: "Filesystem (read/write/search)", local: "✓", cloud: "x", shared: "x" },
      { name: "CLI / Shell exec", local: "✓", cloud: "x", shared: "x" },
      { name: "Local Whisper (transcription)", local: "✓", cloud: "x", shared: "x" },
      { name: "Local TTS (speech synthesis)", local: "✓", cloud: "x", shared: "x" },
      { name: "Playwright browser MCP", local: "✓", cloud: "x", shared: "x" },
    ],
  },
  {
    title: "Infrastructure",
    features: [
      { name: "Database", local: "SQLite", cloud: "Firebase", shared: "Firebase" },
      { name: "Authentication", local: "API key", cloud: "SSO", shared: "SSO" },
      { name: "Data isolation", local: "Physical", cloud: "Dedicated DB", shared: "Tenant-scoped" },
      { name: "Deployment", local: "make install", cloud: "Cloud Run", shared: "Cloud Run" },
      { name: "Updates", local: "make update / git pull", cloud: "Managed", shared: "Managed" },
    ],
  },
];

/* ─── Page Component ────────────────────────────────────── */

const UbotPage: NextPage = () => {
  const renderCell = (val: string) => {
    if (val === "✓") return <Check className="h-5 w-5 text-emerald-500 mx-auto" />;
    if (val === "x") return <Minus className="h-5 w-5 text-muted-foreground/30 mx-auto" />;
    if (val === "Unlimited") return (
      <Badge className="bg-primary text-primary-foreground border-0">Unlimited</Badge>
    );
    return <span className="text-muted-foreground text-sm whitespace-nowrap">{val}</span>;
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Head>
        <title>UBOT — AI Assistant for Business | SaveADay</title>
        <meta
          name="description"
          content="UBOT is a powerful AI assistant that connects to all your business tools. Available as self-hosted, dedicated cloud, or shared SaaS."
        />
      </Head>

      <Header />

      <main className="flex-grow">
        {/* ─── Hero ──────────────────────────────────── */}
        <section className="py-20 md:py-28 px-6">
          <div className="max-w-5xl mx-auto text-center">
            <Badge variant="outline" className="mb-6 px-4 py-1.5 text-sm font-medium">
              <Bot className="h-4 w-4 mr-2" /> Now Available
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent">
              Your AI assistant,{" "}
              <span className="bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">
                your way.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
              UBOT is a powerful AI assistant that integrates with 12+ SaveADay apps, Google Workspace,
              messaging channels, and your local environment. Deploy it on your terms — self-hosted,
              dedicated cloud, or instant SaaS.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg shadow-blue-500/25" asChild>
                <a href="https://app.saveaday.ai">
                  Try Cloud SaaS
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="https://github.com/Bigmints-com/ubot">
                  Self-Host
                  <Monitor className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* ─── Tier Cards ───────────────────────────── */}
        <Section
          id="ubot-tiers"
          title="Three ways to deploy"
          description="Choose the deployment model that fits your business."
          align="center"
        >
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {tiers.map((tier) => {
              const Icon = tier.icon;
              return (
                <Card
                  key={tier.id}
                  className={`relative overflow-hidden transition-all hover:shadow-xl ${
                    tier.popular ? "border-2 border-primary shadow-lg" : "border"
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute top-0 right-0">
                      <Badge className="rounded-none rounded-bl-lg bg-primary text-primary-foreground px-3 py-1">
                        <Sparkles className="h-3 w-3 mr-1" /> Recommended
                      </Badge>
                    </div>
                  )}
                  <CardContent className="p-8">
                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${tier.gradient} mb-4`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-1">{tier.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{tier.tagline}</p>
                    <Badge variant="outline" className="mb-6">{tier.price}</Badge>
                    <p className="text-muted-foreground text-sm mb-6 leading-relaxed">{tier.desc}</p>
                    <ul className="space-y-3">
                      {tier.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2 text-sm">
                          <Check className="h-4 w-4 text-emerald-500 mt-0.5 shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </Section>

        {/* ─── Stats ────────────────────────────────── */}
        <section className="py-16 px-6 border-y border-border/50 bg-muted/20">
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "60+", label: "AI Tools", icon: Zap },
              { value: "12", label: "SaveADay Apps", icon: Database },
              { value: "4", label: "Channels", icon: MessageSquare },
              { value: "3", label: "Deploy Modes", icon: Server },
            ].map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label}>
                  <Icon className="h-5 w-5 mx-auto mb-2 text-muted-foreground" />
                  <div className="text-3xl font-bold">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ─── Feature Comparison Table ─────────────── */}
        <Section
          id="ubot-features"
          title="Full Feature Comparison"
          description="Every capability, side by side."
          align="center"
        >
          <Card className="mt-12 border shadow-lg">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-muted/30 border-b">
                      <TableHead className="font-bold text-foreground text-base py-6 pl-8 align-middle">
                        Feature
                      </TableHead>
                      {tiers.map((tier) => {
                        const Icon = tier.icon;
                        return (
                          <TableHead
                            key={tier.id}
                            className={`text-center py-6 px-6 align-top ${tier.popular ? "bg-primary/10" : ""}`}
                          >
                            <div className="flex flex-col items-center">
                              <div className="h-8 mb-2 flex items-end justify-center">
                                {tier.popular && (
                                  <Badge className="bg-primary text-primary-foreground border-0 shadow-md px-3 py-1">
                                    <Sparkles className="h-3 w-3 mr-1" /> Recommended
                                  </Badge>
                                )}
                              </div>
                              <Icon className={`h-5 w-5 mb-2 text-muted-foreground`} />
                              <div className="text-lg font-bold text-foreground">{tier.name}</div>
                            </div>
                          </TableHead>
                        );
                      })}
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {featureGroups.map((group) => (
                      <React.Fragment key={group.title}>
                        <TableRow className="bg-muted/20">
                          <TableCell
                            colSpan={4}
                            className="text-xs font-bold text-foreground uppercase tracking-wider py-4 pl-8"
                          >
                            {group.title}
                          </TableCell>
                        </TableRow>
                        {group.features.map((feature) => (
                          <TableRow key={feature.name} className="hover:bg-muted/10 transition-colors">
                            <TableCell className="font-medium text-foreground py-4 pl-8">
                              {feature.name}
                            </TableCell>
                            <TableCell className="text-center py-4 px-6">
                              {renderCell(feature.local)}
                            </TableCell>
                            <TableCell className="text-center py-4 px-6 bg-primary/5">
                              {renderCell(feature.cloud)}
                            </TableCell>
                            <TableCell className="text-center py-4 px-6">
                              {renderCell(feature.shared)}
                            </TableCell>
                          </TableRow>
                        ))}
                      </React.Fragment>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </Section>

        {/* ─── CTA ──────────────────────────────────── */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-primary/20 shadow-xl overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-gradient-to-r from-blue-600/10 via-indigo-600/10 to-violet-600/10 p-10">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex-1 text-center md:text-left">
                      <h3 className="text-2xl font-bold mb-3">Ready to get started?</h3>
                      <p className="text-muted-foreground text-lg">
                        Try the Cloud SaaS for free, or self-host for complete control.
                        Need a dedicated instance? Contact us.
                      </p>
                    </div>
                    <div className="flex flex-col gap-3 shrink-0">
                      <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg shadow-blue-500/25" asChild>
                        <a href="https://app.saveaday.ai">
                          Start Free <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                      <Button size="lg" variant="outline" asChild>
                        <a href="mailto:hello@saveaday.ai">Contact for Dedicated</a>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default UbotPage;
