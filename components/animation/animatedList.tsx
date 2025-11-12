"use client";

import { AnimatePresence, motion, useInView } from "framer-motion";
import React, {
  ReactElement,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

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
      [index, childrenArray]
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
  }
);

AnimatedList.displayName = "AnimatedList";

export function AnimatedListItem({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const animations = {
    hidden: { scale: 0.9, opacity: 0, y: 50 },
    visible: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 120, // moins rigide → plus fluide
        damping: 20, // plus petit → rebond plus doux
        duration: 0.8, // ajoute un léger temps de transition
        ease: "easeOut", // adoucit la fin
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={animations}
      className="mx-auto w-full"
    >
      {children}
    </motion.div>
  );
}
