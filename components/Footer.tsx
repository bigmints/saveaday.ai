import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-border/50 bg-muted/20">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image src="/logo-symbol.svg" alt="SaveADay" width={24} height={24} className="h-6 w-6" />
              <span className="text-sm font-bold text-foreground">SaveADay</span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              The Agentic Customer Lifetime Value Management Platform for businesses that grow.
            </p>
          </div>

          {/* Platform */}
          <div className="space-y-3">
            <span className="text-xs font-bold text-foreground uppercase tracking-wider">Platform</span>
            <div className="flex flex-col gap-2">
              <a href="#apps" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Apps</a>
              <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">How It Works</a>
              <Link href="/pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Pricing</Link>
              <Link href="/ubot" className="text-sm text-muted-foreground hover:text-foreground transition-colors">UBOT (Personal)</Link>
            </div>
          </div>

          {/* Company */}
          <div className="space-y-3">
            <span className="text-xs font-bold text-foreground uppercase tracking-wider">Company</span>
            <div className="flex flex-col gap-2">
              <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy</Link>
              <a
                href="https://www.linkedin.com/company/saveadayai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <span className="text-xs font-bold text-foreground uppercase tracking-wider">Contact</span>
            <div className="flex flex-col gap-2">
              <a
                href="mailto:hello@saveaday.ai"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                hello@saveaday.ai
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border/50 text-center">
          <span className="text-xs text-muted-foreground">
            © {currentYear} SaveADay · Built by{" "}
            <a
              href="https://bigmints.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              Bigmints
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
