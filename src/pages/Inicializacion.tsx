import { useEffect, useState } from "react";
import Sidebar from "@/components/sidebar/SidebarMenu";
import Seccion1 from "@/components/inicializacion/Seccion1";
import Seccion2 from "@/components/inicializacion/Seccion2";
import Seccion3 from "@/components/inicializacion/Seccion3";
import Seccion4 from "@/components/inicializacion/Seccion4";

import {ArrowNext} from "@/assets/icons/ArrowNext";
import { ArrowPreview } from "@/assets/icons/ArrowPreview";
import { useNavigate } from "react-router-dom";

const sections = [
  { id: "inicializacion1", title: "Introducción" },
  { id: "inicializacion2", title: "Estructura Básica" },
  { id: "inicializacion3", title: "Paquetes Necesarios" },
  { id: "inicializacion4", title: "Inicializando el Servidor" },
];

function Inicializacion() {
  const navigate = useNavigate();
  const [currentSection, setCurrentSection] = useState("");

  const handleScroll = () => {
    const scrollY = window.scrollY;

    sections.forEach((section) => {
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


  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="grid grid-cols-5">
      <main className="col-span-4 ml-10 px-10 mr-5">
        <Seccion1 />
        <Seccion2 />
        <Seccion3 />
        <Seccion4 />

        <article className="my-24 w-11/12 flex justify-between items-center">
        <button
            className="transition duration-300 group hover:ring-primary w-52 py-5 pr-10 pl-5 rounded-xl ring-1 ring-muted flex flex-col gap-y-3 items-end"
            onClick={() => navigate("/configuracion")}
          >
            <span className="text-xs uppercase font-extralight text-muted group-hover:text-muted-foreground">
              Antes
            </span>
            <p className="group-hover:text-blue-600 text-muted-foreground font-medium text-lg flex items-center gap-3">
            <ArrowPreview className="w-6 h-6" />
              <span>Configuración</span>
            </p>
          </button>

          <button
            className="transition duration-300 group hover:ring-primary w-52 py-5 pr-10 pl-5 rounded-xl ring-1 ring-muted flex flex-col gap-y-3"
            onClick={() => navigate("/rutas")}
          >
            <span className="text-xs uppercase font-extralight text-muted group-hover:text-muted-foreground">
              Proximo
            </span>
            <p className="group-hover:text-blue-600 text-muted-foreground font-medium text-lg flex items-center gap-3">
              <span>Rutas</span>
              <ArrowNext className="w-7 h-7" />
            </p>
          </button>
        </article>


      </main>
      <article className="col-span-1 mt-5">
        <Sidebar sections={sections} currentSection={currentSection}  />
      </article>
    </div>
  );
}

export default Inicializacion;
