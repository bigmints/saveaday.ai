import Link from "next/link";
import { ArrowLeft, ArrowRight, Info } from "lucide-react";

import { docHref, docs, type DocPage } from "@/lib/docs-content";

export default function DocsArticle({ page }: { page: DocPage }) {
  const index = docs.findIndex((item) => item.slug === page.slug);
  const previous = index > 0 ? docs[index - 1] : undefined;
  const next = index < docs.length - 1 ? docs[index + 1] : undefined;

  return (
    <article className="mx-auto max-w-3xl">
      <div className="border-b border-[#e1eae7] pb-9">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#168c7f]">{page.category}</p>
        <h1 className="mt-3 font-serif text-4xl font-medium leading-[1.08] tracking-[-0.03em] text-[#102d28] sm:text-5xl">{page.title}</h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-[#5c706c]">{page.description}</p>
        <p className="mt-4 text-xs text-[#8a9b98]">{page.readTime}</p>
      </div>

      <div className="space-y-14 py-10">
        {page.sections.map((section) => (
          <section id={section.id} key={section.id} className="scroll-mt-28">
            <h2 className="font-serif text-3xl font-medium tracking-[-0.02em] text-[#143a34]">{section.title}</h2>
            {section.intro ? <p className="mt-4 text-base leading-8 text-[#506762]">{section.intro}</p> : null}
            {section.steps ? (
              <ol className="mt-6 space-y-5">
                {section.steps.map((step, stepIndex) => (
                  <li key={step.title} className="grid grid-cols-[32px_minmax(0,1fr)] gap-4">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#dff3ed] text-sm font-semibold text-[#0f7469]">{stepIndex + 1}</span>
                    <div className="pt-0.5">
                      <h3 className="font-semibold text-[#173d38]">{step.title}</h3>
                      <p className="mt-1.5 leading-7 text-[#5c706c]">{step.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            ) : null}
            {section.bullets ? (
              <ul className="mt-5 space-y-3">
                {section.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3 leading-7 text-[#5c706c]">
                    <span className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#24a28f]" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            ) : null}
            {section.note ? (
              <div className="mt-6 flex gap-3 rounded-xl border border-[#cfe7e0] bg-[#eef8f5] p-4 text-sm leading-6 text-[#345a53]">
                <Info className="mt-0.5 h-4 w-4 shrink-0 text-[#168c7f]" />
                <p>{section.note}</p>
              </div>
            ) : null}
          </section>
        ))}
      </div>

      <div className="grid gap-3 border-t border-[#e1eae7] pt-8 sm:grid-cols-2">
        {previous ? (
          <Link href={docHref(previous.slug)} className="group rounded-xl border border-[#dfe9e6] bg-white p-4 transition hover:border-[#9ecfc5]">
            <span className="flex items-center gap-1 text-xs text-[#78908b]"><ArrowLeft className="h-3.5 w-3.5" /> Previous</span>
            <span className="mt-2 block font-medium text-[#173d38] group-hover:text-[#147d72]">{previous.title}</span>
          </Link>
        ) : <div />}
        {next ? (
          <Link href={docHref(next.slug)} className="group rounded-xl border border-[#dfe9e6] bg-white p-4 text-right transition hover:border-[#9ecfc5]">
            <span className="flex items-center justify-end gap-1 text-xs text-[#78908b]">Next <ArrowRight className="h-3.5 w-3.5" /></span>
            <span className="mt-2 block font-medium text-[#173d38] group-hover:text-[#147d72]">{next.title}</span>
          </Link>
        ) : null}
      </div>

      <div className="mt-12 rounded-2xl bg-[#0c2d29] px-6 py-6 text-white sm:flex sm:items-center sm:justify-between sm:px-8">
        <div>
          <h2 className="text-lg font-semibold">Still need a hand?</h2>
          <p className="mt-1 text-sm text-white/65">Tell us what you were trying to do and where you got stuck.</p>
        </div>
        <a href="mailto:hello@saveaday.ai" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#74efc3] sm:mt-0">hello@saveaday.ai <ArrowRight className="h-4 w-4" /></a>
      </div>
    </article>
  );
}
