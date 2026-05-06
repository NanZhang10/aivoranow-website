import { useRef, type ReactNode } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import { cn } from "@/lib/utils";

/**
 * Pointer-tracked spotlight + 3D tilt wrapper.
 * Uses motion values exclusively — no React re-renders during pointer move.
 */
export function SpotlightCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  // raw 0..1 pointer position within the card
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);

  // spotlight follow (pixels), spring-eased
  const sxRaw = useMotionValue(0);
  const syRaw = useMotionValue(0);
  const sx = useSpring(sxRaw, { stiffness: 200, damping: 22 });
  const sy = useSpring(syRaw, { stiffness: 200, damping: 22 });

  // 3D tilt — center -> 0deg, edges -> +/-6deg
  const rxTarget = useTransform(py, [0, 1], [6, -6]);
  const ryTarget = useTransform(px, [0, 1], [-6, 6]);
  const rotateX = useSpring(rxTarget, { stiffness: 160, damping: 18 });
  const rotateY = useSpring(ryTarget, { stiffness: 160, damping: 18 });

  const spotlight = useMotionTemplate`radial-gradient(280px circle at ${sx}px ${sy}px, hsl(190 95% 60% / 0.18), transparent 70%)`;

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const localX = e.clientX - rect.left;
    const localY = e.clientY - rect.top;
    sxRaw.set(localX);
    syRaw.set(localY);
    px.set(localX / rect.width);
    py.set(localY / rect.height);
  }

  function onLeave() {
    px.set(0.5);
    py.set(0.5);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      className={cn("relative [transform-style:preserve-3d]", className)}
    >
      <motion.div
        aria-hidden="true"
        style={{ background: spotlight }}
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
      <div className="relative" style={{ transform: "translateZ(20px)" }}>
        {children}
      </div>
    </motion.div>
  );
}
