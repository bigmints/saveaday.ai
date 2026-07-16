import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { ArrowRight, BookOpen, Bot, Building2, CalendarDays, UsersRound } from "lucide-react";

import DocsShell from "@/components/docs/DocsShell";
import { docHref, docsNavigation, getDocPage } from "@/lib/docs-content";

const startingPoints = [
  { slug: "getting-started", title: "Set up SaveADay", description: "Build the foundations of your workspace and publish the first customer experience.", icon: BookOpen },
  { slug: "chat", title: "Work with Chat", description: "Ask for summaries and complete work across your business in plain language.", icon: Bot },
  { slug: "bookings", title: "Take bookings", description: "Connect services, staff, assets, and availability to manage appointments.", icon: CalendarDays },
];

const DocsHome: NextPage = () => {
  return (
    <>
      <Head>
        <title>SaveADay Documentation</title>
        <meta name="description" content="Learn how to set up SaveADay, operate your workspace, and publish customer experiences." />
        <link rel="canonical" href="https://www.saveaday.ai/docs/" />
      </Head>
      <DocsShell>
        <div className="mx-auto max-w-4xl">
          <section className="border-b border-[#e1eae7] pb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#168c7f]">SaveADay documentation</p>
            <h1 className="mt-4 max-w-3xl font-serif text-5xl font-medium leading-[1.05] tracking-[-0.035em] text-[#102d28] sm:text-6xl">Run your business with less chasing.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5c706c]">Practical guides for setting up your workspace, handling daily work, and giving customers clear ways to act.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href={docHref("getting-started")} className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-[#147d72] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#0f6c63]">
                Start here <ArrowRight className="h-4 w-4" />
              </Link>
              <a href="https://app.saveaday.ai" className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-[#cfdeda] bg-white px-5 py-2.5 text-sm font-semibold text-[#245049] transition hover:border-[#9ecfc5]">
                Open SaveADay
              </a>
            </div>
          </section>

          <section className="py-12">
            <h2 className="font-serif text-3xl font-medium tracking-[-0.02em] text-[#143a34]">Popular starting points</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {startingPoints.map(({ slug, title, description, icon: Icon }) => (
                <Link key={slug} href={docHref(slug)} className="group rounded-2xl border border-[#dfe9e6] bg-white p-5 transition hover:-translate-y-0.5 hover:border-[#9ecfc5] hover:shadow-[0_14px_35px_-24px_rgba(20,85,74,0.45)]">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#e5f5f0] text-[#147d72]"><Icon className="h-5 w-5" /></span>
                  <h3 className="mt-5 font-semibold text-[#173d38] group-hover:text-[#147d72]">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#647672]">{description}</p>
                  <span className="mt-5 flex items-center gap-1 text-sm font-medium text-[#147d72]">Read guide <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" /></span>
                </Link>
              ))}
            </div>
          </section>

          <section className="border-t border-[#e1eae7] py-12">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#168c7f]">All guides</p>
                <h2 className="mt-2 font-serif text-3xl font-medium tracking-[-0.02em] text-[#143a34]">Browse by what you need to do</h2>
              </div>
              <div className="hidden items-center gap-2 text-[#88a09b] sm:flex"><Building2 className="h-5 w-5" /><UsersRound className="h-5 w-5" /></div>
            </div>
            <div className="mt-8 grid gap-x-10 gap-y-10 md:grid-cols-2">
              {docsNavigation.map((group) => (
                <div key={group.title}>
                  <h3 className="border-b border-[#dfe9e6] pb-3 text-sm font-semibold text-[#173d38]">{group.title}</h3>
                  <ul className="mt-2">
                    {group.pages.map((navPage) => {
                      const page = getDocPage(navPage.slug);
                      return (
                        <li key={navPage.slug}>
                          <Link href={docHref(navPage.slug)} className="group flex items-start justify-between gap-4 rounded-lg px-2 py-3 transition hover:bg-[#f0f6f4]">
                            <span>
                              <span className="block text-sm font-medium text-[#315650] group-hover:text-[#147d72]">{navPage.title}</span>
                              {page ? <span className="mt-1 block text-xs leading-5 text-[#78908b]">{page.description}</span> : null}
                            </span>
                            <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-[#a2b3af] group-hover:text-[#147d72]" />
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-6 rounded-2xl bg-[#0c2d29] px-6 py-8 text-white sm:flex sm:items-center sm:justify-between sm:px-8">
            <div>
              <h2 className="font-serif text-2xl font-medium">Can’t find what you need?</h2>
              <p className="mt-2 text-sm text-white/65">Send us the task you are trying to complete.</p>
            </div>
            <a href="mailto:hello@saveaday.ai" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#74efc3] sm:mt-0">Contact support <ArrowRight className="h-4 w-4" /></a>
          </section>
        </div>
      </DocsShell>
    </>
  );
};

export default DocsHome;
