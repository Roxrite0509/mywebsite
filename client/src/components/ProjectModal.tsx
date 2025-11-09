import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, X } from "lucide-react";
import type { Project } from "@shared/schema";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto" data-testid="modal-project-detail">
        <DialogHeader>
          <DialogTitle className="font-display text-3xl" data-testid="text-modal-title">
            {project.title}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <div className="rounded-lg overflow-hidden">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-auto"
              data-testid="img-modal-project"
            />
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">About</h3>
            <p className="text-muted-foreground" data-testid="text-modal-description">
              {project.description}
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-3">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <Badge key={index} variant="secondary" data-testid={`badge-modal-tech-${tech}`}>
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-3 pt-4">
            {project.liveUrl && (
              <Button
                onClick={() => console.log("Open live demo:", project.liveUrl)}
                data-testid="button-modal-live"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                View Live Demo
              </Button>
            )}
            {project.githubUrl && (
              <Button
                variant="outline"
                onClick={() => console.log("Open GitHub:", project.githubUrl)}
                data-testid="button-modal-github"
              >
                <Github className="w-4 h-4 mr-2" />
                View on GitHub
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
