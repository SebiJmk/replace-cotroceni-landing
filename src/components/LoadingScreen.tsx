import { useState, useEffect, useRef } from "react";

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [count, setCount] = useState(0);
  const [phase, setPhase] = useState<"counting" | "logo" | "splash" | "explode" | "done">("counting");
  const rafRef = useRef<number>();
  const startRef = useRef<number>();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Concentric circles animation on canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const w = window.innerWidth;
    const h = window.innerHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.scale(dpr, dpr);

    let frame = 0;
    const totalFrames = 90;
    let animId: number;

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      const progress = Math.min(frame / totalFrames, 1);
      const cx = w / 2;
      const cy = h / 2;
      const maxRadius = Math.min(w, h) * 0.35;

      // Draw concentric rings that scale in aggressively
      for (let i = 0; i < 8; i++) {
        const ringProgress = Math.max(0, Math.min((progress - i * 0.08) / 0.3, 1));
        const eased = 1 - Math.pow(1 - ringProgress, 3);
        const radius = maxRadius * (1 - i * 0.11) * eased;

        if (radius > 0) {
          ctx.beginPath();
          ctx.arc(cx, cy, radius, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(255, 255, 255, ${0.06 + i * 0.02})`;
          ctx.lineWidth = 1.5;
          ctx.stroke();
        }
      }

      // Inner geometric bagel shapes
      if (progress > 0.3) {
        const geoProgress = (progress - 0.3) / 0.7;
        for (let i = 0; i < 4; i++) {
          const gp = Math.max(0, Math.min((geoProgress - i * 0.15) / 0.4, 1));
          const eased = 1 - Math.pow(1 - gp, 4);
          const r = maxRadius * 0.15 * (i + 1) * eased;
          const rotation = eased * Math.PI * (i % 2 === 0 ? 0.5 : -0.5);

          ctx.save();
          ctx.translate(cx, cy);
          ctx.rotate(rotation);
          ctx.beginPath();
          ctx.ellipse(0, 0, r, r * 0.7, 0, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(255, 255, 255, ${0.08 * eased})`;
          ctx.lineWidth = 1;
          ctx.stroke();
          ctx.restore();
        }
      }

      frame++;
      if (frame <= totalFrames + 20) {
        animId = requestAnimationFrame(draw);
      }
    };

    animId = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(animId);
  }, []);

  // Splash particles
  useEffect(() => {
    if (phase !== "splash") return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const w = canvas.width / dpr;
    const h = canvas.height / dpr;
    const cx = w / 2;
    const cy = h / 2;

    const particles = Array.from({ length: 24 }, () => ({
      x: cx,
      y: cy,
      vx: (Math.random() - 0.5) * 12,
      vy: (Math.random() - 0.5) * 12,
      size: Math.random() * 4 + 1,
      life: 1,
    }));

    let animId: number;
    const animate = () => {
      ctx.clearRect(0, 0, w, h);
      let alive = false;
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.life -= 0.025;
        p.vx *= 0.97;
        p.vy *= 0.97;
        if (p.life > 0) {
          alive = true;
          ctx.beginPath();
          ctx.rect(p.x - p.size / 2, p.y - p.size / 2, p.size, p.size);
          ctx.fillStyle = `rgba(255,255,255,${p.life * 0.5})`;
          ctx.fill();
        }
      });
      if (alive) animId = requestAnimationFrame(animate);
    };
    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, [phase]);

  // Counter logic
  useEffect(() => {
    const duration = 2000;

    const tick = (timestamp: number) => {
      if (!startRef.current) startRef.current = timestamp;
      const elapsed = timestamp - startRef.current;
      const progress = Math.min(elapsed / duration, 1);

      const eased =
        progress < 0.6
          ? (progress / 0.6) * 0.4
          : 0.4 + ((progress - 0.6) / 0.4) * 0.6;

      setCount(Math.floor(eased * 100));

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setCount(100);
        setPhase("logo");
        setTimeout(() => setPhase("splash"), 400);
        setTimeout(() => setPhase("explode"), 900);
        setTimeout(() => {
          setPhase("done");
          onComplete();
        }, 1400);
      }
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [onComplete]);

  if (phase === "done") return null;

  return (
    <div
      className={`fixed inset-0 z-[100] bg-foreground flex flex-col items-center justify-center overflow-hidden ${
        phase === "explode" ? "animate-loader-dissolve" : ""
      }`}
    >
      {/* Canvas for geometric shapes */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ opacity: phase === "explode" ? 0 : 0.6 }}
      />

      {/* Logo reveal */}
      <div
        className={`relative z-10 flex flex-col items-center transition-all duration-500 ${
          phase === "logo" || phase === "splash"
            ? "opacity-100 scale-100"
            : phase === "explode"
            ? "opacity-0 scale-150"
            : "opacity-0 scale-75"
        }`}
      >
        <span className="font-heading text-5xl md:text-7xl font-black tracking-tight uppercase text-background">
          replace
        </span>
        <span className="block w-full h-[2px] bg-background mt-1" />
        <span className="font-serif text-[10px] md:text-xs tracking-[0.25em] uppercase mt-1.5 text-background/70">
          The Brunch Club
        </span>
      </div>

      {/* Counter */}
      <div
        className={`relative z-10 mt-12 font-heading font-black text-background/40 tracking-tighter select-none transition-all duration-300 ${
          phase === "explode"
            ? "scale-[6] opacity-0"
            : phase === "logo" || phase === "splash"
            ? "opacity-60"
            : "opacity-100"
        }`}
        style={{ fontSize: "clamp(3rem, 8vw, 5rem)" }}
      >
        <span
          className="relative inline-block"
          style={{
            textShadow:
              phase === "counting" && count > 70
                ? `${Math.random() > 0.5 ? 2 : -2}px 0 rgba(255,255,255,0.3), ${Math.random() > 0.5 ? -2 : 2}px 0 rgba(255,255,255,0.1)`
                : "none",
          }}
        >
          {count}
        </span>
        <span className="text-[0.35em] align-top ml-0.5">%</span>
      </div>

      {/* Bottom progress */}
      <div
        className="absolute bottom-0 left-0 h-[2px] bg-background transition-all duration-75"
        style={{ width: `${count}%` }}
      />
    </div>
  );
};

export default LoadingScreen;
