import ProjectModal from '../ProjectModal'
import dashboardImage from '@assets/generated_images/Project_showcase_dashboard_a8908926.png'

export default function ProjectModalExample() {
  const mockProject = {
    id: "1",
    title: "Analytics Dashboard",
    description: "A comprehensive analytics platform with real-time data visualization, custom reports, and team collaboration features. Built with modern web technologies for optimal performance.",
    technologies: ["React", "TypeScript", "D3.js", "Node.js"],
    category: "Web",
    imageUrl: dashboardImage,
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    featured: "yes",
  };

  return <ProjectModal project={mockProject} onClose={() => console.log("Modal closed")} />
}
