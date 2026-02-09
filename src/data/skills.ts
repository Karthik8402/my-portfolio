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
  CICDIcon
} from "../components/Icons";

export const SKILLS = [
  {
    category: "Frontend",
    items: [
      { name: "React", level: 90, icon: ReactIcon },
      { name: "Flutter", level: 85, icon: FlutterIcon },
      { name: "Tailwind CSS", level: 85, icon: TailwindIcon }
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
    category: "Tools & DevOps",
    items: [
      { name: "Git", level: 80, icon: GitIcon },
      { name: "GitHub", level: 80, icon: GithubIcon },
      { name: "AWS (Basics)", level: 70, icon: AWSIcon },
      { name: "Vercel", level: 85, icon: VercelIcon },
      { name: "CI/CD", level: 75, icon: CICDIcon }
    ]
  }
];
