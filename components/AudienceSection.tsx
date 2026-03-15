import { motion } from "framer-motion";
import { Store, Building2, Building, ArrowRight } from "lucide-react";
import sectionsData from "@/data/sections.json";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const tierIcons = [Store, Building2, Building];
const tierGradients = [
  "from-emerald-500 to-green-600",
  "from-blue-500 to-indigo-600",
  "from-violet-500 to-purple-600",
];

export default function AudienceSection() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {sectionsData.audiences.map((audience, index) => {
        const Icon = tierIcons[index];
        const gradient = tierGradients[index];
        return (
          <motion.div
            key={audience.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.5,
              ease: [0.16, 1, 0.3, 1],
              delay: index * 0.1,
            }}
          >
            <Card className="h-full overflow-hidden border-border/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
              <CardContent className="p-8 space-y-5">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${gradient} shadow-lg`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-foreground mb-1">
                    {audience.name}
                  </h3>
                  <p className="text-sm font-medium text-primary">
                    {audience.tagline}
                  </p>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {audience.description}
                </p>

                <div className="pt-2 border-t border-border/50">
                  <p className="text-xs text-muted-foreground italic">
                    {audience.examples}
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        );
      })}
    </div>
  );
}
