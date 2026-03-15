import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import appsData from "@/data/apps.json";
import AppLogo from "./AppLogo";
import { Card, CardContent } from "@/components/ui/card";

type AppColor = "blue" | "green" | "purple" | "orange" | "pink" | "indigo" | "teal" | "violet";

export default function AppsSection() {
  const { apps } = appsData;

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {apps.map((app, index) => {
        return (
          <motion.div
            key={app.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.4,
              ease: [0.16, 1, 0.3, 1],
              delay: index * 0.04,
            }}
          >
            <Link
              href={app.dashboardUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full"
            >
              <Card className="h-full group border-border/50 hover:border-primary/30 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                <CardContent className="flex flex-col gap-3 p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <AppLogo
                        appName={app.name}
                        color={app.color as AppColor}
                        icon={app.icon}
                      />
                      <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                        {app.name}
                      </h3>
                    </div>
                    <ExternalLink className="h-3.5 w-3.5 text-muted-foreground/40 group-hover:text-primary transition-colors shrink-0 mt-1" />
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{app.description}</p>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
}
