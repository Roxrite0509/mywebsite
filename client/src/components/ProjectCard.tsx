import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import type { Project } from "@shared/schema";

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <Card
      className="overflow-hidden hover-elevate active-elevate-2 cursor-pointer group"
      onClick={onClick}
      data-testid={`card-project-${project.id}`}
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          data-testid={`img-project-${project.id}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 left-4 right-4 flex gap-2">
            {project.liveUrl && (
              <Button
                size="sm"
                variant="secondary"
                onClick={(e) => {
                  e.stopPropagation();
                  console.log("Open live demo:", project.liveUrl);
                }}
                data-testid={`button-live-${project.id}`}
              >
                <ExternalLink className="w-4 h-4 mr-1" />
                Live Demo
              </Button>
            )}
            {project.githubUrl && (
              <Button
                size="sm"
                variant="secondary"
                onClick={(e) => {
                  e.stopPropagation();
                  console.log("Open GitHub:", project.githubUrl);
                }}
                data-testid={`button-github-${project.id}`}
              >
                <Github className="w-4 h-4 mr-1" />
                GitHub
              </Button>
            )}
          </div>
        </div>
      </div>

      <div className="p-6">
        <h3 className="font-display text-xl font-bold mb-2" data-testid={`text-title-${project.id}`}>
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2" data-testid={`text-desc-${project.id}`}>
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <Badge key={index} variant="secondary" data-testid={`badge-tech-${tech}`}>
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </Card>
  );
}
