"use client";
import { useTranslations } from "next-intl";

export function Slogan() {
  const t = useTranslations("Home");
  return (
    <div className="w-full bg-background text-foreground font-mono border-t border-border overflow-hidden">
      <div className="px-4 sm:px-8 lg:px-12 py-10 border-b border-border">
        <div className="text-[10px] uppercase tracking-widest text-muted-foreground mb-2">Slogan // System</div>
        <div className="font-serif text-3xl sm:text-5xl tracking-tight leading-none">
          {t("Slogan")}
        </div>
        <div className="font-serif text-xl sm:text-2xl italic font-light text-muted-foreground mt-1">
          {t("Services")}
        </div>
      </div>
    </div>
  );
}
