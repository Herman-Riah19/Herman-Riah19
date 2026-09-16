"use client";

import React, { useRef, useEffect, useState } from "react";
import { m, LazyMotion, domAnimation, useAnimation, useReducedMotion } from "framer-motion";
import { useSafeMotion } from "@/hooks/useSafeMotion";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
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


export function SlideInFromBottom({
  children,
  className,
  delay = 0,
  distance = 100,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  distance?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

export function BounceIn({
  children,
  className,
  delay = 0,
  duration = 0.6,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.3, y: 50 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration,
        delay,
        ease: [0.68, -0.55, 0.265, 1.55],
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}