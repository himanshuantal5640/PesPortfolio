import { training, certifications } from "../data/portfolioData";

export default function Training({ dark, c }) {
  return (
    <section id="training" style={{ padding: "80px clamp(16px,8vw,120px)" }}>
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
          ✦ GROWTH
        </div>
        <h2
          className="section-heading"
          style={{ color: c.text, marginBottom: 6 }}
        >
          Training & Certifications
        </h2>
        <p style={{ color: c.muted, fontSize: 15 }}>
          Continuous learning and professional development
        </p>
      </div>
      <div
        className="portfolio-training-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 40,
          maxWidth: 1200,
          margin: "0 auto",
        }}
      >
        {/* Professional Training */}
        <div>
          <h3
            style={{
              fontSize: 20,
              fontWeight: 700,
              color: c.text,
              marginBottom: 20,
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <span style={{ fontSize: 22 }}>📘</span> Professional Training
          </h3>
          {training.map((t, i) => (
            <div
              key={i}
              style={{
                background: c.card,
                border: `1px solid ${c.border}`,
                borderRadius: 16,
                padding: "22px 24px",
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
                <div
                  style={{
                    fontWeight: 700,
                    fontSize: 16,
                    color: c.text,
                    flex: 1,
                  }}
                >
                  {t.title}
                </div>
                <div style={{ display: "flex", gap: 10, flexShrink: 0 }}>
                  <a
                    href={t.preview}
                    style={{
                      color: c.accent,
                      background: `${c.accent}15`,
                      borderRadius: 8,
                      padding: "4px 10px",
                      fontSize: 12,
                      fontWeight: 600,
                      textDecoration: "none",
                    }}
                  >
                    👁 Preview
                  </a>
                  <a
                    href={t.download}
                    download
                    style={{
                      color: c.accent2,
                      background: `${c.accent2}15`,
                      borderRadius: 8,
                      padding: "4px 10px",
                      fontSize: 12,
                      fontWeight: 600,
                      textDecoration: "none",
                    }}
                  >
                    ⬇ Download
                  </a>
                </div>
              </div>
              <div style={{ fontSize: 13, color: c.muted, marginBottom: 10 }}>
                {t.provider}
              </div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  background: `${c.accent}18`,
                  color: c.accent,
                  border: `1px solid ${c.accent}33`,
                  borderRadius: 99,
                  padding: "4px 12px",
                  fontSize: 12,
                  fontWeight: 600,
                  marginBottom: 14,
                }}
              >
                📅 {t.period}
              </div>
              <ul style={{ margin: 0, paddingLeft: 0 }}>
                {t.bullets.map((b, j) => (
                  <li
                    key={j}
                    style={{
                      fontSize: 13,
                      color: c.text,
                      marginBottom: 6,
                      lineHeight: 1.6,
                      listStyleType: "none",
                      paddingLeft: 14,
                      position: "relative",
                    }}
                  >
                    <span
                      style={{
                        position: "absolute",
                        left: 0,
                        color: c.accent,
                      }}
                    >
                      •
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {/* Certifications */}
        <div>
          <h3
            style={{
              fontSize: 20,
              fontWeight: 700,
              color: c.text,
              marginBottom: 20,
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <span style={{ fontSize: 22 }}>🏅</span> Certifications
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {certifications.map((cert, i) => (
              <div
                key={i}
                style={{
                  background: c.card,
                  border: `1px solid ${c.border}`,
                  borderRadius: 14,
                  padding: "16px 20px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = (cert.color || c.accent) + "55";
                  e.currentTarget.style.boxShadow = `0 4px 16px ${(cert.color || c.accent)}18`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = c.border;
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div style={{ flex: 1, paddingRight: 12 }}>
                  <div
                    style={{
                      fontWeight: 700,
                      fontSize: 14,
                      color: c.text,
                      marginBottom: 3,
                    }}
                  >
                    {cert.name}
                  </div>
                  <div style={{ fontSize: 12, color: c.muted }}>
                    {cert.issuer}
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-end",
                    gap: 6,
                    flexShrink: 0,
                  }}
                >
                  <div
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      color: (cert.color || c.accent),
                    }}
                  >
                    {cert.date}
                  </div>
                  <div style={{ display: "flex", gap: 6 }}>
                    <a
                      href={cert.preview}
                      style={{
                        color: c.accent,
                        fontSize: 14,
                        background: `${c.accent}15`,
                        padding: "3px 8px",
                        borderRadius: 6,
                        textDecoration: "none",
                      }}
                      title="Preview"
                    >
                      👁
                    </a>
                    <a
                      href={cert.download}
                      download
                      style={{
                        color: c.accent2,
                        fontSize: 14,
                        background: `${c.accent2}15`,
                        padding: "3px 8px",
                        borderRadius: 6,
                        textDecoration: "none",
                      }}
                      title="Download"
                    >
                      ⬇
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
