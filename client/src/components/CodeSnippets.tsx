import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const codeExamples = [
  {
    id: "1",
    title: "React Custom Hook",
    description: "A custom hook for managing form state with validation",
    language: "TypeScript",
    code: `const useForm = <T,>(initialValues: T) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleChange = (name: keyof T, value: any) => {
    setValues(prev => ({ ...prev, [name]: value }));
  };

  return { values, errors, handleChange };
};`,
  },
  {
    id: "2",
    title: "API Route Handler",
    description: "Express middleware for authentication and error handling",
    language: "JavaScript",
    code: `app.post('/api/auth', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findByEmail(email);
    
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    
    const token = jwt.sign({ id: user.id }, SECRET);
    res.json({ token, user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});`,
  },
  {
    id: "3",
    title: "Tailwind Animation",
    description: "Custom animation configuration for smooth transitions",
    language: "CSS",
    code: `@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeInUp {
  animation: fadeInUp 0.6s ease-out;
}`,
  },
];

export default function CodeSnippets() {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const { toast } = useToast();

  const copyCode = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    toast({
      title: "Copied!",
      description: "Code snippet copied to clipboard",
    });
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="code" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-4">
          Code Snippets
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Reusable code examples and utilities from my projects.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {codeExamples.map((example) => (
            <Card key={example.id} className="overflow-hidden" data-testid={`card-snippet-${example.id}`}>
              <div className="p-6 border-b border-border">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-display text-xl font-bold mb-1" data-testid={`text-snippet-title-${example.id}`}>
                      {example.title}
                    </h3>
                    <p className="text-sm text-muted-foreground" data-testid={`text-snippet-desc-${example.id}`}>
                      {example.description}
                    </p>
                  </div>
                  <Badge variant="secondary" data-testid={`badge-language-${example.language.toLowerCase()}`}>
                    {example.language}
                  </Badge>
                </div>
              </div>
              <div className="relative bg-muted/50">
                <Button
                  size="icon"
                  variant="ghost"
                  className="absolute top-2 right-2 z-10"
                  onClick={() => copyCode(example.code, example.id)}
                  data-testid={`button-copy-${example.id}`}
                >
                  {copiedId === example.id ? (
                    <Check className="w-4 h-4 text-green-500" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </Button>
                <pre className="p-6 overflow-x-auto">
                  <code className="font-mono text-sm" data-testid={`code-snippet-${example.id}`}>
                    {example.code}
                  </code>
                </pre>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
