import { HeartHandshake, Server, ShieldCheck, Sparkles, UsersRound } from "lucide-react";

const benefits = [
  {
    title: "Use infrastructure you control",
    description: "Connect SaveADay to a private model endpoint that fits your organization’s operating requirements.",
  },
  {
    title: "Keep model decisions centralized",
    description: "Your platform team chooses the active model and manages access away from everyday business users.",
  },
  {
    title: "Keep the experience simple",
    description: "The model can change without changing how teams serve customers or how customers get help.",
  },
];

export default function OnPremSection() {
  return (
    <section id="private-ai" className="w-full scroll-mt-16 bg-[#f0f0f0] py-16 sm:scroll-mt-20 sm:py-24 md:py-32">
      <div className="mx-auto grid w-full max-w-[1400px] gap-10 px-4 sm:gap-14 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-24 lg:px-12">
        <div>
          <p className="text-[11px] font-bold text-[#3CA6A6] tracking-widest uppercase mb-4">Private and on-prem models</p>
          <h2 className="max-w-xl font-serif text-[34px] leading-tight text-slate-900 sm:text-5xl">
            Use the models your business already trusts.
          </h2>
          <p className="mt-5 max-w-lg text-sm leading-6 text-slate-600 sm:mt-6 sm:text-[15px] sm:leading-7">
            For organizations that need more control, SaveADay can use a private or on-prem model endpoint on infrastructure you manage. Your platform team stays in charge of the model while the business and customer experience stays familiar.
          </p>

          <div className="mt-8 space-y-4 sm:mt-10 sm:space-y-6">
            {benefits.map((benefit, index) => (
              <div key={benefit.title} className="grid grid-cols-[30px_1fr] gap-3 border-t border-slate-300 pt-4 sm:grid-cols-[34px_1fr] sm:gap-4 sm:pt-5">
                <span className="text-[10px] font-bold tracking-widest text-slate-400">0{index + 1}</span>
                <div>
                  <h3 className="text-sm font-medium text-slate-900">{benefit.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-500">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative overflow-hidden rounded-xl bg-[#111] p-5 shadow-xl sm:p-10 lg:p-12">
          <div className="absolute inset-0 opacity-20 pointer-events-none" style={{
            backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }} />
          <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#3CA6A6]/30 blur-3xl" />

          <div className="relative z-10">
            <div className="flex items-center justify-between text-white/50">
              <span className="text-[9px] font-bold uppercase tracking-[0.2em]">Your private AI route</span>
              <ShieldCheck className="h-4 w-4" />
            </div>

            <div className="mt-8 flex flex-col items-center sm:mt-12">
              <div className="w-full max-w-sm rounded-xl border border-white/15 bg-white/[0.06] p-5 text-white shadow-2xl backdrop-blur-sm">
                <div className="flex items-center gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-white/10">
                    <Server className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-medium">Your model endpoint</p>
                    <p className="mt-1 text-[10px] text-white/45">Managed on infrastructure you control</p>
                  </div>
                  <span className="ml-auto flex items-center gap-1.5 text-[9px] text-[#74EFC3]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#74EFC3]" /> Ready
                  </span>
                </div>
              </div>

              <div className="h-10 w-px border-l border-dashed border-white/25" />

              <div className="flex w-full max-w-[220px] items-center justify-center gap-3 rounded-xl bg-[#74EFC3] p-4 text-[#082B2B] shadow-xl">
                <Sparkles className="h-4 w-4" />
                <span className="text-xs font-bold tracking-widest">SAVEADAY</span>
              </div>

              <div className="h-10 w-px border-l border-dashed border-white/25" />

              <div className="grid w-full grid-cols-2 gap-3">
                <div className="rounded-xl border border-white/10 bg-white/[0.05] p-3 text-center text-white sm:p-4">
                  <UsersRound className="mx-auto h-4 w-4 text-white/60" />
                  <p className="mt-3 text-[11px] font-medium">Your team</p>
                  <p className="mt-1 text-[9px] text-white/40">Same clear working day</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/[0.05] p-3 text-center text-white sm:p-4">
                  <HeartHandshake className="mx-auto h-4 w-4 text-white/60" />
                  <p className="mt-3 text-[11px] font-medium">Your customers</p>
                  <p className="mt-1 text-[9px] text-white/40">Same easy experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
