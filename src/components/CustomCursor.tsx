import { useEffect, useRef } from "react";

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const move = (e: MouseEvent) => {
      cursor.style.transform = `translate(${e.clientX - 13}px, ${e.clientY - 13}px)`;
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 rounded-full pointer-events-none z-[200] hidden md:block"
      style={{
        width: 26,
        height: 26,
        background: "white",
        mixBlendMode: "difference",
        willChange: "transform",
      }}
    />
  );
};

export default CustomCursor;
