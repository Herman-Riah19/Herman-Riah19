"use client"; // nécessaire pour l'exécution côté client

import React, { useEffect, useState } from "react";
import { MDXProvider } from "@mdx-js/react";
import { useMDXComponents } from "@/mdx-components"; // ton wrapper MDX personnalisé
import { compile } from "@mdx-js/mdx";

export function MDXClientProvider({ children }: { children: React.ReactNode }) {
  return (
    <MDXProvider components={useMDXComponents({})}>
      {children}
    </MDXProvider>
  );
}



