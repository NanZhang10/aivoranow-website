import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedText } from "@/components/fx/AnimatedText";
import { AnimatedGradientText } from "@/components/fx/AnimatedGradientText";
import { Magnetic } from "@/components/fx/Magnetic";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const haloY = useTransform(scrollYProgress, [0, 1], [0, 220]);
  const haloOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.2]);
  const gridY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative min-h-screen flex items-center overflow-hidden pt-24"
    >
      <motion.div
        style={{ y: gridY }}
        className="absolute inset-0 bg-grid mask-fade-radial opacity-60"
      />

      <motion.div
        aria-hidden="true"
        style={{ y: haloY, opacity: haloOpacity }}
        className="absolute -top-40 left-1/2 -translate-x-1/2 h-[800px] w-[800px] pointer-events-none"
      >
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="h-full w-full rounded-full opacity-30 blur-3xl"
          style={{
            background:
              "conic-gradient(from 0deg, hsl(265 90% 65%), hsl(190 95% 60%), hsl(160 80% 55%), hsl(265 90% 65%))",
          }}
        />
      </motion.div>

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="container relative z-10"
      >
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs text-muted-foreground backdrop-blur-sm"
          >
            <Sparkles className="h-3.5 w-3.5 text-aurora-cyan" />
            <span>AI software, built fast — founded 2026</span>
          </motion.div>

          <h1 className="mt-8 text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.1]">
            <AnimatedText
              as="div"
              text="Intelligent software,"
              delay={0.15}
            />
            <div className="mt-1">
              <AnimatedGradientText text="delivered now." delay={0.85} />
            </div>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground"
          >
            Aivora is a small, passionate team designing and shipping AI
            applications that give modern teams an unfair advantage. We move
            fast, deliver real product, and aim to be best in industry.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.25, duration: 0.5 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <Magnetic strength={0.4}>
              <Button variant="aurora" size="lg" asChild>
                <a href="#products">
                  Explore our products
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </Magnetic>
            <Magnetic strength={0.25}>
              <Button variant="outline" size="lg" asChild>
                <a href="#contact">Start a conversation</a>
              </Button>
            </Magnetic>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="mt-20 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-xs uppercase tracking-widest text-muted-foreground/60"
          >
            <span>Applied AI</span>
            <span className="h-1 w-1 rounded-full bg-muted-foreground/30" />
            <span>Product Engineering</span>
            <span className="h-1 w-1 rounded-full bg-muted-foreground/30" />
            <span>Rapid Delivery</span>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-9 w-6 items-start justify-center rounded-full border border-white/15"
        >
          <span className="mt-1.5 h-1.5 w-1 rounded-full bg-aurora-cyan/70" />
        </motion.div>
      </motion.div>
    </section>
  );
}
