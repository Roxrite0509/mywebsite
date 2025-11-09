import ProjectCard from '../ProjectCard'
import dashboardImage from '@assets/generated_images/Project_showcase_dashboard_a8908926.png'

export default function ProjectCardExample() {
  const mockProject = {
    id: "1",
    title: "Analytics Dashboard",
    description: "A comprehensive analytics platform with real-time data visualization and reporting capabilities.",
    technologies: ["React", "TypeScript", "D3.js"],
    category: "Web",
    imageUrl: dashboardImage,
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    featured: "yes",
  };

  return (
    <div className="max-w-sm">
      <ProjectCard project={mockProject} onClick={() => console.log("Project clicked")} />
    </div>
  );
}
