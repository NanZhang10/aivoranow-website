import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <svg viewBox="0 0 64 64" className="h-7 w-7" aria-hidden="true">
        <defs>
          <linearGradient id="aivora-mark" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#0071e3" />
            <stop offset="50%" stopColor="#5e5ce6" />
            <stop offset="100%" stopColor="#af52de" />
          </linearGradient>
        </defs>
        <rect
          width="64"
          height="64"
          rx="14"
          fill="hsl(var(--foreground))"
        />
        <path
          d="M32 14 L48 50 H40 L36.5 41 H27.5 L24 50 H16 Z M30 33 H34 L32 27 Z"
          fill="url(#aivora-mark)"
        />
      </svg>
      <span className="text-[17px] font-semibold tracking-tight">Aivora</span>
    </div>
  );
}
