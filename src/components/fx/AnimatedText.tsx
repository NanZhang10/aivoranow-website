import { motion, type Variants } from "motion/react";
import { cn } from "@/lib/utils";

const container: Variants = {
  hidden: {},
  visible: (delay: number = 0) => ({
    transition: {
      staggerChildren: 0.025,
      delayChildren: delay,
    },
  }),
};

const child: Variants = {
  hidden: { y: "0.4em", opacity: 0, filter: "blur(8px)" },
  visible: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export function AnimatedText({
  text,
  className,
  delay = 0,
  as: Tag = "span",
}: {
  text: string;
  className?: string;
  delay?: number;
  as?: "span" | "div";
}) {
  const MotionTag = Tag === "div" ? motion.div : motion.span;
  const words = text.split(" ");

  return (
    <MotionTag
      className={cn("inline-block", className)}
      variants={container}
      custom={delay}
      initial="hidden"
      animate="visible"
      aria-label={text}
    >
      {words.map((word, wi) => (
        <span
          key={`${word}-${wi}`}
          className="inline-block whitespace-nowrap"
          aria-hidden="true"
        >
          {Array.from(word).map((char, ci) => (
            <motion.span
              key={`${char}-${ci}`}
              variants={child}
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
          {wi < words.length - 1 && <span className="inline-block">&nbsp;</span>}
        </span>
      ))}
    </MotionTag>
  );
}
