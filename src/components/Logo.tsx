import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <svg
        viewBox="0 0 64 64"
        className="h-8 w-8"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="aivora-mark" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="hsl(265 90% 65%)" />
            <stop offset="50%" stopColor="hsl(190 95% 60%)" />
            <stop offset="100%" stopColor="hsl(160 80% 55%)" />
          </linearGradient>
        </defs>
        <rect width="64" height="64" rx="14" fill="hsl(230 35% 6%)" />
        <path
          d="M32 14 L48 50 H40 L36.5 41 H27.5 L24 50 H16 Z M30 33 H34 L32 27 Z"
          fill="url(#aivora-mark)"
        />
      </svg>
      <span className="text-lg font-semibold tracking-tight">
        Aivora
      </span>
    </div>
  );
}
