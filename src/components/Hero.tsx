import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center overflow-hidden pt-24"
    >
      <div className="absolute inset-0 bg-grid mask-fade-radial opacity-60" />

      <motion.div
        aria-hidden="true"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute -top-40 left-1/2 -translate-x-1/2 h-[800px] w-[800px] rounded-full opacity-30 blur-3xl"
        style={{
          background:
            "conic-gradient(from 0deg, hsl(265 90% 65%), hsl(190 95% 60%), hsl(160 80% 55%), hsl(265 90% 65%))",
        }}
      />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs text-muted-foreground backdrop-blur-sm"
          >
            <Sparkles className="h-3.5 w-3.5 text-aurora-cyan" />
            <span>AI software, built fast — founded 2026</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="mt-8 text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.05]"
          >
            Intelligent software,
            <br />
            <span className="text-aurora">delivered now.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground"
          >
            Aivora is a small, passionate team designing and shipping AI
            applications that give modern teams an unfair advantage. We move
            fast, deliver real product, and aim to be best in industry.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.5 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <Button variant="aurora" size="lg" asChild>
              <a href="#products">
                Explore our products
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#contact">Start a conversation</a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="mt-20 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-xs uppercase tracking-widest text-muted-foreground/60"
          >
            <span>Applied AI</span>
            <span className="h-1 w-1 rounded-full bg-muted-foreground/30" />
            <span>Product Engineering</span>
            <span className="h-1 w-1 rounded-full bg-muted-foreground/30" />
            <span>Rapid Delivery</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
