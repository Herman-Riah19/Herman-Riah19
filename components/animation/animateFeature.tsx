'use client'
import React, { useEffect } from 'react'
import { animate, motion, useMotionValue } from "framer-motion"
import useMeasure from 'react-use-measure';

type AnimateProps = {
  children: JSX.Element
}

export const AnimateFeature: React.FC<AnimateProps> = ({ children }) => {
  let [ ref , { width }] = useMeasure();

  const x = useMotionValue(0);

  useEffect(() => {
    let controls;
    let finalPosition = -width / 2 - 8;
  
    controls = animate(x, [0, finalPosition + 1], {
      ease: "linear",
      duration: 25,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0
    });
    return controls.stop;
  }, [x, width])
  
  return (
    <div ref={ref} style={{ position: "relative" }} >
      <motion.div
        style={{ x }}
        className='flex gap-2 space-x-4'
      >
        {children}
      </motion.div>
    </div>
  )
}
