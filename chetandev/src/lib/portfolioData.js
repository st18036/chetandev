// src/lib/portfolioData.js
// Single source of truth for static portfolio content.

import heroImage from "@/assets/hero.png";

export const personal = {
  name: "Chetan Dev",
  role: "Software Engineering Student",
  tagline: "Final-year BE(Hons) Software Engineering · Seeking internship",
  location: "Flat Bush, Auckland, New Zealand",
  email: "chetandev48@gmail.com",
  phone: "021 0810 8272",

  github: "https://github.com/st18036",
  linkedin: "https://www.linkedin.com/in/chetan-dev-6bb371413/",

  heroImage: heroImage,

  cvUrl: "/Chetan_Dev_CV.pdf",

  summary:
    "I'm a 23-year-old final-stage software engineering student at AUT — all coursework complete, now seeking an 800-hour industry internship to graduate. Across my degree I've shipped full-stack web applications, embedded systems, and a real-time computer vision system for an industry client. I bring a genuine interest in building things that work, a collaborative team ethic, and a strong ability to pick up new technologies quickly.",

  hobbies: [
    {
      name: "Football",
      blurb: "Playing and following the beautiful game.",
      icon: "Football",
    },
    {
      name: "Fishing",
      blurb: "Quiet mornings on the water, patience rewarded.",
      icon: "Fish",
    },
    {
      name: "Photography",
      blurb: "Capturing the places I explore.",
      icon: "Camera",
    },
    {
      name: "Exploring",
      blurb: "Finding new trails and hidden corners.",
      icon: "Mountain",
    },
  ],
};


// ============================================================
// PROJECTS
// ============================================================

export const projects = [
  {
    id: 1,
    title: "RFID-Based Pallet Tracking & Warehouse Monitoring System",

    description:
      "Built an enterprise warehouse tracking system integrating RFID readers, PLC hardware, REST APIs, and a full-stack monitoring dashboard for real-time pallet visibility.",

    techStack: [
      "React",
      "Node.js",
      "Express",
      "MySQL",
      "RFID",
      "PLC",
      "REST API",
    ],

    status: "completed",

    githubUrl: "",
    liveDemoUrl: "",
  },

  {
    id: 2,
    title: "Auckland Mobile Digital Twin Prototype",

    description:
      "Developed a mobile digital twin prototype integrating Auckland Transport data, environmental datasets, simulated IoT sensors, persistent storage, and interactive mapping.",

    techStack: [
      "React Native",
      "TypeScript",
      "Node.js",
      "Express",
      "Firebase",
      "MongoDB",
      "Mapbox",
    ],

    status: "completed",

    githubUrl: "",
    liveDemoUrl: "",
  },

  {
    id: 3,
    title: "Computer Vision Monitoring System",

    description:
      "Created a real-time computer vision system using image processing and object detection techniques for automated monitoring and detection.",

    techStack: [
      "Python",
      "OpenCV",
      "Computer Vision",
      "Machine Learning",
    ],

    status: "completed",

    githubUrl: "",
    liveDemoUrl: "",
  },

  {
    id: 4,
    title: "Full-Stack Web Applications",

    description:
      "Designed and developed modern full-stack web applications using component-based React interfaces, Node.js backends, databases, authentication, and REST APIs.",

    techStack: [
      "React",
      "JavaScript",
      "Node.js",
      "Express",
      "SQL",
      "MongoDB",
      "REST API",
    ],

    status: "completed",

    githubUrl: "",
    liveDemoUrl: "",
  },
];


// ============================================================
// SKILLS
// ============================================================

export const skillGroups = [
  {
    category: "Languages & Frontend",

    skills: [
      {
        name: "JavaScript",
        level: 90,
      },
      {
        name: "React.js",
        level: 85,
      },
      {
        name: "Next.js",
        level: 78,
      },
      {
        name: "HTML / CSS",
        level: 88,
      },
      {
        name: "Python",
        level: 82,
      },
    ],
  },

  {
    category: "Backend & Databases",

    skills: [
      {
        name: "Node.js",
        level: 86,
      },
      {
        name: "REST API",
        level: 88,
      },
      {
        name: "MongoDB",
        level: 84,
      },
      {
        name: "SQL",
        level: 75,
      },
      {
        name: "SQLite",
        level: 72,
      },
    ],
  },

  {
    category: "DevOps & Tooling",

    skills: [
      {
        name: "Git",
        level: 88,
      },
      {
        name: "GitHub Actions CI/CD",
        level: 80,
      },
      {
        name: "Vercel",
        level: 76,
      },
      {
        name: "ESLint / Prettier",
        level: 82,
      },
      {
        name: "Trello",
        level: 80,
      },
    ],
  },

  {
    category: "Embedded & Systems",

    skills: [
      {
        name: "Raspberry Pi",
        level: 80,
      },
      {
        name: "OpenCV",
        level: 76,
      },
      {
        name: "RFID / PLC",
        level: 74,
      },
      {
        name: "Unreal Engine",
        level: 68,
      },
      {
        name: "Blueprint Scripting",
        level: 70,
      },
    ],
  },

  {
    category: "Methodology",

    skills: [
      {
        name: "Agile / Scrum",
        level: 84,
      },
      {
        name: "Test-Driven Dev",
        level: 78,
      },
      {
        name: "PR Workflows",
        level: 86,
      },
      {
        name: "Mob Programming",
        level: 75,
      },
      {
        name: "Sprint Planning",
        level: 80,
      },
    ],
  },
];


// ============================================================
// EDUCATION & EXPERIENCE
// ============================================================

export const timeline = [
  {
    type: "education",
    period: "2018 — 2020",
    title: "NCEA Levels 1–3",
    org: "Ormiston Senior College",

    details:
      "Foundation studies before specialising in engineering.",
  },

  {
    type: "education",
    period: "2021 — Present",
    title: "Bachelor of Engineering (Honours)",
    org: "Auckland University of Technology",

    details:
      "Majoring in Software Engineering. All coursework complete; currently seeking an 800-hour industry internship as the final graduation requirement. Delivered full-stack web applications, embedded systems, and a real-time computer vision system for an industry client.",
  },

  {
    type: "work",
    period: "~10 months (Part-time)",
    title: "Visual Merchandiser",
    org: "Noel Leeming, Manukau",

    details:
      "Managed product presentation and stock rotation across a high-volume consumer technology retail store. Built strong team communication and customer-facing skills in a fast-paced environment alongside a diverse team.",
  },
];