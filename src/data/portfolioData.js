export const COLORS = {
  dark: {
    bg: "#0c0a1f",
    surface: "#16142e",
    card: "#1e1b4b",
    cardHover: "#2d2a5d",
    border: "#312e81",
    text: "#eef2ff",
    muted: "#94a3b8",
    accent: "#a855f7", // Vibrant Purple
    accentGlow: "rgba(168,85,247,0.18)",
    accent2: "#06b6d4", // Cyan
    accent3: "#f43f5e", // Rose
    navBg: "rgba(12,10,31,0.92)",
  },
  light: {
    bg: "#f5f3ff",
    surface: "#ffffff",
    card: "#ffffff",
    cardHover: "#f8fafc",
    border: "#e2e8f0",
    text: "#1e1b4b",
    muted: "#64748b",
    accent: "#7e22ce", // Deep Purple
    accentGlow: "rgba(126,34,206,0.10)",
    accent2: "#0891b2", // Deep Cyan
    accent3: "#e11d48", // Deep Rose
    navBg: "rgba(245,243,255,0.95)",
  },
};

export const skillsData = {
  technical: [
    { name: "JavaScript", level: 88, category: "Languages", icon: "🟨", color: "#f7df1e" },
    { name: "C++", level: 82, category: "Languages", icon: "⚙️", color: "#00599c" },
    { name: "Python", level: 70, category: "Languages", icon: "🐍", color: "#3776ab" },
    { name: "Java", level: 68, category: "Languages", icon: "☕", color: "#ed8b00" },
    { name: "PHP", level: 65, category: "Languages", icon: "🐘", color: "#777bb4" },
    { name: "React.js", level: 85, category: "Web Dev", icon: "⚛️", color: "#61dafb" },
    { name: "Node.js", level: 83, category: "Web Dev", icon: "🟢", color: "#339933" },
    { name: "Express.js", level: 82, category: "Web Dev", icon: "🚂", color: "#68a063" },
    { name: "MongoDB", level: 80, category: "Databases", icon: "🍃", color: "#47a248" },
    { name: "MySQL", level: 75, category: "Databases", icon: "🐬", color: "#4479a1" },
    { name: "Tailwind CSS", level: 87, category: "Web Dev", icon: "💨", color: "#06b6d4" },
    { name: "Git & GitHub", level: 85, category: "Tools", icon: "🔀", color: "#f05032" },
    { name: "REST APIs", level: 83, category: "Web Dev", icon: "🔗", color: "#ff6b6b" },
    { name: "Socket.IO", level: 72, category: "Web Dev", icon: "⚡", color: "#010101" },
    { name: "Generative AI", level: 78, category: "Tools", icon: "🤖", color: "#9b59b6" },
  ],
  soft: [
    { name: "Problem Solving", level: 92, category: "Soft Skills", icon: "🧩", color: "#4f8ef7" },
    { name: "Communication", level: 88, category: "Soft Skills", icon: "💬", color: "#38e5c5" },
    { name: "Team Collaboration", level: 90, category: "Soft Skills", icon: "🤝", color: "#f7934f" },
    { name: "Quick Learner", level: 95, category: "Soft Skills", icon: "🚀", color: "#c084fc" },
  ],
};

export const projects = [
  {
    title: "AI Exam Evaluation Platform",
    period: "Jan 2026 – Feb 2026",
    desc: "AI-Powered Examination Evaluation System using Hybrid AI & Rule-Based Scoring",
    bullets: [
      "Developed a full-stack AI-powered platform for automated answer evaluation using semantic analysis",
      "Implemented role-based authentication for Student, Teacher and Admin using JWT and secure middleware",
      "Built real-time student-teacher communication using Socket.IO and performance analytics dashboards",
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Socket.IO"],
    color: "#6366f1",
    emoji: "🧠",
    image: "/project-images/ai-exam-platform.png",
    github: "https://github.com/himanshuantal5640/AI-Subjective-Exam_Evaluation-Frontend.git",
    live: "#",
    featured: true,
  },
  {
    title: "Eco-Vision",
    period: "Nov 2025 – Dec 2025",
    desc: "AI-Powered Waste-to-Value Sustainability Platform",
    bullets: [
      "Developed a MERN-based web platform that converts waste materials into upcycling product ideas",
      "Integrated Generative AI models to generate tools, cost estimation, and market demand insights",
      "Created an interactive dashboard and AI chat interface for eco-entrepreneurship guidance",
    ],
    tech: ["MERN", "Generative AI", "OpenAI", "Firebase"],
    color: "#4f8ef7",
    emoji: "🌱",
    image: "/project-images/ecovision.png",
    github: "https://github.com/himanshuantal5640/Swadeshi-Waste-AI.git",
    live: "#",
    featured: true,
  },
  {
    title: "Swasth AI",
    period: "Jun 2025 – Jul 2025",
    desc: "AI-Powered Health & Nutrition Recommendation System",
    bullets: [
      "Developed a MERN-based healthcare platform delivering personalized meal and medicine recommendations",
      "Designed AI-driven recommendation logic based on health condition and lifestyle",
      "Integrated analytics to monitor health progress and dynamically adjust recommendations",
    ],
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Generative AI"],
    color: "#38e5c5",
    emoji: "🏥",
    image: "/project-images/swasthai.png",
    github: "https://github.com/himanshuantal5640/Swasth_AI.git",
    live: "#",
    featured: true,
  },
];

export const certifications = [
  {
    name: "OCI 2025 Certified Generative AI Professional",
    issuer: "Oracle",
    date: "Sep 2025",
    color: "#f7934f",
    preview: "/certifications/oci-gen-ai.pdf",
    download: "/certifications/oci-gen-ai.pdf",
  },
  {
    name: "ChatGPT-4 Prompt Engineering: ChatGPT, Generative AI & LLM",
    issuer: "Infosys",
    date: "Jul 2025",
    color: "#38e5c5",
    preview: "/certifications/chatgpt-prompt-engineering.pdf",
    download: "/certifications/chatgpt-prompt-engineering.pdf",
  },
  {
    name: "Introduction to Machine Learning",
    issuer: "NPTEL (IIT Madras)",
    date: "Jan 2025 – Apr 2025",
    color: "#c084fc",
    preview: "/certifications/intro-to-ml.pdf",
    download: "/certifications/intro-to-ml.pdf",
  },
  {
    name: "Web Development",
    issuer: "Rising Tech Pro",
    date: "Feb 2024 – Mar 2024",
    color: "#4f8ef7",
    preview: "/certifications/web-development.pdf",
    download: "/certifications/web-development.pdf",
  },
];

export const training = [
  {
    title: "MERN with Gen AI",
    provider: "W3grads",
    period: "Jun 2025 – Jul 2025",
    bullets: [
      "Completed structured course covering basic to advanced MERN Stack concepts and projects",
      "Learned new frameworks like React.js, Express.js and MongoDB database",
      "Built a MERN project on Job Application Tracker and earned certification",
    ],
    preview: "/training/mern-with-gen-ai.pdf",
    download: "/training/mern-with-gen-ai.pdf",
  },
];

export const achievements = [
  {
    title: "Solved 300+ DSA Problems",
    date: "Feb 2026",
    desc: "Solved 300+ problems on LeetCode and GeeksforGeeks, strengthening algorithmic thinking and coding efficiency.",
    icon: "🧠",
    color: "#4f8ef7",
  },
  {
    title: "5★ C++ on HackerRank",
    date: "Jul 2025",
    desc: "Achieved 5-star rating in C++ on HackerRank demonstrating strong programming proficiency.",
    icon: "🏆",
    color: "#f7934f",
  },
  {
    title: "4★ Java on HackerRank",
    date: "Jul 2025",
    desc: "Earned 4-star rating in Java on HackerRank showcasing problem-solving and competitive coding skills.",
    icon: "💻",
    color: "#38e5c5",
  },
];

export const education = [
  {
    degree: "B.Tech — Computer Science & Engineering",
    school: "Lovely Professional University, Punjab",
    period: "Since Aug 2023",
    detail: "CGPA: 8.18",
    icon: "🎓",
    color: "#6366f1", // This will be dynamic based on theme but good for fallback
  },
  {
    degree: "Intermediate (Class XII)",
    school: "Sarvagya Public School, Roorkee",
    period: "Apr 2020 – Jun 2021",
    detail: "90.5%",
    icon: "📚",
    color: "#2dd4bf",
  },
  {
    degree: "Matriculation (Class X)",
    school: "Sarvagya Public School, Roorkee",
    period: "Apr 2018 – Jun 2019",
    detail: "89%",
    icon: "📖",
    color: "#f43f5e",
  },
];

export const navLinks = [
  "About",
  "Skills",
  "Projects",
  "Education",
  "Training",
  "Achievements",
  "Contact",
];
