import type { NextPage } from "next";
import Head from "next/head";
import { ArrowRight, Building2, ExternalLink, Globe2, Mail, MessageSquareText } from "lucide-react";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

const CONTACT_EMAIL = "hello@saveaday.ai";

const ContactPage: NextPage = () => {
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
                Complete the form and our team will continue the conversation by email.
              </p>

              <div className="mt-8 overflow-hidden rounded-xl border border-[#dfe9e6] bg-white">
                <iframe
                  src="https://app.saveaday.ai/forms/cd098597-783c-42a8-9eaf-ac9547e3bf4b"
                  title="Contact Us"
                  width="100%"
                  height="640"
                  className="block w-full"
                  style={{ border: 0 }}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;
