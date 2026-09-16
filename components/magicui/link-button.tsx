import Link from "next/link";
import React from "react";
import { ArrowUpRight } from "lucide-react";

export function LinkButton({ link, title }: { link: string; title: string }) {
  return (
    <Link
      href={link}
      className="group inline-flex items-center justify-center gap-2 rounded-none border border-border bg-card px-6 h-11 font-mono text-xs uppercase tracking-wider text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
    >
      <span className="h-1.5 w-1.5 bg-primary rounded-full"></span>
      {title}
      <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </Link>
  );
}
