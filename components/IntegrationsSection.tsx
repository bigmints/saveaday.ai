import { motion } from "framer-motion";
import {
  Calendar,
  Mail,
  FileText,
  Users,
  Globe,
  Link2,
  MessageCircle,
  Send,
  CheckCircle2,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import sectionsData from "@/data/sections.json";

const categoryIcons: Record<string, typeof Calendar> = {
  "Calendar & Scheduling": Calendar,
  "Email & Communication": Mail,
  "Files & Documents": FileText,
  "Contacts": Users,
  "Websites": Globe,
  "Custom": Link2,
};

export default function IntegrationsSection() {
  return (
    <div className="space-y-12">
      {/* Body copy */}
      <div className="max-w-3xl mx-auto text-center space-y-4">
        <p className="text-lg text-muted-foreground leading-relaxed">
          You don&apos;t have to throw away what&apos;s working. SaveADay connects to the platforms you already rely on — your calendar, your email, your messaging apps.
        </p>
        <p className="text-sm text-muted-foreground">
          Start with one app, add more when you&apos;re ready. Your data flows between SaveADay and your current setup, so nothing falls through the cracks.
        </p>
      </div>

      {/* Integration categories */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {sectionsData.integrations.map((cat, index) => {
          const Icon = categoryIcons[cat.category] || Globe;
          return (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.4,
                ease: [0.16, 1, 0.3, 1],
                delay: index * 0.06,
              }}
            >
              <Card className="h-full border-border/50 hover:shadow-md transition-all duration-300">
                <CardContent className="p-5 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-sm font-semibold text-foreground">{cat.category}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((item) => (
                      <Badge key={item} variant="secondary" className="text-xs font-medium">
                        <CheckCircle2 className="h-3 w-3 mr-1 text-emerald-500" />
                        {item}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* Reassurance */}
      <div className="text-center">
        <Card className="inline-flex border-primary/20 bg-primary/5">
          <CardContent className="px-8 py-4 flex items-center gap-3">
            <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
            <span className="text-sm font-medium text-foreground">
              Already use Google Workspace? You&apos;re 80% there. SaveADay plugs right in.
            </span>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
