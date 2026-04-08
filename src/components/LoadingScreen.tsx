import { useState, useEffect, useRef } from "react";

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [count, setCount] = useState(0);
  const [phase, setPhase] = useState<"counting" | "explode" | "done">("counting");
  const rafRef = useRef<number>();
  const startRef = useRef<number>();

  useEffect(() => {
    const duration = 1800;

    const tick = (timestamp: number) => {
      if (!startRef.current) startRef.current = timestamp;
      const elapsed = timestamp - startRef.current;
      const progress = Math.min(elapsed / duration, 1);

      // Easing: starts slow, accelerates aggressively
      const eased = progress < 0.7
        ? (progress / 0.7) * 0.5
        : 0.5 + ((progress - 0.7) / 0.3) * 0.5;

      setCount(Math.floor(eased * 100));

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setCount(100);
        setPhase("explode");
        setTimeout(() => {
          setPhase("done");
          onComplete();
        }, 600);
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
      className={`fixed inset-0 z-[100] bg-foreground flex items-center justify-center overflow-hidden transition-opacity duration-300 ${
        phase === "explode" ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Glitch lines */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute h-px bg-primary-foreground/10"
            style={{
              top: `${15 + i * 14}%`,
              left: 0,
              right: 0,
              animation: `glitch-line ${0.1 + i * 0.05}s ease-in-out infinite alternate`,
            }}
          />
        ))}
      </div>

      {/* Counter */}
      <div
        className={`relative font-heading font-black text-primary-foreground tracking-tighter select-none transition-transform duration-500 ${
          phase === "explode"
            ? "scale-[8] opacity-0"
            : "scale-100 opacity-100"
        }`}
        style={{ fontSize: "clamp(6rem, 20vw, 14rem)" }}
      >
        <span className="relative inline-block" style={{
          textShadow: phase === "counting" && count > 60
            ? `${Math.random() > 0.5 ? 2 : -2}px 0 hsl(var(--accent)), ${Math.random() > 0.5 ? -2 : 2}px 0 hsl(var(--destructive))`
            : "none",
        }}>
          {count}
        </span>
        <span className="text-[0.3em] align-top ml-1">%</span>
      </div>

      {/* Bottom progress line */}
      <div className="absolute bottom-0 left-0 h-[2px] bg-primary-foreground transition-all duration-75"
        style={{ width: `${count}%` }}
      />
    </div>
  );
};

export default LoadingScreen;
