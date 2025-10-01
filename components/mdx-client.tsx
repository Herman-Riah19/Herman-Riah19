"use client";

import React from "react";
import { MDXProvider } from "@mdx-js/react";
import { useMDXComponents } from "@/mdx-components";

export function MDXClientProvider({ children }: { children: React.ReactNode }) {
  return (
    <MDXProvider components={useMDXComponents({})}>
      {children}
    </MDXProvider>
  );
}



