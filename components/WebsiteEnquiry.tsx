import Link from 'next/link';
import { ArrowUpRight, Mail } from 'lucide-react';
import PageShell from '@/components/PageShell';
import { CONTACT_EMAIL } from '@/lib/site';
import { websiteForms } from '@/lib/website-forms';
import styles from './WebsiteEnquiry.module.css';

export default function WebsiteEnquiry({kind}: {kind: 'contact' | 'demo'}) {
  const demo = kind === 'demo';
  const title = demo ? 'Request a demo' : 'Contact us';
  const url = websiteForms[kind];
  return <PageShell title={title} description={demo ? 'Request a Saveaday demo focused on your business, enquiries and everyday work.' : 'Contact the Saveaday team with questions, feedback or partnership enquiries.'} path={`/${kind}/`}>
    <section className={styles.page}>
      <div className={styles.layout}>
        <div className={styles.intro}>
          <p className={styles.eyebrow}>{demo ? 'LET’S SEE HOW SAVEADAY FITS' : 'LET’S TALK'}</p>
          <h1>{demo ? <>A simpler working day.<br /><em>Starting with your team.</em></> : <>What’s on<br /><em>your mind?</em></>}</h1>
          <p className={styles.lead}>{demo ? 'Tell us what takes up too much time. Let’s explore how Saveaday could help with enquiries, bookings and the requests that need chasing.' : 'Questions about Saveaday, help getting started, or an idea to share — send a message to the team.'}</p>
          <a href="#enquiry-form" className={styles.jump}>{demo ? 'Request a demo' : 'Write your message'} ↓</a>
          <div className={styles.next}>
            <h2>{demo ? 'What happens next?' : 'Your message reaches the team.'}</h2>
            <p>{demo ? 'We’ll review your request and reply by email to discuss a demo. A time is not confirmed by submitting this form.' : 'We’ll use your email to respond to this enquiry. Please leave out passwords and sensitive client information.'}</p>
          </div>
          <Link href={demo ? '/contact/' : '/demo/'} className={styles.other}>{demo ? 'Just have a question? Contact us' : 'Want to see it in action? Request a demo'} <ArrowUpRight size={17} aria-hidden="true" /></Link>
          <a className={styles.email} href={`mailto:${CONTACT_EMAIL}`}><Mail size={16} aria-hidden="true" />{CONTACT_EMAIL}</a>
          <p className={styles.company}>Saveaday is a product of Uvega FZE LLC.</p>
        </div>
        <section id="enquiry-form" tabIndex={-1} className={styles.card} aria-label={`${title} form`}>
          <iframe src={url} title={`${title} — Saveaday`} className={demo ? styles.demoFrame : styles.contactFrame} referrerPolicy="strict-origin-when-cross-origin" />
          <div className={styles.help}>
            <p>Form not loading? <a href={url} target="_blank" rel="noopener noreferrer">Open it in a new tab ↗</a></p>
            <p>Your details are stored for the team to respond to this enquiry. This does not subscribe you to marketing.</p>
            <Link href="/privacy/">Privacy and deletion requests</Link>
          </div>
        </section>
      </div>
    </section>
  </PageShell>;
}
