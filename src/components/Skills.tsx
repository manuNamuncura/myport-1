import AnimatedContent from "./ui/AnimatedContent";
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
      skills: ["MySQL", "PostgreSQL", "MongoDB"],
      color: "bg-primary/10 text-primary border-primary/20",
    },
    {
      category: "Herramientas",
      skills: ["GitHub", "VS Code", "Postman", "Swagger", "Prisma"],
      color: "bg-accent/10 text-accent border-accent/20",
    },
  ];

  return (
    <section id="habilidades" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        {/* header igual */}

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const isLeftColumn = index % 2 === 0;

            return (
              <AnimatedContent
                key={index}
                direction="horizontal"
                distance={190}
                reverse={!isLeftColumn} // 👈 derecha → izquierda
                duration={2.3}
                animateOpacity={false}
              >
                <Card className="p-6 hover:shadow-lg transition-all duration-300">
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
              </AnimatedContent>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
