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
 * Pointer-tracked spotlight + very subtle 3D tilt.
 * Tuned for a light/Apple aesthetic — gentle blue spotlight, max ~3deg tilt.
 */
export function SpotlightCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);

  const sxRaw = useMotionValue(0);
  const syRaw = useMotionValue(0);
  const sx = useSpring(sxRaw, { stiffness: 200, damping: 22 });
  const sy = useSpring(syRaw, { stiffness: 200, damping: 22 });

  // Very gentle tilt — Apple aesthetic
  const rxTarget = useTransform(py, [0, 1], [3, -3]);
  const ryTarget = useTransform(px, [0, 1], [-3, 3]);
  const rotateX = useSpring(rxTarget, { stiffness: 160, damping: 18 });
  const rotateY = useSpring(ryTarget, { stiffness: 160, damping: 18 });

  const spotlight = useMotionTemplate`radial-gradient(320px circle at ${sx}px ${sy}px, rgba(0,113,227,0.10), transparent 65%)`;

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
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
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
