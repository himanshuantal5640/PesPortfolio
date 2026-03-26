import { GitHubIcon } from "./ui/Icons";

export default function Hero({ dark, scrollTo, c }) {
  return (
    <section
      id="about"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "80px clamp(16px,8vw,120px) 60px",
        background: dark
          ? `radial-gradient(ellipse 80% 60% at 60% 40%, rgba(16,185,129,0.08) 0%, transparent 60%), radial-gradient(ellipse 60% 60% at 80% 80%, rgba(34,211,238,0.05) 0%, transparent 60%)`
          : `radial-gradient(ellipse 80% 60% at 60% 40%, rgba(16,185,129,0.06) 0%, transparent 60%)`,
        gap: "clamp(32px, 6vw, 80px)",
        flexWrap: "wrap",
      }}
    >
      {/* Avatar side */}
      <div
        className="fade-in"
        style={{
          flex: "0 0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 20,
        }}
      >
        {/* Spinning ring */}
        <div style={{ position: "relative", width: 200, height: 200 }}>
          <div
            style={{
              position: "absolute",
              inset: -6,
              borderRadius: "50%",
              background: `conic-gradient(${c.accent}, ${c.accent2}, ${c.accent3}, ${c.accent})`,
              animation: "spin-slow 6s linear infinite",
              opacity: 0.7,
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: -2,
              borderRadius: "50%",
              background: c.bg,
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "50%",
              background: `linear-gradient(135deg, ${c.accent}33, ${c.accent2}22)`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 80,
              border: `3px solid ${c.border}`,
              overflow: "hidden",
            }}
          >
            <img
              src="profile.jpg"
              alt=""
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center 10%",
              }}
            />
          </div>
        </div>
        {/* Quick stats */}
        <div className="portfolio-quickstats" style={{ display: "flex", gap: 16 }}>
          {[
            ["2+", "Projects"],
            ["5+", "Certs"],
            ["8.18", "CGPA"],
          ].map(([v, l]) => (
            <div
              key={l}
              style={{
                textAlign: "center",
                background: c.card,
                border: `1px solid ${c.border}`,
                borderRadius: 12,
                padding: "10px 16px",
              }}
            >
              <div style={{ fontSize: 20, fontWeight: 800, color: c.accent }}>
                {v}
              </div>
              <div style={{ fontSize: 11, color: c.muted }}>{l}</div>
            </div>
          ))}
        </div>
        {/* Social links */}
        <div style={{ display: "flex", gap: 12 }}>
          {[
            {
              icon: "in",
              href: "https://www.linkedin.com/in/himanshu-antal/",
              label: "LinkedIn",
            },
            {
              icon: <GitHubIcon size={16} color="currentColor" />,
              href: "https://github.com/himanshuantal5640",
              label: "GitHub",
            },
            {
              icon: "✉",
              href: "mailto:himanshuantal26@gmail.com",
              label: "Email",
            },
            { icon: "☎", href: "tel:+91-7351206107", label: "Phone" },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              title={s.label}
              style={{
                width: 40,
                height: 40,
                borderRadius: 10,
                background: c.card,
                border: `1px solid ${c.border}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 16,
                textDecoration: "none",
                color: c.muted,
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = c.accent;
                e.currentTarget.style.borderColor = c.accent;
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = c.muted;
                e.currentTarget.style.borderColor = c.border;
                e.currentTarget.style.transform = "none";
              }}
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Text side */}
      <div
        className="fade-in"
        style={{ flex: 1, minWidth: 280, animationDelay: "0.15s" }}
      >
        <div
          style={{
            fontSize: 14,
            color: c.accent,
            fontWeight: 600,
            marginBottom: 10,
            letterSpacing: 2,
          }}
        >
          ✦ WELCOME TO MY PORTFOLIO
        </div>
        <h1
          className="hero-name"
          style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 900,
            fontSize: "clamp(36px,6vw,68px)",
            lineHeight: 1.05,
            marginBottom: 8,
            color: c.text,
          }}
        >
          Himanshu
          <br />
          <span style={{ color: c.accent }}>Antal</span>
        </h1>
        <div
          style={{
            fontSize: "clamp(16px,2vw,22px)",
            fontWeight: 600,
            color: c.accent2,
            marginBottom: 20,
          }}
        >
          Full Stack Developer
        </div>
        <p
          style={{
            fontSize: "clamp(14px,1.4vw,16px)",
            color: c.muted,
            lineHeight: 1.8,
            maxWidth: 540,
            marginBottom: 32,
          }}
        >
          Passionate Full-Stack Developer specializing in MERN Stack
          development, building scalable and production-ready web
          applications. Strong foundation in DSA with hands-on experience in
          Generative AI integration and cloud technologies.
        </p>

        {/* Quick Links */}
        <div
          style={{
            display: "flex",
            gap: 10,
            flexWrap: "wrap",
            marginBottom: 28,
          }}
        >
          {[
            { label: "📁 Projects", id: "projects" },
            { label: "🛠 Skills", id: "skills" },
            { label: "🎓 Education", id: "education" },
            { label: "📜 Certifications", id: "training" },
          ].map((q) => (
            <button
              key={q.label}
              onClick={() =>
                scrollTo(q.id.charAt(0).toUpperCase() + q.id.slice(1))
              }
              style={{
                background: `${c.accent}18`,
                color: c.accent,
                border: `1px solid ${c.accent}44`,
                padding: "7px 16px",
                borderRadius: 99,
                cursor: "pointer",
                fontSize: 13,
                fontWeight: 600,
                fontFamily: "inherit",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = c.accent;
                e.currentTarget.style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = `${c.accent}18`;
                e.currentTarget.style.color = c.accent;
              }}
            >
              {q.label}
            </button>
          ))}
        </div>

        {/* CTA buttons */}
        <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
          <button
            onClick={() => scrollTo("Projects")}
            style={{
              background: c.accent,
              color: "#fff",
              border: "none",
              padding: "13px 28px",
              borderRadius: 12,
              cursor: "pointer",
              fontWeight: 700,
              fontSize: 15,
              fontFamily: "inherit",
              transition: "all 0.2s",
              boxShadow: `0 4px 20px ${c.accent}55`,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = `0 8px 30px ${c.accent}77`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "none";
              e.currentTarget.style.boxShadow = `0 4px 20px ${c.accent}55`;
            }}
          >
            View Projects →
          </button>
          <a
            href="/Himanshu_CV.pdf"
            download="Himanshu_CV.pdf"
            style={{
              background: "none",
              color: c.text,
              border: `1px solid ${c.border}`,
              padding: "13px 28px",
              borderRadius: 12,
              cursor: "pointer",
              fontWeight: 600,
              fontSize: 15,
              fontFamily: "inherit",
              transition: "all 0.2s",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = c.accent;
              e.currentTarget.style.color = c.accent;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = c.border;
              e.currentTarget.style.color = c.text;
            }}
          >
            ⬇ Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
