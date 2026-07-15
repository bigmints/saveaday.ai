import { ArrowUpRight, CalendarCheck2, HeartHandshake, MessageSquareText } from "lucide-react";

const outcomes = [
  {
    title: "Respond while interest is high",
    description: "Bring every new enquiry into a clear next step before attention fades or the customer goes elsewhere.",
    icon: MessageSquareText,
  },
  {
    title: "Make choosing you feel easy",
    description: "Help customers understand their options and move forward without unnecessary calls, waiting, or back-and-forth.",
    icon: CalendarCheck2,
  },
  {
    title: "Give every relationship continuity",
    description: "Let your team pick up with context, so customers feel remembered instead of having to start again each time.",
    icon: HeartHandshake,
  },
];

function OutcomeVisual({ index }: { index: number }) {
  if (index === 0) {
    return (
      <div className="relative z-10 w-full max-w-[280px] space-y-2">
        {[
          ["New enquiry", "Just now"],
          ["Reply sent", "12 min"],
          ["Ready to book", "Today"],
        ].map(([label, time], row) => (
          <div key={label} className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-3 shadow-sm" style={{ marginLeft: `${row * 10}px` }}>
            <span className={`h-2 w-2 rounded-full ${row === 0 ? "bg-[#74EFC3]" : "bg-slate-300"}`} />
            <span className="text-[11px] font-medium text-slate-700">{label}</span>
            <span className="ml-auto text-[9px] text-slate-400">{time}</span>
          </div>
        ))}
      </div>
    );
  }

  if (index === 1) {
    return (
      <div className="relative z-10 w-full max-w-[290px] rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="flex items-center justify-between">
          {["Question", "Choice", "Booked"].map((label, itemIndex) => (
            <div key={label} className="flex flex-1 items-center">
              <div className="flex flex-col items-center gap-2">
                <span className={`flex h-8 w-8 items-center justify-center rounded-full text-[10px] font-bold ${itemIndex === 2 ? "bg-[#3CA6A6] text-[#082B2B]" : "bg-slate-100 text-slate-600"}`}>
                  {itemIndex + 1}
                </span>
                <span className="text-[9px] text-slate-500">{label}</span>
              </div>
              {itemIndex < 2 && <div className="mx-2 mb-5 h-px flex-1 bg-slate-200" />}
            </div>
          ))}
        </div>
        <p className="mt-5 border-t border-slate-100 pt-4 text-center text-[10px] text-slate-500">A clear path from interest to action</p>
      </div>
    );
  }

  return (
    <div className="relative z-10 w-full max-w-[270px] rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center gap-3">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#3CA6A6] font-serif text-sm text-[#082B2B]">A</span>
        <div>
          <p className="text-[11px] font-medium text-slate-800">A returning customer</p>
          <p className="text-[9px] text-slate-400">Last visit three weeks ago</p>
        </div>
      </div>
      <div className="mt-5 space-y-2 border-t border-slate-100 pt-4">
        <p className="rounded bg-slate-50 px-3 py-2 text-[10px] text-slate-500">Prefers morning appointments</p>
        <p className="rounded bg-slate-50 px-3 py-2 text-[10px] text-slate-500">Asked about the follow-up service</p>
      </div>
    </div>
  );
}

export default function PillarsSection() {
  return (
    <section id="for-business" className="w-full bg-[#fafafa] py-24 md:py-32 scroll-mt-20">
      <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="mb-12 max-w-4xl">
          <p className="text-[11px] font-bold text-slate-500 tracking-widest uppercase mb-4">For your business</p>
          <h2 className="font-serif text-4xl sm:text-5xl text-slate-900 leading-tight">
            Keep more opportunities. Create less work.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {outcomes.map(({ title, description, icon: Icon }, idx) => (
            <article key={title} className="flex flex-col group">
              <div className="w-full aspect-[4/3] bg-[#3CA6A6]/10 rounded-xl mb-6 p-6 flex items-center justify-center overflow-hidden relative border border-[#3CA6A6]/20">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-200/40 to-transparent" />
                <OutcomeVisual index={idx} />
              </div>

              <div>
                <h3 className="font-sans text-[22px] font-medium text-slate-900 mb-2 flex items-start group-hover:text-slate-600 transition-colors">
                  <Icon className="mr-3 mt-1 w-5 h-5 shrink-0 text-[#3CA6A6]" />
                  {title}
                  <ArrowUpRight className="ml-2 mt-1 w-5 h-5 shrink-0 text-[#3CA6A6]/60" />
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed max-w-[92%]">{description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
