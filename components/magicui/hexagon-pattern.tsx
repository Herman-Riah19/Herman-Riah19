"use client";

import React, { useId } from "react";
import { cn } from "@/lib/utils";

export interface HexagonPatternProps extends React.SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
  x?: number;
  y?: number;
  hexagons?: [number, number][];
  className?: string;
}

export function HexagonPattern({
  width = 48,
  height = 48,
  x = 0,
  y = 0,
  hexagons = [],
  className,
  ...props
}: HexagonPatternProps) {
  const id = useId();

  // Flat-topped regular hexagon polygon coordinates
  const hexPoints = `${width / 2},0 ${width},${height * 0.25} ${width},${height * 0.75} ${width / 2},${height} 0,${height * 0.75} 0,${height * 0.25}`;

  return (
    <svg
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full stroke-muted-foreground/15",
        className
      )}
      {...props}
    >
      <defs>
        <pattern
          id={id}
          width={width}
          height={height * 1.5}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <polygon
            points={hexPoints}
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
          <polygon
            points={hexPoints}
            transform={`translate(${width / 2}, ${height * 0.75})`}
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
      {hexagons.length > 0 && (
        <svg x={x} y={y} className="overflow-visible">
          {hexagons.map(([hx, hy], idx) => {
            const isOddRow = hy % 2 !== 0;
            const px = hx * width + (isOddRow ? width / 2 : 0);
            const py = hy * (height * 0.75);
            return (
              <polygon
                key={`${hx}-${hy}-${idx}`}
                points={hexPoints}
                transform={`translate(${px}, ${py})`}
                className="fill-primary/10 stroke-primary/30 transition-colors duration-300"
                strokeWidth="1"
              />
            );
          })}
        </svg>
      )}
    </svg>
  );
}
