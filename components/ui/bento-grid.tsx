import { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

interface BentoGridProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode;
  className?: string;
}

interface BentoCardProps extends ComponentPropsWithoutRef<"div"> {
  name: string;
  className: string;
  background: ReactNode;
  Icon?: React.ElementType;
  description: string;
  href: string;
  cta: string;
}

const BentoGrid = ({ children, className, ...props }: BentoGridProps) => {
  return (
    <div
      className={cn(
        "grid w-full grid-cols-3 gap-px bg-border border border-border",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
  ...props
}: BentoCardProps) => {
  return (
  <div
    key={name}
    className={cn(
      "h-[48vh] group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-none border border-border bg-card text-card-foreground shadow-sm font-mono",
      className
    )}
    {...props}
  >
    <div className="relative flex-1 overflow-hidden border-b border-border bg-background">{background}</div>
    <div className="pointer-events-none z-10 flex flex-col gap-2 p-6 bg-card">
      {Icon && <Icon className="h-5 w-5 text-muted-foreground" />}
        <h3 className="font-serif text-2xl lg:text-3xl tracking-tight leading-none text-foreground">
          {name}
        </h3>
        <p className="max-w-lg font-sans text-sm text-muted-foreground leading-relaxed">{description}</p>
        <div>
        {href !== "" && (
          <Button variant="outline" asChild className="pointer-events-auto w-auto rounded-none font-mono text-xs uppercase tracking-wider h-11 px-6 mt-2">
            <a href={href}>
              {cta}
              <ArrowUpRight className="ml-1 h-4 w-4" />
            </a>
          </Button>
        )}
        </div>
    </div>
  </div>
);
}

export { BentoCard, BentoGrid };
