import { motion } from "motion/react";
import { Brain, MessagesSquare, Workflow, ArrowUpRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SpotlightCard } from "@/components/fx/SpotlightCard";

const PRODUCTS = [
  {
    icon: Brain,
    name: "Aivora Insight",
    tagline: "Decisions, illuminated.",
    description:
      "An AI analytics layer that turns raw operational data into clear, narrated answers — so your team stops staring at dashboards and starts shipping decisions.",
    tags: ["Analytics", "LLM", "RAG"],
    accent: "from-aurora-violet/40 to-aurora-indigo/10",
  },
  {
    icon: MessagesSquare,
    name: "Aivora Assist",
    tagline: "A teammate, not a chatbot.",
    description:
      "A conversational AI surface that lives where your team works. Tuned on your docs, your tools, your tone — context-aware help instead of generic completions.",
    tags: ["Assistants", "Tool-use", "Embeddable"],
    accent: "from-aurora-indigo/40 to-aurora-cyan/10",
  },
  {
    icon: Workflow,
    name: "Aivora Forge",
    tagline: "Build with AI in the loop.",
    description:
      "An AI-native workflow toolkit for engineering teams: spec drafting, code review assistance, and pipeline automations that compound across the SDLC.",
    tags: ["DevTools", "Agents", "Automation"],
    accent: "from-aurora-cyan/40 to-aurora-mint/10",
  },
] as const;

export function Products() {
  return (
    <section id="products" className="relative py-28 sm:py-36">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-aurora-cyan/80">
            Products
          </p>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight">
            AI applications,
            <br />
            <span className="text-aurora">in production.</span>
          </h2>
          <p className="mt-5 text-muted-foreground">
            Three product lines, one belief: AI should disappear into the
            workflow and leave behind speed, clarity, and leverage.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((product, i) => {
            const Icon = product.icon;
            return (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                className="group"
              >
                <SpotlightCard className="h-full rounded-xl">
                  <Card className="relative h-full overflow-hidden border-white/10 transition-colors group-hover:border-white/20">
                    <div
                      className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${product.accent} opacity-0 group-hover:opacity-60 transition-opacity duration-500`}
                    />

                    <CardHeader className="relative">
                      <div className="flex items-start justify-between">
                        <motion.div
                          whileHover={{ rotate: -8, scale: 1.05 }}
                          transition={{ type: "spring", stiffness: 300, damping: 20 }}
                          className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04]"
                        >
                          <Icon className="h-5 w-5 text-aurora-cyan" />
                        </motion.div>
                        <ArrowUpRight className="h-4 w-4 text-muted-foreground/40 transition-all group-hover:text-foreground group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </div>
                      <CardTitle className="mt-5 text-xl">
                        {product.name}
                      </CardTitle>
                      <CardDescription className="text-aurora-cyan/80">
                        {product.tagline}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="relative">
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {product.description}
                      </p>
                      <div className="mt-6 flex flex-wrap gap-2">
                        {product.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-0.5 text-xs text-muted-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
