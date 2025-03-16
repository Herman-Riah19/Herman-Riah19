"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

interface ResumeCardProps {
  logoUrl: string;
  altText: string;
  title: string;
  subtitle?: string;
  href?: string;
  badges?: readonly string[];
  period: string;
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
    <Card className="flex shadow-none border-none bg-transparent p-0 divide-y divide-dashed">
      <div className="flex-none ml-0 mt-5">
        <Avatar className="border size-12 md:m-auto sm:m-0 bg-primary dark:bg-foreground">
          <AvatarImage
            src={logoUrl}
            alt={altText}
            className="object-contain object-center h-full w-full"
          />
          <AvatarFallback>{altText[0]}</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex-grow ml-2 items-center flex-col group">
        <CardHeader className="sm:m-0">
          <div className="flex items-center justify-between gap-x-2 text-base">
            <h3 className="inline-flex items-center justify-center font-extrabold leading-none">
              <span className="text-xl">{title}</span>
            </h3>
            <div className="text-lg sm:text-sm tabular-nums text-muted-foreground text-right">
              {period}
            </div>
          </div>
          {subtitle && <div className="font-medium text-lg text-secondary/70">{subtitle}</div>}
        </CardHeader>
        <CardContent className="m-0 p-0">
          {description && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: 1,
                height: "auto",
              }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-0 text-secondary/80 text-md sm:text-sm dark:prose-invert"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          )}
        </CardContent>
        <CardFooter className="m-0 p-0 mt-2">
          {badges && (
            <span className="flex flex-wrap gap-x-1 gap-y-1">
              {badges.map((badge, index) => (
                <Badge
                  variant="secondary"
                  className="align-middle text-xs"
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
