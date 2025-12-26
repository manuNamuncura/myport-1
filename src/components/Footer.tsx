import { Linkedin, Mail, Github, Instagram, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  const sections = [
    "inicio",
    "sobre mi",
    "habilidades",
    "proyectos",
    "experiencias",
    "contacto",
  ];

  const socialLinks = [
    {
      icon: Mail,
      href: "malito:manu.namun94@gmail.com",
      label: "Email",
    },
    {
      icon: MessageCircle,
      href: "tel:+5492975369478",
      lable: "Telefono",
    },
    {
      icon: Github,
      href: "https://github.com/manuNamuncura",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/manuel-namuncur%C3%A1-a9591b21b/",
      label: "LinkedIn",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/nmanu94",
      label: "Instagram",
    },
  ];

  return (
    <div className="py-12 bg-gray-900 text-white -mx-4 -m-4">
      <footer className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold bg-linear-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent mb-4">
                Manuel Namuncurá
              </h3>
              <p className="text-gray-400">
                Desarrollador Fullstack especializado en crear soluciones web
                modernas y escalables.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">Navegación</h4>
              <div className="space-y-2">
                {sections.map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className="block text-gray-400 hover:text-white transition-colors"
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contacto</h4>
              <div className="flex space-x-4">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    whileHover={{ scale: 1.1 }}
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 pt-8 text-center">
            <p className="text-primary-foreground/60">
              © {new Date().getFullYear()} Manuel Namuncurá. Todos los derechos
              reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
