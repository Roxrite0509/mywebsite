import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: "Projects", id: "projects" },
    { label: "Skills", id: "skills" },
    { label: "Code", id: "code" },
    { label: "Contact", id: "contact" },
  ];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "auto" });
  };

  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          <div className="text-center md:text-left">
            <p className="font-display text-xl font-bold mb-2">Portfolio</p>
            <p className="text-sm text-muted-foreground">
              Building digital experiences with passion
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            {footerLinks.map((link) => (
              <Button
                key={link.id}
                variant="ghost"
                size="sm"
                onClick={() => scrollToSection(link.id)}
                data-testid={`link-footer-${link.id}`}
              >
                {link.label}
              </Button>
            ))}
          </div>

          <Button
            size="icon"
            variant="outline"
            onClick={scrollToTop}
            data-testid="button-back-to-top"
          >
            <ArrowUp className="w-5 h-5" />
          </Button>
        </div>

        <div className="text-center text-sm text-muted-foreground border-t border-border pt-8">
          <p>&copy; {currentYear} Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
