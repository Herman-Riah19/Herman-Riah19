"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

interface VerticalScrollProps {
  children: React.ReactNode;
  className?: string;
}

export const VerticalScroll: React.FC<VerticalScrollProps> = ({ children, className }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const container = containerRef.current;
    const scrollContainer = scrollRef.current;
    if (!container || !scrollContainer) return;

    // ✅ Désactiver le scroll animé sur mobile / tablette
    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;

    if (!isDesktop) return; // Pas d'animation sur mobile

    const ctx = gsap.context(() => {
      gsap.to(scrollContainer, {
        y: -window.innerHeight,
        ease: "power1.inOut",
        duration: 0.9,
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "bottom top",
          scrub: 0.3,
          invalidateOnRefresh: true,
          snap: {
            snapTo: 1,
            duration: 0.9,
            ease: "power1.inOut",
          },
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className={`relative overflow-hidden h-auto ${className || ""}`}>
      <div ref={scrollRef} className="flex flex-col h-auto">
        {children}
      </div>
    </div>
  );
};
