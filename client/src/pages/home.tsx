import Navigation from "@/components/navigation";
import EnhancedHero from "@/components/enhanced-hero";
import AuthorNote from "@/components/author-note";
import StatisticsSection from "@/components/statistics-section";
import GiftednessSection from "@/components/giftedness-section";
import TalentDevelopmentMap from "@/components/talent-development-map";
import CognitiveProfiles from "@/components/cognitive-profiles";
import NeurologicalEvidence from "@/components/neurological-evidence";
import InteractiveBrainMap from "@/components/interactive-brain-map";
import BrainNetworkMap from "@/components/brain-network-map";
import ResearchMethodology from "@/components/research-methodology";
import ComprehensiveStatistics from "@/components/comprehensive-statistics";
import ScientificTimeline from "@/components/scientific-timeline";
import GlobalStatistics from "@/components/global-statistics";
import IntelligenceTheories from "@/components/intelligence-theories";
import PsychiatrySection from "@/components/psychiatry-section";
import LongitudinalOutcomes from "@/components/longitudinal-outcomes";
import AdvancedAssessment from "@/components/advanced-assessment";
import EvaluationSection from "@/components/evaluation-section";
import EvaluationFlowMap from "@/components/evaluation-flow-map";
import ResourcesSection from "@/components/resources-section";
import MythsSection from "@/components/myths-section";
import FaqSection from "@/components/faq-section";
import BibliographySection from "@/components/bibliography-section";
import Footer from "@/components/footer";
import { useLanguage } from "@/contexts/language-context";

export default function Home() {
  const { lang } = useLanguage();

  const legalNotice = lang === 'es'
    ? {
        title: "Aviso Legal y Médico",
        p1: "La información presentada en este sitio web es únicamente con fines educativos e informativos.",
        p2: "No constituye asesoramiento médico, psicológico o diagnóstico profesional. Los cuestionarios y evaluaciones proporcionados son herramientas orientativas y no reemplazan una evaluación profesional completa.",
        p3: "Para una identificación o evaluación individual, consulte a un profesional cualificado que utilice instrumentos apropiados, varias fuentes de información y criterios acordes con su contexto educativo.",
        p4: "Este sitio web no se hace responsable de ninguna decisión tomada basándose en la información aquí presentada.",
      }
    : {
        title: "Legal and Medical Notice",
        p1: "The information presented on this website is for educational and informational purposes only.",
        p2: "It does not constitute medical, psychological, or professional diagnostic advice. The questionnaires and assessments provided are guidance tools and do not replace a full professional evaluation.",
        p3: "For individual identification or assessment, consult a qualified professional who uses appropriate instruments, multiple sources of information, and criteria suited to the educational context.",
        p4: "This website is not responsible for any decision made based on the information presented here.",
      };

  return (
    <div className="min-h-screen bg-white">
      <a href="#main-content" className="skip-link">{lang === 'es' ? 'Saltar al contenido principal' : 'Skip to main content'}</a>
      <Navigation />
      <main id="main-content">
      <EnhancedHero />
      <AuthorNote />
      <StatisticsSection />
      <GiftednessSection />
      <TalentDevelopmentMap />
      <CognitiveProfiles />
      <NeurologicalEvidence />
      <InteractiveBrainMap />
      <BrainNetworkMap />
      <ResearchMethodology />
      <ComprehensiveStatistics />
      <ScientificTimeline />
      <GlobalStatistics />
      <IntelligenceTheories />
      <PsychiatrySection />
      <LongitudinalOutcomes />
      <AdvancedAssessment />
      <EvaluationSection />
      <EvaluationFlowMap />
      <ResourcesSection />
      <MythsSection />
      <FaqSection />
      <BibliographySection />

      {/* Aviso Legal */}
      <section className="py-16 bg-yellow-50 border-y border-yellow-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-yellow-800 mb-4">{legalNotice.title}</h2>
            <div className="max-w-4xl mx-auto text-yellow-700 space-y-4">
              <p className="text-lg"><strong>{legalNotice.p1}</strong></p>
              <p>{legalNotice.p2}</p>
              <p>{legalNotice.p3}</p>
              <p className="text-sm font-semibold">{legalNotice.p4}</p>
            </div>
          </div>
        </div>
      </section>
      </main>

      <Footer />
    </div>
  );
}
