import { useRef } from "react";
import { useInView } from "../../hooks/useInView";

export function AnimatedBar({ level, color, delay = 0, dark }) {
  const ref = useRef();
  const inView = useInView(ref);
  return (
    <div
      ref={ref}
      style={{
        width: "100%",
        background: dark ? "#2a3550" : "#dde5f5",
        borderRadius: 99,
        height: 8,
        overflow: "hidden",
      }}
    >
      <div
        style={{
          height: "100%",
          borderRadius: 99,
          background: `linear-gradient(90deg, ${color}, ${color}cc)`,
          width: inView ? `${level}%` : "0%",
          transition: `width 1.1s cubic-bezier(.4,0,.2,1) ${delay}ms`,
          boxShadow: inView ? `0 0 12px ${color}88` : "none",
        }}
      />
    </div>
  );
}
