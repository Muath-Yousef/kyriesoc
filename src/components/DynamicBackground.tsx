"use client";
import { useEffect, useRef } from "react";

export default function DynamicBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let W = window.innerWidth;
    let H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;

    // Mesh nodes
    const NODES = 55;
    const nodes = Array.from({ length: NODES }, () => ({
      x: Math.random() * W,
      y: Math.random() * H * 1.5, // Spread vertically to account for parallax
      vx: (Math.random() - 0.5) * 0.28,
      vy: (Math.random() - 0.5) * 0.28,
      r: Math.random() * 1.6 + 0.6,
    }));

    const CONNECT_DIST = 160;
    const PRIMARY = "20, 184, 166"; // teal-500

    let scrollY = 0;
    const onScroll = () => {
      scrollY = window.scrollY;
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    function draw() {
      ctx!.clearRect(0, 0, W, H);

      // Subtle radial gradient base
      const grad = ctx!.createRadialGradient(W * 0.5, H * 0.4, 0, W * 0.5, H * 0.4, W * 0.7);
      grad.addColorStop(0, `rgba(${PRIMARY},0.04)`);
      grad.addColorStop(1, "rgba(0,0,0,0)");
      ctx!.fillStyle = grad;
      ctx!.fillRect(0, 0, W, H);

      // Parallax multiplier
      const scrollOffset = scrollY * 0.2;

      // Update + draw nodes
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > W) n.vx *= -1;
        
        // Let nodes wrap vertically regardless of parallax
        if (n.y < -H) n.y = H * 1.5;
        if (n.y > H * 1.5) n.y = -H;

        const renderedY = n.y - scrollOffset;

        // Only draw if within bounds
        if (renderedY > -50 && renderedY < H + 50) {
          ctx!.beginPath();
          ctx!.arc(n.x, renderedY, n.r, 0, Math.PI * 2);
          ctx!.fillStyle = `rgba(${PRIMARY}, 0.5)`;
          ctx!.fill();
        }
      }

      // Connections
      for (let i = 0; i < NODES; i++) {
        for (let j = i + 1; j < NODES; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECT_DIST) {
            const y1 = nodes[i].y - scrollOffset;
            const y2 = nodes[j].y - scrollOffset;
            
            // Optimization: skip lines far off-screen
            if ((y1 > -50 && y1 < H + 50) || (y2 > -50 && y2 < H + 50)) {
              const alpha = (1 - dist / CONNECT_DIST) * 0.18;
              ctx!.beginPath();
              ctx!.strokeStyle = `rgba(${PRIMARY}, ${alpha})`;
              ctx!.lineWidth = 0.7;
              ctx!.moveTo(nodes[i].x, y1);
              ctx!.lineTo(nodes[j].x, y2);
              ctx!.stroke();
            }
          }
        }
      }

      animId = requestAnimationFrame(draw);
    }

    draw();

    const onResize = () => {
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.width = W;
      canvas.height = H;
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      aria-hidden="true"
    />
  );
}
