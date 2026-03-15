import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import sectionsData from "@/data/sections.json";
import { Card, CardContent } from "@/components/ui/card";

export default function ProblemSection() {
  const { comparisons } = sectionsData.problem;

  return (
    <div className="space-y-12">
      {/* Body copy */}
      <div className="max-w-3xl mx-auto text-center space-y-4">
        <p className="text-lg text-muted-foreground leading-relaxed">
          Traditional CRMs give you a database of names and call it a day. But your business doesn&apos;t grow from data entry — it grows when every customer interaction leads naturally to the next.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed">
          With SaveADay, a new enquiry triggers a welcome message. A completed visit earns loyalty points. A happy customer shares a referral. <span className="font-semibold text-foreground">The whole journey runs on its own.</span>
        </p>
      </div>

      {/* Comparison cards */}
      <div className="grid gap-6 md:grid-cols-3">
        {comparisons.map((item, index) => (
          <motion.div
            key={item.old}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.5,
              ease: [0.16, 1, 0.3, 1],
              delay: index * 0.1,
            }}
          >
            <Card className="h-full overflow-hidden border-border/50 bg-white hover:shadow-lg transition-all duration-300">
              <CardContent className="p-0">
                {/* Old way */}
                <div className="px-6 py-5 bg-red-50/50 border-b border-red-100/50">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="h-2 w-2 rounded-full bg-red-400/70" />
                    <span className="text-xs font-semibold text-red-600/70 uppercase tracking-wider">The old way</span>
                  </div>
                  <p className="text-sm text-red-900/70 leading-relaxed">{item.old}</p>
                </div>

                {/* Arrow divider */}
                <div className="flex justify-center -my-3 relative z-10">
                  <div className="h-6 w-6 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center shadow-md">
                    <ArrowRight className="h-3 w-3 text-white rotate-90" />
                  </div>
                </div>

                {/* SaveADay way */}
                <div className="px-6 py-5 bg-emerald-50/50">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                    <span className="text-xs font-semibold text-emerald-700 uppercase tracking-wider">The SaveADay way</span>
                  </div>
                  <p className="text-sm text-emerald-900 font-medium leading-relaxed">{item.new}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
