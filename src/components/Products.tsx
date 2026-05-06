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
    iconBg: "bg-[linear-gradient(135deg,#0071e3,#5e5ce6)]",
  },
  {
    icon: MessagesSquare,
    name: "Aivora Assist",
    tagline: "A teammate, not a chatbot.",
    description:
      "A conversational AI surface that lives where your team works. Tuned on your docs, your tools, your tone — context-aware help instead of generic completions.",
    tags: ["Assistants", "Tool-use", "Embeddable"],
    iconBg: "bg-[linear-gradient(135deg,#5e5ce6,#af52de)]",
  },
  {
    icon: Workflow,
    name: "Aivora Forge",
    tagline: "Build with AI in the loop.",
    description:
      "An AI-native workflow toolkit for engineering teams: spec drafting, code review assistance, and pipeline automations that compound across the SDLC.",
    tags: ["DevTools", "Agents", "Automation"],
    iconBg: "bg-[linear-gradient(135deg,#af52de,#ff375f)]",
  },
] as const;

export function Products() {
  return (
    <section id="products" className="relative bg-section py-28 sm:py-36">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="text-[13px] font-medium text-apple-blue">Products</p>
          <h2 className="mt-3 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tighter-2 leading-[1.05]">
            AI applications,
            <br />
            <span className="text-aurora">in production.</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground max-w-xl">
            Three product lines, one belief: AI should disappear into the
            workflow and leave behind speed, clarity, and leverage.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((product, i) => {
            const Icon = product.icon;
            return (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="group"
              >
                <SpotlightCard className="h-full rounded-3xl">
                  <Card className="relative h-full overflow-hidden transition-shadow duration-300 group-hover:shadow-card-hover">
                    <CardHeader className="relative">
                      <div className="flex items-start justify-between">
                        <motion.div
                          whileHover={{ scale: 1.06 }}
                          transition={{ type: "spring", stiffness: 300, damping: 20 }}
                          className={`flex h-12 w-12 items-center justify-center rounded-2xl ${product.iconBg} shadow-[0_4px_14px_rgba(0,0,0,0.10)]`}
                        >
                          <Icon className="h-5 w-5 text-white" />
                        </motion.div>
                        <ArrowUpRight className="h-4 w-4 text-muted-foreground/50 transition-all group-hover:text-foreground group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </div>
                      <CardTitle className="mt-6 text-xl tracking-tight">
                        {product.name}
                      </CardTitle>
                      <CardDescription className="text-apple-blue">
                        {product.tagline}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="relative">
                      <p className="text-[15px] leading-relaxed text-muted-foreground">
                        {product.description}
                      </p>
                      <div className="mt-6 flex flex-wrap gap-2">
                        {product.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-secondary px-2.5 py-0.5 text-xs text-muted-foreground"
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
