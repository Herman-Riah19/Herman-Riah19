import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume - Herman Riah",
  description: "Resume",
  icons: {
    icon: "next.svg",
  },
};

export default function AboutLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="w-full">{children}</div>
  );
}
