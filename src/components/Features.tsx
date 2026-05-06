import { motion } from "motion/react";
import { Zap, ShieldCheck, Layers, Gauge, Code2, Compass } from "lucide-react";

const FEATURES = [
  {
    icon: Zap,
    title: "Ship in weeks, not quarters",
    body: "We design for delivery. Tight scope, fast iteration, and AI-assisted engineering keep cycles short and outcomes visible.",
  },
  {
    icon: Layers,
    title: "Model-agnostic by design",
    body: "We pick the right model for the job — frontier, open-source, or fine-tuned — and abstract the choice so your product survives the next leap.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise-ready foundations",
    body: "Auth, audit trails, evals, and guardrails are built in from day one. The AI that ships should be the AI that's safe to operate.",
  },
  {
    icon: Gauge,
    title: "Eval-driven quality",
    body: "Every product line is backed by automated evals and regression suites — so model upgrades become opportunities, not outages.",
  },
  {
    icon: Code2,
    title: "Engineered, not stitched",
    body: "Real software, not no-code glue. Typed APIs, tested code, and observability so your AI features behave like the rest of your stack.",
  },
  {
    icon: Compass,
    title: "Partner, not vendor",
    body: "Small team, direct line. You talk to the people building the product — every week, not every quarter.",
  },
] as const;

export function Features() {
  return (
    <section id="features" className="relative bg-background py-28 sm:py-36">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="text-[13px] font-medium text-apple-blue">Capabilities</p>
          <h2 className="mt-3 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tighter-2 leading-[1.05]">
            How we work.
            <br />
            <span className="text-aurora">Why it sticks.</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground max-w-xl">
            Six commitments that shape every product we build and every
            engagement we run.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                whileHover={{ y: -3 }}
                className="rounded-3xl border border-border bg-card p-7 shadow-card transition-shadow duration-300 hover:shadow-card-hover"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-secondary">
                  <Icon className="h-5 w-5 text-apple-blue" />
                </div>
                <h3 className="mt-5 text-[17px] font-semibold tracking-tight">
                  {feature.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
                  {feature.body}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
