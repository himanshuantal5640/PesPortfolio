import { GitHubIcon } from "./ui/Icons";

export default function Contact({ formData, handleInputChange, handleSubmit, isSending, status, dark, c }) {
  return (
    <section id="contact" style={{ padding: "clamp(60px, 10vw, 100px) clamp(16px, 6vw, 120px)" }}>
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
          ✦ LET'S CONNECT
        </div>
        <h2
          className="section-heading"
          style={{ color: c.text, marginBottom: 12 }}
        >
          Get In Touch
        </h2>
        <p style={{ color: c.muted, fontSize: 15 }}>
          Open for opportunities, collaborations, and conversations
        </p>
      </div>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <div
          className="portfolio-contact-container"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.3fr",
            gap: 40,
            alignItems: "start",
          }}
        >
          {/* Left: Contact Info */}
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {[
              {
                icon: "✉",
                label: "Email",
                value: "himanshuantal26@gmail.com",
                href: "mailto:himanshuantal26@gmail.com",
                color: c.accent,
              },
              {
                icon: "☎",
                label: "Phone",
                value: "+91-7351206107",
                href: "tel:+91-7351206107",
                color: c.accent2,
              },
              {
                icon: "in",
                label: "LinkedIn",
                value: "himanshu-antal",
                href: "https://www.linkedin.com/in/himanshu-antal/",
                color: "#0a66c2",
              },
              {
                icon: <GitHubIcon size={20} color="currentColor" />,
                label: "GitHub",
                value: "himanshuantal",
                href: "https://github.com/himanshuantal5640",
                color: c.accent3,
              },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: c.card,
                  border: `1px solid ${c.border}`,
                  borderRadius: 16,
                  padding: "18px 20px",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  transition: "all 0.25s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = item.color + "66";
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.boxShadow = `0 8px 24px ${item.color}20`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = c.border;
                  e.currentTarget.style.transform = "none";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    background: `${item.color}18`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 18,
                    color: item.color,
                    flexShrink: 0,
                    border: `1px solid ${item.color}33`,
                  }}
                >
                  {item.icon}
                </div>
                <div>
                  <div
                    style={{ fontSize: 11, color: c.muted, marginBottom: 2 }}
                  >
                    {item.label}
                  </div>
                  <div
                    style={{ fontSize: 13, fontWeight: 600, color: c.text }}
                  >
                    {item.value}
                  </div>
                </div>
              </a>
            ))}

            {status && (
              <div
                style={{
                  marginTop: 10,
                  padding: "14px 18px",
                  borderRadius: 12,
                  fontSize: 14,
                  fontWeight: 600,
                  textAlign: "center",
                  background: status === "success" ? "#10b98115" : "#ef444415",
                  color: status === "success" ? "#10b981" : "#ef4444",
                  border: `1px solid ${status === "success" ? "#10b98133" : "#ef444433"}`,
                  animation: "fadeUp 0.4s ease",
                }}
              >
                {status === "success"
                  ? "✨ Message sent successfully!"
                  : "❌ Failed to send message. Please try again."}
              </div>
            )}
          </div>

          <form
            onSubmit={handleSubmit}
            className="portfolio-contact-form"
            style={{
              background: c.card,
              border: `1px solid ${c.border}`,
              borderRadius: 20,
              padding: "clamp(24px, 4vw, 40px)",
              display: "flex",
              flexDirection: "column",
              gap: 20,
              boxShadow: `0 10px 30px -10px rgba(0,0,0,0.1)`,
            }}
          >
            <div
              className="portfolio-form-row"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 20,
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <label style={{ fontSize: 12, fontWeight: 600, color: c.muted, marginLeft: 4 }}>NAME</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleInputChange}
                  style={{
                    background: dark ? "#ffffff08" : "#f0f4ff",
                    border: `1px solid ${c.border}`,
                    borderRadius: 10,
                    padding: "12px 16px",
                    color: c.text,
                    fontSize: 14,
                    fontFamily: "inherit",
                    outline: "none",
                    transition: "all 0.2s",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = c.accent)}
                  onBlur={(e) => (e.target.style.borderColor = c.border)}
                />
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <label style={{ fontSize: 12, fontWeight: 600, color: c.muted, marginLeft: 4 }}>EMAIL</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Your email"
                  value={formData.email}
                  onChange={handleInputChange}
                  style={{
                    background: dark ? "#ffffff08" : "#f0f4ff",
                    border: `1px solid ${c.border}`,
                    borderRadius: 10,
                    padding: "12px 16px",
                    color: c.text,
                    fontSize: 14,
                    fontFamily: "inherit",
                    outline: "none",
                    transition: "all 0.2s",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = c.accent)}
                  onBlur={(e) => (e.target.style.borderColor = c.border)}
                />
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <label style={{ fontSize: 12, fontWeight: 600, color: c.muted, marginLeft: 4 }}>SUBJECT</label>
              <input
                type="text"
                name="subject"
                required
                placeholder="What is this about?"
                value={formData.subject}
                onChange={handleInputChange}
                style={{
                  background: dark ? "#ffffff08" : "#f0f4ff",
                  border: `1px solid ${c.border}`,
                  borderRadius: 10,
                  padding: "12px 16px",
                  color: c.text,
                  fontSize: 14,
                  fontFamily: "inherit",
                  outline: "none",
                  transition: "all 0.2s",
                }}
                onFocus={(e) => (e.target.style.borderColor = c.accent)}
                onBlur={(e) => (e.target.style.borderColor = c.border)}
              />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <label style={{ fontSize: 12, fontWeight: 600, color: c.muted, marginLeft: 4 }}>MESSAGE</label>
              <textarea
                name="message"
                required
                placeholder="Write your message here..."
                rows="5"
                value={formData.message}
                onChange={handleInputChange}
                style={{
                  background: dark ? "#ffffff08" : "#f0f4ff",
                  border: `1px solid ${c.border}`,
                  borderRadius: 10,
                  padding: "12px 16px",
                  color: c.text,
                  fontSize: 14,
                  fontFamily: "inherit",
                  outline: "none",
                  transition: "all 0.2s",
                  resize: "none",
                }}
                onFocus={(e) => (e.target.style.borderColor = c.accent)}
                onBlur={(e) => (e.target.style.borderColor = c.border)}
              />
            </div>

            <button
              type="submit"
              disabled={isSending}
              style={{
                background: c.accent,
                color: "#fff",
                border: "none",
                padding: "14px",
                borderRadius: 12,
                cursor: isSending ? "not-allowed" : "pointer",
                fontWeight: 700,
                fontSize: 15,
                fontFamily: "inherit",
                transition: "all 0.2s",
                boxShadow: `0 4px 16px ${c.accent}44`,
                marginTop: 6,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                opacity: isSending ? 0.8 : 1,
              }}
              onMouseEnter={(e) => {
                if (!isSending) {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = `0 8px 24px ${c.accent}66`;
                }
              }}
              onMouseLeave={(e) => {
                if (!isSending) {
                  e.currentTarget.style.transform = "none";
                  e.currentTarget.style.boxShadow = `0 4px 16px ${c.accent}44`;
                }
              }}
            >
              {isSending ? (
                <>
                  <div
                    style={{
                      width: 18,
                      height: 18,
                      border: "2px solid #fff",
                      borderTopColor: "transparent",
                      borderRadius: "50%",
                      animation: "spin-slow 1s linear infinite",
                    }}
                  />
                  Sending...
                </>
              ) : (
                "Send Message 🚀"
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
