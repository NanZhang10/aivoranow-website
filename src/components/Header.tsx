import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/Logo";
import { cn } from "@/lib/utils";

const NAV = [
  { href: "#products", label: "Products" },
  { href: "#features", label: "Capabilities" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-white/5 bg-background/70 backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <a href="#top" className="shrink-0">
          <Logo />
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button variant="aurora" size="sm" asChild>
            <a href="#contact">Get in touch</a>
          </Button>
        </div>

        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden border-t border-white/5 bg-background/95 backdrop-blur-xl"
        >
          <div className="container py-4 flex flex-col gap-1">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="px-2 py-3 text-sm text-muted-foreground hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
            <Button variant="aurora" size="sm" asChild className="mt-2">
              <a href="#contact" onClick={() => setOpen(false)}>
                Get in touch
              </a>
            </Button>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
