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
    title: "MedRide - Healthcare Mobility Platform",
    description: "Founded healthcare mobility startup offering B2B SaaS for hospitals and B2C instant ambulance booking. Smart triage model routes patients to the right hospital, reducing fatalities. Leading LLM + IoT integration for real-time decision support.",
    technologies: ["React", "Node.js", "LLM", "IoT", "SaaS"],
    category: "Web",
    imageUrl: dashboardImage,
    liveUrl: "",
    githubUrl: "",
    featured: "yes",
  },
  {
    id: "2",
    title: "LLM-Augmented IoT Smart Health System",
    description: "IoT-based health monitoring system integrating Raspberry Pi/Arduino sensors with LLM-driven analytics. Cloud-enabled anomaly detection and telemedicine dashboard using Python (Scikit-learn, Pandas) and Firebase/IoT Hub.",
    technologies: ["Python", "IoT", "LLM", "Firebase", "Scikit-learn"],
    category: "AI/ML",
    imageUrl: mobileImage,
    liveUrl: "",
    githubUrl: "",
    featured: "yes",
  },
  {
    id: "3",
    title: "Quantifiable Hallucination Index (QHI)",
    description: "Proposed universal metric QHI = Confidence × Risk × Causal Violation Score to quantify AI hallucination severity. Established standardized hallucination benchmarks and measurable safety standards for clinical AI deployment.",
    technologies: ["Python", "AI Safety", "Medical AI", "Research"],
    category: "AI/ML",
    imageUrl: ecommerceImage,
    liveUrl: "",
    githubUrl: "",
    featured: "yes",
  },
  {
    id: "4",
    title: "Eye - AI Wearable for Visually Impaired",
    description: "Real-time obstacle detection using Intel RealSense and YOLO object detection for navigation assistance. Integrated LLM-based voice guidance for autonomous mobility in dynamic environments.",
    technologies: ["Python", "YOLO", "LLM", "Intel RealSense", "Computer Vision"],
    category: "AI/ML",
    imageUrl: portfolioImage,
    liveUrl: "",
    githubUrl: "",
    featured: "no",
  },
  {
    id: "5",
    title: "SurferBot 2.0 - Micro-Robotics",
    description: "Designed phase-aware microrobot using dual-motor vector thrust control synchronized with surface wave dynamics. Built solar-supercapacitor modules enabling 4-8 hr runtime with validated hydrodynamic efficiency.",
    technologies: ["Robotics", "Arduino", "Solar Power", "Control Systems"],
    category: "Robotics",
    imageUrl: dashboardImage,
    liveUrl: "",
    githubUrl: "",
    featured: "no",
  },
  {
    id: "6",
    title: "DDT Susceptibility Prediction Model",
    description: "Built and optimized XGBoost machine learning model achieving 91% accuracy in predicting DDT susceptibility of propellants at DRDO. Applied ML-driven insights for Indian Army use cases integrating predictive analytics into combustion safety frameworks.",
    technologies: ["Python", "XGBoost", "Machine Learning", "Data Analytics"],
    category: "AI/ML",
    imageUrl: ecommerceImage,
    liveUrl: "",
    githubUrl: "",
    featured: "no",
  },
];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ["All", "Web", "AI/ML", "Robotics"];

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
