import { Logo } from "@/components/Logo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-section py-12">
      <div className="container flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-3">
          <Logo />
          <p className="text-[13px] text-muted-foreground max-w-sm">
            AI software, built fast. © {year} Aivora LLC. All rights reserved.
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-[13px] text-muted-foreground">
          <a href="#products" className="hover:text-foreground transition-colors">
            Products
          </a>
          <a href="#features" className="hover:text-foreground transition-colors">
            Capabilities
          </a>
          <a href="#about" className="hover:text-foreground transition-colors">
            About
          </a>
          <a
            href="mailto:aivoranow@gmail.com"
            className="hover:text-foreground transition-colors"
          >
            Contact
          </a>
        </nav>
      </div>
    </footer>
  );
}
