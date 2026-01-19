"use client";

import React, { useRef, useEffect, useState } from "react";
import { m, LazyMotion, domAnimation, useAnimation, useReducedMotion } from "framer-motion";
import { useSafeMotion } from "@/hooks/useSafeMotion";
interface VerticalScrollProps {
  children: React.ReactNode;
  className?: string;
}

export const VerticalScroll: React.FC<VerticalScrollProps> = ({ children, className }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const safeMotion = useSafeMotion();
  const reduceMotion = useReducedMotion();
  const [isDesktop, setIsDesktop] = useState(true);

  // ✅ Détecte desktop / mobile
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    setIsDesktop(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  // ✅ Animation scroll
  useEffect(() => {
    if (!safeMotion || reduceMotion || !isDesktop) {
      controls.set({ y: 0 });
      return;
    }

    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const offset = Math.min(scrollTop, container.scrollHeight - window.innerHeight);
      controls.start({ y: -offset });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls, safeMotion, reduceMotion, isDesktop]);

  return (
    <LazyMotion features={domAnimation}>
      <div
        ref={containerRef}
        className={`relative overflow-hidden h-auto ${className || ""}`}
      >
        <m.div
          animate={controls}
          style={{ y: 0 }}
          transition={{ ease: "easeInOut", duration: 0.8 }}
          className="flex flex-col h-auto"
        >
          {children}
        </m.div>
      </div>
    </LazyMotion>
  );
};
