"use client";

import { Blog } from "@/types/blog-type";
import Link from "next/link";
import React from "react";
import CardBlog from "@/components/card/card-blog";
import { useLocale, useTranslations } from "next-intl";
import { BLUR_FADE_DELAY } from "@/lib/constant";
import BlurFade from "./blur-fade";

interface ListBlogProps {
  blogs: Blog[];
}

export function ListBlog({ blogs }: ListBlogProps) {
  const locale = useLocale();
  const t = useTranslations("Blog");

  return (
    <div className="container mx-auto py-16 flex flex-col gap-10">
      <BlurFade delay={BLUR_FADE_DELAY * 11}>
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl" data-testid="features-checkout">
              {t("Title")}
            </h2>
            <p
              className="prose max-w-full text-pretty font-sans text-lg text-secondary/80 dark:prose-invert"
              data-testid="features-description"
            >
              {t("Description")}
            </p>
          </div>
        </div>
      </BlurFade>
      <section className="grid sm:grid-cols-1 md:grid-cols-3 gap-6">
        {blogs.map((blog, idx) => (
          <Link key={idx} href={`/${locale}/blog/${blog.fileName}`}>
            <CardBlog {...blog} />
          </Link>
        ))}
      </section>
    </div>
  );
}
