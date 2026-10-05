import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE_URL } from "@/lib/site";
export default function PageShell({ title, description, path, children }: { title: string; description: string; path: string; children: React.ReactNode }) {
  return <><Head><title>{title} · Saveaday</title><meta name="description" content={description} /><link rel="canonical" href={`${SITE_URL}${path}`} /><meta property="og:title" content={`${title} · Saveaday`} /><meta property="og:description" content={description} /><meta property="og:url" content={`${SITE_URL}${path}`} /><meta property="og:image" content={`${SITE_URL}/images/hero_bg.jpg`} /><meta property="og:type" content="website" /></Head><Header /><main id="main">{children}</main><Footer /></>;
}
