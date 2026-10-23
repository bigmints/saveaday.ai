# Website enquiries

`/contact/` and `/demo/` embed separately published Forms from the dedicated Saveaday Front Desk at `app.saveaday.ai`. The URLs in `lib/website-forms.ts` are public share links, not credentials. `WebsiteEnquiry` shares the responsive page layout and preserves a standalone-form fallback, email alternative and privacy link.

Both forms target the shared `leads.create` destination in the new Saveaday instance. Required fields are name, email, message and explicit permission to reply about this enquiry. Demo adds optional business/practice and preferred time/timezone. Consent and optional answers are retained in the source submission linked from the Lead. Distinct source values identify `/contact` and `/demo`. Submission acknowledges receipt and does not book a demo or subscribe the visitor to marketing.

Forms allow embedding by `https://www.saveaday.ai` and `https://saveaday.ai`. They intentionally refuse other origins, including localhost previews. The app iframe submits to its own same-origin endpoint; no administrative API credentials or custom website receiver are involved. Existing support/callback forms and chat routing remain available.

Build verification: `npm ci`, `npm run build`, then `npm run typecheck`. Next generates `next-env.d.ts` during the first build in a fresh checkout. Production acceptance also requires actual submissions from the deployed website and checking the resulting Leads in `app.saveaday.ai`.
