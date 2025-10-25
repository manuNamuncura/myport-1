import { Code2, Lightbulb, Rocket } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Desarrollo Fullstack",
      description: "Experiencia en frontend y backend con tecnologías modernas",
    },
    {
      icon: Lightbulb,
      title: "Aprendizaje Continuo",
      description: "Siempre buscando nuevas tecnologías y mejores prácticas",
    },
    {
      icon: Rocket,
      title: "Orientado a Resultados",
      description: "Enfocado en crear soluciones eficientes y escalables",
    },
  ];

  return (
    <section id="about" className="py-20 px-4 bg-linear-to-b from-background to-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom duration-700">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-linear-to-r from-primary to-accent bg-clip-text">
            Sobre mí
          </h2>
          <div className="w-20 h-1 bg-linear-to-r from-primary to-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {highlights.map((item, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-accent/50 animate-in fade-in slide-in-from-bottom"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <item.icon className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </Card>
          ))}
        </div>

        <div className="max-w-3xl mx-auto text-center space-y-4 animate-in fade-in slide-in-from-bottom duration-700 delay-300">
          <p className="text-lg text-foreground/90 leading-relaxed">
            Soy estudiante de Ingeniería en Sistemas de Información con una gran pasión por el
            desarrollo de software. Me especializo en crear aplicaciones web robustas y escalables
            utilizando las últimas tecnologías del mercado.
          </p>
          <p className="text-lg text-foreground/90 leading-relaxed">
            Mi objetivo es continuar creciendo como desarrollador, enfrentando nuevos desafíos y
            contribuyendo a proyectos que generen un impacto positivo. Disfruto trabajar en equipo
            y estoy siempre dispuesto a aprender de cada experiencia.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
