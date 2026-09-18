"use client";
import React, { useEffect, useState } from "react";
import BlurFade from "@/components/container/blur-fade";
import { BLUR_FADE_DELAY } from "@/lib/constant";
import { experiences, ResumeModel } from "@/model/ResumeModel";
import { CardResume } from "@/components/card/card-resume";
import { useLocale } from "next-intl";
import { experiencesEn } from "@/model/resumeModelEn";
import { useSafeMotion } from "@/hooks/useSafeMotion";
import { Terminal } from "lucide-react";

// Hook léger pour détecter le mode écran (Mobile < 640px)
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 639px)");
    setIsMobile(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return isMobile;
}

// Helper pour convertir "Juillet 2025" ou "July 2025" -> "07/2025"
function formatToMMYYYY(dateStr?: string): string {
  if (!dateStr) return "";

  const monthMap: Record<string, string> = {
    // Français
    janvier: "01", février: "02", mars: "03", avril: "04",
    mai: "05", juin: "06", juillet: "07", août: "08",
    septembre: "09", octobre: "10", novembre: "11", décembre: "12",
    // Anglais
    january: "01", february: "02", march: "03", april: "04",
    may: "05", june: "06", july: "07", august: "08",
    september: "09", october: "10", november: "11", december: "12",
  };

  const parts = dateStr.trim().toLowerCase().split(" ");
  if (parts.length >= 2) {
    const month = monthMap[parts[0]];
    const year = parts[parts.length - 1]; // Récupère l'année à la fin
    if (month && year) {
      return `${month}/${year}`;
    }
  }

  return dateStr;
}

export const Resume = () => {
  const local = useLocale();
  const [localExperiences, setLocalExperiences] = useState<ResumeModel[]>([]);
  const safeMotion = useSafeMotion();
  const isMobile = useIsMobile();

  useEffect(() => {
    if (local === "fr") {
      setLocalExperiences(experiences);
    } else {
      setLocalExperiences(experiencesEn);
    }
  }, [local]);

  return (
    <section
      id="resume"
      className="w-full bg-background text-foreground font-mono border border-border"
    >
      <div className="p-6 sm:p-8">
        <BlurFade delay={BLUR_FADE_DELAY * 11} visibleByDefault={safeMotion}>
          <div className="flex flex-col space-y-3 mb-6">
            <div className="flex items-center gap-2 text-xs uppercase text-muted-foreground tracking-widest">
              <Terminal className="w-3.5 h-3.5" />
              <span>04 // Experience</span>
            </div>
            <h2
              className="font-serif text-3xl sm:text-4xl tracking-tight leading-none"
              data-testid="resume-title"
            >
              Experiences
            </h2>
          </div>
        </BlurFade>
        <div
          data-testid="resume-content"
          className="grid grid-cols-1 gap-px bg-border border border-border"
        >
          {localExperiences.map((work, id) => {
            const startText = isMobile ? formatToMMYYYY(work.start) : work.start;
            const endText = work.end
              ? isMobile
                ? formatToMMYYYY(work.end)
                : work.end
              : local === "fr"
                ? "Présent"
                : "Present";

            const period = `${startText} - ${endText}`;

            return (
              <BlurFade
                key={work.company}
                delay={BLUR_FADE_DELAY * 6 + id * 0.05}
              >
                <CardResume
                  key={work.company}
                  logoUrl={work.logoUrl}
                  altText={work.company}
                  title={work.title}
                  subtitle={work.company}
                  href={work.href}
                  badges={work.badges}
                  period={period}
                  description={work.description}
                />
              </BlurFade>
            );
          })}
        </div>
      </div>
    </section>
  );
};