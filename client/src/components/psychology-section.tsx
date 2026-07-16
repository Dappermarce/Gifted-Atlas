import { Card, CardContent } from "@/components/ui/card";
import { 
  Baby, 
  Lightbulb, 
  GraduationCap, 
  Heart, 
  TrendingUp, 
  FlaskConical 
} from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { psychologyBranches } from "@/data/psychology-data";

export default function PsychologySection() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  const iconMap = {
    Baby,
    Lightbulb,
    GraduationCap,
    Heart,
    TrendingUp,
    FlaskConical
  };

  return (
    <section 
      id="psicologia" 
      ref={ref}
      className={`py-20 bg-light-gray section-fade ${isVisible ? 'visible' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-dark-slate mb-4">Ramas de la Psicología</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explora las diferentes áreas especializadas de la ciencia psicológica
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {psychologyBranches.map((branch, index) => {
            const IconComponent = iconMap[branch.icon as keyof typeof iconMap];
            return (
              <Card key={index} className="card-hover">
                <CardContent className="p-6">
                  <div className={`bg-${branch.color}/10 w-16 h-16 rounded-lg flex items-center justify-center mb-4`}>
                    <IconComponent className={`text-${branch.color}`} size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-dark-slate mb-3">{branch.title}</h3>
                  <p className="text-gray-600 mb-4">{branch.description}</p>
                  <div className="text-sm text-gray-500">
                    <p><strong>Pioneros:</strong> {branch.pioneers}</p>
                    <p><strong>Aplicaciones:</strong> {branch.applications}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
