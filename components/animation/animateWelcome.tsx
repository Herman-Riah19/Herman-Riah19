'use client'
import React, { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from "framer-motion"

type AnimateProps = {
  children: JSX.Element
}

export const AnimateWelcome: React.FC<AnimateProps> = ({ children }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false })

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    } 
  }, [isInView, mainControls]);
  return (
    <div ref={ref}>
      <motion.div
        variants={{
          hidden: { opacity: 0, x: 0, display: "none" },
          visible: { opacity: 1, x: 10, display: "block" }
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {children}
      </motion.div>
    </div>
  )
}

export const AnimateWelcomeLeft: React.FC<AnimateProps> = ({ children }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false })

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    } 
  }, [isInView, mainControls]);
  return (
    <div ref={ref}>
      <motion.div
        variants={{
          hidden: { opacity: 0, x: 75, display: "none" },
          visible: { opacity: 1, x: 0, display: "block" }
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 1, delay: 0.5 }}
        className='h-[30.5vw]'
      >
        {children}
      </motion.div>
    </div>
  )
}
export const AnimateWelcomeBack: React.FC<AnimateProps> = ({ children }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false })

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);
  
  return (
    <div ref={ref} style={{ width: '100%' }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 }
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {children}
      </motion.div>
    </div>
  )
}
