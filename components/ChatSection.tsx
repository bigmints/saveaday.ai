import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Send, CheckCircle2, Bot, User } from "lucide-react";
import sectionsData from "@/data/sections.json";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type Message = {
  role: "user" | "assistant";
  text: string;
  typing?: boolean;
};

const conversations: { user: string; assistant: string }[] = [
  {
    user: "Show me today's bookings.",
    assistant: "You have 6 bookings today. 3 in the morning, 2 after lunch, and 1 at 5 PM. Your busiest slot is 10:00–11:00 AM with back-to-back appointments.",
  },
  {
    user: "Send a thank-you to everyone who visited this week.",
    assistant: "Done! Sent personalised thank-you messages to 14 customers who visited this week. Each message includes their name and a 'See you next time' note.",
  },
  {
    user: "Create a 10% discount for returning customers.",
    assistant: "Created a 10% loyalty reward for returning customers. It will be applied at their next booking. 47 customers in your loyalty programme will be notified.",
  },
  {
    user: "How many new leads came in this month?",
    assistant: "You received 38 new leads this month — up 12% from last month. 24 have been contacted, 9 converted to bookings, and 5 are still pending follow-up.",
  },
];

export default function ChatSection() {
  const [activeConvo, setActiveConvo] = useState(0);
  const [messages, setMessages] = useState<Message[]>([]);
  const [phase, setPhase] = useState<"user" | "typing" | "done">("user");

  useEffect(() => {
    const convo = conversations[activeConvo];
    setMessages([{ role: "user", text: convo.user }]);
    setPhase("typing");

    const typingTimer = setTimeout(() => {
      setMessages([
        { role: "user", text: convo.user },
        { role: "assistant", text: convo.assistant },
      ]);
      setPhase("done");
    }, 1200);

    const nextTimer = setTimeout(() => {
      setActiveConvo((prev) => (prev + 1) % conversations.length);
    }, 5000);

    return () => {
      clearTimeout(typingTimer);
      clearTimeout(nextTimer);
    };
  }, [activeConvo]);

  return (
    <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
      {/* Left: Copy */}
      <div className="space-y-6">
        <p className="text-lg text-muted-foreground leading-relaxed">
          No dashboards to learn. No complex software to figure out. Just open a chat and tell SaveADay what you need.
        </p>
        <div className="space-y-3">
          {sectionsData.chatExamples.slice(0, 4).map((example) => (
            <div
              key={example}
              className="flex items-center gap-3 rounded-lg border border-border/50 bg-muted/30 px-4 py-3 text-sm text-foreground"
            >
              <MessageCircle className="h-4 w-4 text-primary shrink-0" />
              <span className="italic">&ldquo;{example}&rdquo;</span>
            </div>
          ))}
        </div>
        <p className="text-sm text-muted-foreground">
          SaveADay understands what you&apos;re asking, picks the right app, and gets it done. <span className="font-semibold text-foreground">You talk. It works.</span>
        </p>
      </div>

      {/* Right: Chat mock */}
      <Card className="overflow-hidden border-border shadow-xl">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-3.5 flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
            <Bot className="h-4 w-4 text-white" />
          </div>
          <div>
            <div className="text-sm font-semibold text-white">SaveADay Assistant</div>
            <div className="text-xs text-white/70">Always online</div>
          </div>
          <div className="ml-auto flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs text-white/70">Active</span>
          </div>
        </div>
        <CardContent className="p-0">
          <div className="min-h-[280px] flex flex-col justify-end bg-muted/10 px-4 py-5 space-y-3">
            <AnimatePresence mode="wait">
              {messages.map((msg, i) => (
                <motion.div
                  key={`${activeConvo}-${i}`}
                  initial={{ opacity: 0, y: 12, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className={`flex gap-2.5 ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  {msg.role === "assistant" && (
                    <div className="h-7 w-7 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shrink-0 mt-0.5">
                      <Bot className="h-3.5 w-3.5 text-white" />
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-br-md"
                        : "bg-white border border-border/60 text-foreground shadow-sm rounded-bl-md"
                    }`}
                  >
                    {msg.text}
                  </div>
                  {msg.role === "user" && (
                    <div className="h-7 w-7 rounded-full bg-muted flex items-center justify-center shrink-0 mt-0.5">
                      <User className="h-3.5 w-3.5 text-muted-foreground" />
                    </div>
                  )}
                </motion.div>
              ))}
              {phase === "typing" && (
                <motion.div
                  key="typing"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex gap-2.5"
                >
                  <div className="h-7 w-7 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Bot className="h-3.5 w-3.5 text-white" />
                  </div>
                  <div className="bg-white border border-border/60 rounded-2xl rounded-bl-md px-4 py-3 shadow-sm">
                    <div className="flex gap-1">
                      <span className="h-2 w-2 rounded-full bg-muted-foreground/40 animate-bounce [animation-delay:0ms]" />
                      <span className="h-2 w-2 rounded-full bg-muted-foreground/40 animate-bounce [animation-delay:150ms]" />
                      <span className="h-2 w-2 rounded-full bg-muted-foreground/40 animate-bounce [animation-delay:300ms]" />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          {/* Input bar */}
          <div className="border-t border-border/50 bg-white px-4 py-3">
            <div className="flex items-center gap-3 rounded-full border border-border/60 bg-muted/20 px-4 py-2.5">
              <span className="flex-1 text-sm text-muted-foreground">Type a message...</span>
              <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center">
                <Send className="h-3.5 w-3.5 text-white" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
