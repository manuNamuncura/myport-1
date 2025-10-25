import { Button } from "./ui/button";
import { Download, Mail } from "lucide-react";
import heroImage from "@/assets/manuport1.jpg"

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-20 px-4 bg-linear-to-b from-background to-secondary/30"
    >
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 opacity-0 animate-fade-in">
            <div className="space-y-2">
              <p className="text-accent font-medium">Hola soy </p>
              <h1 className="text-5xl md:text-6xl font-bold bg-linear-to-r from-primary to-accent bg-clip-text">
                Manuel Namuncurá 
              </h1>
            </div>
            <h2 className="text-2xl md:text-3xl text-foreground/80 font-medium">
              Desarrollador
            </h2>
            <p className="text-lg text-muted-foreground">
              NestJS • Angular • SpringBoot • React
            </p>
            <p className="text-muted-foreground max-w-lg">
              Estudiante de Ingeniería en Sistemas de Información, apasionado por crear
              soluciones tecnológicas innovadoras y escalables.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                size="lg"
                className="bg-linear-to-r from-primary to-accent hover:opacity-90 transition-opacity"
              >
                <Download className="mr-2 h-5 w-5" />
                Descargar CV
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={scrollToContact}
                className="border-2 hover:bg-accent/10"
              >
                <Mail className="mr-2 h-5 w-5" />
                Contactame
              </Button>
            </div>
          </div>

          <div className="relative animate-in fade-in slide-in-from-right duration-700">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage} 
                alt="Workspace profesional de desarrollo"
                className="w-full h-auto object-cover" 
              />
              <div className="absolute inset-0 bg-linear-to-tr from-primary/20 to-accent/20 mix-blend-overlay"></div>
              <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-accent/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -top-4 -left-4 w-72 h-72 bg-primary/10 rounded-full blur-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;