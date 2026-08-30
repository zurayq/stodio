"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  tx: number;
  ty: number;
  vx: number;
  vy: number;
};

type ResponsiveZProps = {
  label: string;
  hint: string;
  signal: string;
};

export function ResponsiveZ({ label, hint, signal }: ResponsiveZProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const stage = stageRef.current;
    if (!canvas || !stage) return;

    const context = canvas.getContext("2d", { alpha: false });
    if (!context) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const coarsePointer = window.matchMedia("(pointer: coarse)");
    const pointer = { x: -1000, y: -1000, active: false };
    let particles: Particle[] = [];
    let frame = 0;
    let width = 0;
    let height = 0;
    let visible = true;
    const isStatic = () => reducedMotion.matches || coarsePointer.matches;

    const makePoints = () => {
      const points: Particle[] = [];
      const marginX = width * 0.17;
      const top = height * 0.25;
      const bottom = height * 0.75;
      const usable = width - marginX * 2;
      const steps = Math.max(16, Math.floor(usable / 18));

      const addLine = (x1: number, y1: number, x2: number, y2: number, count: number) => {
        for (let index = 0; index <= count; index += 1) {
          const progress = index / count;
          const tx = x1 + (x2 - x1) * progress;
          const ty = y1 + (y2 - y1) * progress;
          points.push({ x: tx, y: ty, tx, ty, vx: 0, vy: 0 });
        }
      };

      addLine(marginX, top, width - marginX, top, steps);
      addLine(width - marginX, top, marginX, bottom, Math.floor(steps * 1.2));
      addLine(marginX, bottom, width - marginX, bottom, steps);
      particles = points;
    };

    const resize = () => {
      const bounds = stage.getBoundingClientRect();
      width = Math.max(1, bounds.width);
      height = Math.max(1, bounds.height);
      const dpr = Math.min(window.devicePixelRatio || 1, 1.75);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      makePoints();
      if (isStatic() && visible) {
        cancelAnimationFrame(frame);
        frame = requestAnimationFrame(render);
      }
    };

    const drawGrid = () => {
      context.strokeStyle = "rgba(239, 237, 229, 0.09)";
      context.lineWidth = 1;
      const gap = Math.max(28, Math.round(width / 18));
      for (let x = gap; x < width; x += gap) {
        context.beginPath();
        context.moveTo(x, 0);
        context.lineTo(x, height);
        context.stroke();
      }
      for (let y = gap; y < height; y += gap) {
        context.beginPath();
        context.moveTo(0, y);
        context.lineTo(width, y);
        context.stroke();
      }
    };

    const render = () => {
      frame = 0;
      if (!visible) {
        return;
      }

      context.fillStyle = "#11110f";
      context.fillRect(0, 0, width, height);
      drawGrid();

      const still = reducedMotion.matches;
      const radius = Math.min(width, height) * 0.2;

      particles.forEach((particle, index) => {
        if (!still) {
          let forceX = 0;
          let forceY = 0;
          if (pointer.active && !coarsePointer.matches) {
            const dx = particle.x - pointer.x;
            const dy = particle.y - pointer.y;
            const distance = Math.sqrt(dx * dx + dy * dy) || 1;
            if (distance < radius) {
              const force = (1 - distance / radius) * 3.2;
              forceX = (dx / distance) * force;
              forceY = (dy / distance) * force;
            }
          } else if (!coarsePointer.matches) {
            forceY = Math.sin(performance.now() * 0.001 + index * 0.34) * 0.025;
          }

          particle.vx += (particle.tx - particle.x) * 0.035 + forceX;
          particle.vy += (particle.ty - particle.y) * 0.035 + forceY;
          particle.vx *= 0.82;
          particle.vy *= 0.82;
          particle.x += particle.vx;
          particle.y += particle.vy;
        } else {
          particle.x = particle.tx;
          particle.y = particle.ty;
        }
      });

      context.strokeStyle = "rgba(255, 87, 51, 0.28)";
      context.lineWidth = 1;
      context.beginPath();
      particles.forEach((particle, index) => {
        if (index === 0 || index === particles.length / 3 || index === (particles.length / 3) * 2) {
          context.moveTo(particle.x, particle.y);
        } else {
          context.lineTo(particle.x, particle.y);
        }
      });
      context.stroke();

      particles.forEach((particle, index) => {
        const everyFourth = index % 4 === 0;
        context.fillStyle = everyFourth ? "#ff5733" : "#f1efe8";
        const size = everyFourth ? 5 : 2.5;
        context.fillRect(particle.x - size / 2, particle.y - size / 2, size, size);
      });

      if (pointer.active && !coarsePointer.matches && !still) {
        context.strokeStyle = "rgba(241, 239, 232, 0.45)";
        context.beginPath();
        context.arc(pointer.x, pointer.y, 15, 0, Math.PI * 2);
        context.stroke();
        context.fillStyle = "#ff5733";
        context.fillRect(pointer.x - 2, pointer.y - 2, 4, 4);
      }

      if (!isStatic()) frame = requestAnimationFrame(render);
    };

    const move = (event: PointerEvent) => {
      const bounds = stage.getBoundingClientRect();
      pointer.x = event.clientX - bounds.left;
      pointer.y = event.clientY - bounds.top;
      pointer.active = true;
    };

    const leave = () => {
      pointer.active = false;
    };

    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible && !frame) frame = requestAnimationFrame(render);
      if (!visible && frame) {
        cancelAnimationFrame(frame);
        frame = 0;
      }
    });

    const updateMotionMode = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(render);
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(stage);
    observer.observe(stage);
    stage.addEventListener("pointermove", move);
    stage.addEventListener("pointerleave", leave);
    reducedMotion.addEventListener("change", updateMotionMode);
    coarsePointer.addEventListener("change", updateMotionMode);
    resize();
    render();

    return () => {
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      observer.disconnect();
      stage.removeEventListener("pointermove", move);
      stage.removeEventListener("pointerleave", leave);
      reducedMotion.removeEventListener("change", updateMotionMode);
      coarsePointer.removeEventListener("change", updateMotionMode);
    };
  }, []);

  return (
    <div className="responsive-z" ref={stageRef} aria-hidden="true">
      <canvas ref={canvasRef} />
      <div className="responsive-z__topline">
        <span>{label}</span>
        <span className="responsive-z__live"><i /> Live</span>
      </div>
      <div className="responsive-z__bottomline">
        <span>{signal}</span>
        <span className="responsive-z__hint">{hint} ↗</span>
      </div>
    </div>
  );
}
