import { achievements } from "../data/portfolioData";

export default function Achievements({ dark, c }) {
  return (
    <section
      id="achievements"
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
          ✦ MILESTONES
        </div>
        <h2 className="section-heading" style={{ color: c.text }}>
          Achievements
        </h2>
      </div>
      <div
        className="portfolio-achievements-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: 20,
          maxWidth: 1200,
          margin: "0 auto",
        }}
      >
        {achievements.map((a, i) => (
          <div
            key={i}
            style={{
              background: c.card,
              border: `1px solid ${c.border}`,
              borderRadius: 18,
              padding: "28px 24px",
              transition: "all 0.3s",
              borderLeft: `4px solid ${a.color || c.accent}`,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-4px)";
              e.currentTarget.style.boxShadow = `0 12px 32px ${(a.color || c.accent)}22`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "none";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <div style={{ fontSize: 36, marginBottom: 14 }}>{a.icon}</div>
            <div
              style={{
                fontWeight: 700,
                fontSize: 16,
                color: c.text,
                marginBottom: 8,
              }}
            >
              {a.title}
            </div>
            <div
              style={{
                fontSize: 12,
                color: (a.color || c.accent),
                fontWeight: 700,
                marginBottom: 10,
              }}
            >
              {a.date}
            </div>
            <p style={{ fontSize: 13, color: c.muted, lineHeight: 1.7 }}>
              {a.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
