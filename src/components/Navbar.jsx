import { navLinks } from "../data/portfolioData";

export default function Navbar({ scrolled, dark, setDark, activeNav, scrollTo, c }) {
  return (
    <nav
      className="portfolio-nav"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled ? c.navBg : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? `1px solid ${c.border}` : "none",
        transition: "all 0.4s",
        padding: "0 clamp(16px,4vw,80px)",
        display: "flex",
        alignItems: "center",
        height: scrolled ? 64 : 80,
      }}
    >
      <div className="portfolio-brand-row" style={{ display: "flex", alignItems: "center", flex: 1 }}>
        <span
          className="portfolio-brand"
          style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 800,
            fontSize: 22,
            color: c.accent,
            marginRight: "auto",
          }}
        >
          HA
        </span>
        <button
          className="portfolio-toggle-mobile"
          onClick={() => setDark(!dark)}
          style={{
            background: c.card,
            border: `1px solid ${c.border}`,
            borderRadius: 99,
            padding: "6px 14px",
            cursor: "pointer",
            fontSize: 14,
            color: c.text,
            fontFamily: "inherit",
            fontWeight: 500,
            transition: "all 0.2s",
            display: "none", // Hidden on desktop, shown on mobile via CSS
          }}
        >
          {dark ? "☀ Light" : "🌙 Dark"}
        </button>
      </div>

      <div
        className="portfolio-navlinks"
        style={{
          display: "flex",
          gap: "clamp(12px,2vw,32px)",
          alignItems: "center",
        }}
      >
        {navLinks.map((link) => (
          <button
            key={link}
            onClick={() => scrollTo(link)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: activeNav === link ? c.accent : c.muted,
              fontWeight: activeNav === link ? 700 : 500,
              fontSize: 14,
              fontFamily: "inherit",
              borderBottom:
                activeNav === link
                  ? `2px solid ${c.accent}`
                  : "2px solid transparent",
              paddingBottom: 2,
              transition: "all 0.2s",
            }}
          >
            {link}
          </button>
        ))}
        <button
          className="portfolio-toggle-desktop"
          onClick={() => setDark(!dark)}
          style={{
            background: c.card,
            border: `1px solid ${c.border}`,
            borderRadius: 99,
            padding: "6px 14px",
            cursor: "pointer",
            fontSize: 14,
            color: c.text,
            fontFamily: "inherit",
            fontWeight: 500,
            transition: "all 0.2s",
          }}
        >
          {dark ? "☀ Light" : "🌙 Dark"}
        </button>
      </div>
    </nav>
  );
}
