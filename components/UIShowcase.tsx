"use client";

import { useState } from "react";
import { Calendar, CheckCircle2, Clock3, MessageSquareText } from "lucide-react";

const attentionItems = [
  {
    icon: MessageSquareText,
    label: "New enquiries",
    value: "2 waiting",
    note: "Both arrived in the last hour",
  },
  {
    icon: Calendar,
    label: "Today’s customers",
    value: "3 confirmed",
    note: "Everything is ready for the team",
  },
  {
    icon: Clock3,
    label: "Needs attention",
    value: "1 decision",
    note: "A customer asked to change a time",
  },
];

export default function UIShowcase() {
  const [step, setStep] = useState(0);

  const showDay = () => {
    if (step === 0) {
      setStep(1);
      window.setTimeout(() => setStep(2), 500);
    }
  };

  return (
    <section id="why-saveaday" className="w-full bg-white py-24 flex justify-center scroll-mt-20">
      <div className="w-full max-w-[1200px] px-6 lg:px-12">
        <div className="mb-16">
          <h2 className="font-serif text-3xl sm:text-[40px] text-slate-900 leading-[1.3] max-w-4xl tracking-tight">
            The work that grows your business should not get lost in the work of running it.{" "}
            <span className="text-slate-500">SaveADay keeps customer conversations and next steps moving, so your team can focus on serving people well.</span>
          </h2>
        </div>

        <div className="relative w-full min-h-[620px] sm:min-h-0 sm:aspect-[16/9] rounded-xl overflow-hidden bg-[#3CA6A6] p-5 sm:p-12 flex flex-col justify-center items-center shadow-inner">
          <div className="w-full max-w-3xl bg-white rounded-lg shadow-2xl overflow-hidden flex flex-col min-h-[560px] sm:h-full sm:max-h-[600px]">
            <div className="h-14 border-b border-slate-100 bg-white flex items-center px-5 sm:px-6 shrink-0 z-10">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-amber-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <span className="ml-auto text-[10px] font-bold uppercase tracking-widest text-slate-400">Example business day</span>
            </div>

            <div className="flex-1 overflow-y-auto p-5 sm:p-8 flex flex-col gap-5 bg-slate-50/50">
              <div className="w-full bg-white border border-slate-200 rounded-lg shadow-sm p-2 flex flex-col sm:flex-row sm:items-center gap-2">
                <div className="w-full py-3 px-3 sm:px-4 text-sm text-slate-900 font-medium">
                  What needs my attention today?
                </div>
                <button
                  type="button"
                  onClick={showDay}
                  disabled={step !== 0}
                  className={`shrink-0 px-6 py-3 rounded-md text-sm font-medium transition-all ${
                    step === 0
                      ? "bg-[#3CA6A6] text-[#082B2B] hover:bg-[#74EFC3] cursor-pointer shadow-sm"
                      : "bg-slate-200 text-slate-400 cursor-not-allowed"
                  }`}
                >
                  Show my day →
                </button>
              </div>

              {step === 0 && (
                <div className="flex-1 flex items-center justify-center text-center px-6">
                  <div className="max-w-sm">
                    <p className="font-serif text-2xl text-slate-900">Start with what matters.</p>
                    <p className="mt-3 text-sm leading-6 text-slate-500">See the customers waiting, the commitments ahead, and the one thing that needs a decision.</p>
                  </div>
                </div>
              )}

              {step === 1 && (
                <div className="flex-1 flex items-center justify-center text-sm text-slate-500 animate-pulse">Bringing today into focus...</div>
              )}

              {step === 2 && (
                <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-7 h-7 rounded-full bg-[#3CA6A6] flex items-center justify-center text-[#082B2B] text-[10px] font-bold">S</div>
                    <p className="text-sm font-medium text-slate-900">Here is where your attention will make the biggest difference.</p>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-3">
                    {attentionItems.map(({ icon: Icon, label, value, note }) => (
                      <div key={label} className="bg-white border border-slate-200 rounded-lg p-4 shadow-sm">
                        <Icon className="w-4 h-4 text-slate-500" />
                        <p className="mt-5 text-[11px] font-medium text-slate-500">{label}</p>
                        <p className="mt-1 font-serif text-xl text-slate-900">{value}</p>
                        <p className="mt-3 text-[10px] leading-4 text-slate-400">{note}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 flex items-start gap-3 rounded-lg border border-[#74EFC3]/60 bg-[#74EFC3]/15 p-4">
                    <CheckCircle2 className="w-4 h-4 text-[#237A7A] mt-0.5 shrink-0" />
                    <p className="text-xs leading-5 text-slate-700">Start with the booking change. The new enquiries are still warm, so the team can follow up straight after.</p>
                  </div>

                  <button type="button" onClick={() => setStep(0)} className="mt-4 text-xs text-slate-400 hover:text-slate-700">Reset example</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
