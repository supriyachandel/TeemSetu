"use client";

import { useEffect, useRef, useState } from "react";

export default function FloatingEnergySphere() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouse({
        x: (e.clientX / window.innerWidth - 0.5) * 45,
        y: (e.clientY / window.innerHeight - 0.5) * 45,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

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

    // 3D Nodes of the constellation sphere
    const nodes: Array<{ x: number; y: number; z: number }> = [];
    const nodeCount = 90;
    const radius = 150;

    // Distribute nodes using Fibonacci lattice
    for (let i = 0; i < nodeCount; i++) {
      const phi = Math.acos(1 - (2 * (i + 0.5)) / nodeCount);
      const theta = Math.sqrt(nodeCount * Math.PI) * phi;

      nodes.push({
        x: radius * Math.sin(phi) * Math.cos(theta),
        y: radius * Math.sin(phi) * Math.sin(theta),
        z: radius * Math.cos(phi),
      });
    }

    let angleX = 0.002;
    let angleY = 0.003;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Centered horizontally, shifted slightly up to sit behind the text
      const centerX = width * 0.5;
      const centerY = height * 0.35;

      ctx.translate(centerX, centerY);

      // Mouse interactive adjustments
      const currentAngleX = angleX + mouse.y * 0.0001;
      const currentAngleY = angleY + mouse.x * 0.0001;

      const cosX = Math.cos(currentAngleX);
      const sinX = Math.sin(currentAngleX);
      const cosY = Math.cos(currentAngleY);
      const sinY = Math.sin(currentAngleY);

      for (const node of nodes) {
        // Rotate Y
        const x1 = node.x * cosY - node.z * sinY;
        const z1 = node.x * sinY + node.z * cosY;

        // Rotate X
        const y2 = node.y * cosX - z1 * sinX;
        const z2 = node.y * sinX + z1 * cosX;

        node.x = x1;
        node.y = y2;
        node.z = z2;
      }

      // Draw glowing background orb
      const gradient = ctx.createRadialGradient(0, 0, 10, 0, 0, radius * 1.3);
      gradient.addColorStop(0, "rgba(34, 197, 94, 0.12)");
      gradient.addColorStop(0.5, "rgba(6, 182, 212, 0.06)");
      gradient.addColorStop(1, "rgba(5, 11, 26, 0)");
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(0, 0, radius * 1.3, 0, Math.PI * 2);
      ctx.fill();

      // Draw connection vectors
      ctx.lineWidth = 0.6;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dz = nodes[i].z - nodes[j].z;
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist < 110) {
            const k1 = 300 / (300 + nodes[i].z);
            const k2 = 300 / (300 + nodes[j].z);

            const alpha = Math.max(0, 0.28 * (1 - dist / 110));
            // Transition color from cyan to green based on position
            ctx.strokeStyle = nodes[i].x > 0 
              ? `rgba(6, 182, 212, ${alpha})`
              : `rgba(34, 197, 94, ${alpha})`;

            ctx.beginPath();
            ctx.moveTo(nodes[i].x * k1, nodes[i].y * k1);
            ctx.lineTo(nodes[j].x * k2, nodes[j].y * k2);
            ctx.stroke();
          }
        }
      }

      // Draw connection nodes
      for (const node of nodes) {
        const k = 300 / (300 + node.z);
        const size = Math.max(1, 3 * k);
        const alpha = Math.max(0.08, (node.z + radius) / (2 * radius));

        ctx.fillStyle = node.y > 0
          ? `rgba(34, 197, 94, ${alpha * 0.9})`
          : `rgba(6, 182, 212, ${alpha * 0.9})`;

        ctx.shadowBlur = 6;
        ctx.shadowColor = node.y > 0 ? "#22C55E" : "#06B6D4";
        ctx.beginPath();
        ctx.arc(node.x * k, node.y * k, size, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      ctx.translate(-centerX, -centerY);
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, [mouse]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full pointer-events-none opacity-20"
    />
  );
}
