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
  // duplicate the row so the translate -50% loop is seamless
  const row = [...ITEMS, ...ITEMS];

  return (
    <section
      aria-hidden="true"
      className="relative border-y border-white/5 py-8 overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-background to-transparent" />

      <motion.div
        className="flex gap-12 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 40,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {row.map((label, i) => (
          <span
            key={`${label}-${i}`}
            className="flex items-center gap-12 text-2xl sm:text-3xl font-semibold tracking-tight text-muted-foreground/60"
          >
            {label}
            <span className="h-1.5 w-1.5 rounded-full bg-aurora-cyan/50" />
          </span>
        ))}
      </motion.div>
    </section>
  );
}
