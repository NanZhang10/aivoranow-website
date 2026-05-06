import { motion } from "motion/react";

const STATS = [
  { value: "2026", label: "Founded" },
  { value: "100%", label: "Builders" },
  { value: "∞", label: "Curiosity" },
] as const;

export function About() {
  return (
    <section id="about" className="relative bg-section py-28 sm:py-36">
      <div className="container grid gap-16 lg:grid-cols-2 lg:gap-24 items-center">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-[13px] font-medium text-apple-blue">About Aivora</p>
          <h2 className="mt-3 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tighter-2 leading-[1.05]">
            A small team.
            <br />
            <span className="text-aurora">Building boldly.</span>
          </h2>
          <div className="mt-6 space-y-4 text-[17px] leading-relaxed text-muted-foreground">
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
            <p className="text-foreground">
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
          <div className="rounded-3xl border border-border bg-card p-8 shadow-card">
            <div className="grid grid-cols-3 gap-6">
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <div className="text-4xl sm:text-5xl font-semibold tracking-tighter-2 text-aurora">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 border-t border-border pt-8">
              <p className="text-sm font-semibold tracking-tight">
                Our promise
              </p>
              <ul className="mt-4 space-y-3 text-[15px] text-muted-foreground">
                {[
                  "Move fast, but ship the real thing.",
                  "Be passionate about the craft and the customer.",
                  "Never settle for industry-average — aim for best in class.",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-apple-blue" />
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
