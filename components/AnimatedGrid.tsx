"use client";

import { useEffect, useRef } from "react";

export default function AnimatedGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth || 800);
    let height = (canvas.height = canvas.offsetHeight || 600);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth || 800;
      height = canvas.height = canvas.offsetHeight || 600;
    };
    window.addEventListener("resize", handleResize);

    const cols = 28;
    const rows = 20;
    const spacingX = 40;
    const spacingY = 30;
    let time = 0;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      time += 0.015;

      const gridPoints: Array<Array<{ sx: number; sy: number; sz: number }>> = [];

      // Calculate 3D points
      for (let r = 0; r < rows; r++) {
        const rowPoints = [];
        for (let c = 0; c < cols; c++) {
          // Normalize coordinates centered
          const x = (c - cols / 2) * spacingX;
          const y = (r - rows / 2) * spacingY - 100; // Shift back in perspective

          // Undulating wave formulas
          const dist = Math.sqrt(x * x + y * y);
          const z = Math.sin(dist * 0.008 - time * 2) * 35 * Math.cos(c * 0.1);

          // Project to 2D perspective screen space
          const cameraZ = 350;
          const scale = cameraZ / (cameraZ + y * 0.4 + 200);
          
          const sx = width / 2 + x * scale * 1.5;
          const sy = height * 0.72 + (y + z) * scale * 0.8;

          rowPoints.push({ sx, sy, sz: z });
        }
        gridPoints.push(rowPoints);
      }

      // Draw horizontal lines connecting nodes
      ctx.lineWidth = 0.8;
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols - 1; c++) {
          const p1 = gridPoints[r][c];
          const p2 = gridPoints[r][c + 1];

          // Fade out based on distance/depth
          const alpha = Math.max(0, 0.28 * (1 - r / rows));
          ctx.strokeStyle = `rgba(6, 182, 212, ${alpha})`;

          ctx.beginPath();
          ctx.moveTo(p1.sx, p1.sy);
          ctx.lineTo(p2.sx, p2.sy);
          ctx.stroke();
        }
      }

      // Draw vertical lines connecting nodes
      for (let c = 0; c < cols; c++) {
        for (let r = 0; r < rows - 1; r++) {
          const p1 = gridPoints[r][c];
          const p2 = gridPoints[r + 1][c];

          const alpha = Math.max(0, 0.28 * (1 - r / rows));
          ctx.strokeStyle = `rgba(34, 197, 94, ${alpha})`;

          ctx.beginPath();
          ctx.moveTo(p1.sx, p1.sy);
          ctx.lineTo(p2.sx, p2.sy);
          ctx.stroke();
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full pointer-events-none opacity-15"
    />
  );
}
