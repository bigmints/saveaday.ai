import Link from "next/link";
import Head from "next/head";
import { ArrowRight } from "lucide-react";
import { SITE_URL } from "@/lib/site";
import HeroSection from "@/components/HeroSection";
import PageShell from "@/components/PageShell";
import BusinessUseCases from "@/components/BusinessUseCases";
import ProfessionalsSection from "@/components/ProfessionalsSection";
export default function HomePage() {
  return <PageShell title="AI for business enquiries, bookings & requests" description="Make appointment booking, business enquiries and everyday requests easier with Saveaday. Help your team respond faster, follow up with context and deliver better care." path="/">
    <Head><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org", "@graph": [
        { "@type": "Organization", "@id": `${SITE_URL}/#organization`, name: "Saveaday", url: SITE_URL, logo: `${SITE_URL}/logo.svg` },
        { "@type": "WebSite", "@id": `${SITE_URL}/#website`, name: "Saveaday", url: SITE_URL, inLanguage: "en", publisher: { "@id": `${SITE_URL}/#organization` } },
      ],
    }).replace(/</g, "\\u003c") }} /></Head>
    <HeroSection />
    <BusinessUseCases />
    <ProfessionalsSection />
    <section className="bg-[#f3edf6] px-5 py-14 sm:px-8 lg:px-12"><div className="mx-auto flex max-w-[1200px] flex-col justify-between gap-7 md:flex-row md:items-center"><h2 className="display-heading">Make space for<br /><em>a better working day.</em></h2><Link href="/contact/" className="inline-flex min-h-14 shrink-0 items-center justify-center gap-6 bg-[#211a26] px-7 py-4 text-sm font-semibold text-white hover:bg-[#302735]">See it for your business <ArrowRight size={18} aria-hidden="true" /></Link></div></section>
  </PageShell>;
}
