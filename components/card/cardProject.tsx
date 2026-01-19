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
import { Lens } from "@/components/magicui/lens";

interface Props {
  id: number;
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: string[];
  link?: string;
  image?: string;
  links: string;
  className?: string;
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
  links,
  className,
}: Props) {
  return (
    <Card
      key={id}
      className={
        "bg-background/80 flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full"
      }
    >
      <Link
        href={href || "#"}
        className={cn("block cursor-pointer", className)}
      >
        {image && (
          <Lens
            zoomFactor={2}
            lensSize={200}
            isStatic={false}
            ariaLabel="Zoom Area"
          >
            <Image
              src={image}
              alt={title}
              width={400}
              height={300}
              className="h-52 w-full overflow-hidden object-cover object-top"
            />
          </Lens>
        )}
      </Link>
      <CardHeader className="p-0 m-0">
        <div className="space-y-1 p-2">
          <CardTitle className="mt-1 text-lg" data-testid={`project-title-${id}`}>{title}</CardTitle>
          <time className="font-sans text-sm" data-testid={`project-dates-${id}`}>{dates}</time>
          <div className="hidden font-sans text-xs underline print:visible">
            {link?.replace("https://", "").replace("www.", "").replace("/", "")}
          </div>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            {description}
          </Markdown>
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex flex-col px-2">
        <div className="mt-2 flex flex-wrap gap-1">
          {tags.map((tag, idx) => (
            <Badge
              key={idx}
              className="px-1 py-0 text-[11px]"
              variant="secondary"
            >
              {tag}
            </Badge>
          ))}

        </div>
      </CardContent>
    </Card>
  );
}
