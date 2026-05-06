import { motion } from "motion/react";

const STATS = [
  { value: "2026", label: "Founded" },
  { value: "100%", label: "Builders" },
  { value: "∞", label: "Curiosity" },
] as const;

export function About() {
  return (
    <section id="about" className="relative py-28 sm:py-36 border-t border-white/5">
      <div className="container grid gap-16 lg:grid-cols-2 lg:gap-24 items-center">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs uppercase tracking-[0.2em] text-aurora-cyan/80">
            About Aivora
          </p>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight">
            A small team,
            <br />
            <span className="text-aurora">building boldly.</span>
          </h2>
          <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Aivora LLC was founded in 2026 by builders who got tired of
              watching AI ideas die in slide decks. We're small on purpose —
              fewer handoffs, more product, faster decisions.
            </p>
            <p>
              Our mission is simple: ship AI software that earns its place in
              real workflows. We measure ourselves against industry-best teams,
              not industry averages, and we sweat the craft on everything from
              prompt design to production reliability.
            </p>
            <p className="text-foreground/90">
              If you have a problem you think AI can finally solve — we'd
              like to hear about it.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative"
        >
          <div className="absolute -inset-8 -z-10 rounded-3xl bg-[radial-gradient(circle_at_30%_20%,hsl(265_90%_65%/0.25),transparent_50%),radial-gradient(circle_at_70%_80%,hsl(190_95%_60%/0.2),transparent_50%)] blur-2xl" />

          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur-sm">
            <div className="grid grid-cols-3 gap-6">
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl sm:text-4xl font-bold text-aurora">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 border-t border-white/10 pt-8">
              <p className="text-sm font-medium">Our promise</p>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                {[
                  "Move fast, but ship the real thing.",
                  "Be passionate about the craft and the customer.",
                  "Never settle for industry-average — aim for best in class.",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-aurora-cyan" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
