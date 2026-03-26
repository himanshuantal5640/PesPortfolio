import { skillsData } from "../data/portfolioData";
import { SkillCard } from "./ui/SkillCard";

export default function Skills({ dark, skillTab, setSkillTab, filteredSkills, c }) {
  return (
    <section
      id="skills"
      style={{
        padding: "80px clamp(16px,8vw,120px)",
        background: dark ? c.bg : "#ffffff",
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
          ✦ EXPERTISE
        </div>
        <h2
          className="section-heading"
          style={{ color: c.text, marginBottom: 12 }}
        >
          Skills & Technologies
        </h2>
        <p
          style={{
            color: c.muted,
            fontSize: 15,
            maxWidth: 480,
            margin: "0 auto",
          }}
        >
          A diverse toolkit built through real-world projects and continuous
          learning.
        </p>
      </div>

      {/* Tabs */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 8,
          marginBottom: 44,
        }}
      >
        {[
          ["all", "✦ All Skills"],
          ["technical", "⚙ Technical"],
          ["soft", "🤝 Soft Skills"],
        ].map(([id, label]) => (
          <button
            key={id}
            onClick={() => setSkillTab(id)}
            style={{
              background: skillTab === id ? c.accent : "transparent",
              color: skillTab === id ? "#fff" : c.muted,
              border: `1.5px solid ${skillTab === id ? c.accent : c.border}`,
              padding: "10px 24px",
              borderRadius: 99,
              cursor: "pointer",
              fontSize: 13,
              fontWeight: 600,
              fontFamily: "inherit",
              transition: "all 0.22s",
              boxShadow:
                skillTab === id ? `0 4px 16px ${c.accent}44` : "none",
            }}
          >
            {label}
          </button>
        ))}
      </div>

      {skillTab === "all" ? (
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: 40,
          }}
        >
          {/* Languages */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                marginBottom: 20,
              }}
            >
              <div style={{ height: 1, flex: 1, background: c.border }} />
              <span
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  color: c.muted,
                  letterSpacing: 2,
                  whiteSpace: "nowrap",
                }}
              >
                LANGUAGES
              </span>
              <div style={{ height: 1, flex: 1, background: c.border }} />
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(210px, 1fr))",
                gap: 14,
              }}
            >
              {skillsData.technical
                .filter((s) => s.category === "Languages")
                .map((skill, i) => (
                  <SkillCard
                    key={skill.name}
                    skill={skill}
                    index={i}
                    dark={dark}
                    c={c}
                  />
                ))}
            </div>
          </div>
          {/* Web Dev + Databases */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                marginBottom: 20,
              }}
            >
              <div style={{ height: 1, flex: 1, background: c.border }} />
              <span
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  color: c.muted,
                  letterSpacing: 2,
                  whiteSpace: "nowrap",
                }}
              >
                WEB DEVELOPMENT & DATABASES
              </span>
              <div style={{ height: 1, flex: 1, background: c.border }} />
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(210px, 1fr))",
                gap: 14,
              }}
            >
              {skillsData.technical
                .filter(
                  (s) =>
                    s.category === "Web Dev" || s.category === "Databases",
                )
                .map((skill, i) => (
                  <SkillCard
                    key={skill.name}
                    skill={skill}
                    index={i}
                    dark={dark}
                    c={c}
                  />
                ))}
            </div>
          </div>
          {/* Tools + Soft */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                marginBottom: 20,
              }}
            >
              <div style={{ height: 1, flex: 1, background: c.border }} />
              <span
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  color: c.muted,
                  letterSpacing: 2,
                  whiteSpace: "nowrap",
                }}
              >
                TOOLS & SOFT SKILLS
              </span>
              <div style={{ height: 1, flex: 1, background: c.border }} />
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(210px, 1fr))",
                gap: 14,
              }}
            >
              {[
                ...skillsData.technical.filter((s) => s.category === "Tools"),
                ...skillsData.soft,
              ].map((skill, i) => (
                <SkillCard
                  key={skill.name}
                  skill={skill}
                  index={i}
                  dark={dark}
                  c={c}
                />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(210px, 1fr))",
            gap: 14,
          }}
        >
          {filteredSkills.map((skill, i) => (
            <SkillCard
              key={skill.name}
              skill={skill}
              index={i}
              dark={dark}
              c={c}
            />
          ))}
        </div>
      )}
    </section>
  );
}
