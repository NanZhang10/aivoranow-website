import { useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "motion/react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/Logo";

const NAV = [
  { href: "#products", label: "Products" },
  { href: "#features", label: "Capabilities" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  const { scrollY } = useScroll();
  const bgAlpha = useTransform(scrollY, [0, 120], [0.6, 0.85]);
  const borderAlpha = useTransform(scrollY, [0, 120], [0, 0.08]);
  const blurPx = useTransform(scrollY, [0, 120], [8, 22]);

  const bg = useMotionTemplate`hsl(0 0% 100% / ${bgAlpha})`;
  const borderColor = useMotionTemplate`hsl(220 9% 11% / ${borderAlpha})`;
  const backdropFilter = useMotionTemplate`saturate(180%) blur(${blurPx}px)`;

  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 inset-x-0 z-50"
    >
      <motion.div
        aria-hidden="true"
        style={{
          backgroundColor: bg,
          borderBottomColor: borderColor,
          backdropFilter,
          WebkitBackdropFilter: backdropFilter,
        }}
        className="absolute inset-0 border-b border-transparent"
      />

      <div className="container relative flex h-12 items-center justify-between">
        <a href="#top" className="shrink-0">
          <Logo />
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-3.5 py-2 text-[13px] text-foreground/80 hover:text-foreground transition-colors duration-200"
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
          aria-expanded={open}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={open ? "x" : "menu"}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="inline-flex"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </motion.span>
          </AnimatePresence>
        </button>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden relative overflow-hidden border-t border-border bg-background/95 backdrop-blur-xl"
          >
            <div className="container py-4 flex flex-col gap-1">
              {NAV.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.04, duration: 0.25 }}
                  className="px-2 py-3 text-sm text-foreground/80 hover:text-foreground"
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 + NAV.length * 0.04, duration: 0.25 }}
                className="mt-2"
              >
                <Button variant="aurora" size="sm" asChild className="w-full">
                  <a href="#contact" onClick={() => setOpen(false)}>
                    Get in touch
                  </a>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
