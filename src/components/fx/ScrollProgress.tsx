import { motion, useScroll, useSpring } from "motion/react";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 25,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 inset-x-0 z-[60] h-[2px] origin-left bg-[linear-gradient(90deg,#0071e3,#5e5ce6,#af52de)]"
    />
  );
}
