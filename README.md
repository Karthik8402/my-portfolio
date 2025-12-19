# Portfolio Website

A modern, responsive, and interactive portfolio website built with React, Vite, and Tailwind CSS. This project showcases my skills, projects, and professional background with a sleek, glassmorphism-inspired design.

## 🚀 Features

- **Modern UI/UX**: Clean, glassmorphism-inspired design with a "Tech Galaxy" hero animation.
- **Dark/Light Mode**: Fully responsive theme switching with persistent state management.
- **Responsive Design**: Optimized for all devices, including mobile-specific UX improvements (e.g., disabled hover effects on touch devices).
- **Interactive Animations**: Smooth page transitions and element animations using [Framer Motion](https://www.framer.com/motion/).
- **Project Showcase**: specific cards for each project featuring descriptions, tech stack tags, and links to GitHub/Live Demos.
- **Contact Form**: Integrated contact form with validation using **React Hook Form** and **Zod**.
- **SEO Optimized**: specific metadata for pages using **React Helmet Async**.

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| **Frontend Framework** | [React 19](https://react.dev/) |
| **Build Tool** | [Vite](https://vitejs.dev/) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) |
| **Animations** | [Framer Motion](https://www.framer.com/motion/), [Typewriter Effect](https://github.com/tameemsafi/typewriterjs) |
| **Routing** | [React Router DOM](https://reactrouter.com/) |
| **Forms & Validation** | [React Hook Form](https://react-hook-form.com/), [Zod](https://zod.dev/) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Utilities** | [React Helmet Async](https://github.com/staylor/react-helmet-async) |

## 📂 Project Structure

```bash
src/
├── components/       # Reusable UI components (Navbar, Footer, ProjectCard, etc.)
├── data/            # Static data files (projects, skills, etc.)
├── hooks/           # Custom React hooks
├── pages/           # Page components (Home, About, Projects, Contact, NotFound)
├── seo/             # SEO configuration and components
├── App.tsx          # Main application component with routing
└── main.tsx         # Entry point
```

## ⚡ Getting Started

Follow these steps to set up the project locally.

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/Karthik8402/my-portfolio.git
    cd my-portfolio
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Run the development server**
    ```bash
    npm run dev
    ```
    Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

### Build for Production

To create a production build:

```bash
npm run build
```

This will generate the static files in the `dist` directory.

### Linting

To run the linter and fix basic issues:

```bash
npm run lint
```

## 👤 Created By

**Karthik Kumar**

- [LinkedIn](https://www.linkedin.com/in/karthik-k-53a78026a/)
- [GitHub](https://github.com/Karthik8402)
- [Email](mailto:karthikumar8402@gmail.com)

## 📄 License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

© 2025 Karthik Kumar. All rights reserved.
