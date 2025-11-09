import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Twitter, Instagram } from "lucide-react";

export default function SocialLinks() {
  const socialLinks = [
    { 
      icon: Mail, 
      label: "Email", 
      href: "mailto:your.email@example.com",
      editable: "your.email@example.com"
    },
    { 
      icon: Github, 
      label: "GitHub", 
      href: "https://github.com/yourusername",
      editable: "yourusername"
    },
    { 
      icon: Linkedin, 
      label: "LinkedIn", 
      href: "https://linkedin.com/in/yourusername",
      editable: "yourusername"
    },
    { 
      icon: Twitter, 
      label: "Twitter", 
      href: "https://twitter.com/yourusername",
      editable: "@yourusername"
    },
    { 
      icon: Instagram, 
      label: "Instagram", 
      href: "https://instagram.com/yourusername",
      editable: "@yourusername"
    },
  ];

  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-4">
      {socialLinks.map((link, index) => {
        const Icon = link.icon;
        return (
          <Button
            key={index}
            size="icon"
            variant="outline"
            className="bg-card/50 backdrop-blur-sm border-red-500/30 hover:border-red-500 hover:bg-red-500/10"
            onClick={() => {
              console.log(`Opening ${link.label}: ${link.href}`);
              window.open(link.href, '_blank');
            }}
            data-testid={`button-social-${link.label.toLowerCase()}`}
          >
            <Icon className="w-5 h-5 text-red-500" />
          </Button>
        );
      })}
    </div>
  );
}
