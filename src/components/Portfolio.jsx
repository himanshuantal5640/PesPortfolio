import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { COLORS, skillsData, navLinks } from "../data/portfolioData";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Education from "./Education";
import Training from "./Training";
import Achievements from "./Achievements";
import Contact from "./Contact";
import Footer from "./Footer";

export default function Portfolio() {
  const [dark, setDark] = useState(true);
  const [activeNav, setActiveNav] = useState("About");
  const [skillTab, setSkillTab] = useState("all");
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error'
  const c = dark ? COLORS.dark : COLORS.light;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    const SERVICE_ID = "service_25s40yk";
    const TEMPLATE_ID = "template_k7ga86a";
    const PUBLIC_KEY = "AzNBQm6kcYZE1kRnS";

    emailjs.init(PUBLIC_KEY);

    emailjs
      .send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: "himanshuantal26@gmail.com",
        },
        PUBLIC_KEY
      )
      .then(
        () => {
          setIsSending(false);
          setStatus("success");
          setFormData({ name: "", email: "", subject: "", message: "" });
          setTimeout(() => setStatus(null), 5000);
        },
        (error) => {
          setIsSending(false);
          setStatus("error");
          console.error("EmailJS Error:", error);
          setTimeout(() => setStatus(null), 5000);
        }
      );
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document
      .getElementById(id.toLowerCase())
      ?.scrollIntoView({ behavior: "smooth" });
    setActiveNav(id);
  };

  const filteredSkills =
    skillTab === "all"
      ? [...skillsData.technical, ...skillsData.soft]
      : skillTab === "technical"
        ? skillsData.technical
        : skillsData.soft;

  return (
    <div
      style={{
        minHeight: "100vh",
        background: c.bg,
        color: c.text,
        fontFamily: "'Outfit', 'Segoe UI', sans-serif",
        transition: "background 0.4s, color 0.4s",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Syne:wght@700;800&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html, body { width: 100%; overflow-x: hidden; }
        img { max-width: 100%; height: auto; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: ${c.border}; border-radius: 99px; }
        html { scroll-behavior: smooth; }
        a { color: inherit; }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(32px); } to { opacity: 1; transform: none; } }
        @keyframes pulse-glow { 0%,100% { box-shadow: 0 0 0 0 ${c.accentGlow}; } 50% { box-shadow: 0 0 0 12px transparent; } }
        @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .fade-in { animation: fadeUp 0.7s cubic-bezier(.4,0,.2,1) both; }
        .section-heading { font-family: 'Syne', sans-serif; font-size: clamp(26px, 4vw, 38px); font-weight: 800; }

        .portfolio-navlinks { min-width: 0; }
        .portfolio-quickstats { flex-wrap: wrap; justify-content: center; }

        @media (max-width: 900px) {
          .portfolio-training-grid { grid-template-columns: 1fr !important; gap: 24px !important; }
        }

        @media (max-width: 720px) {
          .portfolio-nav { height: auto !important; padding: 10px 16px !important; flex-wrap: wrap !important; gap: 10px !important; }
          .portfolio-brand { margin-right: 0 !important; width: 100% !important; }
          .portfolio-navlinks { width: 100% !important; gap: 10px !important; flex-wrap: wrap !important; overflow-x: auto; -webkit-overflow-scrolling: touch; }
          .portfolio-navlinks::-webkit-scrollbar { height: 0px; }

          .portfolio-info-grid { grid-template-columns: 1fr !important; }
          .portfolio-contact-grid { grid-template-columns: 1fr !important; }

          .portfolio-projects-grid { grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)) !important; gap: 16px !important; }
          .portfolio-achievements-grid { grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)) !important; gap: 16px !important; }
          .portfolio-contact-container { grid-template-columns: 1fr !important; }
        }

        @media (max-width: 420px) {
          .portfolio-projects-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <Navbar scrolled={scrolled} dark={dark} setDark={setDark} activeNav={activeNav} scrollTo={scrollTo} c={c} />
      
      <Hero dark={dark} scrollTo={scrollTo} c={c} />
      
      <About dark={dark} c={c} />
      
      <Skills dark={dark} skillTab={skillTab} setSkillTab={setSkillTab} filteredSkills={filteredSkills} c={c} />
      
      <Projects dark={dark} c={c} />
      
      <Education dark={dark} c={c} />
      
      <Training dark={dark} c={c} />
      
      <Achievements dark={dark} c={c} />
      
      <Contact 
        formData={formData} 
        handleInputChange={handleInputChange} 
        handleSubmit={handleSubmit} 
        isSending={isSending} 
        status={status} 
        dark={dark} 
        c={c} 
      />
      
      <Footer dark={dark} c={c} />
    </div>
  );
}
