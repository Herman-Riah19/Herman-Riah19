"use client";
import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "@/components/magicui/scroll-based-velocity";
import { useTranslations } from "next-intl";

export function Slogan() {
  const t = useTranslations("Home");
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <ScrollVelocityContainer className="text-4xl font-bold tracking-[-0.02em] md:text-7xl md:leading-[5rem]">
        <ScrollVelocityRow baseVelocity={5} direction={1}>
          {t("Slogan")}
        </ScrollVelocityRow>
        <ScrollVelocityRow baseVelocity={5} direction={-1}>
          {t("Services")}
        </ScrollVelocityRow>
      </ScrollVelocityContainer>
      <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
      <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
    </div>
  );
}
