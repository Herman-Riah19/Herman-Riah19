import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Projects - Herman Riah",
  description:
    "Explore all projects by Herman Riah. Discover web development, design, and open-source contributions.",
  icons: {
    icon: "next.svg",
  },
  keywords: [
    "Herman Riah",
    "Projects",
    "Web Development",
    "Open Source",
    "Portfolio",
    "Frontend",
    "React",
    "Next.js",
  ],
  authors: [{ name: "Herman Riah" }],
  openGraph: {
    title: "Projects - Herman Riah",
    description:
      "Explore all projects by Herman Riah. Discover web development, design, and open-source contributions.",
    url: "https://herman-riah19.vercel.app/en/projects",
    siteName: "Herman Riah",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Projects - Herman Riah",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects - Herman Riah",
    description:
      "Explore all projects by Herman Riah. Discover web development, design, and open-source contributions.",
    images: ["/og-image.png"],
  },
  robots: "index, follow",
};

export default function ProjectLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="py-12 sm:py-16 px-6 max-w-6xl mx-auto">
      <NeonGradientCard>{children}</NeonGradientCard>
    </div>
  );
}
