export const personal = {
  name: "Chetan Dev",
  role: "Software Engineering Student",
  tagline: "Final-year BE(Hons) Software Engineering · Seeking internship",
  location: "Auckland, New Zealand",
  email: "chetandev48@gmail.com",
  phone: "021 0810 8272",

  github: "https://github.com/st18036",
  linkedin: "https://www.linkedin.com/in/chetan-dev-6bb371413/",

  cvUrl: "/Chetan_Dev_CV.pdf",

  summary:
    "Final-stage Bachelor of Engineering (Honours) Software Engineering student at Auckland University of Technology. Experienced in full-stack applications, embedded systems, RFID-based industrial solutions, and real-time software systems. Currently seeking an 800-hour industry internship opportunity.",

  hobbies: [
    {
      name: "Football",
      blurb: "Playing and following football.",
      icon: "Football"
    },
    {
      name: "Fishing",
      blurb: "Enjoying quiet mornings outdoors.",
      icon: "Fish"
    },
    {
      name: "Photography",
      blurb: "Capturing places and experiences.",
      icon: "Camera"
    },
    {
      name: "Exploring",
      blurb: "Discovering new places and ideas.",
      icon: "Mountain"
    }
  ]
};


export const projects = [
  {
    id: 1,
    title: "RFID-Based Pallet Tracking & Warehouse Monitoring System",

    description:
      "Built an enterprise warehouse tracking system integrating RFID readers, PLC hardware, REST APIs, and a full-stack monitoring dashboard for industrial pallet visibility.",

    techStack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "RFID",
      "PLC",
      "REST API"
    ],

    status: "completed",

    githubUrl: "",
    liveDemoUrl: ""
  },


  {
    id: 2,
    title: "Auckland Mobile Digital Twin Prototype",

    description:
      "Developed a mobile digital twin prototype integrating Auckland Transport data, environmental datasets, IoT simulations, and interactive mapping.",

    techStack: [
      "React Native",
      "TypeScript",
      "Node.js",
      "Firebase",
      "MongoDB",
      "Mapbox"
    ],

    status: "completed",

    githubUrl: "",
    liveDemoUrl: ""
  },


  {
    id: 3,
    title: "Computer Vision Monitoring System",

    description:
      "Created a real-time computer vision system using image processing techniques for automated monitoring and detection.",

    techStack: [
      "Python",
      "OpenCV",
      "Computer Vision",
      "Machine Learning"
    ],

    status: "completed",

    githubUrl: "",
    liveDemoUrl: ""
  },


  {
    id: 4,
    title: "Full Stack Web Applications",

    description:
      "Designed and developed modern web applications using React, Node.js, databases, and REST APIs.",

    techStack: [
      "React",
      "JavaScript",
      "Node.js",
      "SQL",
      "MongoDB"
    ],

    status: "completed",

    githubUrl: "",
    liveDemoUrl: ""
  }
];


export const skillGroups = [
  {
    category: "Frontend",
    skills: [
      { name: "React.js", level: 90 },
      { name: "JavaScript", level: 90 },
      { name: "Next.js", level: 80 },
      { name: "HTML/CSS", level: 85 }
    ]
  },

  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "REST APIs", level: 90 },
      { name: "MongoDB", level: 85 },
      { name: "SQL", level: 75 }
    ]
  },

  {
    category: "Embedded Systems",
    skills: [
      { name: "RFID", level: 80 },
      { name: "PLC", level: 75 },
      { name: "Raspberry Pi", level: 80 },
      { name: "OpenCV", level: 75 }
    ]
  },

  {
    category: "Tools",
    skills: [
      { name: "Git", level: 90 },
      { name: "GitHub Actions", level: 75 },
      { name: "Agile", level: 85 }
    ]
  }
];


export const timeline = [
  {
    type: "education",
    period: "2021 - Present",
    title: "Bachelor of Engineering (Honours) Software Engineering",
    org: "Auckland University of Technology",

    details:
      "Final-stage software engineering student. Completed coursework and currently seeking an 800-hour industry internship."
  },

  {
    type: "work",
    period: "10 months",
    title: "Visual Merchandiser",
    org: "Noel Leeming Manukau",

    details:
      "Developed communication, teamwork, and customer service skills while working in a fast-paced technology retail environment."
  }
];