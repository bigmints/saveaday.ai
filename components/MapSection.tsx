import { ArrowUpRight, BriefcaseBusiness, Smile, UsersRound } from "lucide-react";

const groups = [
  {
    title: "For owners",
    label: "MORE CLARITY, FEWER SURPRISES",
    description: "See where customer attention is needed without piecing the day together from different places.",
    icon: BriefcaseBusiness,
  },
  {
    title: "For teams",
    label: "LESS COORDINATION, BETTER SERVICE",
    description: "Know the customer, the context, and the next step—so time goes into helping rather than searching.",
    icon: UsersRound,
  },
  {
    title: "For customers",
    label: "LESS EFFORT, MORE CONFIDENCE",
    description: "Get useful answers, understand the choices, and move forward without unnecessary friction.",
    icon: Smile,
  },
];

export default function MapSection() {
  return (
    <div id="impact" className="w-full bg-[#fafafa] scroll-mt-20">
      <section className="w-full px-4 pb-16 sm:px-6 sm:pb-24 lg:px-12">
        <div className="w-full max-w-[1400px] mx-auto">
          <div className="relative min-h-[520px] w-full overflow-hidden rounded-xl bg-slate-900 shadow-lg sm:min-h-[560px] md:aspect-[21/9] md:min-h-0">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-55"
              style={{ backgroundImage: "url('/images/hero_bg.jpg')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/30" />

            <div className="relative z-10 flex h-full min-h-[520px] flex-col justify-between p-6 text-white sm:min-h-[560px] sm:p-10 md:min-h-0 lg:p-14">
              <div>
                <p className="text-[10px] text-[#74EFC3] uppercase tracking-widest font-bold">The impact</p>
                <p className="mt-3 text-sm text-white/80 max-w-[280px]">One customer journey. A better experience on both sides.</p>
              </div>

              <div className="grid gap-6 md:grid-cols-2 md:gap-12 items-end">
                <div className="border-l border-white/30 pl-5 sm:pl-7">
                  <p className="text-[10px] uppercase tracking-widest text-white/55">For the business</p>
                  <p className="mt-4 max-w-lg font-serif text-[22px] leading-snug sm:text-3xl">
                    “I know what needs attention, and my team can act without piecing everything together.”
                  </p>
                </div>
                <div className="border-l border-white/30 pl-5 sm:pl-7 md:ml-auto">
                  <p className="text-[10px] uppercase tracking-widest text-white/55">For the customer</p>
                  <p className="mt-4 max-w-lg font-serif text-[22px] leading-snug sm:text-3xl">
                    “It was easy to understand my options and simple to take the next step.”
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full border-t border-slate-100 bg-white py-16 sm:py-24">
        <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-12">
          <div className="mb-10 flex flex-col justify-between gap-5 sm:mb-16 md:flex-row md:items-end md:gap-8">
            <div className="max-w-2xl">
              <p className="text-[11px] font-bold text-[#3CA6A6] tracking-widest uppercase mb-4">A better business relationship</p>
              <h2 className="font-serif text-[34px] leading-tight text-slate-900 sm:text-5xl">
                Easier to run. Easier to buy from.
              </h2>
            </div>
            <div className="max-w-[430px]">
              <p className="text-sm text-slate-600 leading-relaxed">
                The value is not another tool for the team to manage. It is fewer missed moments, clearer work, and a customer experience that keeps moving.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
            {groups.map(({ title, label, description, icon: Icon }) => (
              <article key={title} className="group relative flex min-h-[220px] flex-col overflow-hidden rounded-xl border border-[#3CA6A6]/15 bg-[#EDF8F8] p-6 sm:min-h-[260px] sm:p-8 md:min-h-[330px]">
                <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
                  backgroundImage: "radial-gradient(#000 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                }} />

                <div className="relative z-10 flex h-full flex-col">
                  <div className="flex items-start justify-between">
                    <Icon className="w-5 h-5 text-[#3CA6A6]" />
                    <ArrowUpRight className="w-4 h-4 text-[#3CA6A6]/60 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                  <div className="mt-auto">
                    <p className="text-[9px] font-bold text-slate-400 tracking-widest uppercase mb-3">{label}</p>
                    <h3 className="mb-3 font-serif text-[26px] text-slate-900 sm:text-[30px]">{title}</h3>
                    <p className="text-xs leading-5 text-slate-600">{description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
