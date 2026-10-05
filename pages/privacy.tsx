import PageShell from "@/components/PageShell";
import { CONTACT_EMAIL } from "@/lib/site";

export default function PrivacyPage() {
  return <PageShell title="Privacy and data" description="How Saveaday handles website visits and Relay app reports." path="/privacy/">
    <section className="bg-[#071c1a] px-5 pb-16 pt-36 text-white sm:px-8 lg:px-12"><div className="mx-auto max-w-[1304px]"><p className="eyebrow !text-[#74EFC3]">Privacy and data</p><h1 className="mt-5 font-serif text-5xl">Know where your details go.</h1></div></section>
    <section className="bg-[#f7faf9] px-5 py-16 sm:px-8 lg:px-12"><div className="mx-auto max-w-3xl space-y-8 text-base leading-8 text-[#4d6460]">
      <article><h2 className="font-serif text-3xl text-[#18332f]">Saveaday Relay</h2>
        <p className="mt-4">Your organization provides the Relay address and access code. The app exchanges the code for a session and keeps its token and your selected organization on your device. It sends your messages, photos and voice notes to that organization’s Relay service so authorized people can review and respond.</p>
        <p className="mt-4">The service keeps the conversation and attachments sent by the app. Voice notes may be transcribed, and report details may be translated or summarized to prepare a written request. Your organization may use service providers for those steps. Saveaday Relay does not include Firebase or an in-app analytics SDK.</p>
        <p className="mt-4">Your organization controls access to its reports and determines how long they are kept. Clearing a conversation in the app removes its local display; it does not delete the organization’s server record. Ask your organization to access, correct or delete your report or account. You can also contact us for help routing a request.</p>
      </article>
      <article><h2 className="font-serif text-3xl text-[#18332f]">Other messaging services</h2><p className="mt-4">If you send a report through another messaging service, such as WhatsApp, that service also handles your message under its own privacy terms.</p></article>
      <article><h2 className="font-serif text-3xl text-[#18332f]">Website visits and demos</h2><p className="mt-4">This public website uses Google Analytics to understand page visits. The demo link opens a draft in your email app; nothing is sent until you send it. Website analytics are separate from the Relay app.</p></article>
      <article><h2 className="font-serif text-3xl text-[#18332f]">Contact</h2><p className="mt-4">Saveaday is a product of Uvega FZE LLC. For privacy questions or help with a request, email <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold text-[#18332f] underline">{CONTACT_EMAIL}</a>.</p></article>
    </div></section>
  </PageShell>;
}
