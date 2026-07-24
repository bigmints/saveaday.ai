import { useState, type FormEvent } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { ArrowRight, Building2, ExternalLink, Globe2, Mail, MessageSquareText } from "lucide-react";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

const CONTACT_EMAIL = "hello@saveaday.ai";

const fieldClassName =
  "mt-2 min-h-12 w-full rounded-lg border border-[#d9e5e2] bg-white px-3.5 py-2.5 text-sm text-[#18332f] outline-none transition placeholder:text-[#91a29e] focus:border-[#3CA6A6] focus:ring-3 focus:ring-[#3CA6A6]/20";

const ContactPage: NextPage = () => {
  const [prepared, setPrepared] = useState(false);

  const prepareEmail = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const company = String(data.get("company") ?? "").trim();
    const topic = String(data.get("topic") ?? "General enquiry").trim();
    const message = String(data.get("message") ?? "").trim();

    const subject = `SaveADay enquiry: ${topic}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      company ? `Company: ${company}` : null,
      `Topic: ${topic}`,
      "",
      message,
    ]
      .filter((line): line is string => line !== null)
      .join("\n");

    setPrepared(true);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="min-h-screen bg-[#f7faf9]">
      <Head>
        <title>Contact SaveADay</title>
        <meta
          name="description"
          content="Contact SaveADay for product questions, pricing, partnerships, or support. SaveADay is a product of Uvega FZE LLC."
        />
        <link rel="canonical" href="https://www.saveaday.ai/contact/" />
      </Head>

      <Header />

      <main className="text-[#18332f]">
        <section className="bg-[#071c1a] px-4 pb-16 pt-32 text-white sm:px-6 sm:pb-20 sm:pt-36 lg:px-12">
          <div className="mx-auto max-w-[1200px]">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#74EFC3]">Contact us</p>
            <h1 className="mt-5 max-w-3xl font-serif text-[44px] leading-[1.06] tracking-[-0.025em] sm:text-6xl">
              Let&apos;s make the next step easier.
            </h1>
            <p className="mt-6 max-w-2xl text-[15px] leading-7 text-white/70 sm:text-base">
              Tell us what you are trying to improve for your business or customers. We will continue the conversation by email.
            </p>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-12">
          <div className="mx-auto grid max-w-[1200px] gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-12">
            <aside className="order-2 rounded-2xl bg-[#0c2d29] p-6 text-white sm:p-8 lg:order-1">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#74EFC3]">Business information</p>
              <h2 className="mt-4 font-serif text-3xl leading-tight">SaveADay by Uvega FZE LLC</h2>
              <p className="mt-4 text-sm leading-7 text-white/65">
                Product, pricing, partnership, and company enquiries can all start here.
              </p>

              <dl className="mt-8 divide-y divide-white/10 border-y border-white/10">
                <div className="flex gap-4 py-5">
                  <Building2 className="mt-0.5 h-5 w-5 shrink-0 text-[#74EFC3]" />
                  <div>
                    <dt className="text-xs text-white/45">Registered company</dt>
                    <dd className="mt-1 text-sm font-medium">Uvega FZE LLC</dd>
                  </div>
                </div>
                <div className="flex gap-4 py-5">
                  <MessageSquareText className="mt-0.5 h-5 w-5 shrink-0 text-[#74EFC3]" />
                  <div>
                    <dt className="text-xs text-white/45">Product</dt>
                    <dd className="mt-1 text-sm font-medium">SaveADay</dd>
                  </div>
                </div>
                <div className="flex gap-4 py-5">
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-[#74EFC3]" />
                  <div>
                    <dt className="text-xs text-white/45">General enquiries</dt>
                    <dd className="mt-1">
                      <a className="inline-flex min-h-11 items-center text-sm font-medium text-white hover:text-[#74EFC3]" href={`mailto:${CONTACT_EMAIL}`}>
                        {CONTACT_EMAIL}
                      </a>
                    </dd>
                  </div>
                </div>
                <div className="flex gap-4 py-5">
                  <Globe2 className="mt-0.5 h-5 w-5 shrink-0 text-[#74EFC3]" />
                  <div>
                    <dt className="text-xs text-white/45">Online</dt>
                    <dd className="mt-2 flex flex-col gap-2 text-sm">
                      <a className="inline-flex min-h-11 items-center gap-1.5 font-medium hover:text-[#74EFC3]" href="https://www.saveaday.ai">
                        www.saveaday.ai <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                      <a className="inline-flex min-h-11 items-center gap-1.5 font-medium hover:text-[#74EFC3]" href="https://app.saveaday.ai">
                        app.saveaday.ai <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    </dd>
                  </div>
                </div>
              </dl>

              <div className="mt-7 rounded-xl border border-white/10 bg-white/[0.05] p-4">
                <p className="text-sm font-medium">Already using SaveADay?</p>
                <p className="mt-1 text-xs leading-5 text-white/55">Track product support from inside your workspace.</p>
                <a
                  href="https://app.saveaday.ai/business/support"
                  className="mt-3 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-[#74EFC3]"
                >
                  Open support <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </aside>

            <div className="order-1 rounded-2xl border border-[#dfe9e6] bg-white p-6 shadow-[0_24px_60px_-42px_rgba(15,64,55,0.35)] sm:p-8 lg:order-2">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#168c7f]">Send an enquiry</p>
              <h2 className="mt-3 font-serif text-3xl leading-tight text-[#143a34]">Tell us what you need.</h2>
              <p className="mt-3 text-sm leading-6 text-[#647672]">
                Complete the form and we will prepare an email with your details ready to send.
              </p>

              <form className="mt-8 space-y-5" onSubmit={prepareEmail}>
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="text-sm font-medium text-[#294d47]">
                    Name
                    <input className={fieldClassName} name="name" autoComplete="name" required />
                  </label>
                  <label className="text-sm font-medium text-[#294d47]">
                    Work email
                    <input className={fieldClassName} name="email" type="email" autoComplete="email" required />
                  </label>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="text-sm font-medium text-[#294d47]">
                    Company <span className="font-normal text-[#82938f]">(optional)</span>
                    <input className={fieldClassName} name="company" autoComplete="organization" />
                  </label>
                  <label className="text-sm font-medium text-[#294d47]">
                    What can we help with?
                    <select className={fieldClassName} name="topic" defaultValue="Product question">
                      <option>Product question</option>
                      <option>Sales and pricing</option>
                      <option>Partnership</option>
                      <option>Support</option>
                      <option>Other</option>
                    </select>
                  </label>
                </div>

                <label className="block text-sm font-medium text-[#294d47]">
                  Message
                  <textarea
                    className={`${fieldClassName} min-h-40 resize-y`}
                    name="message"
                    placeholder="Share the outcome you are looking for and any useful context."
                    required
                  />
                </label>

                {prepared ? (
                  <div className="rounded-lg border border-[#bfe4d9] bg-[#eef8f5] p-4 text-sm leading-6 text-[#345a53]" role="status">
                    Your email app should open with the message ready. If it does not, email us directly at{" "}
                    <a className="font-semibold underline underline-offset-2" href={`mailto:${CONTACT_EMAIL}`}>
                      {CONTACT_EMAIL}
                    </a>
                    .
                  </div>
                ) : null}

                <div className="flex flex-col gap-4 border-t border-[#e5ecea] pt-5 sm:flex-row sm:items-center sm:justify-between">
                  <p className="max-w-sm text-xs leading-5 text-[#78908b]">
                    This opens your email app. Your information is not sent to a third-party form service.
                  </p>
                  <button
                    type="submit"
                    className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-[#3CA6A6] px-5 py-3 text-sm font-semibold text-[#082B2B] transition hover:bg-[#74EFC3] sm:w-auto"
                  >
                    Open email app <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </form>

              <p className="mt-5 text-xs leading-5 text-[#78908b]">
                By contacting us, you agree that we may use the information you provide to respond to your enquiry. Read our{" "}
                <Link className="font-medium text-[#147d72] hover:underline" href="/privacy/">
                  privacy information
                </Link>
                .
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;
