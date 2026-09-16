"use client";

import React from "react";
import { Github, FacebookIcon, Linkedin } from "lucide-react";
import Link from "next/link";

export const InfoContact = () => {
  const items = [
    { href: "https://github.com/Herman-Riah19", icon: Github, label: "Herman-Ria19" },
    { href: "https://www.linkedin.com/in/hermann-razafindranaivo-174378237/", icon: Linkedin, label: "Hermann Razafindranaivo" },
    { href: "https://web.facebook.com/riah.hermann/", icon: FacebookIcon, label: "Herman Riah Christian" },
  ];
  return (
    <section className="w-full font-mono">
      <ul
        style={{ listStyleType: "none" }}
        className="grid sm:grid-cols-1 md:grid-cols-3 gap-px bg-border border border-border m-0 p-0"
      >
        {items.map((item) => (
          <li key={item.href} className="bg-card">
            <Link
              href={item.href}
              className="w-full rounded-none flex items-center gap-3 px-3 py-3 text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
            >
              <span className="flex items-center justify-center w-8 h-8 border border-border bg-background shrink-0">
                <item.icon className="size-4" />
              </span>
              <span className="font-mono text-xs uppercase tracking-wider truncate">
                {item.label}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};
