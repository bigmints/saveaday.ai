import { motion } from "framer-motion";
import { Clock, Zap, TrendingUp, Users, BarChart3 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import sectionsData from "@/data/sections.json";

const metricIcons = [Clock, Zap, TrendingUp, Users];
const metricGradients = [
  "from-blue-500 to-indigo-600",
  "from-amber-500 to-orange-600",
  "from-emerald-500 to-teal-600",
  "from-purple-500 to-pink-600",
];

export default function MetricsSection() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {sectionsData.metrics.map((metric, index) => {
        const Icon = metricIcons[index];
        const gradient = metricGradients[index];
        return (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.5,
              ease: [0.16, 1, 0.3, 1],
              delay: index * 0.08,
            }}
          >
            <Card className="group overflow-hidden border-border/50 bg-white/60 backdrop-blur-sm hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${gradient} shadow-lg`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <BarChart3 className="h-5 w-5 text-muted-foreground/40 group-hover:text-primary transition-colors" />
                </div>
                <div className="space-y-1">
                  <div className="text-3xl font-bold text-foreground">
                    {metric.value}
                  </div>
                  <div className="text-sm font-medium text-foreground">
                    {metric.label}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {metric.context}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        );
      })}
    </div>
  );
}
