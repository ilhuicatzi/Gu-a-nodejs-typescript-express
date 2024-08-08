type Section = {
    id: string;
    title: string;
  };

type setCurrentSection = (section: string) => void;

export const handleScroll = (
    section: Section[],
    setCurrentSection: setCurrentSection
) => {
    const sections = section;
    const scrollY = window.scrollY;

    sections.forEach((section: Section) => {
      const sectionElement = document.getElementById(section.id);
      if (sectionElement) {
        const sectionTop = sectionElement.offsetTop;
        const sectionHeight = sectionElement.clientHeight;

        if (
          scrollY >= sectionTop - 60 &&
          scrollY < sectionTop + sectionHeight
        ) {
          setCurrentSection(section.id);
        }
      }
    });
  };

export const sectionsRutas = [
    { id: "rutas1", title: "Tipos de Peticiones HTTP" },
    { id: "rutas2", title: "Rutas (Routes)" },
    { id: "rutas3", title: "Controladores (Controllers)" },
    { id: "rutas4", title: "Integración de Rutas y Controladores" },
    { id: "rutas5", title: "Ejemplo de Controladores" },
  ];

export const sectionsInicializacion = [
    { id: "inicializacion1", title: "Introducción" },
    { id: "inicializacion2", title: "Estructura Básica" },
    { id: "inicializacion3", title: "Paquetes Necesarios" },
    { id: "inicializacion4", title: "Inicializando el Servidor" },
  ];

export const sectionsConfiguracion = [
    { id: "configuracion1", title: "Inicializa el proyecto" },
    { id: "configuracion2", title: "Instalación de Typescript" },
    { id: "configuracion3", title: "Configuración de Typescript" },
    { id: "configuracion4", title: "Instalación de ESLint" },
  ];
  