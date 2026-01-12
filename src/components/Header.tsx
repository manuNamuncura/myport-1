import { useEffect, useState } from "react";
import { useTheme } from "../hooks/use-theme";
import { Button } from "./ui/button";
import { Sun, Moon } from "lucide-react";
import StaggeredMenu from "./ui/StaggeredMenu";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
      if (isMobileMenuOpen) setIsMobileMenuOpen(false);
    };

    handleScroll(); // sincroniza estado inicial

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: "Inicio", id: "inicio" },
    { label: "Sobre mí", id: "sobre mi" },
    { label: "Habilidades", id: "habilidades" },
    { label: "Proyectos", id: "proyectos" },
    { label: "Experiencia", id: "experiencias" },
    { label: "Contacto", id: "contacto" },
  ];

  const menuItems = navItems.map((item) => ({
    label: item.label,
    ariaLabel: item.label,
    link: `#${item.id}`,
  }));

  const socialItems = [
    { label: "GitHub", link: "https://github.com" },
    { label: "LinkedIn", link: "https://linkedin.com" },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <h1
            className={`text-2xl font-bold transition-colors duration-300 ${
              isScrolled
                ? "text-foreground"
                : "bg-linear-to-r from-primary to-accent bg-clip-text text-transparent"
            }`}
          >
            Manuel Namuncurá
          </h1>

          {/* Navegación escritorio */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground/80 hover:text-accent transition-colors duration-300 font-medium"
              >
                {item.label}
              </button>
            ))}

            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              aria-label="Cambiar tema"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </Button>
          </nav>

          {/* Botón menú móvil */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          >
            {isMobileMenuOpen}
          </Button>
        </div>
      </div>

      {/* Menú móvil */}
      <div
        className="md:hidden fixed inset-0 z-999"
      >
        <StaggeredMenu
          position="right"
          items={menuItems}
          socialItems={socialItems}
          displaySocials
          displayItemNumbering
          menuButtonColor="#fff"
          openMenuButtonColor="#000"
          changeMenuColorOnOpen
          colors={["#B19EEF", "#5227FF"]}
          accentColor="#ff6b6b"
          onMenuOpen={() => setIsMobileMenuOpen(true)}
          onMenuClose={() => setIsMobileMenuOpen(false)}
          isFixed={false}
        />
      </div>
    </header>
  );
};

export default Header;
