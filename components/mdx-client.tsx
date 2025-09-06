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

export function MdxContent({ mdxString }: { mdxString: string }) {
  const [Component, setComponent] = useState<React.ComponentType | null>(null);

  useEffect(() => {
    async function compileMdx() {
      // Compiler le MDX en code JSX
      const compiled = await compile(mdxString, {
        outputFormat: "function-body",
        useDynamicImport: false,
      });

      // Convertir le code compilé en fonction React
      const fn = new Function(
        "React",
        "MDXProvider",
        "components",
        `${compiled}`
      );

      setComponent(() => () => fn(React, MDXProvider, useMDXComponents({})));
    }

    compileMdx();
  }, [mdxString]);

  if (!Component) return <p>Chargement...</p>;

  return <Component />;
}


