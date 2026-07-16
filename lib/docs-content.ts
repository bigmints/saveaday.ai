export type DocStep = {
  title: string;
  body: string;
};

export type DocSection = {
  id: string;
  title: string;
  intro?: string;
  steps?: DocStep[];
  bullets?: string[];
  note?: string;
};

export type DocPage = {
  slug: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
  keywords: string[];
  sections: DocSection[];
};

export type DocNavGroup = {
  title: string;
  pages: Array<{ slug: string; title: string }>;
};

export const docs: DocPage[] = [
  {
    slug: "getting-started",
    title: "Get started with SaveADay",
    description: "Set up your workspace, add the essentials, and publish your first customer experience.",
    category: "Start here",
    readTime: "5 min read",
    keywords: ["setup", "onboarding", "workspace", "first steps", "account"],
    sections: [
      {
        id: "sign-in",
        title: "Sign in to your workspace",
        intro: "Open app.saveaday.ai and sign in with the account your business owner or administrator invited. Each person has their own account and belongs to one business workspace.",
        note: "If an invitation link has expired or opens the wrong workspace, ask an administrator to create a new invitation from Settings → Members.",
      },
      {
        id: "setup-order",
        title: "Recommended setup order",
        intro: "SaveADay works best when the assistant and customer-facing pages have a small amount of reliable business context.",
        steps: [
          { title: "Complete your business profile", body: "Add a tagline, short description, contact details, address, and the private operating context used by the assistant." },
          { title: "Add branches and working hours", body: "Create each location with the correct timezone, then define its weekly opening hours." },
          { title: "Create your customer records", body: "Add existing contacts or let new customer activity create records as work arrives." },
          { title: "Build a customer action", body: "Create a catalogue, lead form, waitlist, or bookable service depending on what customers need to do." },
          { title: "Preview before publishing", body: "Use each module’s Publish tab or public-page preview, check the customer view, and only then share the link." },
        ],
      },
      {
        id: "daily-work",
        title: "Start your daily work",
        bullets: [
          "Use Chat for requests that span several apps or when you want a quick summary.",
          "Open a module from the sidebar when you need a focused table, form, calendar, or editor.",
          "Check Approvals for customer requests that need a person before SaveADay can act.",
          "Keep roles narrow: give each teammate only the actions they need.",
        ],
      },
    ],
  },
  {
    slug: "chat",
    title: "Work with SaveADay Chat",
    description: "Ask for summaries, create business content, and operate your workspace in plain language.",
    category: "Daily work",
    readTime: "4 min read",
    keywords: ["assistant", "ai", "prompt", "conversation", "summary"],
    sections: [
      {
        id: "what-chat-can-do",
        title: "What Chat can do",
        intro: "Chat is the fastest way to start work that crosses modules. It uses your signed-in account, business context, and permissions when deciding which actions are available.",
        bullets: [
          "Summarize today’s bookings, new leads, and work needing attention.",
          "Help structure a catalogue and its first categories or items.",
          "Create a lead or feedback form after collecting the required details.",
          "Find and organize existing workspace information.",
        ],
      },
      {
        id: "write-a-request",
        title: "Write a useful request",
        steps: [
          { title: "State the outcome", body: "Start with what should be true when the work is finished: for example, “Create a lead form for website enquiries.”" },
          { title: "Add the important constraints", body: "Include the audience, fields, dates, branch, catalogue, or staff member when they matter." },
          { title: "Review proposed changes", body: "Answer follow-up questions and check names, customer-facing copy, and dates before confirming." },
          { title: "Open the result", body: "Use the link or action returned by Chat to inspect the record in its module and publish it when ready." },
        ],
      },
      {
        id: "permissions",
        title: "Permissions and approvals",
        intro: "Chat never replaces workspace authorization. If your role cannot perform an action in the module, it cannot perform that action through Chat either. Sensitive visitor requests may be routed to Approvals for a person to review.",
        note: "Treat Chat like a capable teammate: give it a clear goal, verify customer-facing details, and use the module view for final checks.",
      },
    ],
  },
  {
    slug: "approvals",
    title: "Review approvals",
    description: "Handle visitor requests that require a person before the assistant can continue.",
    category: "Daily work",
    readTime: "3 min read",
    keywords: ["approve", "reject", "visitor", "request", "human review"],
    sections: [
      {
        id: "when-approval-is-used",
        title: "When approval is used",
        intro: "SaveADay can answer and complete safe customer actions directly. A request appears in Approvals when business policy requires human judgment before the next action can happen.",
      },
      {
        id: "review",
        title: "Review a request",
        steps: [
          { title: "Open Approvals", body: "Choose Approvals in the Primary section of the business sidebar." },
          { title: "Read the full context", body: "Check what the customer requested, the related record, and any details the assistant collected." },
          { title: "Make a decision", body: "Approve only when the requested action is correct and allowed. Otherwise reject it so the request does not proceed." },
          { title: "Check the outcome", body: "Return to the related module or conversation if the decision requires additional follow-up from your team." },
        ],
        note: "Do not approve a request solely because the assistant proposed it. The person approving remains responsible for the decision.",
      },
    ],
  },
  {
    slug: "contacts",
    title: "Manage contacts",
    description: "Keep customer names and contact details together and open the record behind their activity.",
    category: "Customer operations",
    readTime: "4 min read",
    keywords: ["crm", "customer", "email", "phone", "profiles"],
    sections: [
      {
        id: "find-contacts",
        title: "Find and open a contact",
        intro: "Open Contacts from Operations. Search by name, email, or phone, then choose Open to view the customer record.",
      },
      {
        id: "add-contact",
        title: "Add a contact",
        steps: [
          { title: "Choose Add contact", body: "Open Contacts and use the action at the top of the page." },
          { title: "Add reliable identifiers", body: "Enter the customer’s name and the email or phone number your team will actually use." },
          { title: "Save and review", body: "Open the saved record and correct any details before using it for bookings or tickets." },
        ],
      },
      {
        id: "customer-profiles",
        title: "Customer profiles",
        intro: "The Customer profiles tab provides a broader view of customer records. Use it when you need profile-level context rather than a simple contact directory search.",
        note: "Avoid creating duplicates. Search email and phone before adding a new person, especially when a customer has already submitted a form or booking request.",
      },
    ],
  },
  {
    slug: "catalogues",
    title: "Build and publish catalogues",
    description: "Organize products or services into a customer-ready catalogue with categories, items, prices, and booking options.",
    category: "Customer operations",
    readTime: "7 min read",
    keywords: ["catalog", "products", "services", "categories", "items", "price", "publish"],
    sections: [
      {
        id: "create",
        title: "Create a catalogue",
        steps: [
          { title: "Choose New catalogue", body: "Open Catalogues and give the catalogue a clear customer-facing name." },
          { title: "Set its currency", body: "Choose the currency before adding prices so items are presented consistently." },
          { title: "Add categories", body: "Use categories to create a simple browsing structure such as Services, Packages, or Products." },
          { title: "Add items", body: "For each item, write the details, set pricing, and configure booking behavior where relevant." },
        ],
      },
      {
        id: "workspace-tabs",
        title: "Use the catalogue workspace",
        bullets: [
          "Build contains the categories and items customers browse.",
          "Details controls the catalogue name, description, and currency.",
          "Publish controls public availability and provides the shareable link.",
          "An item’s Details, Pricing, and Bookings tabs keep customer copy, price, and fulfilment rules separate.",
        ],
      },
      {
        id: "publish",
        title: "Publish safely",
        intro: "Preview the full catalogue, check category order, item names, prices, and booking assignments, then publish. A published catalogue shows a copy-link action on the catalogue list.",
        note: "Changes affect a live customer experience after publication. Recheck the public link whenever you change prices or bookable assignments.",
      },
    ],
  },
  {
    slug: "bookings",
    title: "Set up and manage bookings",
    description: "Connect catalogue services to staff or assets, define availability, and manage appointments on a calendar.",
    category: "Customer operations",
    readTime: "8 min read",
    keywords: ["appointment", "calendar", "availability", "staff", "asset", "resource", "service"],
    sections: [
      {
        id: "before-bookings",
        title: "Before taking bookings",
        bullets: [
          "Create the service as a catalogue item and enable its booking options.",
          "Add bookable staff or assets and make sure each one uses the correct timezone.",
          "Assign the service to at least one active staff member or asset.",
          "Set availability for the branch and booking target.",
        ],
      },
      {
        id: "create-booking",
        title: "Create a booking",
        steps: [
          { title: "Open Bookings", body: "Use the month or week view and navigate to the relevant date." },
          { title: "Choose New booking", body: "Select a bookable catalogue item, then an eligible staff member or asset." },
          { title: "Set the start time", body: "Use the timezone shown by the selected booking target and confirm the requested time is available." },
          { title: "Review the calendar", body: "Filter by catalogue item or booking target to confirm the new appointment appears in the right place." },
        ],
      },
      {
        id: "manage-capacity",
        title: "Manage staff, assets, and availability",
        intro: "Bookable staff represent team members who deliver a service. Assets represent rooms, equipment, or other limited resources. Capacity and availability determine what customers can request.",
        note: "If a service does not appear when creating a booking, check that the catalogue item is bookable and has at least one active staff or asset assignment.",
      },
    ],
  },
  {
    slug: "lead-forms",
    title: "Create lead forms",
    description: "Publish simple forms that capture customer enquiries and keep each form’s submissions together.",
    category: "Customer operations",
    readTime: "5 min read",
    keywords: ["lead", "form", "submission", "enquiry", "fields", "publish"],
    sections: [
      {
        id: "create-form",
        title: "Create a form",
        steps: [
          { title: "Choose New form", body: "Open Lead forms and use a name that describes the request, such as “Contact us” or “Request a quote.”" },
          { title: "Define the fields", body: "Add the customer details and questions your team needs. Keep the form short enough to complete comfortably." },
          { title: "Review the form", body: "Use the Form tab to check labels, required information, and customer-facing language." },
          { title: "Publish and share", body: "Open Publish, make the form available, and copy its public link." },
        ],
      },
      {
        id: "submissions",
        title: "Manage submissions",
        intro: "Open a form and choose Submissions to review the enquiries it collected. Keep the form’s purpose specific so the submission list remains useful to the team handling it.",
        note: "Collect only information you have a business reason to use. Avoid sensitive questions unless your process and access controls are designed for them.",
      },
    ],
  },
  {
    slug: "waitlists",
    title: "Publish a waitlist",
    description: "Collect signups for early access, limited availability, or an upcoming launch.",
    category: "Customer operations",
    readTime: "4 min read",
    keywords: ["waitlist", "signup", "entry", "launch", "early access", "publish"],
    sections: [
      {
        id: "create-waitlist",
        title: "Create and publish a waitlist",
        steps: [
          { title: "Choose New waitlist", body: "Give the list a specific name, such as “September workshop” or “Early access.”" },
          { title: "Add the details", body: "Explain what someone is joining and what happens after they sign up." },
          { title: "Preview the public view", body: "Check the name, description, and customer expectations before sharing." },
          { title: "Publish", body: "Use the Publish tab to activate the list and copy the public link." },
        ],
      },
      {
        id: "entries",
        title: "Manage entries",
        intro: "The Entries tab shows the people who joined and their current position. Use it as the source of truth when contacting or admitting people from the list.",
        note: "Closing a waitlist prevents new signups; it does not replace any follow-up your team promised to existing entries.",
      },
    ],
  },
  {
    slug: "tickets",
    title: "Track customer tickets",
    description: "Turn customer issues into assigned work with a clear status, priority, and owner.",
    category: "Customer operations",
    readTime: "5 min read",
    keywords: ["support", "ticket", "issue", "priority", "assignee", "escalation"],
    sections: [
      {
        id: "create-ticket",
        title: "Create a ticket",
        steps: [
          { title: "Choose New ticket", body: "Open Tickets and select the customer contact connected to the issue." },
          { title: "Describe the work", body: "Use a short subject and enough detail for another teammate to understand the expected outcome." },
          { title: "Set priority and ownership", body: "Choose a priority that reflects customer impact, then assign the person responsible for the next action." },
          { title: "Keep status current", body: "Update the ticket as work progresses so the list remains a useful team queue." },
        ],
      },
      {
        id: "find-ticket",
        title: "Find and triage work",
        intro: "Search the ticket list by its reference or subject. Review status, priority, assignee, and last update before deciding what the team should handle next.",
        note: "Use Approvals for assistant actions awaiting a decision. Use Tickets for customer issues that require tracked human work.",
      },
    ],
  },
  {
    slug: "business-profile",
    title: "Set up your business profile",
    description: "Control the public business page and the private context SaveADay uses when helping customers.",
    category: "Workspace setup",
    readTime: "6 min read",
    keywords: ["profile", "public page", "address", "contact", "social", "business details"],
    sections: [
      {
        id: "profile-sections",
        title: "Complete the profile",
        bullets: [
          "Details: tagline, short description, about text, operating context, and customer commitments.",
          "Contact: public email, website, phone numbers, maintained social profiles, address, and map coordinates.",
          "Public page: publication status and the catalogue, booking, and chat actions customers can use.",
        ],
      },
      {
        id: "publish-page",
        title: "Publish the public page",
        steps: [
          { title: "Complete the customer-facing details", body: "Use plain language and provide only contact channels your team actively monitors." },
          { title: "Choose the customer actions", body: "Select a catalogue and enable bookings or chat where those experiences are ready." },
          { title: "Preview", body: "Open the public link and check the page as a customer would on both desktop and mobile." },
          { title: "Publish and share", body: "Turn on Public access, save, then use the public link as the main link for your business." },
        ],
      },
      {
        id: "private-context",
        title: "Private assistant context",
        intro: "Operations and customer commitments help SaveADay answer in a way that fits your business. This context is not the same as the public About section.",
        note: "Keep internal context useful but non-sensitive. Do not paste passwords, API keys, payment details, or private customer records into the profile.",
      },
    ],
  },
  {
    slug: "team-access",
    title: "Manage members and roles",
    description: "Invite teammates and give each role the right actions for each SaveADay app.",
    category: "Workspace setup",
    readTime: "6 min read",
    keywords: ["member", "invite", "role", "permission", "owner", "admin", "staff"],
    sections: [
      {
        id: "invite-member",
        title: "Invite a member",
        steps: [
          { title: "Open Settings → Members", body: "Enter the teammate’s display name and email address." },
          { title: "Choose a role", body: "Select the narrowest role that covers the person’s real responsibilities." },
          { title: "Create the invitation", body: "Copy the invitation link and send it to the intended person through a trusted channel." },
          { title: "Confirm their status", body: "Return to the Team list to check that the account has joined successfully." },
        ],
      },
      {
        id: "roles",
        title: "Understand roles",
        intro: "Default roles cover common access levels. Custom roles let an administrator choose app-by-app actions such as view, create, update, approve, and export.",
        bullets: [
          "Primary owner and administrator are broad workspace-management roles.",
          "Manager is intended for operational oversight without primary ownership.",
          "Staff covers day-to-day creation and updates.",
          "Viewer is read-only.",
        ],
        note: "Permissions are enforced by SaveADay, not just hidden in the interface. Review custom roles whenever someone’s responsibilities change.",
      },
    ],
  },
  {
    slug: "branches-hours",
    title: "Configure branches and working hours",
    description: "Represent each business location with the correct timezone and a dependable weekly schedule.",
    category: "Workspace setup",
    readTime: "5 min read",
    keywords: ["branch", "location", "hours", "timezone", "schedule", "opening"],
    sections: [
      {
        id: "add-branch",
        title: "Add a branch",
        steps: [
          { title: "Open Settings → Branches", body: "Choose a name customers and teammates will recognize." },
          { title: "Set the timezone", body: "Use an IANA timezone such as Asia/Dubai or Europe/London, not a fixed UTC offset." },
          { title: "Check the branch status", body: "Confirm the location appears in the list and is active before configuring schedules." },
        ],
      },
      {
        id: "working-hours",
        title: "Set working hours",
        steps: [
          { title: "Open Settings → Working hours", body: "Select the branch whose schedule you want to change." },
          { title: "Define each day", body: "Mark closed days and enter the opening and closing times for active days." },
          { title: "Save and verify", body: "Save hours, then check booking availability or customer-facing information that relies on the schedule." },
        ],
        note: "Working hours are branch-specific. Update every affected branch when holidays, seasonal hours, or operational schedules change.",
      },
    ],
  },
  {
    slug: "telegram",
    title: "Connect Telegram",
    description: "Connect a business-owned Telegram bot and choose which owner accounts can operate SaveADay through it.",
    category: "Workspace setup",
    readTime: "6 min read",
    keywords: ["telegram", "bot", "botfather", "token", "owner id", "channel"],
    sections: [
      {
        id: "before-connect",
        title: "Before you connect",
        intro: "Create or choose a Telegram bot that belongs to your business. You will need its BotFather token and at least one numeric Telegram owner ID.",
        note: "A bot token is a credential. Share it only with authorized administrators and paste it only into the SaveADay Telegram settings form.",
      },
      {
        id: "connect",
        title: "Connect the bot",
        steps: [
          { title: "Open Settings → Telegram", body: "Only members with management access can change the connection." },
          { title: "Add the bot token", body: "Paste the token issued by BotFather. If a token is already configured, leave the field blank to keep it." },
          { title: "Add owner IDs", body: "Enter one numeric Telegram user ID per line. These accounts can use the business bot as owners." },
          { title: "Save and test", body: "Save the settings, use Test connection, then open the bot and confirm it responds from an allowed owner account." },
        ],
      },
      {
        id: "manage",
        title: "Maintain the connection",
        intro: "Use the status panel to open the connected bot or test it again. Disable Telegram when the bot should no longer be available to the business.",
        note: "If a token may have been exposed, revoke it in BotFather, issue a new token, and update SaveADay immediately.",
      },
    ],
  },
];

export const docsNavigation: DocNavGroup[] = [
  {
    title: "Start here",
    pages: [{ slug: "getting-started", title: "Getting started" }],
  },
  {
    title: "Daily work",
    pages: [
      { slug: "chat", title: "Chat" },
      { slug: "approvals", title: "Approvals" },
    ],
  },
  {
    title: "Customer operations",
    pages: [
      { slug: "contacts", title: "Contacts" },
      { slug: "catalogues", title: "Catalogues" },
      { slug: "bookings", title: "Bookings" },
      { slug: "lead-forms", title: "Lead forms" },
      { slug: "waitlists", title: "Waitlists" },
      { slug: "tickets", title: "Tickets" },
    ],
  },
  {
    title: "Workspace setup",
    pages: [
      { slug: "business-profile", title: "Business profile" },
      { slug: "team-access", title: "Members and roles" },
      { slug: "branches-hours", title: "Branches and hours" },
      { slug: "telegram", title: "Telegram" },
    ],
  },
];

export const getDocPage = (slug: string) => docs.find((page) => page.slug === slug);

export const docHref = (slug: string) => `/docs/${slug}/`;
