import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="inicio" 
      className="relative py-20 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, var(--medical-blue) 0%, var(--deep-blue) 100%)'
      }}
    >
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080")'
        }}
      />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Psicología y <span className="text-sky-blue">Superdotación</span>
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto">
            Plataforma educativa especializada en evidencia científica sobre superdotación intelectual, 
            neurociencia cognitiva y desarrollo del potencial excepcional
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => scrollToSection('recursos')}
              className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Explorar Recursos
            </Button>
            <Button 
              onClick={() => scrollToSection('evaluacion')}
              variant="outline"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors"
            >
              Realizar Evaluación
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
