import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Contact Me - Herman Riah",
  description:
    "Get in touch with Herman Riah for collaborations, inquiries, or feedback.",
  icons: {
    icon: "next.svg",
  },
};

export default async function ContactLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="py-12 sm:py-16 px-6 mx-auto max-w-6xl">
      <NeonGradientCard>{children}</NeonGradientCard>
    </div>
  );
}
