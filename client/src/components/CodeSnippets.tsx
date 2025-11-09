import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const codeExamples = [
  {
    id: "1",
    title: "QHI Metric Calculation",
    description: "Quantifiable Hallucination Index for Medical AI Models",
    language: "Python",
    code: `def calculate_qhi(confidence, risk_score, causal_violation):
    """
    QHI = Confidence × Risk × Causal Violation Score
    Quantifies AI hallucination severity for clinical deployment
    """
    qhi = confidence * risk_score * causal_violation
    
    # Standardized safety thresholds
    if qhi < 0.3:
        return {"qhi": qhi, "status": "safe"}
    elif qhi < 0.7:
        return {"qhi": qhi, "status": "review_required"}
    else:
        return {"qhi": qhi, "status": "unsafe"}`,
  },
  {
    id: "2",
    title: "Smart Triage Routing",
    description: "MedRide's intelligent hospital routing algorithm",
    language: "JavaScript",
    code: `async function smartTriageRoute(patientData, location) {
  // Get nearby hospitals with real-time bed availability
  const hospitals = await getAvailableHospitals(location);
  
  // LLM-based severity assessment
  const severity = await assessSeverity(patientData);
  
  // Match patient to optimal hospital
  const bestMatch = hospitals
    .filter(h => h.capabilities.includes(severity.required))
    .sort((a, b) => 
      calculateScore(a, severity) - calculateScore(b, severity)
    )[0];
  
  return { hospital: bestMatch, eta: calculateETA(location, bestMatch) };
}`,
  },
  {
    id: "3",
    title: "XGBoost Model Training",
    description: "91% accuracy DDT susceptibility prediction for DRDO",
    language: "Python",
    code: `import xgboost as xgb
from sklearn.model_selection import train_test_split

# Train XGBoost for propellant DDT prediction
X_train, X_test, y_train, y_test = train_test_split(
    features, labels, test_size=0.2, random_state=42
)

model = xgb.XGBClassifier(
    max_depth=6,
    learning_rate=0.1,
    n_estimators=100,
    objective='binary:logistic'
)

model.fit(X_train, y_train)
accuracy = model.score(X_test, y_test)  # 91% achieved
print(f"Model Accuracy: {accuracy:.2%}")`,
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
