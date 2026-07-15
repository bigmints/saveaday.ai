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
    <footer className="w-full bg-[#111] text-white pt-24 pb-12 border-t border-white/5">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12 mb-24">
          <div className="lg:col-span-2">
            <Link href="/" className="mb-12 inline-flex items-center gap-3 font-bold text-[13px] tracking-widest uppercase" aria-label="SaveADay home">
              <Image src="/logo.svg" alt="" width={40} height={40} className="h-10 w-10 rounded-xl" />
              <span>SAVEADAY</span>
            </Link>

            <div className="text-[#888] text-[11px] mb-8 max-w-xs">
              <p className="leading-6">Help more customers move forward while giving your team back the time usually lost to admin and follow-up.</p>
              <a href="mailto:hello@saveaday.ai" className="mt-8 inline-flex items-center gap-2 text-[#74EFC3]/80 hover:text-[#74EFC3] transition-colors">
                <Mail className="w-4 h-4" /> hello@saveaday.ai
              </a>
            </div>
          </div>

          {groups.map((group) => (
            <div key={group.title}>
              <h3 className="text-[11px] font-medium text-white mb-5">{group.title}</h3>
              <ul className="space-y-3">
                {group.links.map(([label, href]) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-[11px] text-[#777] hover:text-[#74EFC3] transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-white/10 pt-8 text-[10px] text-[#666]">
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
