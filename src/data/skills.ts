import { 
  Code2, 
  FileCode, 
  Palette, 
  Triangle, 
  RefreshCw,
  Box,
  Boxes,
  Database,
  Layers,
  GitBranch,
  Container,
  Cloud,
  Workflow
} from 'lucide-react';

export const SKILLS = [
  {
    category: "Frontend",
    items: [
      { name: "React", level: 95, icon: Code2 },
      { name: "TypeScript", level: 90, icon: FileCode },
      { name: "Tailwind CSS", level: 90, icon: Palette },
      { name: "Next.js", level: 85, icon: Triangle },
      { name: "Redux", level: 80, icon: RefreshCw }
    ]
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", level: 90, icon: Box },
      { name: "Express", level: 85, icon: Boxes },
      { name: "MongoDB", level: 80, icon: Database },
      { name: "PostgreSQL", level: 75, icon: Database },
      { name: "GraphQL", level: 70, icon: Layers }
    ]
  },
  {
    category: "Tools & DevOps",
    items: [
      { name: "Git", level: 95, icon: GitBranch },
      { name: "Docker", level: 80, icon: Container },
      { name: "AWS", level: 75, icon: Cloud },
      { name: "Vercel", level: 90, icon: Triangle },
      { name: "CI/CD", level: 80, icon: Workflow }
    ]
  }
];
