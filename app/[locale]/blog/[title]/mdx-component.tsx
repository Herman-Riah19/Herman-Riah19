// app/[locale]/blog/[title]/mdx-content.tsx
"use client";

import { MDXRemote } from "next-mdx-remote/rsc";
import { useMDXComponents } from "@/mdx-components";
import { MDXClientProvider } from "@/components/mdx-client";

export default function MdxContent({ content }: { content: string }) {
  const components = useMDXComponents({});

  return (
    <MDXClientProvider>
      <div className="prose prose-invert max-w-none">
        <MDXRemote source={content} components={components} />
      </div>
    </MDXClientProvider>
  );
}
