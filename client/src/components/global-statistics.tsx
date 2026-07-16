import { Card, CardContent } from "@/components/ui/card";
import { Globe, Users, TrendingUp, BookOpen } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { useLanguage } from "@/contexts/language-context";

export default function GlobalStatistics() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });
  const { lang } = useLanguage();

  const globalData = lang === 'es'
    ? [
        { country: "Estados Unidos", identification: "Varía por estado y distrito", programs: "Programas estatales, distritales y universitarios", investment: "Sin sistema nacional único", outcomes: "Los resultados dependen del programa y la población" },
        { country: "Singapur", identification: "Criterios definidos por el sistema educativo", programs: "Programas y políticas que evolucionan con el tiempo", investment: "Contexto nacional específico", outcomes: "No comparable directamente con otros países" },
        { country: "Israel", identification: "Criterios nacionales y programas selectivos", programs: "Opciones especializadas en distintos niveles", investment: "Contexto nacional específico", outcomes: "Requiere fuentes por programa y cohorte" },
        { country: "Australia", identification: "Varía por estado y territorio", programs: "Políticas y programas estatales diversos", investment: "Sin criterio nacional uniforme", outcomes: "Acceso y resultados heterogéneos" },
      ]
    : [
        { country: "United States", identification: "Varies by state and district", programs: "State, district, and university programs", investment: "No single national system", outcomes: "Outcomes depend on program and population" },
        { country: "Singapore", identification: "Criteria defined by the education system", programs: "Programs and policies that evolve over time", investment: "Country-specific context", outcomes: "Not directly comparable with other countries" },
        { country: "Israel", identification: "National criteria and selective programs", programs: "Specialized options at different levels", investment: "Country-specific context", outcomes: "Requires program- and cohort-level sources" },
        { country: "Australia", identification: "Varies by state and territory", programs: "Diverse state policies and programs", investment: "No uniform national criterion", outcomes: "Heterogeneous access and outcomes" },
      ];

  const culturalFactors = lang === 'es'
    ? [
        { icon: Globe, title: "Factores Culturales", data: "Variación significativa entre culturas en la identificación y reconocimiento de la superdotación", color: "text-blue-500" },
        { icon: Users, title: "Influencia Socioeconómica", data: "Mayor tasa de identificación en niveles socioeconómicos más altos — sesgo documentado en la literatura", color: "text-green-500" },
        { icon: TrendingUp, title: "Seguimiento Longitudinal", data: "Algunas cohortes muestran asociaciones entre fortalezas tempranas y logros posteriores, con límites de selección y contexto", color: "text-purple-500" },
        { icon: BookOpen, title: "Acceso Educativo", data: "La disponibilidad de identificación y educación diferenciada cambia ampliamente entre sistemas y poblaciones", color: "text-orange-500" },
      ]
    : [
        { icon: Globe, title: "Cultural Factors", data: "Significant variation across cultures in the identification and recognition of giftedness", color: "text-blue-500" },
        { icon: Users, title: "Socioeconomic Influence", data: "Higher identification rate in higher socioeconomic levels — bias documented in the literature", color: "text-green-500" },
        { icon: TrendingUp, title: "Longitudinal Follow-up", data: "Some cohorts show associations between early strengths and later accomplishment, with selection and context limitations", color: "text-purple-500" },
        { icon: BookOpen, title: "Educational Access", data: "Availability of identification and differentiated education varies widely across systems and populations", color: "text-orange-500" },
      ];

  const underrepresentation = lang === 'es'
    ? [
        { group: "Estudiantes latinos en EE. UU.", note: "Subrepresentación documentada en distintos sistemas y periodos; la magnitud depende del lugar y del criterio", gap: "Brecha contextual" },
        { group: "Estudiantes afroamericanos en EE. UU.", note: "Subrepresentación documentada; los procedimientos universales y multimétodo pueden cambiar el acceso", gap: "Brecha contextual" },
        { group: "Nivel Socioeconómico Bajo", note: "Menor acceso a recursos diagnósticos y programas especializados", gap: "Inequidad sistémica" },
        { group: "Estudiantes multilingües", note: "Una evaluación que confunde dominio del idioma con capacidad puede reducir la identificación", gap: "Barrera de medición" },
      ]
    : [
        { group: "Latino students in the U.S.", note: "Underrepresentation has been documented across systems and periods; its size depends on location and criteria", gap: "Contextual gap" },
        { group: "African American students in the U.S.", note: "Underrepresentation has been documented; universal and multi-method procedures can change access", gap: "Contextual gap" },
        { group: "Low Socioeconomic Level", note: "Less access to diagnostic resources and specialized programs", gap: "Systemic inequity" },
        { group: "Multilingual learners", note: "Assessment that confuses language proficiency with ability can reduce identification", gap: "Measurement barrier" },
      ];

  const labels = lang === 'es'
    ? { title: "Un mapa mundial sin un censo mundial", subtitle: "Comparar sistemas exige reconocer primero que no identifican lo mismo ni con las mismas oportunidades", note: "Las estimaciones varían por región debido a diferencias en identificación y sistemas educativos", idLabel: "Identificación:", progLabel: "Programas:", invLabel: "Inversión:", outLabel: "Resultados:", underTitle: "Patrones de subrepresentación que exigen contexto", underNote: "Buena parte de esta evidencia procede de Estados Unidos; no debe exportarse como una cifra universal", context: "Contexto:", contextText: "No existe un censo global de superdotación por región con datos fiables. Las estimaciones varían por metodología, criterios de identificación y sistema educativo de cada país." }
    : { title: "A world map without a world census", subtitle: "Comparing systems begins by recognizing that they do not identify the same thing or offer the same opportunities", note: "Estimates vary by region due to differences in identification and educational systems", idLabel: "Identification:", progLabel: "Programs:", invLabel: "Investment:", outLabel: "Outcomes:", underTitle: "Underrepresentation patterns that require context", underNote: "Much of this evidence comes from the United States and should not be exported as a universal figure", context: "Context:", contextText: "There is no reliable global census of giftedness by region. Estimates vary by methodology, identification criteria, and each country's educational system." };

  return (
    <section ref={ref} className={`py-20 bg-gradient-to-br from-indigo-50 to-purple-50 section-fade ${isVisible ? 'visible' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-dark-slate mb-4">{labels.title}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{labels.subtitle}</p>
          <p className="text-sm text-gray-400 mt-2 italic">{labels.note}</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {globalData.map((country, index) => (
            <Card key={index} className="card-hover">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-dark-slate mb-4">{country.country}</h3>
                <div className="space-y-3">
                  <div className="flex items-start"><span className="text-gray-500 text-sm w-36 flex-shrink-0">{labels.idLabel}</span><span className="text-primary font-semibold text-sm">{country.identification}</span></div>
                  <div className="flex items-start"><span className="text-gray-500 text-sm w-36 flex-shrink-0">{labels.progLabel}</span><span className="text-sky-blue font-medium text-sm">{country.programs}</span></div>
                  <div className="flex items-start"><span className="text-gray-500 text-sm w-36 flex-shrink-0">{labels.invLabel}</span><span className="text-green-600 text-sm">{country.investment}</span></div>
                  <div className="flex items-start"><span className="text-gray-500 text-sm w-36 flex-shrink-0">{labels.outLabel}</span><span className="text-gray-700 text-sm">{country.outcomes}</span></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {culturalFactors.map((factor, index) => (
            <Card key={index} className="card-hover">
              <CardContent className="p-6 text-center">
                <factor.icon className={`${factor.color} mx-auto mb-4`} size={40} />
                <h3 className="font-semibold text-dark-slate mb-2">{factor.title}</h3>
                <p className="text-gray-600 text-sm">{factor.data}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <Card className="shadow-lg">
          <CardContent className="p-8">
            <h3 className="text-2xl font-semibold text-dark-slate mb-6 text-center">{labels.underTitle}</h3>
            <p className="text-center text-gray-500 mb-8 text-sm italic">{labels.underNote}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {underrepresentation.map((group, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-dark-slate">{group.group}</h4>
                    <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded">{group.gap}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{group.note}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 bg-blue-50 p-4 rounded-lg"><p className="text-sm text-blue-800"><strong>{labels.context}</strong> {labels.contextText}</p></div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
