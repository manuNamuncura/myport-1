import { Badge } from "./ui/badge";
import { Card } from "./ui/card";

const Skills = () => {
  const skillCategories = [
    {
      category: "Backend",
      skills: ["Java", "Spring Boot", "NestJS", "TypeScript", "NodeJS"],
      color: "bg-primary/10 text-primary border-primary/20",
    },
    {
      category: "Frontend",
      skills: ["Angular", "React", "TypeScript", "HTML5", "CSS", "TailwindCSS"],
      color: "bg-accent/10 text-accent border-accent/20",
    },
    {
      category: "Base de datos",
      skills: ["MySQL", "PostgreSQL"],
      color: "bg-primary/10 text-primary border-primary/20",
    },
    {
      category: "Herramientas",
      skills: ["GitHub", "VS Code", "Postman", "Swagger"],
      color: "bg-accent/10 text-accent border-accent/20",
    },
  ];
  return (
    <section id="skills" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom duration-700">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-linear-to-r from-primary to-accent bg-clip-text">
            Habilidades
          </h2>
          <div className="w-20 h-1 bg-linear-to-r from-primary to-accent mx-auto rounded-full"></div>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Tecnologías y herramientas con las que trabajo para crear soluciones
            de calidad
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-lg transition-all duration-300 animate-in fade-in slide-in-from-bottom"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="text-2xl font-semibold mb-4 text-foreground">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    variant="secondary"
                    className={`${category.color} px-4 py-2 text-sm font-medium hover:scale-105 transition-transform cursor-default border-2`}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Skills;
