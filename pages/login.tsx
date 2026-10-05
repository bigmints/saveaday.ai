import { useEffect } from "react";
import PageShell from "@/components/PageShell";
import { APP_URL } from "@/lib/site";
export default function SignInPage() { useEffect(() => { window.location.replace(APP_URL); }, []); return <PageShell title="Sign in" description="Open the Saveaday account." path="/login/"><section className="min-h-[70svh] bg-[#071c1a] px-5 pb-20 pt-36 text-white"><div className="mx-auto max-w-3xl"><h1 className="font-serif text-5xl">Your Saveaday account.</h1><a href={APP_URL} className="mt-8 inline-flex bg-[#74EFC3] px-6 py-4 text-[#082B2B]">Continue to sign in</a></div></section></PageShell>; }
