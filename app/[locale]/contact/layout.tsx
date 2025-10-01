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

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return <div className="py-12 sm:py-16 px-6 max-w-6xl">{children}</div>;
};

export default layout;
