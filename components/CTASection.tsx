import Link from "next/link";
import { ArrowRight } from "lucide-react";
import sectionsData from "@/data/sections.json";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const AUTH_URL = process.env.NODE_ENV === "development"
  ? "http://localhost:3010"
  : "https://auth.saveaday.ai";

export default function CTASection() {
  const { cta } = sectionsData;

  return (
    <section id="cta" className="mx-auto my-24 w-full max-w-5xl px-6 sm:px-10">
      <Card className="border-2 border-primary/20 shadow-xl overflow-hidden">
        <CardContent className="p-0">
          <div className="bg-gradient-to-r from-blue-600/10 via-indigo-600/10 to-violet-600/10 px-8 py-16 sm:px-14">
            <div className="flex flex-col items-center text-center gap-8">
              <h2 className="text-balance text-3xl font-bold text-foreground sm:text-4xl max-w-2xl">
                {cta.title}
              </h2>
              <p className="max-w-2xl text-lg text-muted-foreground leading-relaxed">
                {cta.body}
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg shadow-blue-500/25 text-base px-8"
                  asChild
                >
                  <a href={`${AUTH_URL}/register`}>
                    {cta.primary}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="text-base px-8" asChild>
                  <a href="mailto:hello@saveaday.ai">
                    {cta.secondary}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
