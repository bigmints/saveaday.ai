import { ArrowRight } from "lucide-react";

const APP_URL = process.env.NODE_ENV === "development"
  ? "http://localhost:3010"
  : "https://app.saveaday.ai";

const changes = [
  {
    number: "01",
    title: "Fewer opportunities fade away",
    description: "Give every enquiry a useful response and an obvious next step while interest is still high.",
  },
  {
    number: "02",
    title: "Customers move with confidence",
    description: "Make it easier to understand the business, choose the right option, and act without unnecessary friction.",
  },
  {
    number: "03",
    title: "Your team gets time back",
    description: "Reduce the searching, switching, and follow-up that quietly fills the day but does not serve the customer.",
  },
];

export default function CTASection() {
  return (
    <div className="w-full bg-[#111]">
      <section className="w-full max-w-[1400px] mx-auto px-6 lg:px-12 py-24 border-b border-white/10">
        <div className="max-w-3xl mb-16">
          <p className="text-[10px] font-bold text-[#74EFC3] tracking-widest uppercase mb-4">What changes</p>
          <h2 className="font-serif text-4xl sm:text-[48px] text-white leading-tight">
            Customer work stops slipping through the cracks.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {changes.map((item) => (
            <article key={item.number} className="border-t border-white/15 pt-6">
              <p className="text-[10px] text-[#3CA6A6] font-bold tracking-widest">{item.number}</p>
              <h3 className="mt-8 font-serif text-2xl text-white leading-snug max-w-sm">{item.title}</h3>
              <p className="mt-4 text-xs leading-6 text-[#888] max-w-sm">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="relative w-full min-h-[600px] flex items-center justify-center overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40" style={{ backgroundImage: "url('/images/hero_bg.jpg')" }} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-black/30 to-[#111]" />

        <div className="relative z-10 w-full max-w-4xl mx-auto px-6 py-24 text-center">
          <p className="text-[10px] font-bold uppercase tracking-widest text-[#74EFC3] mb-6">A better day for both sides</p>
          <h2 className="font-serif text-4xl sm:text-[56px] text-white leading-[1.1] mb-6">
            Make every customer moment easier.
          </h2>
          <p className="text-[15px] leading-7 text-white/80 mb-10 max-w-xl mx-auto">
            Easier for customers to move forward. Easier for your team to know what comes next.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`${APP_URL}/signup`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#3CA6A6] text-[#082B2B] text-sm font-medium hover:bg-[#74EFC3] transition-colors"
            >
              Try for free <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="mailto:hello@saveaday.ai"
              className="w-full sm:w-auto text-center px-6 py-3 bg-[#74EFC3]/10 border border-[#74EFC3]/30 text-white text-sm font-medium hover:bg-[#74EFC3]/20 transition-colors"
            >
              Talk to us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
