export const PROJECTS = [
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard",
    image: "/assets/projects/ecommerce.jpg",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    metrics: [
      "Reduced page load time by 40%",
      "Handled 10K+ daily active users",
      "99.9% uptime in production"
    ],
    links: {
      live: "https://example-ecommerce.com",
      github: "https://github.com/karthikumar/ecommerce"
    },
    featured: true
  },
  {
    id: "task-manager",
    title: "Real-Time Task Manager",
    description: "Collaborative task management app with real-time updates, team collaboration, and analytics",
    image: "/assets/projects/task-manager.jpg",
    tags: ["React", "Socket.io", "Express", "PostgreSQL"],
    metrics: [
      "Real-time sync across 100+ concurrent users",
      "50% increase in team productivity",
      "4.8/5 user rating"
    ],
    links: {
      live: "https://example-tasks.com",
      github: "https://github.com/karthikumar/task-manager"
    },
    featured: true
  },
  {
    id: "weather-app",
    title: "Weather Forecast Dashboard",
    description: "Beautiful weather app with 7-day forecasts, interactive maps, and location-based alerts",
    image: "/assets/projects/weather.jpg",
    tags: ["React", "TypeScript", "Tailwind", "API Integration"],
    metrics: [
      "Lighthouse score: 98/100",
      "1M+ API calls per month",
      "Featured on Product Hunt"
    ],
    links: {
      live: "https://example-weather.com",
      github: "https://github.com/karthikumar/weather"
    },
    featured: false
  }
];
