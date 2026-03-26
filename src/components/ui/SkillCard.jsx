import { useState } from "react";
import { AnimatedBar } from "./AnimatedBar";

export function SkillCard({ skill, index, dark, c }) {
  const [hovered, setHovered] = useState(false);
  const skillColor = skill.color || c.accent;
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered
          ? dark
            ? `linear-gradient(135deg, ${skillColor}18, ${skillColor}08)`
            : `linear-gradient(135deg, ${skillColor}12, #fff)`
          : c.card,
        border: `1px solid ${hovered ? skillColor + "55" : c.border}`,
        borderRadius: 18,
        padding: "22px 20px",
        transition: "all 0.3s cubic-bezier(.4,0,.2,1)",
        transform: hovered ? "translateY(-4px)" : "none",
        boxShadow: hovered ? `0 12px 32px ${skillColor}22` : "none",
        cursor: "default",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Glow blob in corner */}
      <div
        style={{
          position: "absolute",
          top: -20,
          right: -20,
          width: 80,
          height: 80,
          borderRadius: "50%",
          background: `${skillColor}18`,
          transition: "all 0.3s",
          transform: hovered ? "scale(1.8)" : "scale(1)",
        }}
      />
      {/* Top row: icon + name + percent */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          marginBottom: 14,
          position: "relative",
        }}
      >
        <div
          style={{
            width: 38,
            height: 38,
            borderRadius: 10,
            flexShrink: 0,
            background: `${skillColor}20`,
            border: `1px solid ${skillColor}33`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 18,
            transition: "transform 0.3s",
            transform: hovered ? "scale(1.1) rotate(-5deg)" : "none",
          }}
        >
          {skill.icon}
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div
            style={{
              fontWeight: 700,
              fontSize: 14,
              color: c.text,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {skill.name}
          </div>
          <div style={{ fontSize: 11, color: c.muted, marginTop: 1 }}>
            {skill.category}
          </div>
        </div>
        <div
          style={{
            fontSize: 15,
            fontWeight: 800,
            color: skillColor,
            background: `${skillColor}15`,
            padding: "2px 8px",
            borderRadius: 99,
            border: `1px solid ${skillColor}30`,
            flexShrink: 0,
          }}
        >
          {skill.level}%
        </div>
      </div>
      {/* Progress bar */}
      <AnimatedBar
        level={skill.level}
        color={skillColor}
        delay={index * 50}
        dark={dark}
      />
    </div>
  );
}
