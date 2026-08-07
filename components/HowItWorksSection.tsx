import { ArrowDown, ListChecks, MessagesSquare, PanelsTopLeft } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "A customer reaches out",
    description: "They ask a question, submit a form, request a booking, or contact your business.",
    icon: MessagesSquare,
  },
  {
    number: "02",
    title: "SaveADay keeps everything together",
    description: "Their details, conversation, choices, and next step stay connected in one place.",
    icon: PanelsTopLeft,
  },
  {
    number: "03",
    title: "Your team knows what to do",
    description: "See who is waiting, what was promised, and what needs attention today.",
    icon: ListChecks,
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="w-full scroll-mt-16 bg-white py-16 sm:scroll-mt-20 sm:py-24 md:py-32">
      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-12">
        <div className="max-w-3xl">
          <p className="mb-4 text-[11px] font-bold uppercase tracking-widest text-[#3CA6A6]">How SaveADay works</p>
          <h2 className="font-serif text-[34px] leading-tight text-slate-900 sm:text-5xl">
            From the first question to the next clear step.
          </h2>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-[15px]">
            SaveADay keeps customer conversations, details, and actions together—so follow-up does not depend on someone remembering what to do.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:mt-14 md:grid-cols-3 md:gap-6">
          {steps.map(({ number, title, description, icon: Icon }, index) => (
            <article key={number} className="relative rounded-xl border border-[#3CA6A6]/15 bg-[#EDF8F8] p-6 sm:p-8">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold tracking-widest text-[#3CA6A6]">{number}</span>
                <Icon className="h-5 w-5 text-[#3CA6A6]" />
              </div>
              <h3 className="mt-12 font-serif text-[26px] leading-tight text-slate-900">{title}</h3>
              <p className="mt-4 text-sm leading-6 text-slate-600">{description}</p>
              {index < steps.length - 1 ? <ArrowDown className="mt-7 h-4 w-4 text-[#3CA6A6] md:hidden" /> : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
