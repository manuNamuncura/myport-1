import { Button } from "./ui/button";
import { Download, Mail } from "lucide-react";
import heroImage from "@/assets/manuport1.jpg";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import LogoLoop from "./ui/logoloop";
import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNestjs,
  SiAngular,
  SiPrisma,
  SiMysql,
} from "react-icons/si";

const techLogos = [
  { 
    node: <SiReact />, 
    title: "React", 
    href: "https://react.dev" },
  {
    node: <SiTypescript />,
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
  {
    node: <SiTailwindcss />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
  {
    node: <SiNestjs />,
    title: "NestJs",
    href: "https://nestjs.com",
  },
  {
    node: <SiAngular />,
    title: "Angular",
    href: "https://angular.io",
  },
  {
    node: <SiPrisma />,
    title: "Prisma",
    href: "https://www.prisma.io",
  },
  {
    node: <SiMysql />,
    title: "MySQL",
    href: "https://www.mysql.com",
  },
];

const Hero = () => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  const texts = ["NestJs", "Angular", "React", "Spring Boot"];

  useEffect(() => {
    const text = texts[currentIndex];
    let index = 0;
    const timer = setInterval(() => {
      setCurrentText(text.slice(0, index));
      index++;
      if (index > text.length) {
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }, 2000);
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const scrollToContact = () => {
    const element = document.getElementById("contacto");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="inicio"
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

            <div className="h-16 mb-1">
              <motion.p
                className="text-2xl lg:text-3xl text-gray-600 font-light"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                {currentText}
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="text-blue-600"
                ></motion.span>
              </motion.p>
            </div>

            <p className="text-muted-foreground max-w-lg">
              Estudiante de Ingeniería en Sistemas de Información, apasionado
              por crear soluciones tecnológicas innovadoras y escalables.
            </p>
            <div className="flex flex-wrap gap-4 pt-4 w-full">
              <Button
                size="lg"
                className="w-40 bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <a
                  href="https://myport-1.vercel.app/cv.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Descargar CV
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={scrollToContact}
                className="w-40 bg-linear-to-r from-blue-600 to-indigo-600 hover:from-green-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
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
        <div className="relative overflow-hidden h-[200px] flex justify-center items-center">
          <LogoLoop
            logos={techLogos}
            speed={120}
            direction="right"
            logoHeight={48}
            gap={40}
            hoverSpeed={0}
            scaleOnHover
            fadeOut
            fadeOutColor="#ffffff"
            forceMotion
            ariaLabel="Technology partners"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
