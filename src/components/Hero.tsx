import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight } from "lucide-react";
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

  const orbY = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const orbOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.2]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative min-h-screen flex items-center overflow-hidden pt-24"
    >
      {/* Soft Apple-style ambient glow */}
      <motion.div
        aria-hidden="true"
        style={{ y: orbY, opacity: orbOpacity }}
        className="pointer-events-none absolute -top-48 left-1/2 -translate-x-1/2 h-[820px] w-[820px]"
      >
        <div
          className="h-full w-full rounded-full blur-3xl opacity-50"
          style={{
            background:
              "radial-gradient(closest-side, rgba(94,92,230,0.18), rgba(0,113,227,0.10) 45%, transparent 70%)",
          }}
        />
      </motion.div>

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="container relative z-10"
      >
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05, duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full bg-secondary px-3.5 py-1 text-[12px] text-muted-foreground"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-apple-blue" />
            <span>Founded 2026 · AI software, built fast</span>
          </motion.div>

          <h1 className="mt-7 text-[44px] sm:text-6xl md:text-[80px] font-semibold tracking-tighter-2 leading-[1.05] text-foreground">
            <AnimatedText
              as="div"
              text="Intelligent software."
              delay={0.15}
            />
            <div className="mt-1">
              <AnimatedGradientText text="Delivered now." delay={0.85} />
            </div>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="mx-auto mt-6 max-w-2xl text-lg sm:text-xl leading-snug text-muted-foreground"
          >
            A small, passionate team designing and shipping AI applications
            that give modern teams an unfair advantage.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.25, duration: 0.5 }}
            className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <Magnetic strength={0.25}>
              <Button variant="aurora" size="lg" asChild>
                <a href="#products">
                  Explore products
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </Magnetic>
            <Button variant="link" size="lg" asChild className="text-apple-blue">
              <a href="#contact">
                Start a conversation
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-9 w-6 items-start justify-center rounded-full border border-foreground/15"
        >
          <span className="mt-1.5 h-1.5 w-1 rounded-full bg-foreground/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
