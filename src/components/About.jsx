export default function About({ dark, c }) {
  return (
    <section
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
          ✦ WHO I AM
        </div>
        <h2
          className="section-heading"
          style={{ color: c.text, marginBottom: 10 }}
        >
          About Me
        </h2>
        <p
          style={{
            color: c.muted,
            fontSize: 15,
            maxWidth: 520,
            margin: "0 auto",
          }}
        >
          A dedicated developer with a passion for creating impactful web
          solutions
        </p>
      </div>

      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        {/* Professional Summary Card */}
        <div
          style={{
            background: c.card,
            border: `1px solid ${c.border}`,
            borderRadius: 20,
            padding: "32px 36px",
            marginBottom: 24,
          }}
        >
          <h3
            style={{
              fontSize: 20,
              fontWeight: 700,
              color: c.text,
              marginBottom: 18,
            }}
          >
            Professional Summary
          </h3>
          <p
            style={{
              fontSize: 15,
              color: c.muted,
              lineHeight: 1.85,
              marginBottom: 14,
            }}
          >
            I'm a passionate Full-Stack Developer currently pursuing my
            Bachelor of Technology in Computer Science and Engineering at
            Lovely Professional University. With a strong foundation in the
            MERN stack and experience across multiple programming languages, I
            specialize in building scalable and user-friendly web
            applications.
          </p>
          <p
            style={{
              fontSize: 15,
              color: c.muted,
              lineHeight: 1.85,
              marginBottom: 14,
            }}
          >
            My journey in software development has been driven by a passion
            for building intelligent, AI-powered web applications. From a
            hybrid AI exam evaluation platform with real-time communication to
            an eco-entrepreneurship tool that converts waste into business
            ideas — my projects reflect a strong command of the MERN stack
            combined with Generative AI integration.
          </p>
          <p style={{ fontSize: 15, color: c.muted, lineHeight: 1.85 }}>
            Beyond technical skills, I bring sharp problem-solving abilities
            backed by 300+ DSA problems solved on LeetCode and GeeksforGeeks,
            a 5-star C++ rating on HackerRank, and certifications from Oracle,
            Infosys, and NPTEL. I thrive in collaborative environments and am
            always eager to learn, build, and push the boundaries of what
            technology can solve.
          </p>
        </div>

        {/* Info Grid */}
        <div
          className="portfolio-info-grid"
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}
        >
          {[
            {
              icon: "🎓",
              label: "Education",
              title: "BTech in Computer Science",
              sub: "CGPA: 8.43",
              color: c.accent,
            },
            {
              icon: "📍",
              label: "Location",
              title: "Roorkee, Uttarakhand, India",
              sub: "Available for opportunities",
              color: c.accent2,
            },
            {
              icon: "⚡",
              label: "Specialization",
              title: "MERN Stack Development",
              sub: "Full-Stack Web Applications",
              color: c.accent3,
            },
            {
              icon: "💼",
              label: "Experience",
              title: "2+ Projects",
              sub: "5+ Certifications",
              color: c.accent,
            },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                background: c.card,
                border: `1px solid ${c.border}`,
                borderRadius: 16,
                padding: "20px 22px",
                display: "flex",
                alignItems: "center",
                gap: 16,
                transition: "all 0.25s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = item.color + "55";
                e.currentTarget.style.boxShadow = `0 6px 20px ${item.color}18`;
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = c.border;
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.transform = "none";
              }}
            >
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 14,
                  flexShrink: 0,
                  background: `${item.color}18`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 22,
                  border: `1px solid ${item.color}28`,
                }}
              >
                {item.icon}
              </div>
              <div>
                <div
                  style={{ fontSize: 12, color: c.muted, marginBottom: 4 }}
                >
                  {item.label}
                </div>
                <div
                  style={{
                    fontSize: 15,
                    fontWeight: 700,
                    color: c.text,
                    marginBottom: 2,
                  }}
                >
                  {item.title}
                </div>
                <div style={{ fontSize: 12, color: c.muted }}>{item.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
