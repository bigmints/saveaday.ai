import PageShell from "@/components/PageShell";
import { CONTACT_EMAIL } from "@/lib/site";

export default function SupportPage() {
  return <PageShell title="Relay support" description="Help with access codes, organizations, messages and media in Saveaday Relay." path="/support/">
    <section className="bg-[#071c1a] px-5 pb-16 pt-36 text-white sm:px-8 lg:px-12"><div className="mx-auto max-w-[1304px]"><p className="eyebrow !text-[#74EFC3]">Saveaday Relay</p><h1 className="mt-5 font-serif text-5xl">Help with your messages.</h1><p className="mt-6 max-w-2xl text-white/70">Get back to reporting and following up with your team.</p></div></section>
    <section className="bg-[#f7faf9] px-5 py-16 sm:px-8 lg:px-12"><div className="mx-auto max-w-3xl space-y-8 text-base leading-8 text-[#4d6460]">
      <article><h2 className="font-serif text-3xl text-[#18332f]">Access and organizations</h2><p className="mt-4">Your organization provides your Relay address and six digit access code. If a code is missing, expired or revoked, ask your organization’s administrator for a new one. If you belong to more than one organization, add each organization with its code and choose the one you want before sending a report.</p></article>
      <article><h2 className="font-serif text-3xl text-[#18332f]">Messages, photos and voice notes</h2><p className="mt-4">Check your connection if a message does not send. Allow camera, photo or microphone access when your device asks for it, and retry from the conversation if an upload fails. For a service issue that needs urgent attention, use your organization’s normal urgent contact path.</p></article>
      <article><h2 className="font-serif text-3xl text-[#18332f]">Contact support</h2><p className="mt-4">Email <a href={`mailto:${CONTACT_EMAIL}?subject=Saveaday%20Relay%20support`} className="font-semibold text-[#18332f] underline">{CONTACT_EMAIL}</a> with your organization name, device type and a short description of the problem. Do not include your access code or confidential report content in the email.</p></article>
    </div></section>
  </PageShell>;
}
