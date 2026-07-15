import Link from "next/link";
import Image from "next/image";
import { Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const groups = [
    {
      title: "Why SaveADay",
      links: [
        ["More opportunities", "/#for-business"],
        ["Less chasing", "/#for-business"],
        ["Better customer experience", "/#for-customers"],
        ["The impact", "/#impact"],
        ["Private AI", "/#private-ai"],
      ],
    },
    {
      title: "Customer journey",
      links: [
        ["Discover", "/#for-customers"],
        ["Choose", "/#for-customers"],
        ["Act", "/#for-customers"],
        ["Return", "/#for-customers"],
      ],
    },
    {
      title: "For",
      links: [
        ["Owners", "/#impact"],
        ["Teams", "/#impact"],
        ["Customers", "/#impact"],
      ],
    },
    {
      title: "Resources",
      links: [
        ["Documentation", "/docs"],
        ["Pricing", "/pricing"],
        ["Privacy", "/privacy"],
        ["Contact", "mailto:hello@saveaday.ai"],
      ],
    },
  ];

  return (
    <footer className="w-full border-t border-white/5 bg-[#111] pb-8 pt-16 text-white sm:pb-12 sm:pt-24">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-12">
        <div className="mb-14 grid grid-cols-2 gap-x-8 gap-y-10 sm:mb-24 lg:grid-cols-6 lg:gap-12">
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="mb-7 inline-flex items-center gap-3 font-bold text-[13px] tracking-widest uppercase sm:mb-12" aria-label="SaveADay home">
              <Image src="/logo.svg" alt="" width={40} height={40} className="h-9 w-9 rounded-xl sm:h-10 sm:w-10" />
              <span>SAVEADAY</span>
            </Link>

            <div className="max-w-xs text-[11px] text-[#888]">
              <p className="leading-6">Help more customers move forward while giving your team back the time usually lost to admin and follow-up.</p>
              <a href="mailto:hello@saveaday.ai" className="mt-8 inline-flex items-center gap-2 text-[#74EFC3]/80 hover:text-[#74EFC3] transition-colors">
                <Mail className="w-4 h-4" /> hello@saveaday.ai
              </a>
            </div>
          </div>

          {groups.map((group) => (
            <div key={group.title}>
              <h3 className="mb-3 text-[11px] font-medium text-white sm:mb-5">{group.title}</h3>
              <ul className="space-y-1 sm:space-y-3">
                {group.links.map(([label, href]) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="inline-flex min-h-8 items-center text-[11px] text-[#777] transition-colors hover:text-[#74EFC3]"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-7 text-[10px] text-[#666] sm:flex-row sm:items-center sm:pt-8">
          <p>© {currentYear} SaveADay. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <a href="mailto:hello@saveaday.ai" className="hover:text-white transition-colors">hello@saveaday.ai</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
