import { useState } from "react";
import { GitHubIcon } from "./Icons";

export function ProjectCard({ p, dark, c }) {
  const [hovered, setHovered] = useState(false);
  const [imgError, setImgError] = useState(false);

  return (
    <div
      style={{
        background: c.card,
        border: `1px solid ${hovered ? p.color + "66" : c.border}`,
        borderRadius: 20,
        overflow: "hidden",
        boxShadow: hovered ? `0 16px 40px ${p.color}22` : "none",
        transition: "all 0.3s cubic-bezier(.4,0,.2,1)",
        transform: hovered ? "translateY(-6px)" : "none",
        display: "flex",
        flexDirection: "column",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Project Preview Banner */}
      <div
        style={{
          height: 190,
          position: "relative",
          overflow: "hidden",
          borderBottom: `1px solid ${p.color}33`,
          flexShrink: 0,
        }}
      >
        {p.image && !imgError ? (
          <>
            <img
              src={p.image}
              alt={`${p.title} preview`}
              onError={() => setImgError(true)}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "top",
                display: "block",
                transition: "transform 0.5s ease",
                transform: hovered ? "scale(1.04)" : "scale(1)",
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: `linear-gradient(to bottom, rgba(0,0,0,0.28) 0%, transparent 40%, rgba(0,0,0,0.18) 100%)`,
              }}
            />
          </>
        ) : (
          <>
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: `linear-gradient(135deg, ${p.color}22 0%, ${p.color}44 100%)`,
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: `radial-gradient(circle at 30% 50%, ${p.color}33, transparent 70%)`,
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  fontSize: 64,
                  filter: "drop-shadow(0 4px 16px rgba(0,0,0,.2))",
                }}
              >
                {p.emoji}
              </div>
            </div>
          </>
        )}

        {p.featured && (
          <div
            style={{
              position: "absolute",
              bottom: 12,
              left: 16,
              background: "linear-gradient(90deg, #f7934f, #f7c34f)",
              color: "#fff",
              borderRadius: 99,
              padding: "3px 12px",
              fontSize: 10,
              fontWeight: 700,
              boxShadow: "0 2px 8px rgba(247,147,79,0.4)",
            }}
          >
            ⭐ Featured
          </div>
        )}

        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 3,
            background: `linear-gradient(90deg, ${p.color}, ${p.color}88)`,
          }}
        />
      </div>

      <div
        style={{
          padding: "20px 22px",
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: 6,
          }}
        >
          <h3
            style={{ margin: 0, fontSize: 17, fontWeight: 700, color: c.text }}
          >
            {p.title}
          </h3>
          <div
            style={{
              display: "flex",
              gap: 10,
              alignItems: "center",
              flexShrink: 0,
            }}
          >
            {p.github && p.github !== "#" && (
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: c.muted,
                  textDecoration: "none",
                  transition: "color 0.2s",
                  display: "flex",
                  alignItems: "center",
                }}
                title="View on GitHub"
                onMouseEnter={(e) => (e.currentTarget.style.color = c.text)}
                onMouseLeave={(e) => (e.currentTarget.style.color = c.muted)}
              >
                <GitHubIcon size={18} color="currentColor" />
              </a>
            )}
          </div>
        </div>
        <div style={{ fontSize: 12, color: c.muted, marginBottom: 8 }}>
          📅 {p.period}
        </div>
        <p
          style={{
            margin: "0 0 12px",
            fontSize: 13,
            color: c.muted,
            lineHeight: 1.6,
          }}
        >
          {p.desc}
        </p>
        <ul style={{ margin: "0 0 16px", paddingLeft: 0, flex: 1 }}>
          {p.bullets.map((b, i) => (
            <li
              key={i}
              style={{
                fontSize: 13,
                color: c.text,
                marginBottom: 5,
                lineHeight: 1.6,
                listStyleType: "none",
                paddingLeft: 14,
                position: "relative",
              }}
            >
              <span style={{ position: "absolute", left: 0, color: p.color }}>
                •
              </span>
              {b}
            </li>
          ))}
        </ul>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
          {p.tech.map((t) => (
            <span
              key={t}
              style={{
                background: `${p.color}18`,
                color: p.color,
                border: `1px solid ${p.color}44`,
                padding: "3px 10px",
                borderRadius: 99,
                fontSize: 11,
                fontWeight: 600,
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
