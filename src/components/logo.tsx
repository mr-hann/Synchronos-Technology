import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="40pt"
      height="40pt"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid meet"
      className={cn(className)}
    >
      <g transform="translate(50, 50)">
        <g stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round">
          {/* Hexagon outline */}
          <path d="M-40 0 L-20 -34.64 L20 -34.64 L40 0 L20 34.64 L-20 34.64 Z" fill="currentColor" stroke="none" />
          <g stroke="var(--background)" fill="var(--background)">
            {/* Top-left face */}
            <path d="M0 0 L-20 -34.64 L-40 0 L-20 -11.54 Z" />
            {/* Top-right face */}
            <path d="M0 0 L-20 -34.64 L20 -34.64 L0 -23.09 Z" />
            {/* Bottom face */}
            <path d="M0 0 L-20 11.54 L-20 34.64 L20 34.64 L20 11.54 Z" transform="translate(0, 0)"/>

            {/* Circuit lines */}
            {/* Left face "S" */}
            <path d="M-30 -5 l15 0" />
            <path d="M-15 -5 l0 -10" />
            <path d="M-15 -15 l-15 0" />
            <path d="M-30 -15 l0 -10" />
            <path d="M-30 -25 l15 0" />

            {/* Top face "T" */}
            <path d="M-10 -29.64 l20 0" />
            <path d="M0 -29.64 l0 15" />

            {/* Bottom face "L" or something */}
            <path d="M10 10 l0 15" />
            <path d="M10 25 l-20 0" />

            {/* Connecting dots */}
            <circle cx="-35" cy="-2.5" r="2" />
            <circle cx="-10" cy="-2.5" r="2" />
            <circle cx="-10" cy="-20" r="2" />
            <circle cx="-35" cy="-30" r="2" />

            <circle cx="-15" cy="-29.64" r="2" />
            <circle cx="15" cy="-29.64" r="2" />
            <circle cx="0" cy="-10" r="2" />
            
            <circle cx="15" cy="5" r="2" />
            <circle cx="15" cy="30" r="2" />
            <circle cx="-15" cy="30" r="2" />
          </g>
        </g>
      </g>
    </svg>
  );
}
