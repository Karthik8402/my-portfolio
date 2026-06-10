import {
  FlutterIcon,
  ReactIcon,
  TailwindIcon,
  NodeIcon,
  JavaIcon,
  PythonIcon,
  SQLIcon,
  GitIcon,
  GithubIcon,
  AWSIcon,
  VercelIcon,
  CICDIcon,
  TypeScriptIcon,
  FramerIcon,
  GeminiIcon,
  PyTorchIcon,
  N8nIcon
} from "../components/Icons";

export const SKILLS = [
  {
    category: "Frontend",
    items: [
      { name: "React", level: 90, icon: ReactIcon },
      { name: "TypeScript", level: 85, icon: TypeScriptIcon },
      { name: "Tailwind CSS", level: 90, icon: TailwindIcon },
      { name: "Framer Motion", level: 80, icon: FramerIcon },
      { name: "Flutter", level: 85, icon: FlutterIcon }
    ]
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", level: 80, icon: NodeIcon },
      { name: "Java", level: 85, icon: JavaIcon },
      { name: "Python", level: 80, icon: PythonIcon },
      { name: "SQL", level: 75, icon: SQLIcon }
    ]
  },
  {
    category: "AI & ML Tools",
    items: [
      { name: "Google Gemini AI", level: 80, icon: GeminiIcon },
      { name: "PyTorch", level: 70, icon: PyTorchIcon },
      { name: "RAG Pipelines", level: 75, icon: PythonIcon } // Reusing Python for RAG if no specific icon
    ]
  },
  {
    category: "Tools & DevOps",
    items: [
      { name: "Git", level: 80, icon: GitIcon },
      { name: "GitHub", level: 85, icon: GithubIcon },
      { name: "AWS (Basics)", level: 70, icon: AWSIcon },
      { name: "Vercel", level: 90, icon: VercelIcon },
      { name: "CI/CD", level: 75, icon: CICDIcon }
    ]
  },
  {
    category: "Automation (n8n)",
    items: [
      { name: "Global Error Handler", level: 80, icon: N8nIcon },
      { name: "Google Email Summarizer V2", level: 80, icon: N8nIcon },
      { name: "Job Search AI - Daily Digest", level: 80, icon: N8nIcon },
      { name: "Job Search AI - Fetcher", level: 80, icon: N8nIcon },
      { name: "Job Search AI - Weekly Summary", level: 80, icon: N8nIcon }
    ]
  }
];
