export interface ProjectDetail {
  about: string[];
  features: { icon: string; title: string; description: string }[];
  challenges: { problem: string; solution: string }[];
  duration: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  metrics: string[];
  links: { live: string; github: string };
  featured: boolean;
  detail: ProjectDetail;
}

const defaultDetail: ProjectDetail = {
  about: [
    "This project was conceived to solve a real-world problem by providing a modern, scalable web solution. It leverages cutting-edge technologies to deliver a seamless user experience.",
    "The application aggregates data from multiple sources into a cohesive interface, allowing users to interact with complex workflows through an intuitive design. It was architected with scalability and maintainability as core priorities."
  ],
  features: [
    { icon: "monitoring", title: "Real-time Analytics", description: "Live visualization of key metrics and data insights using modern state management." },
    { icon: "inventory_2", title: "Data Synchronization", description: "Automatic synchronization across multiple sources, preventing data inconsistencies." },
    { icon: "dark_mode", title: "Dark Mode Support", description: "Fully responsive UI with a meticulously crafted dark theme for comfortable usage." },
    { icon: "picture_as_pdf", title: "Report Generation", description: "Generate and export detailed reports for tracking performance and outcomes." }
  ],
  challenges: [
    { problem: "Handling complex state across many components caused prop-drilling and UI lag.", solution: "Implemented centralized state management with context and memoization for optimal re-renders." },
    { problem: "Initial load times were slow due to large bundle sizes from third-party libraries.", solution: "Applied code splitting, lazy loading, and tree-shaking to reduce the bundle size by 60%." }
  ],
  duration: "3 Months"
};

export const PROJECTS: Project[] = [
  {
    id: "smart-study-notes",
    title: "Smart Study Notes Generator",
    description: "AI-powered study notes generator using RAG and MCP integration, featuring multi-format uploads, auto-generated notes, MCQs, and campus recruitment training tools",
    image: "/smart-notes.png",
    tags: ["React", "TypeScript", "Python", "Flask", "RAG", "MCP", "Google Gemini AI"],
    metrics: [
      "Multi-format upload (PDF, PPT, Images, YouTube)",
      "MCP integration with Calendar & Drive",
      "Campus Recruitment Training suite"
    ],
    links: {
      live: "https://smart-study-frontend-zsa4.onrender.com",
      github: "https://github.com/Karthik8402/smart-study-notes-generator"
    },
    featured: true,
    detail: {
      about: [
        "Smart Study Notes Generator is an AI-powered platform that transforms the way students prepare for exams. Using Retrieval-Augmented Generation (RAG) and Model Context Protocol (MCP) integration, it processes study materials in multiple formats.",
        "The platform automatically generates comprehensive study notes, MCQs, and summaries. It also includes a Campus Recruitment Training suite with aptitude questions, HR interview prep, and coding challenges."
      ],
      features: [
        { icon: "upload_file", title: "Multi-Format Upload", description: "Supports PDF, PPT, Images, and YouTube links for diverse study material input." },
        { icon: "auto_awesome", title: "AI-Powered Notes", description: "Uses Google Gemini AI with RAG to generate contextual, accurate study notes." },
        { icon: "quiz", title: "Auto MCQ Generation", description: "Generates multiple-choice questions with explanations from uploaded content." },
        { icon: "integration_instructions", title: "MCP Integration", description: "Connects with Google Calendar and Drive for seamless workflow management." }
      ],
      challenges: [
        { problem: "Processing large PDF files caused timeout errors and memory issues on the server.", solution: "Implemented chunked processing with async queues and streaming responses to handle large files efficiently." },
        { problem: "Maintaining context accuracy across multiple document formats was challenging.", solution: "Used RAG pipelines with vector embeddings to maintain semantic accuracy across all input formats." }
      ],
      duration: "4 Months"
    }
  },
  {
    id: "gen-ai-education-platform",
    title: "Gen-AI Education Platform",
    description: "AI-powered personalized education platform with Flask backend and React frontend, featuring intelligent content generation, skill assessments, and real-time analytics",
    image: "/gen-ai.png",
    tags: ["React", "TypeScript", "Flask", "MongoDB", "Google Gemini AI", "PyTorch", "spaCy"],
    metrics: [
      "ML-powered skill level prediction",
      "Dynamic quiz generation with NLP",
      "Multi-role system with JWT authentication"
    ],
    links: {
      live: "http://13.61.24.96/",
      github: "https://github.com/Karthik8402/Gen-AI-Education-Platform"
    },
    featured: true,
    detail: {
      about: [
        "The Gen-AI Education Platform is a comprehensive learning system that leverages artificial intelligence to personalize the educational experience for each student.",
        "It uses PyTorch for ML-based skill prediction, spaCy for natural language processing in quiz generation, and Google Gemini AI for content creation. The multi-role authentication system supports students, teachers, and administrators."
      ],
      features: [
        { icon: "psychology", title: "ML Skill Prediction", description: "Uses PyTorch models to predict student skill levels and recommend personalized learning paths." },
        { icon: "smart_toy", title: "Dynamic Quiz Generation", description: "NLP-powered quiz creation using spaCy for intelligent question formulation." },
        { icon: "admin_panel_settings", title: "Multi-Role System", description: "JWT-based authentication supporting students, teachers, and admin roles." },
        { icon: "analytics", title: "Real-Time Analytics", description: "Live dashboard showing student progress, engagement metrics, and performance trends." }
      ],
      challenges: [
        { problem: "Training ML models for skill prediction required large, labeled datasets that weren't available.", solution: "Used transfer learning with pre-trained models and synthetic data generation to bootstrap the training process." },
        { problem: "Real-time analytics caused database bottlenecks during peak usage hours.", solution: "Implemented Redis caching layer and optimized MongoDB aggregation pipelines for efficient data retrieval." }
      ],
      duration: "5 Months"
    }
  },
  {
    id: "family-ledger",
    title: "Family Ledger",
    description: "A shared family expense tracker built with Flutter and Firebase. This application helps families manage their finances by tracking contributions, expenses, and a shared family pool.",
    image: "/family-ledger.png",
    tags: ["Flutter", "Dart", "Firebase", "Provider", "Google Sign-In"],
    metrics: [
      "Secure user authentication with Google",
      "Real-time shared transaction tracking",
      "Visual financial statistics & animations"
    ],
    links: {
      live: "https://familyledger.me/",
      github: "https://github.com/Karthik8402/family_ledger"
    },
    featured: true,
    detail: {
      ...defaultDetail,
      about: [
        "Family Ledger is a cross-platform mobile application designed to simplify shared family finances. Built with Flutter for a native-like experience on both iOS and Android.",
        "The app uses Firebase for real-time data synchronization so all family members see updates instantly. The Provider state management pattern ensures smooth UI performance with beautiful animations."
      ],
      duration: "2 Months"
    }
  },
  {
    id: "sharebox-marketplace",
    title: "ShareBox Marketplace",
    description: "Hybrid platform where students can donate or sell items including IoT devices, accessories, and books with real-time Firebase integration",
    image: "/sharebox.png",
    tags: ["React", "Vite", "Firebase", "Firestore", "Tailwind CSS"],
    metrics: [
      "Real-time data synchronization",
      "Firebase Authentication integration",
      "Modern responsive UI with Tailwind"
    ],
    links: {
      live: "https://sharebox-app-3dfe2.web.app/",
      github: "https://github.com/Karthik8402/sharebox-marketplace"
    },
    featured: true,
    detail: {
      ...defaultDetail,
      about: [
        "ShareBox Marketplace is a hybrid platform designed for college students to donate or sell items like IoT devices, accessories, and books.",
        "Built with React and Vite for blazing-fast performance, it uses Firebase Firestore for real-time data sync and authentication. The modern UI is crafted with Tailwind CSS for responsive design."
      ],
      duration: "2 Months"
    }
  },
  {
    id: "estar-project-tracker",
    title: "eSTAR - Student Internship & Project Tracker",
    description: "AI-powered internship and project management system with multi-student projects, team collaboration, task management, and smart AI assistant for task suggestions",
    image: "/estar.png",
    tags: ["PHP", "MySQL", "JavaScript", "MVC Architecture", "AI Assistant"],
    metrics: [
      "Role-based access control system",
      "AI-powered task suggestions",
      "Glassmorphism UI design"
    ],
    links: {
      live: "https://student-tracker-jk9n.onrender.com",
      github: "https://github.com/Karthik8402/AI-Powered-Student-Internship-Project-Tracker"
    },
    featured: true,
    detail: {
      ...defaultDetail,
      about: [
        "eSTAR is an AI-powered internship and project management system designed for educational institutions. It supports multi-student projects with team collaboration features.",
        "The system includes an AI assistant that provides smart task suggestions, helping students break down complex projects into manageable tasks. Built with PHP MVC architecture and a glassmorphism UI."
      ],
      duration: "3 Months"
    }
  },
  {
    id: "hostel-vms",
    title: "Hostel Visitor Management System",
    description: "Complete visitor management solution for hostel administration with check-in/check-out tracking and security features",
    image: "/hostel-vms.jpg",
    tags: ["HTML", "CSS", "JavaScript", "AppScript"],
    metrics: [
      "Streamlined visitor tracking system",
      "Automated check-in/out process",
      "Deployed on GitHub Pages"
    ],
    links: {
      live: "https://hostel-vsm.s3.eu-north-1.amazonaws.com/index.html",
      github: "https://github.com/Karthik8402/hostel-vms"
    },
    featured: false,
    detail: { ...defaultDetail, duration: "1 Month" }
  },
  {
    id: "valentine-terminal",
    title: "Valentine's Terminal Animation",
    description: "A retro-style terminal animation that transforms into a stunning Valentine's Day surprise with realistic rose petals, sparkle effects, and an animated heartbeat cursor.",
    image: "/valentine-terminal.jpg",
    tags: ["HTML5 Canvas", "Vanilla JavaScript", "CSS3", "Google Fonts"],
    metrics: [
      "Retro terminal hacking aesthetic",
      "Procedural rose petal animation",
      "Interactive spotlight and heartbeat cursor"
    ],
    links: {
      live: "https://karthik8402.github.io/valentine-terminal-animation/",
      github: "https://github.com/Karthik8402/valentine-terminal-animation"
    },
    featured: false,
    detail: { ...defaultDetail, duration: "1 Week" }
  },
  {
    id: "parallax-website",
    title: "Parallax Website",
    description: "Creative parallax scrolling website with smooth animations and modern design effects",
    image: "/parallax.jpg",
    tags: ["HTML", "CSS", "JavaScript"],
    metrics: [
      "Smooth parallax scrolling effects",
      "Responsive design implementation",
      "Pure vanilla JavaScript"
    ],
    links: {
      live: "https://karthik8402.github.io/Parallax_Website",
      github: "https://github.com/Karthik8402/Parallax_Website"
    },
    featured: false,
    detail: { ...defaultDetail, duration: "2 Weeks" }
  },
  {
    id: "animated-login-website",
    title: "Animated Login Page",
    description: "Modern animated login and signup page with smooth transitions and responsive design",
    image: "/animated-login.jpg",
    tags: ["HTML", "CSS", "JavaScript", "Animations"],
    metrics: [
      "Smooth CSS animations",
      "Mobile-responsive interface",
      "Modern UI/UX design"
    ],
    links: {
      live: "https://karthik8402.github.io/Animated_login_responsive_website",
      github: "https://github.com/Karthik8402/Animated_login_responsive_website"
    },
    featured: false,
    detail: { ...defaultDetail, duration: "1 Week" }
  },
  {
    id: "webtech-portfolio",
    title: "Web Technology Portfolio",
    description: "Collection of web development projects and experiments showcasing HTML, CSS, and JavaScript skills",
    image: "/webtech.jpg",
    tags: ["HTML", "CSS", "JavaScript", "Web Development"],
    metrics: [
      "Multiple web development demos",
      "Front-end best practices",
      "Responsive design patterns"
    ],
    links: {
      live: "https://karthik8402.github.io/My_Portfolio_Website",
      github: "https://github.com/Karthik8402/WebTech"
    },
    featured: false,
    detail: { ...defaultDetail, duration: "Ongoing" }
  },
  {
    id: "atm-machine-project",
    title: "ATM Machine Simulator",
    description: "Console-based ATM machine simulation with account management, transactions, and banking operations",
    image: "/atm-machine.jpg",
    tags: ["Java", "OOP", "Console Application"],
    metrics: [
      "Complete banking operations simulation",
      "Object-oriented design patterns",
      "Secure transaction handling"
    ],
    links: {
      live: "",
      github: "https://github.com/Karthik8402/ATM_Machine_Project"
    },
    featured: false,
    detail: { ...defaultDetail, duration: "2 Weeks" }
  }
];
