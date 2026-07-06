"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Stagger delay in seconds */
  delay?: number;
  /** Vertical offset to animate from, in pixels */
  y?: number;
}

/**
 * Subtle fade-up reveal when the element scrolls into view.
 * Respects prefers-reduced-motion via the viewport `once` behavior.
 */
export const Reveal = ({ children, className, delay = 0, y = 24 }: RevealProps) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};
