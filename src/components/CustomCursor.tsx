import { useEffect, useRef } from "react";

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const move = (e: MouseEvent) => {
      cursor.style.transform = `translate(${e.clientX - 20}px, ${e.clientY - 20}px)`;
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-10 h-10 rounded-full pointer-events-none z-[200] hidden md:block"
      style={{
        background: "white",
        mixBlendMode: "difference",
        willChange: "transform",
      }}
    />
  );
};

export default CustomCursor;
