"use client";
import { use, useEffect, useRef, useState } from "react";

interface Star {
  x: number;
  y: number;
  z: number;
  size: number;
}

type Breakpoint = "xs" | "sm" | "md" | "lg" | "xl";

const getBreakpoint = (width: number): Breakpoint => {
  if (width < 440) return "xs";
  if (width < 640) return "sm";
  if (width < 768) return "md";
  if (width < 1024) return "lg";
  return "xl"; // ≥1024px
};

const getStarCountForBreakpoint = (breakpoint: Breakpoint): number => {
  switch (breakpoint) {
    case "xs":
      return 1000;
    case "sm":
      return 2000;
    case "md":
      return 3000;
    case "lg":
      return 4000;
    case "xl":
      return 6000;
    default:
      return 5000;
  }
};

const getStarZForBreakpoint = (breakpoint: Breakpoint): number => {
  switch (breakpoint) {
    case "xs":
      return 0.05;
    case "sm":
      return 0.1;
    case "md":
      return 0.2;
    case "lg":
      return 0.3;
    case "xl":
      return 0.3;
    default:
      return 0.3;
  }
};

const Starfield: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const stars = useRef<Star[]>([]);
  const [starCount, setStarCount] = useState(() => {
    if (typeof window === "undefined") return 5000;
    const bp = getBreakpoint(window.innerWidth);
    return getStarCountForBreakpoint(bp);
  });

  useEffect(() => {
    const handleResize = () => {
      const bp = getBreakpoint(window.innerWidth);
      setStarCount(getStarCountForBreakpoint(bp));
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w: number, h: number, cx: number, cy: number;
    let animationFrameId: number;

    const createStar = (): Star => ({
      x: Math.random() * w - cx,
      y: Math.random() * h - cy,
      z: Math.random() * w,
      size: Math.random(),
    });

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;

      canvas.width = w;
      canvas.height = h;
      cx = w / 2;
      cy = h / 2;

      stars.current = Array.from({ length: starCount }, createStar);
    };

    const animate = () => {
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, w, h);
      ctx.fillStyle = "white";

      const bp = getBreakpoint(w);
      const StarZ = getStarZForBreakpoint(bp);

      for (let i = 0; i < stars.current.length; i++) {
        const star = stars.current[i];
        star.z -= StarZ;

        if (star.z <= 0) {
          stars.current[i] = createStar();
          stars.current[i].z = w;
          continue;
        }

        const focalLength = w;

        const k = focalLength / star.z;
        const x = star.x * k + cx;
        const y = star.y * k + cy;
        const size = star.size * (1 - star.z / w) * 3;

        if (x < 0 || x > w || y < 0 || y > h) continue;

        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    resize();
    window.addEventListener("resize", resize);
    animate();
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [starCount]);

  return (
    <>
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100%",
          display: "block",
          zIndex: 0,
        }}
      />
    </>
  );
};

export default Starfield;
