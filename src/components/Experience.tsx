import { Briefcase, GraduationCap } from "lucide-react";
import { Card } from "./ui/card";

const Experience = () => {
  const experiences = [
    {
      type: "work",
      title: "Desarrollador FullStack",
      company: "Proyectos Freelance",
      period: "2023 - presente",
      description:
        "Desarrollo de apliacaciones web personalizadas para clientes, implementando soluciones con NestJS, Angular y React",
    },
    {
      type: "work",
      title: "Desarrollador Backend",
      company: "Proyectos Académicos",
      period: "2022 - 2025",
      description:
        "Desarrollo de APIs RESTful con Spring Boot y NestJs para diversos proyectos universitarios",
    },
  ];

  const educacion = [
    {
      type: "educacion",
      title: "Ingeniería en Sistemas de Información",
      company: "Universidad Tecnológica Nacional",
      period: "2021 - Presente",
      description:
        "Formación integral en desarrollo de software, base de datos, arquitectura de sistemas y gestión de proyectos",
    },
  ];

  const renderTimeLine = (items: typeof experiences) => (
    <div className="space-y-8">
      {items.map((item, index) => (
        <div
          key={index}
          className="relative pl-8 animate-in fade-in slide-in-from-left"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <div className="absolute left-0 top-0 h-full w-px bg-linear-to-b from-primary to-accent"></div>
          <div className="absolute left-0 top-1 w-2 h-2 rounded-full bg-accent -translate-x-[3.5px] animate-pulse"></div>

          <Card className="p-6 hover:shadow-lg transition-all duration-300 border-2 hover:border-accent/50">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-accent/10">
                {item.type === "work" ? (
                  <Briefcase className="h-6 w-6 text-accent" />
                ) : (
                  <GraduationCap className="h-6 w-6 text-accent" />
                )}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                <p className="text-accent font-medium mb-1">{item.company}</p>
                <p className="text-sm text-muded-foreground mb-3">
                  {item.period}
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          </Card>
        </div>
      ))}
    </div>
  );

  return (
    <section id="experience" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-in slide-in-from-bottom duration-700">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-linear-to-r from-primary to-accent bg-cli-text">
            Experiencia y Educación
          </h2>
          <div className="w-20 h-1 bg-linear-to-r from-primary to-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Briefcase className="h-6 w-6 text-accent" />
              Experiencia
            </h3>
            {renderTimeLine(experiences)}
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <GraduationCap className="h-6 w-6 text-accent" />
              Educación
            </h3>
            {renderTimeLine(educacion)}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Experience;
