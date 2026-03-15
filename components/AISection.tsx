import { Lightbulb, Brain, Users, Shield, MessageSquare, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const youDecide = [
  {
    text: "Which customers matter most",
    icon: Users,
  },
  {
    text: "What your brand sounds like",
    icon: MessageSquare,
  },
  {
    text: "When to offer discounts or rewards",
    icon: Clock,
  },
  {
    text: "How to handle tricky situations",
    icon: Shield,
  },
];

const aiHandles = [
  {
    text: "Sending the right message at the right time",
    icon: MessageSquare,
  },
  {
    text: "Following up before things slip through the cracks",
    icon: Clock,
  },
  {
    text: "Spotting customers who might not come back",
    icon: Users,
  },
  {
    text: "Pulling together reports so you know what's working",
    icon: Brain,
  },
];

export default function AISection() {
  return (
    <div className="grid gap-8 lg:grid-cols-2">
      {/* Human side */}
      <div className="space-y-4">
        <div className="flex items-center gap-2.5 mb-6">
          <div className="h-3 w-3 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600" />
          <span className="text-sm font-bold text-foreground uppercase tracking-wider">You decide</span>
        </div>
        {youDecide.map((item) => (
          <Card
            key={item.text}
            className="border-border/50 bg-gradient-to-br from-blue-50/30 to-indigo-50/30 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
          >
            <CardContent className="flex items-center gap-4 p-5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-md">
                <item.icon className="h-5 w-5 text-white" />
              </div>
              <span className="text-sm font-medium text-foreground">{item.text}</span>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* AI side */}
      <div className="space-y-4">
        <div className="flex items-center gap-2.5 mb-6">
          <div className="h-3 w-3 rounded-full bg-gradient-to-r from-violet-500 to-purple-600" />
          <span className="text-sm font-bold text-foreground uppercase tracking-wider">SaveADay handles</span>
        </div>
        {aiHandles.map((item) => (
          <Card
            key={item.text}
            className="border-border/50 bg-gradient-to-br from-violet-50/30 to-purple-50/30 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
          >
            <CardContent className="flex items-center gap-4 p-5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 shadow-md">
                <item.icon className="h-5 w-5 text-white" />
              </div>
              <span className="text-sm font-medium text-foreground">{item.text}</span>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
