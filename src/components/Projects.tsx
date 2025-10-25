import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";




const Proyects = () => {
    const projects = [
        {
            title: "Sistema de Gestión Empresarial",
            description: "Aplicacion fullstack para gestion de recursos empresariales desarrollada con Spring Boot y Angular, incluyendo autenticación JWT y panel de administración",
            tech: ["Spring Boot", "Angular", "PostgreSQL", "JWT"],
            demo: "#",
            code: "#"
        },
        {
            title: "API RESTful con NestJS",
            description: "API escalable y robusta para gestión de datos con documentación Swagger, validación de datos y manejo de errores centralizados",
            tech: ["NestJs", "TypeScript", "PostgreSQL", "Swagger"],
            demo: "#",
            code: "#"
        },
        {
            title: "Dashboard Analítico React",
            description: "Dashboard interactivo con gráficos en tiempo real, filtros avanzados y diseño responsive utilizando React y Recharts",
            tech: ["React", "TypeScript", "Tailwind CSS", "Recharts"],
            demo: "#",
            code: "#"
        },
    ] 


    return (
        <section id="proyects" className="py-20 px-4 bg-linear-to-b from-secondary/30 to-background">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom duration-700">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-linear-to-r from-primary to-accent bg-clip-text">
                        Proyectos
                    </h2>
                    <div className="w-20 h-1 bg-linear-to-r from-primary to-accent mx-auto rounded-full"></div>
                    <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                        Algunos de los proyectos en los que he trabajado
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <Card
                            key={index}
                            className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-accent/50 flex flex-col animate-in fade-in slide-in-from-bottom"
                            style={{animationDelay: `${index *100}ms`}}
                        >
                            <div className="flex-1">
                                <h3 className="text-xl font-semibold mb-3 text-foreground">
                                    {project.title}
                                </h3>
                                <p className="text-muted-foreground mb-4 text-foreground">
                                    {project.description}
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tech.map((tech, techIndex) => (
                                    <span
                                        key={techIndex}
                                        className="text-xs px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/20 font-medium"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex gap-3 pt-4 border-t border-border">
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="flex-1 hover:bg-accent/10 hover:border-accent"
                                    asChild
                                >
                                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                                        <ExternalLink className="mr-2 h-4 w-4" />
                                        Demo
                                    </a>
                                </Button>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="flex-1 hover:bg-accent/10 hover:border-accent"
                                >
                                    <a href={project.code} target="_blank" rel="noopener noreferrer">
                                        <Github className="mr-2 h-4 w-4"/>
                                    </a>
                                </Button>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Proyects;