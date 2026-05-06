import { motion } from "motion/react";

const ITEMS = [
  "Applied AI",
  "LLM Engineering",
  "Retrieval Augmentation",
  "Agentic Workflows",
  "Eval-driven QA",
  "Type-safe APIs",
  "Production Reliability",
  "Rapid Delivery",
];

export function Marquee() {
  const row = [...ITEMS, ...ITEMS];

  return (
    <section
      aria-hidden="true"
      className="relative bg-section py-10 overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-[hsl(220_14%_96%)] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-[hsl(220_14%_96%)] to-transparent" />

      <motion.div
        className="flex gap-12 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 45, ease: "linear", repeat: Infinity }}
      >
        {row.map((label, i) => (
          <span
            key={`${label}-${i}`}
            className="flex items-center gap-12 text-2xl sm:text-3xl font-semibold tracking-tight text-foreground/30"
          >
            {label}
            <span className="h-1 w-1 rounded-full bg-foreground/20" />
          </span>
        ))}
      </motion.div>
    </section>
  );
}
