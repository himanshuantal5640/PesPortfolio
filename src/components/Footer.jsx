export default function Footer({ dark, c }) {
  return (
    <footer
      style={{
        borderTop: `1px solid ${c.border}`,
        padding: "24px clamp(16px,8vw,120px)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 12,
        background: dark ? c.surface : "#f0f4ff",
      }}
    >
      <span style={{ fontSize: 13, color: c.muted }}>
        © 2026 Himanshu Antal. Built with ❤️
      </span>
      <span style={{ fontSize: 13, color: c.muted }}>
        Full Stack Developer · LPU Punjab
      </span>
    </footer>
  );
}
