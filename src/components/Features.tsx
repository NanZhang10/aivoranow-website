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
    <section id="features" className="relative py-28 sm:py-36 border-t border-white/5">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-aurora-cyan/80">
            Capabilities
          </p>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight">
            How we work,
            <br />
            <span className="text-aurora">why it sticks.</span>
          </h2>
          <p className="mt-5 text-muted-foreground">
            Six commitments that shape every product we build and every
            engagement we run.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="bg-background p-8 hover:bg-white/[0.02] transition-colors"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04]">
                  <Icon className="h-5 w-5 text-aurora-cyan" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
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
