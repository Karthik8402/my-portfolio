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
      live: "https://study.karthikdev.app/",
      github: "https://github.com/Karthik8402/smart-study-notes-generator"
    },
    featured: true,
    detail: {
      about: [
        "Smart Study Notes Generator is an AI-powered platform built with FastAPI and React that transforms the way students prepare for exams and campus placements. It leverages Retrieval-Augmented Generation (RAG) with ChromaDB vector storage and Sentence Transformers to let students upload study materials in any format — PDF, PPT, images (via OCR), or YouTube links — and immediately chat with the content using a locally-hosted Ollama LLM.",
        "Beyond note-taking, the platform includes a dedicated Campus Recruitment Training (CRT) suite covering aptitude, logical reasoning, technical interview simulation, company-specific paper analysis, and HR round preparation. MCP (Model Context Protocol) servers for Google Calendar and Drive enable automatic study schedule creation directly from a chat prompt, bridging the gap between AI and real productivity tools."
      ],
      features: [
        { icon: "upload_file", title: "Multi-Format Upload & OCR", description: "Ingests PDFs, PowerPoint decks, images (Tesseract OCR), and YouTube transcripts into a shared vector knowledge base." },
        { icon: "chat", title: "RAG-Powered Chat", description: "Ask questions about uploaded content and get grounded, cited answers from Ollama (Llama 3 / Mistral) via a ChromaDB retrieval pipeline." },
        { icon: "quiz", title: "Auto Notes & MCQ Generator", description: "One-click generation of topic-wise summaries, concept explanations, and multiple-choice questions with detailed answer explanations." },
        { icon: "calendar_month", title: "MCP Calendar & Drive Integration", description: "Connects to Google Calendar and Drive via MCP servers — auto-schedules study sessions and organises generated notes into real file-system folders." }
      ],
      challenges: [
        { problem: "Streaming large PDFs to the server caused timeouts and RAM spikes, especially for 100+ page documents.", solution: "Implemented chunked file ingestion with async background queues and configurable chunk size / overlap (800 tokens, 200 overlap) so processing never blocks the API response." },
        { problem: "Keeping the RAG context accurate when materials spanned PDFs, slides, and OCR-extracted images was difficult.", solution: "Applied a unified embedding pipeline using all-MiniLM-L6-v2 and stored normalised text chunks with source metadata in ChromaDB, enabling cross-format semantic search with Top-K retrieval." }
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
      live: "https://gen-ai-karthi8402.azurewebsites.net/",
      github: "https://github.com/Karthik8402/Gen-AI-Education-Platform"
    },
    featured: true,
    detail: {
      about: [
        "The Gen-AI Education Platform is a full-stack learning system built with Flask and React 18 that uses AI to personalise every student's learning journey. A PyTorch-powered placement test dynamically assesses skill levels on first login, then drives adaptive content delivery — ensuring beginners and advanced learners never see the same material.",
        "Google Gemini AI handles rich content generation while spaCy NLP formulates context-aware quiz questions. A three-tier role system (Student, Teacher, Admin) with JWT authentication gives each stakeholder purpose-built dashboards: students track skill growth, teachers monitor cohort analytics, and admins oversee the entire platform. The backend is deployed on AWS EC2 for production-grade reliability."
      ],
      features: [
        { icon: "model_training", title: "ML-Powered Skill Assessment", description: "PyTorch models run a placement test on signup to predict skill levels and generate a personalised learning path for each student." },
        { icon: "smart_toy", title: "AI Content & Quiz Generation", description: "Google Gemini AI creates course content and spaCy NLP formulates dynamic, difficulty-adjusted quizzes tailored to the student's current level." },
        { icon: "admin_panel_settings", title: "Multi-Role Access Control", description: "JWT-secured roles for Students, Teachers, and Admins each unlock specialised dashboards, course management tools, and system-wide analytics panels." },
        { icon: "analytics", title: "Real-Time Progress Analytics", description: "Live dashboards surface quiz scores, engagement trends, and skill progression charts so teachers can intervene early when students fall behind." }
      ],
      challenges: [
        { problem: "Collecting enough labelled student performance data to train the skill-prediction model from scratch was infeasible at an early stage.", solution: "Applied transfer learning on a pre-trained text encoder and generated synthetic performance profiles, achieving reliable tier classification with far fewer real samples." },
        { problem: "Concurrent quiz submissions during peak hours overwhelmed the Flask synchronous request model and slowed MongoDB writes.", solution: "Offloaded quiz-grading and analytics aggregation to background Celery tasks and introduced MongoDB aggregation pipelines, cutting p95 response time by over 60%." }
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
      about: [
        "Family Ledger is a Flutter-based cross-platform expense tracker that helps families manage shared finances through a unified pool. Users log Income or Expense transactions, categorise them (Groceries, Rent, Salary, etc.), and control visibility — marking entries as Shared for the whole family or Private for personal records only.",
        "Backed by Firebase Cloud Firestore for real-time synchronisation across all family members' devices, the app uses Google Sign-In for secure authentication managed through Firestore user profiles. The Provider state management pattern keeps the UI reactive, while flutter_animate, intl, and fl_chart deliver polished charts and INR-formatted currency displays."
      ],
      features: [
        { icon: "google", title: "Google Sign-In Authentication", description: "Secure sign-in via Google OAuth with user profiles stored in Firestore, eliminating the need for password management entirely." },
        { icon: "swap_vert", title: "Income & Expense Transactions", description: "Add categorised Income or Expense entries (Groceries, Rent, Salary, etc.) with a visibility toggle between Shared (family-wide) and Private (personal only)." },
        { icon: "group", title: "Family Contribution Statistics", description: "View the total shared family pool, each member's individual contribution amount, and their percentage breakdown — all animated with flutter_animate for a polished feel." },
        { icon: "bar_chart", title: "Visual Financial Charts", description: "fl_chart renders interactive statistical graphs for spending and income trends; intl handles INR (₹) currency formatting and localised date display throughout the app." }
      ],
      challenges: [
        { problem: "Ensuring all family members see the same transaction data in real time without stale reads was critical for trust in the shared pool balance.", solution: "Leveraged Firestore real-time listeners (snapshots) so every write instantly propagates to all connected clients, keeping balances consistent across devices without manual refresh." },
        { problem: "Running Flutter on the web required a fixed port for Google Sign-In due to OAuth redirect restrictions, which complicated the local development workflow.", solution: "Standardised the dev workflow around flutter run -d web-server --web-port 5000 and authorised that origin in the Google Cloud Console, documented in google_cloud_guide.md for all contributors." }
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
      about: [
        "ShareBox is a community marketplace web app built with React 19 + Vite 7 and Firebase, designed to help people donate, trade, and share items within their local community. Users can browse listings, post items with image uploads via the ImgBB API, and communicate directly with sellers through a real-time transaction-based chat system.",
        "The app is secured by Firebase Google OAuth and ships with protected routes, a personal dashboard for managing listings and requests, full profile management, and persistent dark/light theme switching. Every page is mobile-first and accessible, with custom 404 handling and ESLint-enforced code quality throughout."
      ],
      features: [
        { icon: "storefront", title: "Browse, List & Trade Items", description: "Post items for donation or trade with ImgBB-hosted image uploads, browse with pagination, and view detailed listings — no account needed to browse." },
        { icon: "forum", title: "Real-Time Transaction Chat", description: "Firebase Firestore powers per-transaction chat threads, letting buyers and sellers negotiate in real time without leaving the app." },
        { icon: "dashboard", title: "Personal Dashboard", description: "Manage your active listings, track incoming and outgoing trade requests, and update your contact profile all from one authenticated dashboard." },
        { icon: "dark_mode", title: "Persistent Theme & Responsive UI", description: "A smooth dark/light theme toggle persists across sessions; the mobile-first Tailwind CSS v4 layout adapts seamlessly from phone to desktop." }
      ],
      challenges: [
        { problem: "Structuring Firestore security rules to allow public browsing while keeping user data and chat messages private was complex.", solution: "Designed role-scoped Firestore rules that gate write access on Firebase Auth UID matching, keeping items readable by all while locking transactions and messages to participants only." },
        { problem: "Image hosting inside Firestore would have inflated costs and storage limits, yet requiring a backend just for uploads added complexity.", solution: "Integrated the ImgBB public API directly from the React client for fast, free image hosting while keeping the stack entirely serverless on Firebase Hosting." }
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
      about: [
        "eSTAR is a PHP MVC web application for tracking student internships and projects across three distinct roles — Student, Mentor, and Admin — each unlocking a purpose-built dashboard. Students submit updates, Mentors review progress and assign tasks with due dates, and Admins oversee all activity through an audit log that records every user action.",
        "A mock AI assistant analyses project descriptions and suggests logical next steps, helping students break down vague briefs into actionable tasks. The backend runs on PHP with MySQL (deployable via XAMPP locally or iPage hosting), with session-based auth, role validation on every request, and a glassmorphism-styled front-end."
      ],
      features: [
        { icon: "admin_panel_settings", title: "Role-Based Access Control", description: "Three separate dashboards for Students, Mentors, and Admins; each role is validated server-side on every request to prevent privilege escalation." },
        { icon: "task_alt", title: "Task Management with Due Dates", description: "Mentors create and assign tasks with deadlines; students update task status. The system tracks progress across all assigned projects in one view." },
        { icon: "smart_toy", title: "AI-Powered Task Suggestions", description: "A mock AI assistant reads the project description and recommends next-step tasks, helping students decompose large projects into manageable action items." },
        { icon: "history", title: "Audit Logging & Security", description: "Every login, role change, and project update is recorded in an audit log. Secure session management with role validation guards all protected routes." }
      ],
      challenges: [
        { problem: "Managing three distinct permission levels while sharing the same PHP codebase without duplicating controller logic was complex.", solution: "Implemented a centralised role-guard middleware that checks the session role against a route-to-role map on every request, keeping all access control in one place." },
        { problem: "Deploying a PHP/MySQL app to shared hosting (iPage) required careful separation of public assets and private source code.", solution: "Structured the project so only the public/ directory sits in public_html, while the src/ layer (models, config, controllers) lives outside the web root, protecting business logic from direct access." }
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
    detail: {
      about: [
        "Vizito is a fully frontend-based Visitor Management System built for hostels — no dedicated server or database required. Visitors self-register through a form that captures name, email, phone, photo, and purpose of visit; on submission the data is posted to a Google Sheet via Apps Script and a printable visitor pass with a scannable QR code is generated instantly.",
        "Wardens access a protected log page secured by localStorage session management with a 30-minute timeout. From the log they can browse paginated records fetched live from Google Sheets, export the full log as a formatted PDF via jsPDF + AutoTable, and refresh data on demand. AOS animations and SweetAlert2 modals give the entire site a polished, responsive feel."
      ],
      features: [
        { icon: "how_to_reg", title: "Visitor Self-Registration & CAPTCHA", description: "A math CAPTCHA prevents bot submissions. On success, an auto-incremented Visitor ID is stored in localStorage and a popup displays the printable visitor pass with QR code." },
        { icon: "qr_code_2", title: "Printable QR Visitor Pass", description: "QRCode.js encodes all visitor details into a scannable QR code on the pass. Wardens can scan it at the gate for instant identity verification without searching the log." },
        { icon: "table_view", title: "Warden Log with PDF Export", description: "Warden-protected log page fetches live data from Google Sheets, paginates it at 10 records per page, and lets wardens download the entire log as a formatted PDF with one click." },
        { icon: "lock_clock", title: "Session-Based Warden Auth", description: "Login stores a session flag and timestamp in localStorage; the log page validates both on load and auto-expires the session after 30 minutes of inactivity." }
      ],
      challenges: [
        { problem: "Using Google Sheets as a live database meant all data reads required public API calls, creating a risk of the Apps Script URL being abused for writes.", solution: "The Apps Script Web App was scoped to execute as the owner and configured to only accept POST requests from known origins, limiting write access while keeping the read endpoint open for the warden log." },
        { problem: "Keeping all dependencies offline-capable for hostels with unreliable internet while still using third-party libraries was a constraint.", solution: "Tailwind CSS, SweetAlert2, and AOS were bundled locally under libs/ so the core UI works without a CDN; only jsPDF and QRCode.js are loaded from CDN in the log and pass popup respectively." }
      ],
      duration: "1 Month"
    }
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
    detail: {
      about: [
        "Valentine's Terminal Animation is a single-file HTML5 Canvas project that opens as a retro green-on-black terminal, types out a custom boot sequence line by line, then transitions into a full-screen particle heart reveal. Five layered canvas elements (z-index 1 to 9998) render petals, the particle heart, terminal text, spotlight, and cursor effects in the correct draw order without any framework.",
        "On desktop, a dark-room spotlight mode activates after the terminal sequence — the user sweeps the mouse to find the hidden heart and message, then clicks to expand the beam and reveal the full scene. On mobile and touch devices, the spotlight and custom cursor are automatically disabled; the app jumps straight to the particle heart reveal with proportionally scaled elements."
      ],
      features: [
        { icon: "terminal", title: "Retro Boot Sequence Terminal", description: "Character-by-character typing animation with randomised delays outputs custom boot lines (romance_protocol, shared_memories.dat, etc.) before flashing a blinking red SYSTEM OVERLOAD alert." },
        { icon: "favorite", title: "Particle Heart Formation", description: "Hundreds of particles spawn from all four screen edges and ease into a heart silhouette. 'HAPPY VALENTINES DAY' and a target name are rendered as pixel-text particles with subtle continuous jitter." },
        { icon: "local_florist", title: "Physics-Based Rose Petal Rain", description: "Bezier-curve petals with gradient fills fall with sinusoidal sway and dynamic x-axis tilt for 3D rotation. Mouse repulsion pushes petals away from the cursor; sparkles burst at collision with the heart zone." },
        { icon: "flashlight_on", title: "Interactive Spotlight & Heartbeat Cursor", description: "A dark-room flashlight follows the mouse with a soft falloff gradient and floating dust particles. The custom cursor pulses in a lub-dub heartbeat rhythm with an orbiting sparkle trail — all disabled on touch devices." }
      ],
      challenges: [
        { problem: "Coordinating five stacked canvas layers with independent animation loops while maintaining a consistent frame rate during the simultaneous petal, particle, and spotlight phases was difficult.", solution: "Each canvas runs its own requestAnimationFrame loop and renders only its own layer; CSS z-index stacking handles compositing so no layer blocks another and the browser can optimise each rAF call independently." },
        { problem: "Scaling the particle heart and pixel-text formation correctly across wildly different viewport sizes — from mobile portrait to large desktop — required dynamic calculation.", solution: "initParticles() computes the heart radius and pixel-font scale from window.innerWidth/innerHeight at runtime, then centres the entire composition (heart plus two text rows) vertically with padding constants." }
      ],
      duration: "1 Week"
    }
  },
  {
    id: "parallax-website",
    title: "Parallax Website",
    description: "Visually immersive parallax scrolling website built with pure HTML, CSS, and JavaScript — 9 layered nature-scene images animate at different scroll speeds to simulate a deep 3D effect, with no external libraries or frameworks.",
    image: "/parallax.jpg",
    tags: ["HTML5", "CSS3", "Vanilla JavaScript", "Google Fonts", "Parallax"],
    metrics: [
      "9 independently animated image layers",
      "Per-element scroll multipliers for 3D depth",
      "1250px desktop guard with matchMedia"
    ],
    links: {
      live: "https://karthik8402.github.io/Parallax_Website",
      github: "https://github.com/Karthik8402/Parallax_Website"
    },
    featured: false,
    detail: {
      about: [
        "Parallax Website is a zero-dependency scrolling experience built with pure HTML5, CSS3, and vanilla JavaScript. Nine PNG image layers — five hills, a tree, a leaf, a plant, and a hero title — are absolutely positioned and each assigned a unique scroll multiplier so they drift, slide, or sink at different speeds as the user scrolls, producing a convincing 3D depth illusion.",
        "Below the parallax hero sits an informational content section styled with a teal/green brand palette (#359381 nav, #003329 content background) and the Poppins typeface from Google Fonts. Because the effect relies on precise absolute positioning, a desktop guard hides all content and alerts the user to widen their window if the viewport drops below 1250px."
      ],
      features: [
        { icon: "layers", title: "9-Layer Parallax Depth Effect", description: "Five hill layers, a foreground tree, a floating leaf, a plant, and the hero title each move at a distinct scroll multiplier — from 0.8× slow drift to 2.5× fast sink — creating a seamless illusion of 3D depth." },
        { icon: "open_with", title: "Per-Element Scroll Transforms", description: "The scroll event reads window.scrollY and applies unique transforms per element: #hill4 slides left (scrollY × −1.5), #hill5 slides right, #leaf floats diagonally up-right, and #text sinks downward at 2.5×." },
        { icon: "desktop_windows", title: "Responsive Desktop Guard", description: "On load and every resize, window.matchMedia('(min-width: 1250px)') is checked. If the viewport is too narrow, #content is hidden and an alert instructs the user to switch to desktop mode." },
        { icon: "format_paint", title: "Teal/Green Theme & Google Fonts", description: "Consistent brand colours (#359381 for nav/logo, #003329 for the content section background) combined with Poppins (weights 400, 500, 700) give the site a clean, nature-inspired aesthetic." }
      ],
      challenges: [
        { problem: "Coordinating 9 absolutely positioned layers so they all align perfectly at scroll position 0 required careful baseline offset calculation in CSS.", solution: "Each layer's initial top/left values were tuned in style.css to form a cohesive scene at rest; the JS scroll handler then applies only the delta offset on top of those baselines, keeping alignment consistent." },
        { problem: "The parallax effect breaks entirely on narrow viewports because absolute positioning and fixed layer widths cannot reflow to mobile screen sizes.", solution: "Rather than attempting a degraded mobile layout, a matchMedia desktop guard proactively hides the content and alerts users to use a 1250px+ window, preserving the intended visual integrity." }
      ],
      duration: "2 Weeks"
    }
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
    detail: {
      about: [
        "Modern Login Page is a pure static login UI built with HTML5, CSS3, and vanilla JavaScript, showcasing a glassmorphism design — a frosted-glass card with backdrop-filter blur, a semi-transparent border, and a continuous CSS hue-rotation animation on the background image that gives the page a living, dynamic feel.",
        "Input fields use floating labels that animate upward on focus, with Ionicons v7 providing mail and lock glyphs inside each field. Client-side validation enforces required fields and a strict 8–16 character password length. Deployment is fully automated via a GitHub Actions workflow that publishes to GitHub Pages on every push to main."
      ],
      features: [
        { icon: "blur_on", title: "Glassmorphism UI Design", description: "Frosted-glass card built with CSS backdrop-filter: blur, rgba backgrounds, and a semi-transparent border — no canvas or SVG required, pure CSS visual depth." },
        { icon: "animation", title: "Animated Hue-Rotation Background", description: "A CSS @keyframes animation continuously rotates the hue of the background image (animateBg 5s linear infinite), creating an ever-shifting colour palette behind the frosted card." },
        { icon: "label", title: "Floating Labels & Ionicons", description: "Labels transition from inside the input to a raised position on focus or when the field has content. Ionicons v7 renders mail and lock icons inline within each field." },
        { icon: "verified_user", title: "Form Validation & CI/CD Deployment", description: "JavaScript enforces non-empty fields and an 8–16 character password constraint. A GitHub Actions deploy.yml workflow auto-publishes to GitHub Pages on every push to main." }
      ],
      challenges: [
        { problem: "Achieving a consistent glassmorphism effect across Chrome, Firefox, and Safari required vendor-prefix handling for backdrop-filter.", solution: "Applied both -webkit-backdrop-filter and backdrop-filter with the same blur value, and tested a transparent fallback background colour for browsers that do not support the property." },
        { problem: "Floating label positioning broke on browser autofill because browsers apply their own background colour to autofilled inputs, obscuring the label animation.", solution: "Used a CSS animation override on the :-webkit-autofill pseudo-class to delay the browser's background colour injection, keeping the floating label visible and readable on autofill." }
      ],
      duration: "1 Week"
    }
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
    detail: {
      about: [
        "Web Technology Portfolio is a responsive static website built with pure HTML5, CSS3, and vanilla JavaScript that serves as a personal showcase — a single-page layout covering a full-viewport hero, a tabbed About section (Skills / Education / Interest), a curated Projects grid, and a contact form backed by Google Apps Script that writes submissions directly to a Google Sheet.",
        "Navigation uses a hamburger menu for mobile devices and CSS scroll-behavior: smooth for in-page anchoring. The dark theme (#080808 background, #ff004f accent) is consistent throughout, with Font Awesome icons and the Poppins typeface loaded via CDN. The site is deployable to any static host — GitHub Pages, Netlify, or Vercel — with no build step required."
      ],
      features: [
        { icon: "tab", title: "Tabbed About Section", description: "Three tabs — Skills (Java, HTML/CSS/JS, SQL), Education (B.Sc CS at Vysya College, Salem), and Interests — switch content with zero page reloads using vanilla JS class toggling." },
        { icon: "grid_view", title: "Projects Showcase Grid", description: "Cards link to live demos (parallax.unaux.com, creativelogin.unaux.com) and GitHub repos for Java ATM, Parallax Website, Login Page, and SQL projects." },
        { icon: "send", title: "Google Sheets Contact Form", description: "The contact form serialises name, email, and message and POSTs to a Google Apps Script Web App endpoint, writing submissions directly into a Google Sheet with no backend server." },
        { icon: "phone_iphone", title: "Responsive Navigation & Dark Theme", description: "A vanilla JS hamburger menu collapses navigation on small screens. The dark #080808 background with #ff004f accent colour and smooth scrolling create a polished single-page experience." }
      ],
      challenges: [
        { problem: "Submitting a form via fetch to a Google Apps Script URL triggers a CORS preflight that Apps Script cannot handle with a redirect response.", solution: "Used fetch with mode: 'no-cors' and reformatted the payload as FormData so the browser sends a simple request, bypassing the preflight while still delivering data to the Sheet." },
        { problem: "Keeping the tabbed content section accessible without JavaScript-heavy frameworks on a pure static page required careful DOM structuring.", solution: "Tab panels are siblings in the DOM with a single active class toggled by JS; CSS hides non-active panels with display: none, keeping the tab switch instant and compatible with screen readers." }
      ],
      duration: "Ongoing"
    }
  },
  {
    id: "atm-machine-project",
    title: "ATM Machine Simulator",
    description: "Console-based ATM simulation in Java supporting customer login, PIN validation, and full banking operations (balance, withdraw, deposit) on both Checking and Savings accounts.",
    image: "/atm-machine.jpg",
    tags: ["Java", "OOP", "Console Application", "HashMap", "Scanner", "DecimalFormat"],
    metrics: [
      "Dual-account support: Checking & Savings",
      "HashMap-based credential validation",
      "Currency-formatted balance display"
    ],
    links: {
      live: "",
      github: "https://github.com/Karthik8402/ATM_Machine_Project"
    },
    featured: false,
    detail: {
      about: [
        "ATM Machine Simulator is a console-based Java application that replicates core ATM functionality within a three-class architecture — ATM (entry point), OptionMenu (login & menu flow), and Account (data model & transaction logic). The package is structured under edu.project.ATM and was built and tested in Eclipse IDE.",
        "Users authenticate with a customer number and PIN validated against a HashMap of hardcoded credentials, then choose between a Checking or Savings account. From there they can view their balance, withdraw funds (with insufficient-balance protection), or deposit funds — all formatted with DecimalFormat for a realistic currency display."
      ],
      features: [
        { icon: "lock", title: "Customer Login & PIN Validation", description: "Validates a customer number and 4-digit PIN against a HashMap. Non-numeric input is caught gracefully and the user is re-prompted without crashing." },
        { icon: "account_balance", title: "Dual Account Selection", description: "After login, users pick between a Checking Account or Savings Account, each maintaining its own independent balance throughout the session." },
        { icon: "payments", title: "Withdraw & Deposit Funds", description: "Deposit adds any positive amount to the current balance; Withdraw deducts the amount and rejects the transaction if it would result in a negative balance." },
        { icon: "receipt_long", title: "Currency-Formatted Balance View", description: "Account balance is displayed using java.text.DecimalFormat, rendering values like $1,234.56 for a polished, readable output in the console." }
      ],
      challenges: [
        { problem: "Menu navigation was implemented with recursive method calls, which can cause a StackOverflowError after a very large number of back-and-forth operations.", solution: "Identified the limitation and documented it clearly. The correct fix is to replace recursive menu calls with iterative loops (while/do-while), which eliminates stack growth entirely." },
        { problem: "Storing and checking credentials securely without a database or external dependency was a challenge for a pure console app.", solution: "Used a java.util.HashMap to map customer numbers to PINs in-memory, providing O(1) lookup and keeping the project self-contained with no external dependencies." }
      ],
      duration: "2 Weeks"
    }
  }
];
