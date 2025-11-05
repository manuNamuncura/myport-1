import { Linkedin, Mail, Phone, Github } from "lucide-react";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth'})
  }
  
  const sections = [
    "inicio", 
    "sobre mi", 
    "habilidades", 
    "proyectos", 
    "experiencias", 
    "contacto"
  ];

  return (
    <footer className="bg-primary text-primary-foreground py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Manuel Namuncurá</h3>
            <p className="text-primary-foreground/80">
              Desarrollador Fullstack especializado en crear soluciones web modernas y escalables.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Navegación</h4>
            <div className="space-y-2">
             {sections.map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="block text-gray-400 hover:text-white transition"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
             ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-accent" />
                <a
                  href="mailto:manuel@ejemplo.com"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  manu.namun94@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-accent" />
                <a
                  href="tel:+1234567890"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  +54 297 536 9478
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Linkedin className="h-5 w-5 text-accent" />
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Github className="h-5 w-5 text-accent" />
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © {new Date().getFullYear()} Manuel Namuncurá. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;