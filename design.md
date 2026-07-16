# SaveADay Design System

- Status: canonical cross-product design specification
- Version: 1.0
- Updated: 2026-07-16
- Applies to: `saveaday.ai`, `saveaday-v2/apps/web`, and future SaveADay web surfaces

This document is the source of truth for SaveADay's visual language and product UI behavior. The marketing website expresses the brand more dramatically. The application uses the same foundations through shadcn semantic tokens and denser, task-oriented compositions.

If implementation and this document disagree, update the implementation or intentionally revise this document. Do not create a third interpretation inside a page or feature.

## 1. Product character

SaveADay should feel:

- Calm: the interface reduces pressure and makes the next step obvious.
- Human: language describes customer and business outcomes, not internal technology.
- Capable: dense operational work remains clear without looking clinical.
- Trustworthy: state, ownership, and consequences are explicit.
- Considered: typography and spacing create hierarchy; decoration never substitutes for it.

### Design principles

1. Lead with value. Explain what becomes easier for the business or customer before explaining how it works.
2. Make the next action obvious. Each view should have one dominant next step.
3. Prefer shared patterns. In the app, extend shadcn primitives and SaveADay compositions before creating a bespoke component.
4. Keep operational UI quiet. Tables, forms, sidebars, and dialogs should use semantic tokens, subtle borders, and limited shadow.
5. Be mobile-first. A 320 px viewport is a supported layout, not an edge case.
6. Use progressive disclosure. Show essential information first; place advanced settings behind a detail view, dialog, or disclosure.
7. Remove jargon and ornamental UI. Every label, icon, badge, and panel must help the user understand or act.

## 2. System architecture

The system has three layers.

### Brand primitives

Stable identity values shared by every SaveADay surface: logo, brand colors, fonts, and voice.

### Semantic tokens

Purpose-based values such as `primary`, `muted`, `border`, and `destructive`. Application components must consume these tokens instead of hardcoded brand hex values.

### Components and compositions

- Primitives: shadcn components in `apps/web/components/ui`.
- Product compositions: `AppShell`, `ModulePage`, `ModuleTableCard`, `ModuleFormDialog`, `PageHeader`, `StatusBadge`, and future shared patterns.
- Marketing compositions: hero, outcome cards, customer journey, proof, and CTA sections.

## 3. Brand assets

### Logo

Canonical asset: `logo.svg`.

- Website: `public/logo.svg`
- App: `saveaday-v2/apps/web/public/logo.svg`
- The two files must remain visually identical.
- Use the supplied artwork without redrawing, recoloring, stretching, cropping, or adding effects.
- Keep clear space around the mark equal to at least 25% of its rendered width.
- Minimum symbol size is 28 px. Standard header size is 32 px; footer size is 36–40 px; auth/empty-state feature size is 48 px.
- The wordmark is uppercase `SAVEADAY`, set in DM Sans 700 with `0.1em` tracking.

## 4. Color

### Brand primitives

| Token | Value | Use |
| --- | --- | --- |
| `brand-primary` | `#3CA6A6` | Primary actions, active indicators, links, focus |
| `brand-primary-deep` | `#237A7A` | Strong text/icon emphasis on pale surfaces |
| `brand-accent` | `#74EFC3` | Highlights, selected details, positive emphasis on dark surfaces |
| `brand-ink` | `#082B2B` | Text placed on primary or accent fills |
| `brand-accent-ink` | `#123B35` | Text placed on mint-tinted surfaces |

`brand-primary` and `brand-accent` are identity colors. A semantic shadcn `accent` is a subtle interactive surface, not automatically the raw mint color.

### Light semantic tokens

| shadcn token | Value | Intent |
| --- | --- | --- |
| `background` | `#FFFFFF` | Page and app canvas |
| `foreground` | `#111111` | Primary text |
| `card` | `#FFFFFF` | Cards, tables, contained surfaces |
| `card-foreground` | `#111111` | Card text |
| `popover` | `#FFFFFF` | Menus, selects, popovers |
| `popover-foreground` | `#111111` | Popover text |
| `primary` | `#3CA6A6` | Primary action and selected state |
| `primary-foreground` | `#082B2B` | Text on primary |
| `secondary` | `#F3F4F6` | Secondary controls and neutral badges |
| `secondary-foreground` | `#111111` | Text on secondary |
| `muted` | `#F8F8FB` | Quiet grouping and skeleton surfaces |
| `muted-foreground` | `#64748B` | Secondary text; chosen for readable contrast |
| `accent` | `#E7FBF4` | Hover, active navigation, selected rows |
| `accent-foreground` | `#123B35` | Text on accent surfaces |
| `destructive` | `#D92D4E` | Destructive actions and errors; supports white text at AA contrast |
| `destructive-foreground` | `#FFFFFF` | Text on destructive fills |
| `border` | `#EAEAF2` | Default borders and dividers |
| `input` | `#EAEAF2` | Input borders |
| `ring` | `#3CA6A6` | Keyboard focus ring |

### Dark semantic tokens

| shadcn token | Value |
| --- | --- |
| `background` | `#161D2E` |
| `foreground` | `#FFFFFF` |
| `card` / `popover` | `#212B44` |
| `card-foreground` / `popover-foreground` | `#FFFFFF` |
| `primary` | `#74EFC3` |
| `primary-foreground` | `#082B2B` |
| `secondary` | `#1F2937` |
| `secondary-foreground` | `#FFFFFF` |
| `muted` | `#273250` |
| `muted-foreground` | `#B1B1CA` |
| `accent` | `#334268` |
| `accent-foreground` | `#FFFFFF` |
| `destructive` | `#D92D4E` |
| `destructive-foreground` | `#FFFFFF` |
| `border` | `rgba(255,255,255,0.10)` |
| `input` | `rgba(255,255,255,0.15)` |
| `ring` | `#74EFC3` |

### Sidebar tokens

The app uses the official shadcn sidebar composition.

- Light sidebar background is `background`; dark sidebar background is the dark canvas.
- Active and hovered items use `sidebar-accent`, mapped to the semantic accent surface.
- Icons and labels use `sidebar-foreground`; selected labels use `sidebar-accent-foreground`.
- The brand mark may use the raw logo artwork. Do not add colored tiles behind navigation icons.
- The active item needs one signal only: background plus foreground contrast. Do not add an extra left bar and bold type unless the background cannot be used.

### Status colors

Status color supplements text; it never replaces a written status.

| Meaning | Background | Foreground | Examples |
| --- | --- | --- | --- |
| Success | `#EAF8F0` | `#176B3A` | Active, connected, paid, passed |
| Warning | `#FFF6E6` | `#8A4B08` | Pending, expiring, needs attention |
| Error | `#FDECEF` | `#A61B3B` | Failed, suspended, unpaid |
| Info | `#E8F5F5` | `#175E5E` | Running, syncing, scheduled |
| Neutral | `#F3F4F6` | `#475569` | Draft, inactive, archived |

Charts use, in order: `#3CA6A6`, `#74EFC3`, `#237A7A`, `#53CFA8`, `#9AF6D4`. Never rely on color alone; include labels, values, or patterns.

## 5. Typography

SaveADay uses two type families.

### Newsreader — display and editorial hierarchy

Use Newsreader 400–600 for:

- Marketing headlines
- Product page titles
- Major section headings
- Auth and onboarding statements
- Large outcome or empty-state headings

Newsreader should feel deliberate, not decorative. Use it only where a reader should pause and orient.

### DM Sans — product and reading type

Use DM Sans 400–700 for:

- Body copy
- Navigation and breadcrumbs
- Buttons, tabs, badges, and labels
- Forms, tables, dialogs, menus, and tooltips
- Card titles in dense product UI
- Numbers, dates, and operational data

Use a system monospace stack only for IDs, keys, logs, code, and machine values.

### Marketing scale

| Role | Mobile | Desktop | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Hero | 44 px | 64 px | 400 | 1.06–1.10 | `-0.02em` |
| Section title | 34 px | 48 px | 400 | 1.10–1.20 | `-0.02em` |
| Card title | 22–28 px | 24–30 px | 400–500 | 1.20 | `-0.015em` |
| Lead | 15–16 px | 16–18 px | 400 | 1.55–1.65 | normal |
| Body | 14 px | 14–16 px | 400 | 1.55–1.70 | normal |
| Eyebrow | 11–12 px | 11–12 px | 700 | 1.4 | `0.12em` uppercase |

### Product scale

| Role | Size | Family | Weight | Line height |
| --- | --- | --- | --- | --- |
| Page title | 22–24 px | Newsreader | 500 | 1.2 |
| Major section title | 18–20 px | Newsreader | 500 | 1.25 |
| Dialog title | 16 px | DM Sans | 600 | 1.25 |
| Card/table group title | 14–16 px | DM Sans | 600 | 1.35 |
| Body and control text | 14 px | DM Sans | 400 | 1.5 |
| Label and button | 14 px | DM Sans | 500 | 1.4 |
| Supporting/meta | 12 px | DM Sans | 400–500 | 1.5 |
| Monospace metadata | 12 px | system mono | 400 | 1.5 |

Rules:

- Do not use text below 12 px.
- Important customer or business information is at least 14 px.
- Heading tracking is `-0.02em`; body and control tracking is normal.
- Keep body lines below 70 characters. Marketing lead copy should usually remain below 55 characters per line.
- Use sentence case. Reserve uppercase for short brand wordmarks and eyebrows.
- Do not make all `h1`–`h4` elements serif in the product app. Apply Newsreader to page and major section titles; keep dense component headings in DM Sans.

## 6. Spacing and layout

Use a 4 px base unit. Prefer these values: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 96.

### Marketing layout

- Maximum page width: 1400 px.
- Reading/content width: 1200 px or less.
- Horizontal padding: 16 px mobile, 24 px tablet, 48 px desktop.
- Section padding: 64 px mobile, 96 px desktop; use 128 px only for an intentional desktop pause.
- Adjacent cards: 16 px mobile, 24 px desktop.
- Avoid fixed heights. Use `min-height` only when visual balance requires it.

### Product layout

- App content padding: 12 px mobile, 16 px from `sm` upward.
- Standard vertical page gap: 16 px.
- Form field gap: 16 px; related inline controls may use 8 px.
- App header height: 56 px mobile, 64 px desktop.
- Sidebar width: 256 px expanded, 48 px icon-only, 288 px mobile sheet.
- Use the available width for operational tables. Constrain prose and forms, not data surfaces.
- A page gets one outer container. Do not stack cards only to create padding.

## 7. Shape, border, and elevation

- Base radius: 8 px.
- Inputs, buttons, selects, alerts: 8 px.
- Cards, dialogs, sheets, large visual panels: 12 px.
- Badges and pills: full radius.
- Prefer a 1 px border or ring over shadow.
- Product cards use `ring-1 ring-foreground/10` or `border`; avoid combining strong border and strong shadow.
- Popovers and dialogs may use `shadow-md` or `shadow-lg`.
- Marketing imagery may use `shadow-xl` only when depth is part of the composition.
- Do not use gradients on routine product controls. Marketing gradients must support image readability or spatial depth.

## 8. Iconography

- Use Lucide icons in the app and shared web UI.
- Standard control icon: 16 px. Standalone/section icon: 20 px. Feature illustration icon: up to 24 px.
- Default stroke is the library default; do not mix filled icon sets.
- An icon-only control must have an accessible name and at least a 36 px desktop target / 44 px mobile target.
- Do not place decorative icons beside every heading. Use icons to identify actions, states, or object types.

## 9. shadcn component contract

`saveaday-v2/apps/web/components.json` remains:

- Style: `radix-nova`
- CSS variables: enabled
- RSC: enabled
- Icon library: Lucide
- Base color: neutral

Generated primitives live in `components/ui`. Business-specific behavior belongs in composed components outside `components/ui`.

### Buttons

- `default`: one primary action per view or contained workflow.
- `outline`: secondary actions, cancel alternatives, neutral transitions.
- `ghost`: row actions, icon controls, low-emphasis navigation.
- `destructive`: actions that delete, archive, revoke, disconnect, or cause material loss.
- `link`: inline navigation only; not a substitute for a primary button.
- Product sizes: small 32 px, default 36 px, large 44 px. On mobile, primary actions and icon-only controls have a minimum 44 px hit area.
- Use verb-first labels: `Add branch`, `Save hours`, `Copy link`, `Archive tenant`.
- Loading labels describe the active operation: `Saving…`, `Publishing…`, `Connecting…`.

### Inputs and fields

- Use `Field`, `FieldLabel`, `FieldDescription`, and `FieldError` for new forms.
- Every input has a visible label unless the accessible name is provided by a tightly scoped search or toolbar context.
- Default input height is 36 px desktop and at least 44 px for prominent mobile forms.
- Helper text explains format or consequence. Placeholder text is an example, not a label.
- Validation appears next to the field. Form-level errors use `Alert` at the top of the form.

### Cards

- Use cards to group one coherent object, decision, or workflow.
- Product card padding is 16 px; use 12 px for compact cards and 24 px for auth/onboarding surfaces.
- Dense product `CardTitle` uses DM Sans 600. A prominent overview or outcome card may explicitly opt into Newsreader.
- Avoid clickable cards when a clear text link or button is more accessible.

### Tables and mobile lists

- Table-first is the default for repeatable operational records.
- Table headers are 14 px, medium weight, left aligned unless the column contains numeric data.
- Rows use subtle divider and hover states. Selection uses the semantic accent surface.
- Keep actions in the final column and right align them.
- At mobile widths, convert dense tables to stacked record cards or a divided list when horizontal scrolling would hide essential context.
- If the table cannot be transformed, keep it inside the shadcn overflow container. The page itself must never scroll horizontally.

### Dialogs and sheets

- Create/edit tasks use `ModuleFormDialog` unless the workflow needs its own route.
- Dialog width is `calc(100vw - 32px)` with an appropriate max width; height is capped at `100svh - 32px`.
- Dialog actions stack on mobile and align right on desktop.
- Use a sheet for mobile navigation, filters, or contextual tools—not for routine confirmation.
- Destructive confirmation states the object and consequence.

### Tabs

- Product tabs use a bottom border indicator and allow horizontal scrolling on narrow screens.
- Pill tabs are reserved for short marketing journeys, view filters, or mutually exclusive modes.
- Use 2–6 tabs. More options need navigation or a select.

### Badges and status

- Badges are labels, not buttons.
- Status text uses human wording (`Published`, `Needs attention`, `Payment failed`) instead of raw enum values.
- Map state to the status palette in this document. Do not use the primary brand fill for every successful state.

### Empty, loading, and error states

- Empty state: one plain explanation and, when useful, one action.
- Loading: preserve layout with skeletons or show a localized progress indicator. Do not replace an entire app page with a spinner.
- Error: explain what failed and what the user can do. Never expose raw provider or stack errors to business users.
- Success: prefer visible updated state or a short toast. Do not add a modal for routine success.

### Sidebar and application shell

- Continue using the official shadcn `sidebar-07` structure through `AppShell` and `AppSidebar`.
- Keep navigation grouped by user intent. Avoid duplicate routes in multiple groups.
- Mobile sidebar is a sheet. The main page remains readable without relying on hover or collapsed labels.
- Breadcrumbs show location; the page header states the current object or task. Do not repeat long descriptions in both.

## 10. Responsive behavior

Supported checks: 320, 390, 768, 1024, and 1280 px.

- Design the 320 px layout first, then add density as space becomes available.
- Primary mobile actions are full width when two side-by-side actions would become cramped.
- Preserve a 16 px page gutter on phones.
- Use `svh` for full-height mobile surfaces.
- Never hide a required action behind hover.
- Prevent page-level horizontal scrolling. Local table and tab overflow is allowed when explicitly contained.
- Do not reduce body text to make content fit. Reflow, stack, truncate secondary metadata, or move it to detail.
- Mobile record cards should preserve the same information and actions as the desktop table.

## 11. Motion

- Standard transition: 150–200 ms, ease-out.
- Use motion to explain state change: menu opening, dialog entry, selection, or content insertion.
- Avoid looping decorative motion in product UI.
- Honor `prefers-reduced-motion`; remove transforms and smooth scrolling when requested.
- Loading animation must not cause layout shift.

## 12. Accessibility

- Normal text contrast: at least 4.5:1. Large text: at least 3:1.
- Interactive states must not depend on color alone.
- Preserve a visible `ring` focus state for all keyboard-operable controls.
- Touch targets: 44 × 44 px minimum on mobile. Desktop compact controls may be 32–36 px if spacing prevents accidental activation.
- Icon-only actions require an `aria-label` or screen-reader label.
- Use semantic headings in order; visual size does not determine heading level.
- Dialogs, menus, sheets, tabs, and tooltips use the shadcn/Radix accessibility behavior instead of custom event handling.
- Error messages use `role="alert"` where immediate announcement is appropriate.
- Tables have real headers; forms have associated labels; images have useful alt text or empty alt when decorative.

## 13. Content design

### Voice

- Plain, direct, calm, and specific.
- Describe the customer's or business's situation in their language.
- Prefer `Customers waiting for a reply` over `Open lead-response workflow items`.
- Prefer `Connect Telegram` over `Initialize Telegram integration`.
- Prefer `No bookings yet` over `No data available`.

### UI writing rules

- Titles are sentence case and usually 2–6 words.
- Buttons begin with a verb.
- Descriptions explain value, context, or consequence; they do not restate the title.
- Avoid `AI-powered`, `agentic`, model names, provider names, and architecture terms unless the audience is a platform administrator performing that exact task.
- Use ellipsis only for an active operation (`Saving…`) or a label that opens a follow-up prompt when that convention is already clear.
- Confirm destructive actions with the object name and outcome.

## 14. shadcn token implementation

The app's `globals.css` should expose the brand primitives separately from shadcn semantic roles. This is the target structure; retain the existing shadcn shadow variables when applying it.

```css
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Newsreader:opsz,wght@6..72,400;6..72,500;6..72,600&display=swap');
@import "tailwindcss";
@import "tw-animate-css";
@import "shadcn/tailwind.css";

:root {
  --brand-primary: #3CA6A6;
  --brand-primary-deep: #237A7A;
  --brand-accent: #74EFC3;
  --brand-ink: #082B2B;

  --background: #FFFFFF;
  --foreground: #111111;
  --card: #FFFFFF;
  --card-foreground: #111111;
  --popover: #FFFFFF;
  --popover-foreground: #111111;
  --primary: var(--brand-primary);
  --primary-foreground: var(--brand-ink);
  --secondary: #F3F4F6;
  --secondary-foreground: #111111;
  --muted: #F8F8FB;
  --muted-foreground: #64748B;
  --accent: #E7FBF4;
  --accent-foreground: #123B35;
  --destructive: #D92D4E;
  --destructive-foreground: #FFFFFF;
  --border: #EAEAF2;
  --input: #EAEAF2;
  --ring: var(--brand-primary);

  --sidebar: var(--background);
  --sidebar-foreground: var(--foreground);
  --sidebar-primary: var(--primary);
  --sidebar-primary-foreground: var(--primary-foreground);
  --sidebar-accent: var(--accent);
  --sidebar-accent-foreground: var(--accent-foreground);
  --sidebar-border: var(--border);
  --sidebar-ring: var(--ring);

  --radius: 0.5rem;
}

.dark {
  --background: #161D2E;
  --foreground: #FFFFFF;
  --card: #212B44;
  --card-foreground: #FFFFFF;
  --popover: #212B44;
  --popover-foreground: #FFFFFF;
  --primary: #74EFC3;
  --primary-foreground: #082B2B;
  --secondary: #1F2937;
  --secondary-foreground: #FFFFFF;
  --muted: #273250;
  --muted-foreground: #B1B1CA;
  --accent: #334268;
  --accent-foreground: #FFFFFF;
  --destructive: #D92D4E;
  --destructive-foreground: #FFFFFF;
  --border: rgba(255, 255, 255, 0.1);
  --input: rgba(255, 255, 255, 0.15);
  --ring: #74EFC3;
  --sidebar: var(--background);
  --sidebar-foreground: var(--foreground);
  --sidebar-primary: var(--primary);
  --sidebar-primary-foreground: var(--primary-foreground);
  --sidebar-accent: var(--accent);
  --sidebar-accent-foreground: var(--accent-foreground);
  --sidebar-border: var(--border);
  --sidebar-ring: var(--ring);
}

@theme inline {
  --color-brand-primary: var(--brand-primary);
  --color-brand-accent: var(--brand-accent);
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive);
  --color-destructive-foreground: var(--destructive-foreground);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);
  --font-sans: "DM Sans", ui-sans-serif, system-ui, sans-serif;
  --font-heading: "Newsreader", ui-serif, Georgia, serif;
  --font-serif: "Newsreader", ui-serif, Georgia, serif;
  --font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
}

@layer base {
  * { @apply border-border outline-ring/50; }
  html { @apply font-sans; }
  body { @apply bg-background text-foreground antialiased; }
}
```

Do not globally force all `h1`–`h4` elements to `font-heading` in the app. Use the type roles defined above in shared compositions.

## 15. Repository ownership

### Marketing website

- Global tokens: `styles/globals.css`
- Global shell: `components/Header.tsx`, `components/Footer.tsx`
- Brand assets: `public/logo.svg`, `public/logo-symbol.svg`, `public/logo-full.svg`

### saveaday-v2 app

- Global tokens: `apps/web/app/globals.css`
- shadcn configuration: `apps/web/components.json`
- Primitives: `apps/web/components/ui/*`
- Shell: `apps/web/components/app-shell.tsx`, `app-sidebar.tsx`
- Reusable module patterns: `apps/web/components/module-page.tsx`
- Brand asset wrapper: `apps/web/components/brand-mark.tsx`
- Status semantics: `apps/web/components/status-badge.tsx`

Page and module code should consume these shared entry points. Avoid page-local token definitions and duplicated versions of the same form, table, empty-state, or dialog pattern.

## 16. saveaday-v2 adoption order

1. Replace the app's Noto Serif/Merriweather imports with Newsreader/DM Sans.
2. Update `--font-sans`, `--font-heading`, and `--font-serif` to the values in this document.
3. Stop applying the heading font globally to every `h1`–`h4`; set it intentionally in `PageHeader`, `ModulePageHeader`, major section headings, and auth/onboarding statements.
4. Keep dense `CardTitle`, `DialogTitle`, table headers, labels, and navigation in DM Sans.
5. Separate raw `brand-accent` from the subtle semantic `accent` surface.
6. Change light `muted-foreground` from `#8C8CAA` to `#64748B` for readable small text.
7. Extend `StatusBadge` to the five semantic status groups rather than mapping successful states to the primary button style.
8. Normalize mobile action hit areas and verify record-card alternatives for dense tables.
9. Verify the login/auth shell, sidebar, module list, detail, form dialog, table, empty state, and dark mode before rollout.

## 17. Design review checklist

### Foundation

- Uses Newsreader and DM Sans in the correct roles.
- Uses semantic tokens; no page-local brand hex values in the app.
- Uses the canonical logo without modification.
- Works in light and dark themes.

### Structure

- One clear page title and one dominant action.
- Uses an existing shadcn primitive or SaveADay composition where available.
- Dense collections are table-first on desktop and usable on mobile.
- No unnecessary nested cards, decorative panels, or duplicated descriptions.

### Responsive

- Checked at 320 and 390 px.
- No page-level horizontal overflow.
- Required actions remain visible and reachable.
- Primary touch targets are at least 44 px on mobile.

### Accessibility

- Contrast meets WCAG AA.
- Keyboard focus is visible.
- Labels, error messages, headings, dialogs, and tables are semantic.
- Status and validation do not rely on color alone.
- Reduced-motion preference is honored.

### Content

- Copy explains value, context, or consequence.
- Labels are plain and action-oriented.
- Technical implementation language is limited to administrator surfaces where it is necessary.
- Empty, loading, success, and error states tell the user what is happening and what to do next.

### Verification

For `saveaday-v2`, finish with:

```bash
pnpm typecheck
pnpm test
pnpm factory validate
pnpm build
```

Then verify the rendered app at the real responsive and authentication boundaries rather than relying only on static checks.
