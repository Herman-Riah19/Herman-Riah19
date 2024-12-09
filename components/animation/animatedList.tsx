"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { ReactElement, useEffect, useMemo, useRef, useState } from "react";

export const AnimatedList = React.memo(
  ({
    className,
    children,
    delay = 1000,
    maxHeight = 300, // Limite de hauteur en pixels
  }: {
    className?: string;
    children: React.ReactNode;
    delay?: number;
    maxHeight?: number;
  }) => {
    const [index, setIndex] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const childrenArray = React.Children.toArray(children);

    useEffect(() => {
      const interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % childrenArray.length);
      }, delay);

      return () => clearInterval(interval);
    }, [childrenArray.length, delay]);

    const itemsToShow = useMemo(
      () => childrenArray.slice(0, index + 1),
      [index, childrenArray],
    );

    useEffect(() => {
      if (containerRef.current) {
        // Si le contenu dépasse la hauteur maximale, faire défiler
        const container = containerRef.current;
        if (container.scrollHeight > container.offsetHeight) {
          container.scrollTop = container.scrollHeight - container.offsetHeight;
        }
      }
    }, [itemsToShow]);

    return (
      <div
        ref={containerRef}
        className={`relative flex flex-col items-center gap-4 overflow-hidden ${className}`}
        style={{ maxHeight: `${maxHeight}px` }} // Appliquer la limite de hauteur
      >
        <AnimatePresence>
          {itemsToShow.map((item) => (
            <AnimatedListItem key={(item as ReactElement).key}>
              {item}
            </AnimatedListItem>
          ))}
        </AnimatePresence>
      </div>
    );
  },
);

AnimatedList.displayName = "AnimatedList";

export function AnimatedListItem({ children }: { children: React.ReactNode }) {
  const animations = {
    initial: { scale: 0, opacity: 0, translateY: 50 }, // L'élément commence en bas
    animate: { scale: 1, opacity: 1, translateY: 0 }, // Animation vers sa position finale
    exit: { scale: 0, opacity: 0, translateY: -50 }, // Animation vers le haut à la suppression
    transition: { type: "spring", stiffness: 350, damping: 40 },
  };

  return (
    <motion.div
      initial={animations.initial}
      animate={animations.animate}
      exit={animations.exit}
      transition={animations.transition}
      layout
      className="mx-auto w-full"
    >
      {children}
    </motion.div>
  );
}
