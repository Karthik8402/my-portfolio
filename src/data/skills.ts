import {
  Atom,        
  Paintbrush,  
  Server,      
  Coffee,
  FileCode,
  Database,
  GitBranch,
  Github,
  Cloud,
  Workflow,
  Rocket,       
} from "lucide-react";

export const SKILLS = [
  {
    category: "Frontend",
    items: [
      { name: "React", level: 90, icon: Atom },
      { name: "Tailwind CSS", level: 85, icon: Paintbrush }
    ]
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", level: 80, icon: Server },
      { name: "Java", level: 85, icon: Coffee },
      { name: "Python", level: 80, icon: FileCode },
      { name: "SQL", level: 75, icon: Database }
    ]
  },
  {
    category: "Tools & DevOps",
    items: [
      { name: "Git", level: 80, icon: GitBranch },
      { name: "GitHub", level: 80, icon: Github },
      { name: "AWS (Basics)", level: 70, icon: Cloud },
      { name: "Vercel", level: 85, icon: Rocket },
      { name: "CI/CD", level: 75, icon: Workflow }
    ]
  }
];
