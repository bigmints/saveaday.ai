"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

const moments = [
  {
    name: "Discover",
    quote: "“I want to know quickly whether this business can help me.”",
    need: "The customer needs relevance",
    response: "Make the first answer useful, clear, and grounded in what your business actually offers.",
    cardTitle: "Be easy to understand",
    cardSubtitle: "Turn curiosity into genuine interest",
  },
  {
    name: "Choose",
    quote: "“I want clear options without calling just to understand the basics.”",
    need: "The customer needs confidence",
    response: "Help people compare the right options and decide without unnecessary uncertainty or delay.",
    cardTitle: "Be clear to choose",
    cardSubtitle: "Remove friction before the decision",
  },
  {
    name: "Act",
    quote: "“When I am ready, I want the next step to be obvious.”",
    need: "The customer needs momentum",
    response: "Let interest become a booking or a useful enquiry while the customer is ready to move.",
    cardTitle: "Be simple to act on",
    cardSubtitle: "Make the next step feel natural",
  },
  {
    name: "Return",
    quote: "“When I come back, I do not want to explain everything again.”",
    need: "The customer needs continuity",
    response: "Give your team the context to continue the relationship in a way that feels personal and considered.",
    cardTitle: "Be worth returning to",
    cardSubtitle: "Make every interaction build on the last",
  },
];

export default function TabbedTestimonial() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = moments[activeIndex];

  return (
    <section id="for-customers" className="w-full scroll-mt-16 border-t border-slate-200/60 bg-[#fafafa] py-16 sm:scroll-mt-20 sm:py-24">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center px-4 sm:px-6 lg:px-12">
        <div className="mb-8 text-center sm:mb-10">
          <p className="text-[11px] font-bold text-slate-500 tracking-widest uppercase mb-4">For your customers</p>
          <h2 className="font-serif text-3xl sm:text-[40px] text-slate-900 leading-tight">
            A better experience for the people <br className="hidden sm:block" /> who choose your business
          </h2>
        </div>

        <div className="mb-10 grid w-full grid-cols-4 gap-1 sm:mb-20 sm:flex sm:w-auto sm:flex-wrap sm:justify-center sm:gap-2">
          {moments.map((moment, idx) => (
            <button
              key={moment.name}
              type="button"
              onClick={() => setActiveIndex(idx)}
              className={`min-h-11 rounded-full px-2 py-2.5 text-xs font-medium transition-colors sm:px-5 sm:text-sm ${
                activeIndex === idx ? "bg-[#3CA6A6] text-[#082B2B]" : "bg-slate-100 text-slate-600 hover:bg-[#74EFC3]/25"
              }`}
            >
              {moment.name}
            </button>
          ))}
        </div>

        <div className="grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-24">
          <div className="flex flex-col">
            <h3 className="mb-6 font-serif text-2xl leading-[1.3] text-slate-900 sm:mb-10 sm:text-3xl lg:text-[34px]">
              {active.quote}
            </h3>
            <div>
              <p className="font-medium text-slate-900 text-sm mb-1">{active.need}</p>
              <p className="text-slate-500 text-sm leading-6 max-w-lg">{active.response}</p>
            </div>

            <div className="mt-8 flex items-center gap-4 sm:mt-12">
              <div className="flex gap-2">
                {moments.map((moment, idx) => (
                  <div key={moment.name} className={`w-8 h-0.5 ${idx === activeIndex ? "bg-[#3CA6A6]" : "bg-slate-200"}`} />
                ))}
              </div>
              <span className="text-xs text-slate-500 font-medium">{activeIndex + 1} / {moments.length}</span>
            </div>
          </div>

          <div className="ml-auto flex aspect-[4/3] w-full max-w-[500px] flex-col items-center justify-center rounded-xl border border-[#3CA6A6]/15 bg-[#74EFC3]/15 p-8 text-center sm:p-12 lg:p-20">
            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-5">{active.name}</p>
            <h4 className="mb-5 font-serif text-[28px] text-slate-900 sm:mb-6 sm:text-4xl">{active.cardTitle}</h4>
            <a href="#impact" className="flex min-h-11 items-center justify-center text-xs font-medium text-slate-600 transition-colors hover:text-slate-900 sm:text-sm">
              {active.cardSubtitle} <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
