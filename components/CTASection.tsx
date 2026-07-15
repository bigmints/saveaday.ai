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
      <section className="mx-auto w-full max-w-[1400px] border-b border-white/10 px-4 py-16 sm:px-6 sm:py-24 lg:px-12">
        <div className="mb-10 max-w-3xl sm:mb-16">
          <p className="text-[10px] font-bold text-[#74EFC3] tracking-widest uppercase mb-4">What changes</p>
          <h2 className="font-serif text-[34px] leading-tight text-white sm:text-[48px]">
            Customer work stops slipping through the cracks.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-7 md:grid-cols-3 md:gap-8">
          {changes.map((item) => (
            <article key={item.number} className="border-t border-white/15 pt-5 sm:pt-6">
              <p className="text-[10px] text-[#3CA6A6] font-bold tracking-widest">{item.number}</p>
              <h3 className="mt-5 max-w-sm font-serif text-[22px] leading-snug text-white sm:mt-8 sm:text-2xl">{item.title}</h3>
              <p className="mt-4 text-xs leading-6 text-[#888] max-w-sm">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="relative flex min-h-[520px] w-full items-center justify-center overflow-hidden border-t border-white/5 sm:min-h-[600px]">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40" style={{ backgroundImage: "url('/images/hero_bg.jpg')" }} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-black/30 to-[#111]" />

        <div className="relative z-10 mx-auto w-full max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-24">
          <p className="text-[10px] font-bold uppercase tracking-widest text-[#74EFC3] mb-6">A better day for both sides</p>
          <h2 className="mb-6 font-serif text-[36px] leading-[1.1] text-white sm:text-[56px]">
            Make every customer moment easier.
          </h2>
          <p className="text-[15px] leading-7 text-white/80 mb-10 max-w-xl mx-auto">
            Easier for customers to move forward. Easier for your team to know what comes next.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`${APP_URL}/signup`}
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 bg-[#3CA6A6] px-6 py-3 text-sm font-medium text-[#082B2B] transition-colors hover:bg-[#74EFC3] sm:w-auto"
            >
              Try for free <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="mailto:hello@saveaday.ai"
              className="inline-flex min-h-12 w-full items-center justify-center border border-[#74EFC3]/30 bg-[#74EFC3]/10 px-6 py-3 text-center text-sm font-medium text-white transition-colors hover:bg-[#74EFC3]/20 sm:w-auto"
            >
              Talk to us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
