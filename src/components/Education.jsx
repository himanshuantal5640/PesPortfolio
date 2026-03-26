import { education } from "../data/portfolioData";

export default function Education({ dark, c }) {
  return (
    <section
      id="education"
      style={{
        padding: "80px clamp(16px,8vw,120px)",
        background: dark ? c.surface : "#f8faff",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: 48 }}>
        <div
          style={{
            fontSize: 13,
            color: c.accent,
            fontWeight: 600,
            letterSpacing: 2,
            marginBottom: 8,
          }}
        >
          ✦ ACADEMIA
        </div>
        <h2 className="section-heading" style={{ color: c.text }}>
          Education
        </h2>
      </div>
      <div
        style={{
          maxWidth: 800,
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: 16,
        }}
      >
        {education.map((e, i) => (
          <div
            key={i}
            style={{
              background: c.card,
              border: `1px solid ${c.border}`,
              borderLeft: `4px solid ${e.color || c.accent}`,
              borderRadius: 16,
              padding: "22px 28px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 18,
              transition: "all 0.25s",
            }}
            onMouseEnter={(ev) => {
              ev.currentTarget.style.boxShadow = `0 8px 28px ${(e.color || c.accent)}22`;
              ev.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(ev) => {
              ev.currentTarget.style.boxShadow = "none";
              ev.currentTarget.style.transform = "none";
            }}
          >
            <div
              style={{
                width: 52,
                height: 52,
                borderRadius: 14,
                flexShrink: 0,
                background: `${(e.color || c.accent)}18`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 24,
                border: `1px solid ${(e.color || c.accent)}33`,
              }}
            >
              {e.icon}
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div
                style={{
                  fontWeight: 700,
                  fontSize: 15,
                  color: c.text,
                  marginBottom: 4,
                  lineHeight: 1.4,
                }}
              >
                {e.degree}
              </div>
              <div style={{ fontSize: 13, color: c.muted }}>{e.school}</div>
            </div>
            <div style={{ textAlign: "right", flexShrink: 0 }}>
              <div
                style={{
                  display: "inline-block",
                  fontSize: 11,
                  color: c.muted,
                  background: dark ? "#ffffff0d" : "#0000000a",
                  border: `1px solid ${c.border}`,
                  borderRadius: 99,
                  padding: "3px 10px",
                  marginBottom: 8,
                }}
              >
                {e.period}
              </div>
              <div style={{ fontSize: 18, fontWeight: 800, color: (e.color || c.accent) }}>
                {e.detail}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
