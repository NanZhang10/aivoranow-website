import { motion } from "motion/react";
import { cn } from "@/lib/utils";

/**
 * For gradient text we cannot split into per-character spans — the parent's
 * `bg-clip:text + text-transparent` doesn't reach split children, so the text
 * would render invisible. Instead, animate a single span with a left→right
 * clip-path wipe + soft blur reveal so the gradient stays continuous.
 */
export function AnimatedGradientText({
  text,
  className,
  delay = 0,
  duration = 1.0,
}: {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
}) {
  return (
    <motion.span
      className={cn("inline-block text-aurora pb-1", className)}
      initial={{
        clipPath: "inset(0% 100% 0% 0%)",
        opacity: 0,
        y: 12,
        filter: "blur(10px)",
      }}
      animate={{
        clipPath: "inset(0% 0% 0% 0%)",
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
      }}
      transition={{ delay, duration, ease: [0.22, 1, 0.36, 1] }}
    >
      {text}
    </motion.span>
  );
}
