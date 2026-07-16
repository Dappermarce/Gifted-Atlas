import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Compass, Scale, Users } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { useLanguage } from "@/contexts/language-context";

export default function LongitudinalOutcomes() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });
  const { lang } = useLanguage();

  const content = lang === "es"
    ? {
        title: "Lo que una vida completa le enseña a una prueba",
        subtitle: "Los estudios longitudinales permiten mirar décadas, pero no escribir destinos. Una cohorte revela patrones; una persona siempre conserva más variables de las que caben en una tabla.",
        studies: [
          {
            name: "Estudio de Terman",
            period: "Iniciado en 1921 · 1.528 participantes seleccionados",
            finding: "Mostró que muchos participantes tuvieron buena salud, educación y trayectorias profesionales diversas, cuestionando varios estereotipos de su época.",
            limit: "La muestra no representaba a toda la población: sus criterios, su contexto histórico y su composición social limitan la generalización.",
          },
          {
            name: "SMPY",
            period: "Iniciado en 1971 · más de 5.000 jóvenes identificados por razonamiento avanzado",
            finding: "El patrón de fortalezas cognitivas y los intereses tempranos se relacionó con elecciones educativas y logros posteriores en distintos campos.",
            limit: "Relación no significa destino. Oportunidades, motivación, educación y contexto también cambian la trayectoria.",
          },
          {
            name: "La lección común",
            period: "Décadas de seguimiento, contextos diferentes",
            finding: "La capacidad importa, pero funciona dentro de un sistema: familia, escuela, recursos, salud, cultura y posibilidades reales de aprender.",
            limit: "Estos estudios describen grupos. No sirven para predecir con certeza la vida de una persona ni para jerarquizar su valor.",
          },
        ],
        questionsTitle: "Cuatro preguntas que conviene llevar a cualquier estudio",
        questions: [
          { icon: Users, title: "¿Quiénes entraron?", text: "Los criterios de selección pueden dejar fuera perfiles, culturas y oportunidades diferentes." },
          { icon: Scale, title: "¿Con quién se compararon?", text: "Sin un grupo adecuado, una diferencia puede parecer más sólida de lo que realmente es." },
          { icon: Compass, title: "¿Qué cambió durante los años?", text: "Escuela, economía, acceso y expectativas sociales también participan en el resultado." },
          { icon: BookOpen, title: "¿Qué se midió como logro?", text: "Publicaciones o títulos no agotan bienestar, creatividad, vínculos ni contribución social." },
        ],
        conclusionTitle: "La conclusión menos espectacular —y más útil",
        conclusion: "No existe una biografía automática de las altas capacidades. Hay potenciales, intereses, obstáculos y oportunidades que interactúan. La evidencia ayuda a tomar mejores decisiones educativas; no reemplaza escuchar a la persona.",
        sources: "Fuentes clave: Lubinski y Benbow (SMPY); Holahan y Sears (seguimiento de Terman). Consulta la bibliografía del atlas para DOI y referencias completas.",
      }
    : {
        title: "What a whole life can teach a test",
        subtitle: "Longitudinal studies can observe decades, but they cannot write destinies. A cohort reveals patterns; a person always retains more variables than a table can hold.",
        studies: [
          {
            name: "Terman Study",
            period: "Started in 1921 · 1,528 selected participants",
            finding: "It showed that many participants experienced good health, education, and varied professional paths, challenging several stereotypes of its time.",
            limit: "The sample did not represent the whole population: its criteria, historical setting, and social composition limit generalization.",
          },
          {
            name: "SMPY",
            period: "Started in 1971 · more than 5,000 youths identified through advanced reasoning",
            finding: "Patterns of cognitive strengths and early interests were associated with later educational choices and accomplishments across fields.",
            limit: "Association is not destiny. Opportunity, motivation, education, and context also shape a trajectory.",
          },
          {
            name: "The shared lesson",
            period: "Decades of follow-up, different contexts",
            finding: "Ability matters, but it operates within a system: family, school, resources, health, culture, and real opportunities to learn.",
            limit: "These studies describe groups. They cannot predict one person's life with certainty or rank anyone's worth.",
          },
        ],
        questionsTitle: "Four questions worth taking to any study",
        questions: [
          { icon: Users, title: "Who was included?", text: "Selection criteria can leave out different profiles, cultures, and opportunity structures." },
          { icon: Scale, title: "Who was the comparison group?", text: "Without an appropriate comparison, a difference can look more robust than it is." },
          { icon: Compass, title: "What changed over the years?", text: "Schooling, economics, access, and social expectations also contribute to outcomes." },
          { icon: BookOpen, title: "What counted as achievement?", text: "Publications and degrees do not exhaust well-being, creativity, relationships, or social contribution." },
        ],
        conclusionTitle: "The less spectacular—and more useful—conclusion",
        conclusion: "There is no automatic biography of giftedness. Potentials, interests, obstacles, and opportunities interact. Evidence can improve educational decisions; it does not replace listening to the person.",
        sources: "Key sources: Lubinski and Benbow (SMPY); Holahan and Sears (Terman follow-up). See the atlas bibliography for DOI links and full references.",
      };

  return (
    <section ref={ref} className={`py-20 bg-gradient-to-br from-green-50 to-teal-50 section-fade ${isVisible ? "visible" : ""}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-dark-slate mb-4">{content.title}</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">{content.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-14">
          {content.studies.map((study) => (
            <Card key={study.name} className="card-hover h-full">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-dark-slate">{study.name}</h3>
                <p className="mt-2 text-sm font-medium text-emerald-700">{study.period}</p>
                <p className="mt-4 text-gray-700 leading-7">{study.finding}</p>
                <div className="mt-5 rounded-xl bg-amber-50 border border-amber-100 p-4">
                  <p className="text-sm text-amber-900"><strong>{lang === "es" ? "Límite:" : "Limit:"}</strong> {study.limit}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <h3 className="text-2xl font-semibold text-dark-slate text-center mb-7">{content.questionsTitle}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {content.questions.map((question) => {
            const Icon = question.icon;
            return (
              <Card key={question.title} className="h-full">
                <CardContent className="p-6">
                  <Icon aria-hidden="true" className="text-teal-600 mb-4" size={28} />
                  <h4 className="font-semibold text-dark-slate">{question.title}</h4>
                  <p className="mt-2 text-sm leading-6 text-gray-600">{question.text}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="rounded-3xl bg-slate-900 text-white p-8 sm:p-10">
          <h3 className="text-2xl font-semibold">{content.conclusionTitle}</h3>
          <p className="mt-4 text-slate-200 text-lg leading-8">{content.conclusion}</p>
          <p className="mt-5 text-xs leading-5 text-slate-400">{content.sources}</p>
        </div>
      </div>
    </section>
  );
}
