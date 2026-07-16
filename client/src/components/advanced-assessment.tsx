import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Brain, Target, CheckCircle, AlertCircle, BookOpen } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { useLanguage } from "@/contexts/language-context";

export default function AdvancedAssessment() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });
  const { lang } = useLanguage();
  const [currentTest, setCurrentTest] = useState(0);
  const [responses, setResponses] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);

  const advancedQuestions = lang === 'es'
    ? [
        { id: 1, type: "Razonamiento Abstracto", question: "¿Cuál es el siguiente número en la secuencia: 2, 6, 18, 54, ...?", options: ["162", "108", "216", "324"], correct: "162", explanation: "Cada número se multiplica por 3: 2×3=6, 6×3=18, 18×3=54, 54×3=162" },
        { id: 2, type: "Analogías Verbales", question: "LIBRO es a BIBLIOTECA como CUADRO es a:", options: ["Marco", "Museo", "Pintor", "Color"], correct: "Museo", explanation: "La relación es de contenido a contenedor especializado" },
        { id: 3, type: "Pensamiento Crítico", question: "Si todos los A son B, y algunos B son C, ¿qué podemos concluir definitivamente?", options: ["Todos los A son C", "Algunos A son C", "Ningún A es C", "No se puede determinar"], correct: "No se puede determinar", explanation: "La lógica formal no permite esta conclusión sin información adicional" },
        { id: 4, type: "Medición", question: "¿Por qué una puntuación de CI debe interpretarse con un intervalo de confianza?", options: ["Porque toda medición tiene error", "Porque el CI cambia cada hora", "Porque elimina el contexto", "Porque convierte el resultado en diagnóstico"], correct: "Porque toda medición tiene error", explanation: "Las puntuaciones estiman una capacidad con incertidumbre; no son valores perfectamente exactos." },
        { id: 5, type: "Conceptos", question: "¿Cuál afirmación describe mejor la identificación de altas capacidades?", options: ["Existe una definición universal", "Depende del modelo y del contexto", "El DSM-5-TR la diagnostica", "Una prueba online es suficiente"], correct: "Depende del modelo y del contexto", explanation: "Los criterios varían entre modelos y sistemas; una evaluación responsable integra varias fuentes de información." },
      ]
    : [
        { id: 1, type: "Abstract Reasoning", question: "What is the next number in the sequence: 2, 6, 18, 54, ...?", options: ["162", "108", "216", "324"], correct: "162", explanation: "Each number is multiplied by 3: 2×3=6, 6×3=18, 18×3=54, 54×3=162" },
        { id: 2, type: "Verbal Analogies", question: "BOOK is to LIBRARY as PAINTING is to:", options: ["Frame", "Museum", "Painter", "Color"], correct: "Museum", explanation: "The relationship is content to specialized container" },
        { id: 3, type: "Critical Thinking", question: "If all A are B, and some B are C, what can we definitely conclude?", options: ["All A are C", "Some A are C", "No A are C", "Cannot be determined"], correct: "Cannot be determined", explanation: "Formal logic does not allow this conclusion without additional information" },
        { id: 4, type: "Measurement", question: "Why should an IQ score be interpreted with a confidence interval?", options: ["Because every measurement has error", "Because IQ changes every hour", "Because it removes context", "Because it turns the result into a diagnosis"], correct: "Because every measurement has error", explanation: "Scores estimate an ability with uncertainty; they are not perfectly exact values." },
        { id: 5, type: "Concepts", question: "Which statement best describes high-ability identification?", options: ["There is one universal definition", "It depends on the model and context", "The DSM-5-TR diagnoses it", "One online test is enough"], correct: "It depends on the model and context", explanation: "Criteria vary across models and systems; responsible assessment integrates several sources of information." },
      ];

  const assessmentTools = lang === 'es'
    ? [
        { icon: Brain, category: "Evaluación Cognitiva", tools: [{ name: "WAIS-IV", description: "Escala Wechsler para Adultos", age: "16–90 años", duration: "~90 min" }, { name: "Stanford-Binet 5", description: "Evaluación comprehensiva de inteligencia", age: "2–85 años", duration: "45–75 min" }], bgClass: "bg-blue-100", iconClass: "text-blue-500" },
        { icon: Target, category: "Evaluación Específica", tools: [{ name: "Raven APM", description: "Matrices Progresivas Avanzadas", age: "11+ años", duration: "~40 min" }, { name: "TTCT", description: "Test de Pensamiento Creativo de Torrance", age: "5+ años", duration: "~45 min" }], bgClass: "bg-purple-100", iconClass: "text-purple-500" },
        { icon: BookOpen, category: "Contexto educativo y socioemocional", tools: [{ name: "Escalas de Renzulli", description: "Escalas de observación que complementan otras evidencias", age: "Según versión", duration: "Variable" }, { name: "Entrevista y escalas validadas", description: "Historia educativa, bienestar, oportunidades y necesidades de apoyo", age: "Según instrumento", duration: "Variable" }], bgClass: "bg-green-100", iconClass: "text-green-500" },
      ]
    : [
        { icon: Brain, category: "Cognitive Assessment", tools: [{ name: "WAIS-IV", description: "Wechsler Adult Intelligence Scale", age: "16–90 years", duration: "~90 min" }, { name: "Stanford-Binet 5", description: "Comprehensive intelligence evaluation", age: "2–85 years", duration: "45–75 min" }], bgClass: "bg-blue-100", iconClass: "text-blue-500" },
        { icon: Target, category: "Specific Assessment", tools: [{ name: "Raven APM", description: "Advanced Progressive Matrices", age: "11+ years", duration: "~40 min" }, { name: "TTCT", description: "Torrance Tests of Creative Thinking", age: "5+ years", duration: "~45 min" }], bgClass: "bg-purple-100", iconClass: "text-purple-500" },
        { icon: BookOpen, category: "Educational and socioemotional context", tools: [{ name: "Renzulli Scales", description: "Observation scales that complement other evidence", age: "By version", duration: "Variable" }, { name: "Interview and validated scales", description: "Educational history, wellbeing, opportunities, and support needs", age: "By instrument", duration: "Variable" }], bgClass: "bg-green-100", iconClass: "text-green-500" },
      ];

  const interpretationFramework = lang === 'es'
    ? [
        { score: "≈ CI 130–139", classification: "Rango descriptivo", prevalence: "Depende de la prueba", characteristics: "Una puntuación alta no describe por sí sola el perfil completo ni las necesidades", interventions: ["Decidir según necesidades", "Considerar contexto"] },
        { score: "≈ CI 140–149", classification: "Rango descriptivo alto", prevalence: "Estimación teórica", characteristics: "La incertidumbre de medición y las diferencias entre pruebas deben informarse", interventions: ["Plan individualizado", "Revisar dominios"] },
        { score: "≈ CI 150+", classification: "Extremo de la escala", prevalence: "Muy infrecuente", characteristics: "Efectos de techo y menor precisión dificultan comparaciones exactas", interventions: ["Evaluación especializada", "No decidir solo por CI"] },
      ]
    : [
        { score: "≈ IQ 130–139", classification: "Descriptive range", prevalence: "Depends on the test", characteristics: "A high score alone does not describe the full profile or support needs", interventions: ["Decide by need", "Consider context"] },
        { score: "≈ IQ 140–149", classification: "High descriptive range", prevalence: "Theoretical estimate", characteristics: "Measurement uncertainty and test differences should be reported", interventions: ["Individualized plan", "Review domains"] },
        { score: "≈ IQ 150+", classification: "Scale extreme", prevalence: "Very uncommon", characteristics: "Ceiling effects and lower precision make exact comparisons difficult", interventions: ["Specialist assessment", "Do not decide from IQ alone"] },
      ];

  const labels = lang === 'es'
    ? { title: "Actividad interactiva de aprendizaje", subtitle: "Cinco preguntas para repasar razonamiento y conceptos de medición — no es un test de capacidad", disclaimerShort: "No identifica ni descarta superdotación y su puntuación no tiene significado clínico o psicométrico.", resultsTitle: "Resultado de la actividad", correctAnswers: "respuestas correctas de contenido", yourAnswer: "Tu respuesta:", noAnswer: "(sin respuesta)", correctAnswer: "Correcta:", warningNote: "Esta actividad no identifica ni descarta superdotación. Solo comprueba las respuestas a cinco ejercicios educativos y no debe usarse para tomar decisiones personales o escolares.", warningLabel: "Aviso:", restart: "Reiniciar actividad", prev: "← Anterior", next: "Siguiente →", seeResults: "Ver respuestas", ageLabel: "Edad orientativa:", durationLabel: "Duración aproximada:", frameworkTitle: "Cómo interpretar rangos psicométricos", frameworkNote: "Ejemplos descriptivos, no categorías clínicas universales; los límites y etiquetas cambian entre pruebas y autores", iqRange: "Rango aproximado", estimatedPrevalence: "Frecuencia:", dsmNote: "La superdotación no es un trastorno ni un diagnóstico del DSM-5-TR. Los rangos mostrados son convenciones descriptivas empleadas en algunos contextos, no criterios diagnósticos universales.", dsmLabel: "Distinción importante:" }
    : { title: "Interactive learning activity", subtitle: "Five questions to review reasoning and measurement concepts — not an ability test", disclaimerShort: "It neither identifies nor rules out giftedness, and its score has no clinical or psychometric meaning.", resultsTitle: "Activity result", correctAnswers: "correct content answers", yourAnswer: "Your answer:", noAnswer: "(no answer)", correctAnswer: "Correct:", warningNote: "This activity neither identifies nor rules out giftedness. It only checks answers to five educational exercises and must not be used for personal or school decisions.", warningLabel: "Notice:", restart: "Restart activity", prev: "← Previous", next: "Next →", seeResults: "See answers", ageLabel: "Indicative age:", durationLabel: "Approximate duration:", frameworkTitle: "How to interpret psychometric ranges", frameworkNote: "Descriptive examples, not universal clinical categories; boundaries and labels vary across tests and authors", iqRange: "Approximate range", estimatedPrevalence: "Frequency:", dsmNote: "Giftedness is not a disorder or DSM-5-TR diagnosis. The ranges shown are descriptive conventions used in some contexts, not universal diagnostic criteria.", dsmLabel: "Important distinction:" };

  const handleAnswer = (answer: string) => setResponses((prev) => ({ ...prev, [currentTest]: answer }));
  const handleNext = () => { if (currentTest < advancedQuestions.length - 1) setCurrentTest((p) => p + 1); else setShowResults(true); };
  const handlePrev = () => { if (currentTest > 0) setCurrentTest((p) => p - 1); };
  const correctCount = advancedQuestions.filter((q) => responses[q.id - 1] === q.correct).length;
  const currentQ = advancedQuestions[currentTest];

  return (
    <section id="evaluacion-avanzada" ref={ref} className={`py-20 bg-gradient-to-br from-slate-50 to-blue-50 section-fade ${isVisible ? 'visible' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{labels.title}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{labels.subtitle}</p>
          <p className="text-sm text-gray-500 mt-2 italic">{labels.disclaimerShort}</p>
        </div>
        <Card className="shadow-lg mb-16">
          <CardContent className="p-8">
            {!showResults ? (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex gap-2">
                    {advancedQuestions.map((_, i) => (
                      <div key={i} className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${i === currentTest ? 'bg-blue-600 text-white' : responses[i] !== undefined ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-600'}`}>{i + 1}</div>
                    ))}
                  </div>
                  <Badge variant="outline" className="text-gray-700 font-medium">{currentTest + 1} / {advancedQuestions.length}</Badge>
                </div>
                <div className="mb-6">
                  <Badge className="mb-3 bg-blue-100 text-blue-800">{currentQ.type}</Badge>
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">{currentQ.question}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {currentQ.options.map((option, i) => (
                      <button key={i} onClick={() => handleAnswer(option)} className={`p-4 border-2 rounded-xl text-left text-gray-900 font-medium transition-all duration-200 ${responses[currentTest] === option ? 'border-blue-600 bg-blue-50 text-blue-900' : 'border-gray-200 hover:border-blue-400 hover:bg-blue-50'}`}>{option}</button>
                    ))}
                  </div>
                </div>
                <div className="flex justify-between items-center mt-6">
                  <Button variant="outline" onClick={handlePrev} disabled={currentTest === 0} className="text-gray-700">{labels.prev}</Button>
                  <Button onClick={handleNext} disabled={responses[currentTest] === undefined} className="bg-blue-600 hover:bg-blue-700 text-white">{currentTest === advancedQuestions.length - 1 ? labels.seeResults : labels.next}</Button>
                </div>
              </div>
            ) : (
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">{labels.resultsTitle}</h3>
                <div className="text-center mb-8">
                  <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-blue-600 mb-2">{correctCount}/{advancedQuestions.length}</div>
                  <p className="text-gray-600 text-base sm:text-lg">{labels.correctAnswers}</p>
                </div>
                <div className="space-y-4 mb-8">
                  {advancedQuestions.map((q, i) => {
                    const userAns = responses[i];
                    const isCorrect = userAns === q.correct;
                    return (
                      <div key={i} className={`border-2 rounded-xl p-4 ${isCorrect ? 'border-green-400 bg-green-50' : 'border-red-300 bg-red-50'}`}>
                        <div className="flex items-start gap-3">
                          {isCorrect ? <CheckCircle className="text-green-600 mt-0.5 flex-shrink-0" size={20} /> : <AlertCircle className="text-red-500 mt-0.5 flex-shrink-0" size={20} />}
                          <div>
                            <p className="font-semibold text-gray-900 text-sm mb-1">{q.question}</p>
                            <p className="text-sm text-gray-700"><span className="font-medium">{labels.yourAnswer}</span>{' '}<span className={isCorrect ? 'text-green-700' : 'text-red-600'}>{userAns || labels.noAnswer}</span></p>
                            {!isCorrect && <p className="text-sm text-gray-700"><span className="font-medium">{labels.correctAnswer}</span>{' '}<span className="text-green-700">{q.correct}</span></p>}
                            <p className="text-xs text-gray-600 mt-1 italic">{q.explanation}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-6">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="text-yellow-600 mt-0.5 flex-shrink-0" size={18} />
                    <p className="text-sm text-yellow-800"><strong>{labels.warningLabel}</strong> {labels.warningNote}</p>
                  </div>
                </div>
                <div className="text-center">
                  <Button onClick={() => { setResponses({}); setCurrentTest(0); setShowResults(false); }} variant="outline" className="text-gray-700">{labels.restart}</Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {assessmentTools.map((tool, index) => (
            <Card key={index} className="shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className={`${tool.bgClass} w-12 h-12 rounded-lg flex items-center justify-center mr-3`}><tool.icon className={tool.iconClass} size={24} /></div>
                  <h3 className="text-lg font-semibold text-gray-900">{tool.category}</h3>
                </div>
                <div className="space-y-4">
                  {tool.tools.map((t, i) => (
                    <div key={i} className="border-l-4 border-blue-300 pl-4">
                      <h4 className="font-semibold text-gray-900 text-sm">{t.name}</h4>
                      <p className="text-gray-600 text-xs">{t.description}</p>
                      <p className="text-gray-500 text-xs mt-1">{labels.ageLabel} {t.age} · {labels.durationLabel} {t.duration}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <Card className="shadow-lg">
          <CardContent className="p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">{labels.frameworkTitle}</h3>
            <p className="text-center text-gray-500 text-sm mb-6 italic">{labels.frameworkNote}</p>
            <div className="space-y-4">
              {interpretationFramework.map((level, index) => (
                <div key={index} className="border rounded-xl p-4">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-start">
                    <div className="text-center"><div className="text-xl font-bold text-blue-700">{level.score}</div><p className="text-xs text-gray-500">{labels.iqRange}</p></div>
                    <div><h4 className="font-semibold text-gray-900">{level.classification}</h4><p className="text-sm text-gray-600">{labels.estimatedPrevalence} {level.prevalence}</p></div>
                    <div><p className="text-sm text-gray-700">{level.characteristics}</p></div>
                    <div className="flex flex-wrap gap-1">{level.interventions.map((iv, idx) => (<Badge key={idx} variant="outline" className="text-xs text-gray-700">{iv}</Badge>))}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 bg-blue-50 p-4 rounded-xl">
              <p className="text-sm text-blue-900"><strong>{labels.dsmLabel}</strong> {labels.dsmNote}</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
