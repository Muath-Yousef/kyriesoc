"use client";

import { useEffect, useRef } from "react";

export default function DynamicBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener("resize", handleResize);

    // Particles Data
    const numParticles = 80;
    const particles: any[] = [];
    for (let i = 0; i < numParticles; i++) {
        particles.push({
            x: Math.random() * width,
            y: Math.random() * height,
            radius: Math.random() * 1.5 + 0.5,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            alpha: Math.random() * 0.5 + 0.1
        });
    }

    // Radar Data
    let angle = 0;

    let animationId: number;

    const draw = () => {
      // Clear with slight trailing effect
      ctx.fillStyle = "rgba(5, 5, 10, 0.2)";
      ctx.fillRect(0, 0, width, height);

      // Draw Grid
      ctx.strokeStyle = "rgba(0, 240, 255, 0.03)";
      ctx.lineWidth = 1;
      const gridSize = 50;
      ctx.beginPath();
      for (let x = 0; x <= width; x += gridSize) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
      }
      for (let y = 0; y <= height; y += gridSize) {
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
      }
      ctx.stroke();

      // Draw radar sweep from center
      const cx = width / 2;
      const cy = height / 2;
      const radius = Math.max(width, height) / 1.5;

      // Radar conic gradient
      const gradient = ctx.createConicGradient(angle, cx, cy);
      gradient.addColorStop(0, "rgba(0, 240, 255, 0)");
      gradient.addColorStop(0.8, "rgba(0, 240, 255, 0.02)");
      gradient.addColorStop(1, "rgba(0, 240, 255, 0.15)");
      
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(cx, cy, radius, angle, angle + Math.PI / 4);
      ctx.lineTo(cx, cy);
      ctx.closePath();
      ctx.fill();

      // Draw radar scan line
      ctx.strokeStyle = "rgba(0, 240, 255, 0.5)";
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(cx + Math.cos(angle + Math.PI / 4) * radius, cy + Math.sin(angle + Math.PI / 4) * radius);
      ctx.stroke();

      // Update angle
      angle += 0.01;

      // Draw and update particles
      particles.forEach(p => {
          p.x += p.vx;
          p.y += p.vy;

          if (p.x < 0) p.x = width;
          if (p.x > width) p.x = 0;
          if (p.y < 0) p.y = height;
          if (p.y > height) p.y = 0;

          // Check radar intersection for "ping" glow effect
          const dx = p.x - cx;
          const dy = p.y - cy;
          let pAngle = Math.atan2(dy, dx);
          if (pAngle < 0) pAngle += Math.PI * 2;
          
          let sweepAngle = (angle + Math.PI / 4) % (Math.PI * 2);
          let tailAngle = angle % (Math.PI * 2);
          
          let inRadar = false;
          if (sweepAngle > tailAngle) {
              inRadar = pAngle >= tailAngle && pAngle <= sweepAngle;
          } else {
              inRadar = pAngle >= tailAngle || pAngle <= sweepAngle;
          }

          let drawAlpha = p.alpha;
          if (inRadar) {
              drawAlpha = 0.8;
              ctx.shadowBlur = 10;
              ctx.shadowColor = "#00f0ff";
          } else {
              ctx.shadowBlur = 0;
          }

          ctx.fillStyle = `rgba(0, 240, 255, ${drawAlpha})`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fill();
      });

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 pointer-events-none z-0 opacity-40 mix-blend-screen"
    />
  );
}
