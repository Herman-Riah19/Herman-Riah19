"use client";

import React, { useEffect } from "react";
import { animate, motion, useMotionValue } from "framer-motion";
import useMeasure from "react-use-measure";
import { useSafeMotion } from "@/hooks/useSafeMotion";

type AnimateProps = {
  children: JSX.Element;
};

export const AnimateFeature: React.FC<AnimateProps> = ({ children }) => {
  const [ref, { width }] = useMeasure();
  const x = useMotionValue(0);
  const safeMotion = useSafeMotion();

  useEffect(() => {
    if (!safeMotion || width === 0) {
      x.set(0);
      return;
    }

    const finalPosition = -width / 2 - 8;
    const controls = animate(x, [0, finalPosition + 1], {
      ease: "linear",
      duration: 25,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    });

    return () => controls.stop();
  }, [safeMotion, width, x]);

  return (
    <div ref={ref} style={{ position: "relative", overflow: "hidden" }}>
      <motion.div
        style={{ x }}
        className="flex gap-2"
        initial={safeMotion ? undefined : { x: 0 }}
      >
        {children}
      </motion.div>
    </div>
  );
};
