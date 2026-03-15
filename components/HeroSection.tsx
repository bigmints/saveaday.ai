import Link from "next/link";
import { motion } from "framer-motion";
import heroData from "@/data/hero.json";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const AUTH_URL = process.env.NODE_ENV === "development"
  ? "http://localhost:3010"
  : "https://auth.saveaday.ai";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background via-background to-muted/30 pb-24 pt-24 md:pt-32">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50/40 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgY3g9IjMwIiBjeT0iMzAiIHI9IjEiIGZpbGw9InJnYmEoMCwwLDAsMC4wMykiLz48L2c+PC9zdmc+')] opacity-60" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-16 px-6 sm:px-10">
        {/* Badge + Headlines + CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center gap-8 text-center"
        >
          <Badge variant="secondary" className="px-4 py-1.5 text-sm font-medium tracking-wide shadow-sm">
            {heroData.badge}
          </Badge>

          <h1 className="max-w-4xl text-balance font-display text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-7xl">
            Stop Managing Software.{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
              Start Growing Customer Value.
            </span>
          </h1>

          <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            {heroData.subtext}
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg shadow-blue-500/25 text-base px-8"
              asChild
            >
              <a href={`${AUTH_URL}/register`}>
                {heroData.ctaPrimary}
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="lg" className="text-base px-8" asChild>
              <Link href="#how-it-works">
                {heroData.ctaSecondary}
              </Link>
            </Button>
          </div>
        </motion.div>

        {/* Value Props Grid */}
        <div className="grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4 w-full">
          {heroData.valueProps.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.3 + index * 0.08,
              }}
            >
              <Card className="h-full border-border/40 bg-white/60 backdrop-blur-sm hover:bg-white hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                <CardContent className="flex flex-col gap-3 items-center text-center p-6">
                  <span className="text-3xl">{item.emoji}</span>
                  <span className="text-sm font-semibold text-foreground uppercase tracking-wider">
                    {item.label}
                  </span>
                  <span className="text-sm leading-relaxed text-muted-foreground">
                    {item.text}
                  </span>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
