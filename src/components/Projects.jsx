import { projects } from "../data/portfolioData";
import { ProjectCard } from "./ui/ProjectCard";

export default function Projects({ dark, c }) {
  return (
    <section id="projects" style={{ padding: "80px clamp(16px,8vw,120px)" }}>
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
          ✦ WORK
        </div>
        <h2
          className="section-heading"
          style={{ color: c.text, marginBottom: 12 }}
        >
          Featured Projects
        </h2>
        <p style={{ color: c.muted, fontSize: 15 }}>
          Real-world applications built with modern technologies
        </p>
      </div>
      <div
        className="portfolio-projects-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
          gap: 24,
          maxWidth: 1200,
          margin: "0 auto",
        }}
      >
        {projects.map((p) => (
          <ProjectCard key={p.title} p={p} dark={dark} c={c} />
        ))}
      </div>
    </section>
  );
}
