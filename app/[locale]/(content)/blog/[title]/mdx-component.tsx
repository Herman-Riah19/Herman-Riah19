"use client"
import { MDXRemote } from "next-mdx-remote/rsc";
import { useMDXComponents } from "@/mdx-components";

export function MdxContent({ content }: { content: string }) {
  const components = useMDXComponents({});

  return (
    <div className="prose prose-invert max-w-none">
      <MDXRemote source={content} components={components} />
    </div>
  );
}
