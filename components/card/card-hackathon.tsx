import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface Props {
  title: string;
  description: string;
  dates: string;
  location: string;
  image?: string;
  links: string;
}

export function CardHackathon({
  title,
  description,
  dates,
  location,
  image,
  links,
}: Props) {
  return (
    <li className="relative bg-card p-4 sm:p-5 pl-16 sm:pl-20 font-mono">
      <div className="absolute left-4 sm:left-5 top-4 flex items-center justify-center bg-background border border-border p-1">
        <Avatar className="size-10 rounded-none border-0">
          <AvatarImage src={image} alt={title} className="object-contain rounded-none" />
          <AvatarFallback className="rounded-none">{title[0]}</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex flex-1 flex-col justify-start gap-1.5 min-w-0">
        {dates && (
          <time className="text-[10px] uppercase tracking-widest text-muted-foreground">{dates}</time>
        )}
        <h2 className="font-serif text-lg tracking-tight leading-none text-foreground">{title}</h2>
        {location && (
          <p className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground">{location}</p>
        )}
        {description && (
          <span 
            className="font-sans text-sm text-muted-foreground leading-relaxed"
            dangerouslySetInnerHTML={{ __html: description }}/>
        )}
      </div>
      <div className="mt-3 flex flex-row flex-wrap items-start gap-2">
        <Link href={links} >
          <Badge title="Source code" className="flex gap-2 rounded-none font-mono text-[10px] uppercase tracking-wider hover:bg-accent hover:text-accent-foreground transition-colors">
            Source code
            <ArrowUpRight className="size-3.5" />
          </Badge>
        </Link>
      </div>
    </li>
  );
}
