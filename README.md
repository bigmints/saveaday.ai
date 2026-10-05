# Saveaday website

Copied from the existing `bigmints/saveaday.ai` website on 2026-10-05, retaining its mark, photography, mint/black palette and typography. This is the canonical website source for the new Saveaday service-request intake product.

- `npm ci`
- `npm run dev` — port 3009
- `npm run build` — static export in `out/`

Publish the static export to the existing GitHub Pages site. `saveaday.ai` redirects to `www.saveaday.ai`, matching the existing Pages domain. Set `NEXT_PUBLIC_APP_URL` at build time to change the sign-in destination; its default is the existing verified production dashboard. Demo requests open an email to hello@saveaday.ai; no lead-storage service or public signup is claimed.

Canonical scope: [Saveaday rebrand specification](../../.factory/product/specs/saveaday-rebrand.md). Legacy website source and Git history remain in the original repository.
