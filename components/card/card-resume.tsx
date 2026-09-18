"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Link from "next/link";
import React from "react";

interface ResumeCardProps {
  logoUrl: string;
  altText: string;
  title: string;
  subtitle?: string;
  href?: string;
  badges?: readonly string[];
  period: React.ReactNode;
  description?: string;
}
export const CardResume = ({
  logoUrl,
  altText,
  title,
  subtitle,
  href,
  badges,
  period,
  description,
}: ResumeCardProps) => {
  return (
    <Card className="flex gap-4 rounded-none shadow-none border-0 bg-card p-4 sm:p-5 font-mono">
      <div className="flex-none">
        <Avatar className="size-12 rounded-none border border-border bg-background">
          <AvatarImage
            src={logoUrl}
            alt={altText}
            className="object-contain object-center h-full w-full rounded-none"
          />
          <AvatarFallback className="rounded-none">{altText[0]}</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex-grow min-w-0 flex-col group">
        <CardHeader className="p-0">
          <div className="flex items-center justify-between">
            <h3 className="font-serif text-sm md:text-lg tracking-tight leading-none text-foreground">
              {title}
            </h3>
            <div className="shrink-0 font-mono text-[10px] uppercase tracking-widest tabular-nums text-muted-foreground border border-border p-1 bg-background">
              {period}
            </div>
          </div>
          {subtitle && (
            <div className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mt-1">
              {href ? <Link href={href} className="hover:text-foreground transition-colors">{subtitle}</Link> : subtitle}
            </div>
          )}
        </CardHeader>
        <CardContent className="-ml-10 md:m-0 p-0 mt-2">
          {description && (
            <div
              className="font-sans text-sm text-muted-foreground leading-relaxed"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          )}
        </CardContent>
        <CardFooter className="-ml-10 md:m-0 p-0 mt-3">
          {badges && (
            <span className="flex flex-wrap gap-px bg-border border border-border">
              {badges.map((badge, index) => (
                <Badge
                  variant="default"
                  className="rounded-none border-0"
                  key={index}
                >
                  {badge}
                </Badge>
              ))}
            </span>
          )}
        </CardFooter>
      </div>
    </Card>
  );
};
