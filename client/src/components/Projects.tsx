import { useState } from "react";
import { Button } from "@/components/ui/button";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import type { Project } from "@shared/schema";
import dashboardImage from "@assets/generated_images/Project_showcase_dashboard_a8908926.png";
import mobileImage from "@assets/generated_images/Mobile_app_project_dcf87b12.png";
import ecommerceImage from "@assets/generated_images/E-commerce_project_screenshot_5c2f8f43.png";
import portfolioImage from "@assets/generated_images/Creative_portfolio_project_5288f911.png";

const mockProjects: Project[] = [
  {
    id: "1",
    title: "Analytics Dashboard",
    description: "A comprehensive analytics platform with real-time data visualization, custom reports, and team collaboration features. Built with modern web technologies for optimal performance.",
    technologies: ["React", "TypeScript", "D3.js", "Node.js"],
    category: "Web",
    imageUrl: dashboardImage,
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    featured: "yes",
  },
  {
    id: "2",
    title: "Social Mobile App",
    description: "Cross-platform mobile application for social networking with real-time messaging, photo sharing, and location-based features.",
    technologies: ["React Native", "Firebase", "Redux"],
    category: "Mobile",
    imageUrl: mobileImage,
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    featured: "no",
  },
  {
    id: "3",
    title: "E-Commerce Platform",
    description: "Full-featured e-commerce solution with product management, cart functionality, payment integration, and admin dashboard.",
    technologies: ["Next.js", "Stripe", "PostgreSQL", "Tailwind"],
    category: "Web",
    imageUrl: ecommerceImage,
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    featured: "yes",
  },
  {
    id: "4",
    title: "Creative Portfolio",
    description: "Interactive portfolio website showcasing creative work with smooth animations, case studies, and client testimonials.",
    technologies: ["React", "Framer Motion", "Three.js"],
    category: "Design",
    imageUrl: portfolioImage,
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    featured: "no",
  },
];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ["All", "Web", "Mobile", "Design"];

  const filteredProjects =
    selectedCategory === "All"
      ? mockProjects
      : mockProjects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-4">
          Featured Projects
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          A selection of my recent work across web development, mobile apps, and design projects.
        </p>

        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              data-testid={`button-filter-${category.toLowerCase()}`}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>

        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
    </section>
  );
}
