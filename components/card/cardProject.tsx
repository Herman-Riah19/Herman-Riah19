import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: string;
  link?: string;
  image?: string;
  links: string;
  className?: string;
}

export function CardProject({
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
      className={
        "flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full"
      }
    >
      <Link
        href={href || "#"}
        className={cn("block cursor-pointer", className)}
      >
        {image && (
          <Image
            src={image}
            alt={title}
            width={400}
            height={200}
            className="h-40 w-full overflow-hidden object-cover object-top"
          />
        )}
      </Link>
      <CardHeader className="px-2">
        <div className="space-y-1">
          <CardTitle className="mt-1 text-base">{title}</CardTitle>
          <time className="font-sans text-xs">{dates}</time>
          <div className="hidden font-sans text-xs underline print:visible">
            {link?.replace("https://", "").replace("www.", "").replace("/", "")}
          </div>
          <Markdown className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert">
            {description}
          </Markdown>
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex flex-col px-2">
          <div className="mt-2 flex flex-wrap gap-1">
              <Badge
                className="px-1 py-0 text-[10px]"
                variant="secondary"
              >
                {tags}
              </Badge>
          </div>
      </CardContent>
      <CardFooter className="px-2 pb-2">
          <div className="flex flex-row flex-wrap items-start gap-1">
              <Link href={links} target="_blank">
                <Badge className="flex gap-2 px-2 py-1 text-[10px]">
                  <Globe />
                  Web site
                </Badge>
              </Link>
          </div>
      </CardFooter>
    </Card>
  );
}
