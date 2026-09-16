import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Blog } from "@/types/blog-type";
import Image from "next/image";

export default function CardBlog({ banner_url, title, description }: Blog) {
  return (
    <Card className="rounded-none border border-border bg-card shadow-sm font-mono overflow-hidden h-full group">
      <CardHeader className="p-2 border-b border-border bg-background">
        <div className="relative overflow-hidden border border-border">
          <Image
            src={banner_url}
            alt={title}
            width={300}
            height={200}
            className="w-full h-44 object-cover object-top transition-transform duration-500 group-hover:scale-[1.02] rounded-none"
          />
        </div>
      </CardHeader>
      <CardContent className="p-5 space-y-2">
        <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Post // Blog</div>
        <CardTitle className="font-serif text-xl tracking-tight leading-none" data-testid={`blog-card-title-${title}`}>{title}</CardTitle>
        <CardDescription className="font-sans text-sm text-muted-foreground leading-relaxed" data-testid={`blog-card-description-${title}`}>
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}
