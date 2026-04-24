"use client";

import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

interface CounterProps {
  from: number;
  to: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

export default function Counter({ from, to, duration = 2, suffix = "", prefix = "" }: CounterProps) {
  const [count, setCount] = useState(from);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!inView) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percent = Math.min(progress / (duration * 1000), 1);
      
      // Easing function (easeOutQuart)
      const easePercent = 1 - Math.pow(1 - percent, 4);
      
      setCount(Math.floor(from + (to - from) * easePercent));

      if (progress < duration * 1000) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [inView, from, to, duration]);

  return <span ref={ref}>{prefix}{count}{suffix}</span>;
}
