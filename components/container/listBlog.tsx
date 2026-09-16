"use client";

import { Blog } from "@/types/blog-type";
import Link from "next/link";
import React from "react";
import CardBlog from "@/components/card/card-blog";
import { useLocale, useTranslations } from "next-intl";
import { BLUR_FADE_DELAY } from "@/lib/constant";
import BlurFade from "./blur-fade";
import { Terminal } from "lucide-react";

interface ListBlogProps {
  blogs: Blog[];
}

export function ListBlog({ blogs }: ListBlogProps) {
  const locale = useLocale();
  const t = useTranslations("Blog");

  return (
    <div className="w-full bg-background text-foreground font-mono">
      <div className="px-4 sm:px-8 lg:px-12 py-16 lg:py-20">
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <div className="flex flex-col space-y-3 max-w-3xl mb-10">
            <div className="flex items-center gap-2 text-xs uppercase text-muted-foreground tracking-widest">
              <Terminal className="w-3.5 h-3.5" />
              <span>Blog // Index</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif tracking-tight leading-none" data-testid="features-checkout">
              {t("Title")}
            </h2>
            <p
              className="font-sans text-sm sm:text-base text-muted-foreground leading-relaxed max-w-xl"
              data-testid="features-description"
            >
              {t("Description")}
            </p>
          </div>
        </BlurFade>
        <section className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-px bg-border border border-border">
          {blogs.map((blog, idx) => (
            <Link key={idx} href={`/${locale}/blog/${blog.fileName}`} className="bg-card">
              <CardBlog {...blog} />
            </Link>
          ))}
        </section>
        <div className="flex items-center justify-between pt-4 mt-8 border-t border-border text-[10px] text-muted-foreground uppercase tracking-widest">
          <div>Posts // {blogs.length}</div>
          <div>System active</div>
        </div>
      </div>
    </div>
  );
}
