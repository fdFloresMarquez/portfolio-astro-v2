export const languages = {
  en: "English",
  es: "Español",
};

export const defaultLang = "en";
export const showDefaultLang = false;

export const ui = {
  en: {
    "nav.experience": "Experience",
    "nav.about": "About Me",
    "nav.contact": "Contact",
    "nav.projects": "Projects",
    "hero.title": "Facundo Flores",
    "hero.description":
      "A highly motivated full-stack web developer with experience in utilizing modern technologies like Next.js, React, tRPC and MySQL to design, build, and deploy scalable web applications. Proficient in creating fast, dynamic and responsive user interfaces, and has a strong understanding of database design and management.",
    "work-experience.link": "Learn More",
    "projects.joinver.title": "Joinver.com - A Real Estate investment app",
    "projects.joinver.description":
      "An application for real estate investments with different projects in Argentina. Created from scratch with Next.js, React and ChakraUI.",
    "projects.panel6c.title": "Panel 6c - A CRM app for Real Estate company",
    "footer.paragraph": "With help of midudev portfolio template.",
  },
  es: {
    "nav.experience": "Experiencia",
    "nav.about": "Sobre mi",
    "nav.contact": "Contacto",
    "nav.projects": "Proyectos",
    "hero.title": "Flores Marquez Facundo",
    "hero.description":
      "Desarrollador web full-stack altamente motivado con experiencia en el uso de tecnologías modernas como Next.js, React, tRPC y MySQL para diseñar, construir y desplegar aplicaciones web escalables. Proficiente en la creación de interfaces de usuario rápidas, dinámicas y responsivas, y con un sólido entendimiento del diseño y la gestión de bases de datos.",
    "work-experience.link": "Saber más",
    "projects.joinver.title":
      "Joinver.com - Una app de inversiones en Real Estate",
    "projects.joinver.description":
      "Una aplicación para inversiones inmobiliarias con diferentes proyectos en Argentina. Creada desde cero con Next.js, React y ChakraUI.",
    "projects.panel6c.title":
      "Panel 6c - Una aplicación CRM para una empresa de Real Estate",
    "footer.paragraph": "Con ayuda del porfolio de midudev.",
  },
} as const;

type Route = {
  [key: string]: string;
};

type Routes = {
  [key: string]: Route;
};

export const routes: Routes = {
  en: {
    "#experience": "#experience",
    "#projects": "#projects",
    "#about-me": "#about-me",
  },
  es: {
    "#experience": "#experiencia",
    "#projects": "#proyectos",
    "#about-me": "#sobre-mi",
  },
};
