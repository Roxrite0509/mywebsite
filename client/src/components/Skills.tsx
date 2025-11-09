import { Card } from "@/components/ui/card";
import { Code2, Database, Palette, Wrench } from "lucide-react";

const skillCategories = [
  {
    name: "AI/ML",
    icon: Code2,
    skills: ["Python", "XGBoost", "Scikit-learn", "YOLO", "LLM Integration", "Computer Vision"],
  },
  {
    name: "Full Stack",
    icon: Database,
    skills: ["React", "Node.js", "JavaScript", "HTML/CSS", "Firebase", "IoT Hub"],
  },
  {
    name: "IoT & Robotics",
    icon: Wrench,
    skills: ["Raspberry Pi", "Arduino", "Sensor Integration", "Control Systems", "Solar Power"],
  },
  {
    name: "Research & Data",
    icon: Palette,
    skills: ["Data Analytics", "Pandas", "Research Methodology", "Safety Standards", "Chemistry"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-4">
          Skills & Technologies
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          A comprehensive toolkit for building modern web applications from design to deployment.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card key={index} className="p-6 hover-elevate" data-testid={`card-skill-${category.name.toLowerCase()}`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-md bg-primary/10">
                    <Icon className="w-6 h-6 text-primary" data-testid={`icon-skill-${category.name.toLowerCase()}`} />
                  </div>
                  <h3 className="font-display text-xl font-bold">{category.name}</h3>
                </div>
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li
                      key={skillIndex}
                      className="text-sm text-muted-foreground"
                      data-testid={`text-skill-${skill.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      • {skill}
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
