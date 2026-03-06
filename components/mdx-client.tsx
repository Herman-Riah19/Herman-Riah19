"use client";

import { MDXProvider } from "@mdx-js/react";

export function MDXClientProvider({ children }: { children: React.ReactNode }) {
  return <MDXProvider>{children}</MDXProvider>;
}
