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
    <section id="for-customers" className="w-full bg-[#fafafa] py-24 border-t border-slate-200/60 scroll-mt-20">
      <div className="w-full max-w-[1200px] mx-auto px-6 lg:px-12 flex flex-col items-center">
        <div className="text-center mb-10">
          <p className="text-[11px] font-bold text-slate-500 tracking-widest uppercase mb-4">For your customers</p>
          <h2 className="font-serif text-3xl sm:text-[40px] text-slate-900 leading-tight">
            A better experience for the people <br className="hidden sm:block" /> who choose your business
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-16 sm:mb-20">
          {moments.map((moment, idx) => (
            <button
              key={moment.name}
              type="button"
              onClick={() => setActiveIndex(idx)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-colors ${
                activeIndex === idx ? "bg-[#3CA6A6] text-[#082B2B]" : "bg-slate-100 text-slate-600 hover:bg-[#74EFC3]/25"
              }`}
            >
              {moment.name}
            </button>
          ))}
        </div>

        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="flex flex-col">
            <h3 className="font-serif text-2xl sm:text-3xl lg:text-[34px] leading-[1.3] text-slate-900 mb-10">
              {active.quote}
            </h3>
            <div>
              <p className="font-medium text-slate-900 text-sm mb-1">{active.need}</p>
              <p className="text-slate-500 text-sm leading-6 max-w-lg">{active.response}</p>
            </div>

            <div className="flex items-center gap-4 mt-12">
              <div className="flex gap-2">
                {moments.map((moment, idx) => (
                  <div key={moment.name} className={`w-8 h-0.5 ${idx === activeIndex ? "bg-[#3CA6A6]" : "bg-slate-200"}`} />
                ))}
              </div>
              <span className="text-xs text-slate-500 font-medium">{activeIndex + 1} / {moments.length}</span>
            </div>
          </div>

          <div className="bg-[#74EFC3]/15 border border-[#3CA6A6]/15 rounded-xl p-10 sm:p-12 lg:p-20 flex flex-col justify-center items-center text-center aspect-[4/3] w-full max-w-[500px] ml-auto">
            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-5">{active.name}</p>
            <h4 className="font-serif text-3xl sm:text-4xl text-slate-900 mb-6">{active.cardTitle}</h4>
            <a href="#impact" className="flex items-center text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
              {active.cardSubtitle} <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
