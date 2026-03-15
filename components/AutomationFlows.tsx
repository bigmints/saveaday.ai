import { useState } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  CheckCircle2,
  Users,
  Gift,
  ShoppingBag,
  UserPlus,
  ClipboardCheck,
  Database,
  Zap,
  Clock,
  FileText,
  Link2,
  Megaphone,
  ArrowRight,
} from "lucide-react";

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import sectionsData from "@/data/sections.json";

const categories = ["All", "Attract", "Convert", "Nurture", "Retain"];

const appIcons: Record<string, { icon: typeof Calendar; color: string }> = {
  Leads: { icon: Users, color: "text-orange-600" },
  Catalogues: { icon: ShoppingBag, color: "text-indigo-600" },
  Bookings: { icon: Calendar, color: "text-blue-600" },
  Contacts: { icon: Database, color: "text-emerald-600" },
  Tasks: { icon: CheckCircle2, color: "text-green-600" },
  Rewards: { icon: Gift, color: "text-pink-600" },
  Surveys: { icon: ClipboardCheck, color: "text-amber-600" },
  Referrals: { icon: UserPlus, color: "text-cyan-600" },
  Feeds: { icon: FileText, color: "text-orange-600" },
  Links: { icon: Link2, color: "text-teal-600" },
  Waitlists: { icon: Megaphone, color: "text-purple-600" },
};

const categoryGradients: Record<string, string> = {
  Attract: "from-orange-500 to-amber-500",
  Convert: "from-blue-500 to-indigo-600",
  Nurture: "from-emerald-500 to-teal-600",
  Retain: "from-pink-500 to-rose-600",
};

export default function CustomerJourney() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredFlows = sectionsData.flows.filter(
    (f) => activeCategory === "All" || f.category === activeCategory
  );

  return (
    <div className="space-y-10">
      {/* Category Filter */}
      <div className="flex justify-center">
        <ToggleGroup
          type="single"
          value={activeCategory}
          onValueChange={(value) => value && setActiveCategory(value)}
          className="bg-muted p-1 rounded-xl"
        >
          {categories.map((cat) => (
            <ToggleGroupItem
              key={cat}
              value={cat}
              className="px-5 py-2.5 text-sm font-medium data-[state=on]:bg-background data-[state=on]:shadow-sm rounded-lg"
            >
              {cat}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      </div>

      {/* Flow Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredFlows.map((flow, index) => (
          <motion.div
            key={flow.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.4,
              ease: [0.16, 1, 0.3, 1],
              delay: index * 0.06,
            }}
          >
            <Card className="group h-full cursor-default hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-border/50">
              <CardHeader className="space-y-0 pb-4">
                {/* App Icons Flow */}
                <div className="flex items-center gap-2">
                  {flow.apps.map((appName, i) => {
                    const appInfo = appIcons[appName] || { icon: Zap, color: "text-gray-600" };
                    const Icon = appInfo.icon;
                    return (
                      <div key={appName} className="flex items-center gap-2">
                        <div
                          title={appName}
                          className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted/80 border border-border/50"
                        >
                          <Icon className={`h-4 w-4 ${appInfo.color}`} />
                        </div>
                        {i < flow.apps.length - 1 && (
                          <ArrowRight className="h-3.5 w-3.5 text-muted-foreground/50" />
                        )}
                      </div>
                    );
                  })}
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <h3 className="text-base font-semibold leading-snug text-foreground">
                  {flow.title}
                </h3>
              </CardContent>
              <CardFooter className="flex items-center justify-between pt-4 border-t border-border/50">
                <Badge variant="secondary" className="gap-1.5 font-semibold text-xs">
                  <Clock className="h-3 w-3" />
                  Saves {flow.timeSaved}
                </Badge>
                <Badge
                  className={`text-xs text-white border-0 bg-gradient-to-r ${categoryGradients[flow.category] || "from-blue-500 to-indigo-600"}`}
                >
                  {flow.category}
                </Badge>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
