import { useEffect } from "react";
import PageShell from "@/components/PageShell";
import { APP_URL } from "@/lib/site";
export default function SignInPage() { useEffect(() => { window.location.replace(APP_URL); }, []); return <PageShell title="Sign in" description="Open the Saveaday account." path="/login/"><section className="min-h-[70svh] bg-[#211a26] px-5 pb-20 pt-36 text-white"><div className="mx-auto max-w-3xl"><h1 className="font-serif text-5xl">Your Saveaday account.</h1><a href={APP_URL} className="mt-8 inline-flex bg-[#f69a39] px-6 py-4 text-[#261d2c]">Continue to sign in</a></div></section></PageShell>; }
