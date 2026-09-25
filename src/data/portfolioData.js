export const personalDetails = {
  name: "Burhanuddin Zapawala",
  headline: "Full Stack MERN Developer",
  subheadline: "System Design & Scalable Backend Architecture",
  bio: "Full Stack MERN Developer with hands-on experience building production-grade web applications end-to-end — RESTful API design, Redis caching, authentication, queue-based async processing, and real-time, animation-driven frontends. Strong system design fundamentals demonstrated across self-built projects load-tested for real-world scale.",
  location: "Pune, Maharashtra, India",
  phone: "+91 9518987995",
  email: "burhanuddinzapawala786@gmail.com",
  github: "https://github.com/burhanuddinzapawala786-cmd",
  linkedin: "https://linkedin.com",
  status: "Open for Full Stack & Backend Roles",
  metrics: [
    { label: "LeetCode Solved", value: "96+", detail: "Data Structures & Algorithms" },
    { label: "Throughput Sustained", value: "131 req/s", detail: "Artillery Load Tested (15.9k reqs)" },
    { label: "Cache Hit Latency", value: "~2ms", detail: "Redis JWT & Geocoding Caching" },
    { label: "Academic CGPA", value: "9.0", detail: "SPPU Computer Engineering (Sem 1)" },
  ]
};

export const featuredProjects = [
  {
    id: "ride-hailing",
    title: "Real-Time Ride-Hailing Platform",
    tagline: "Low-latency driver dispatch engine with geospatial Redis lookups & Socket.io",
    tech: ["Node.js", "Express", "React", "Redis", "MongoDB", "Socket.io"],
    liveUrl: "https://uber-clone-frontend.burhanuddinzapawala786.workers.dev/",
    githubUrl: null,
    isLive: true,
    highlights: [
      "Engineered real-time geospatial driver dispatch engine using Redis GEOSEARCH and Socket.io, cutting driver matching latency from ~300ms DB aggregation to a low-latency in-memory lookup within a 5km radius.",
      "Built a multi-tiered Redis caching layer for JWT session auth and geocoding APIs (cutting third-party map API latency from ~250ms to ~2ms).",
      "Prevented duplicate ride claims using atomic Redis SET NX EX locks under high concurrency."
    ],
    architecture: {
      dbLatency: "300ms",
      redisLatency: "2ms",
      lockType: "Atomic SET NX EX",
      radius: "5 km GEOSEARCH"
    }
  },
  {
    id: "order-processing",
    title: "Async Order Processing API",
    tagline: "High-throughput BullMQ microservice queue with Redis idempotency locks",
    tech: ["Node.js", "Express", "MongoDB", "Redis", "BullMQ", "Artillery"],
    liveUrl: null,
    githubUrl: "https://github.com/burhanuddinzapawala786-cmd/order-processing-backend",
    isLive: false,
    highlights: [
      "Built an asynchronous order-processing API decoupling intake from processing via a BullMQ-backed queue with idempotent Redis SET NX EX claims, preventing duplicate orders on client retries and keeping API available during worker offline states.",
      "Load-tested with Artillery up to 400 req/sec — order-creation endpoint sustained 131 req/sec across 15,975 requests (93% success, p95 149.9ms).",
      "Applied per-IP rate limiting and dual MongoDB/Redis lifecycle tracking for bulletproof data consistency."
    ],
    architecture: {
      peakLoad: "400 req/s",
      sustainedRate: "131 req/s",
      totalRequests: "15,975",
      p95Latency: "149.9ms"
    }
  }
];

export const experiences = [
  {
    role: "Backend Intern",
    company: "ProjectX (Dhundo, Real Estate SaaS)",
    period: "Present",
    type: "Internship",
    location: "Remote / Hybrid",
    description: [
      "Currently interning on ProjectX, a real estate marketplace for buying, selling, and renting property, built with Vite, Tailwind CSS, and Supabase.",
      "Contributing to auth/role-based access control (RBAC), property listings, and a complete MERN-stack rewrite of the platform (Express/Node backend, React frontend)."
    ]
  },
  {
    role: "Freelance Video Editor",
    company: "Self-Employed",
    period: "7 months",
    type: "Freelance",
    location: "Remote",
    description: [
      "Delivered high-converting video editing projects for 3-4 clients, sourced independently through Instagram outreach and targeted cold DMs.",
      "Managed the complete client lifecycle — outreach, requirement gathering, timeline estimation, video editing, and feedback iterations across a 7-month run."
    ]
  }
];

export const skillCategories = [
  {
    name: "Languages",
    skills: [
      { name: "JavaScript (ES6+)", level: 95 },
      { name: "TypeScript", level: 85 },
      { name: "HTML5 / CSS3", level: 90 },
    ]
  },
  {
    name: "Backend & Systems",
    skills: [
      { name: "Node.js", level: 92 },
      { name: "Express.js", level: 90 },
      { name: "RESTful API Design", level: 92 },
      { name: "MVC Architecture", level: 88 },
      { name: "JWT & Cookie Auth", level: 90 },
      { name: "Socket.IO / WebSockets", level: 88 },
    ]
  },
  {
    name: "Database & Caching",
    skills: [
      { name: "MongoDB & Mongoose", level: 90 },
      { name: "Redis (Caching, Pub/Sub)", level: 88 },
      { name: "Atomic Locks (SET NX EX)", level: 88 },
      { name: "PostgreSQL", level: 80 },
      { name: "Query Optimization", level: 85 },
    ]
  },
  {
    name: "Async Processing & Load Testing",
    skills: [
      { name: "BullMQ", level: 88 },
      { name: "Queue Decoupling", level: 90 },
      { name: "Artillery Load Testing", level: 85 },
      { name: "Idempotence & Retries", level: 88 },
    ]
  },
  {
    name: "Frontend",
    skills: [
      { name: "React.js", level: 90 },
      { name: "Tailwind CSS", level: 92 },
      { name: "React Router", level: 88 },
      { name: "Context API & Hooks", level: 90 },
      { name: "GSAP", level: 80 },
      { name: "Vite", level: 90 },
    ]
  },
  {
    name: "Tools & Concepts",
    skills: [
      { name: "Git & GitHub", level: 90 },
      { name: "Postman", level: 88 },
      { name: "Rate Limiting", level: 85 },
      { name: "CORS & Helmet", level: 85 },
      { name: "Data Structures & Algorithms", level: 85 },
      { name: "Role-Based Access Control", level: 88 },
    ]
  }
];

export const education = [
  {
    degree: "Bachelor of Engineering (BE), Computer Engineering",
    institution: "Savitribai Phule Pune University (SPPU) — PVG College of Engineering, Nashik",
    period: "2nd Year (Expected 2029)",
    highlights: [
      "Semester 1 CGPA: 9.0 / 10.0",
      "Semester 2 CGPA: 8.8 / 10.0",
      "Core focus: Data Structures, Operating Systems, Database Management Systems, System Design."
    ]
  },
  {
    degree: "HSC (12th Grade)",
    institution: "Maharashtra State Board",
    period: "Completed",
    highlights: ["Percentage: 82%"]
  },
  {
    degree: "SSC (10th Grade)",
    institution: "Maharashtra State Board",
    period: "Completed",
    highlights: ["Percentage: 91%"]
  }
];

export const achievements = [
  {
    title: "96+ LeetCode DSA Problems Solved",
    platform: "LeetCode",
    description: "Demonstrated strong problem-solving proficiency across arrays, binary trees, dynamic programming, graphs, sliding window, and two-pointer techniques."
  }
];
