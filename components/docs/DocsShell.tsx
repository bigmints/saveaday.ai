"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { ArrowUpRight, Menu, Search, X } from "lucide-react";

import { docHref, docs, docsNavigation, type DocSection } from "@/lib/docs-content";

type DocsShellProps = {
  activeSlug?: string;
  articleSections?: DocSection[];
  children: ReactNode;
};

export default function DocsShell({ activeSlug, articleSections, children }: DocsShellProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState("");
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const focusSearch = (event: KeyboardEvent) => {
      if (event.key !== "/" || event.metaKey || event.ctrlKey || event.altKey) return;
      const target = event.target as HTMLElement | null;
      if (target?.tagName === "INPUT" || target?.tagName === "TEXTAREA") return;
      event.preventDefault();
      searchRef.current?.focus();
    };
    window.addEventListener("keydown", focusSearch);
    return () => window.removeEventListener("keydown", focusSearch);
  }, []);

  const results = useMemo(() => {
    const needle = query.trim().toLowerCase();
    if (!needle) return [];
    return docs
      .filter((page) =>
        [page.title, page.description, page.category, ...page.keywords, ...page.sections.map((section) => section.title)]
          .join(" ")
          .toLowerCase()
          .includes(needle),
      )
      .slice(0, 6);
  }, [query]);

  const navigation = (
    <nav aria-label="Documentation navigation" className="space-y-7">
      <Link
        href="/docs/"
        onClick={() => setMenuOpen(false)}
        className={`block text-sm font-medium transition-colors ${!activeSlug ? "text-[#147d72]" : "text-[#4d615e] hover:text-[#147d72]"}`}
      >
        Documentation home
      </Link>
      {docsNavigation.map((group) => (
        <div key={group.title}>
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#8a9b98]">{group.title}</p>
          <ul className="space-y-0.5">
            {group.pages.map((page) => {
              const active = activeSlug === page.slug;
              return (
                <li key={page.slug}>
                  <Link
                    href={docHref(page.slug)}
                    onClick={() => setMenuOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className={`block rounded-md px-2.5 py-2 text-sm transition-colors ${
                      active ? "bg-[#e6f5f0] font-medium text-[#0b625a]" : "text-[#4d615e] hover:bg-[#f0f5f3] hover:text-[#173d38]"
                    }`}
                  >
                    {page.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </nav>
  );

  return (
    <div className="min-h-screen bg-[#fbfcfb] text-[#18332f]">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#071c1a] text-white">
        <div className="mx-auto flex h-16 max-w-[1500px] items-center gap-4 px-4 sm:px-6 lg:h-[72px] lg:px-8">
          <Link href="/" className="flex shrink-0 items-center gap-2.5" aria-label="SaveADay home">
            <Image src="/logo.svg" alt="" width={34} height={34} className="h-8 w-8 rounded-lg" priority />
            <span className="text-[13px] font-bold uppercase tracking-[0.14em]">SaveADay</span>
          </Link>
          <span className="hidden h-5 w-px bg-white/20 sm:block" />
          <Link href="/docs/" className="hidden text-sm text-white/75 transition hover:text-white sm:block">Documentation</Link>

          <div className="relative ml-auto w-full max-w-md">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/45" />
            <input
              ref={searchRef}
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search documentation"
              aria-label="Search documentation"
              className="h-10 w-full rounded-lg border border-white/15 bg-white/10 pl-9 pr-10 text-sm text-white outline-none placeholder:text-white/45 focus:border-[#74efc3]/60 focus:bg-white/15"
            />
            <kbd className="pointer-events-none absolute right-3 top-1/2 hidden -translate-y-1/2 rounded border border-white/15 px-1.5 py-0.5 text-[10px] text-white/45 sm:block">/</kbd>
            {query.trim() ? (
              <div className="absolute right-0 top-12 z-50 w-full overflow-hidden rounded-xl border border-[#dfe9e6] bg-white p-2 text-[#18332f] shadow-2xl">
                {results.length ? results.map((result) => (
                  <Link
                    key={result.slug}
                    href={docHref(result.slug)}
                    onClick={() => setQuery("")}
                    className="block rounded-lg px-3 py-2.5 hover:bg-[#f1f6f4]"
                  >
                    <span className="block text-sm font-medium">{result.title}</span>
                    <span className="mt-0.5 block truncate text-xs text-[#647672]">{result.description}</span>
                  </Link>
                )) : <p className="px-3 py-4 text-sm text-[#647672]">No documentation found.</p>}
              </div>
            ) : null}
          </div>

          <Link href="https://app.saveaday.ai" className="hidden shrink-0 items-center gap-1 text-sm text-white/75 transition hover:text-white md:flex">
            Open SaveADay <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
          <button
            type="button"
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/15 lg:hidden"
            aria-label={menuOpen ? "Close documentation menu" : "Open documentation menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      {menuOpen ? (
        <div className="fixed inset-x-0 bottom-0 top-16 z-40 overflow-y-auto border-t border-[#dfe9e6] bg-white p-6 lg:hidden">
          {navigation}
          <Link href="https://app.saveaday.ai" className="mt-8 flex items-center gap-1 border-t border-[#dfe9e6] pt-6 text-sm font-medium text-[#147d72]">
            Open SaveADay <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      ) : null}

      <div className="mx-auto grid max-w-[1500px] lg:grid-cols-[250px_minmax(0,1fr)] xl:grid-cols-[250px_minmax(0,1fr)_210px]">
        <aside className="hidden border-r border-[#e4ece9] bg-white px-6 py-10 lg:block">
          <div className="sticky top-28">{navigation}</div>
        </aside>

        <main className="min-w-0 px-5 py-10 sm:px-8 lg:px-12 lg:py-14 xl:px-16">{children}</main>

        <aside className="hidden border-l border-[#e4ece9] px-6 py-12 xl:block">
          <div className="sticky top-28">
            {articleSections?.length ? (
              <>
                <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#8a9b98]">On this page</p>
                <nav aria-label="On this page">
                  <ul className="space-y-2.5">
                    {articleSections.map((section) => (
                      <li key={section.id}>
                        <a href={`#${section.id}`} className="text-sm leading-5 text-[#647672] transition hover:text-[#147d72]">{section.title}</a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </>
            ) : (
              <div className="rounded-xl border border-[#dfe9e6] bg-white p-4">
                <p className="text-sm font-medium">Need help?</p>
                <p className="mt-1 text-xs leading-5 text-[#647672]">Tell us what you were trying to do.</p>
                <a href="mailto:hello@saveaday.ai" className="mt-3 inline-block text-sm font-medium text-[#147d72]">Contact support</a>
              </div>
            )}
          </div>
        </aside>
      </div>
    </div>
  );
}
