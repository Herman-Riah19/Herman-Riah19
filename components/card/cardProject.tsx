"use client";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";
import { Button } from "@/components/ui/button";
import { Eye, ExternalLink } from "lucide-react";
import { Model } from "@/model/ProjectModel";

interface Props {
  id: number;
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: string[];
  link?: string;
  image?: string;
  links?: string;
  className?: string;
  project?: Model;
  onSelect?: (project: Model) => void;
  locale?: string;
}

export function CardProject({
  id,
  title,
  href,
  description,
  dates,
  tags,
  link,
  image,
  className,
  project,
  onSelect,
  locale = "fr",
}: Props) {
  const currentProject: Model = project || {
    id,
    title,
    href: href || "#",
    description,
    date: dates,
    technology: tags,
    img: image || "",
    link: link || "",
    type: "Projet",
  };

  const isFr = locale === "fr";

  return (
    <Card
      key={id}
      className={
        "rounded-none border-0 bg-card flex flex-col overflow-hidden shadow-sm h-full group font-mono"
      }
    >
      <div
        onClick={() => onSelect && onSelect(currentProject)}
        className={cn("block cursor-pointer relative border-b border-border bg-background p-2", className)}
      >
        {image && (
          <div className="relative overflow-hidden">
            <Image
              src={image}
              alt={title}
              width={400}
              height={300}
              className="h-52 w-full overflow-hidden object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </div>
        )}
      </div>
      <CardHeader className="p-6 pb-0 m-0">
        <div className="space-y-2">
          <div className="flex items-start justify-between gap-2">
            <CardTitle
              className="font-serif text-xl tracking-tight cursor-pointer hover:text-muted-foreground transition-colors leading-none"
              data-testid={`project-title-${id}`}
              onClick={() => onSelect && onSelect(currentProject)}
            >
              {title}
            </CardTitle>
            {href && href !== "#" && (
              <Link
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors p-1"
                title="Lien direct"
              >
                <ExternalLink className="w-4 h-4" />
              </Link>
            )}
          </div>
          <time className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground block" data-testid={`project-dates-${id}`}>
            {dates}
          </time>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert line-clamp-3">
            {description}
          </Markdown>
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex flex-col p-6 pt-4 gap-4">
        <div className="flex flex-wrap gap-px bg-border border border-border w-fit">
          {tags.map((tag, idx) => (
            <Badge
              key={idx}
              variant="default"
              className="px-2 py-1 text-[10px] font-mono uppercase tracking-wider rounded-none border-0"
            >
              {tag}
            </Badge>
          ))}
        </div>

        {onSelect && (
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => onSelect(currentProject)}
            className="w-full mt-1 gap-2 rounded-none font-mono text-xs uppercase tracking-wider h-11"
          >
            <Eye className="w-3.5 h-3.5" />
            {isFr ? "Voir les détails" : "View Details"}
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
