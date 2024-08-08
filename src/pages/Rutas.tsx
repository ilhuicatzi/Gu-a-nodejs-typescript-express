import { useEffect, useState } from "react";
import Sidebar from "@/components/sidebar/SidebarMenu";
import Seccion1 from "@/components/rutas/Seccion1";
import Seccion2 from "@/components/rutas/Seccion2";
import Seccion3 from "@/components/rutas/Seccion3";
import Seccion4 from "@/components/rutas/Seccion4";
import Seccion5 from "@/components/rutas/Seccion5";
import ButtonNavegacion from "@/components/rutas/ButtonNavegacion";
import {
  handleScroll,
  sectionsRutas as sections,
} from "@/utils/secciones";


function Rutas() {
  const [currentSection, setCurrentSection] = useState("");

  useEffect(() => {
    const onScroll = () => handleScroll(sections, setCurrentSection);
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [
    setCurrentSection,
  ]);
  return (
    <div className="grid grid-cols-1 md:grid-cols-5" id="rutas">
      <main className="md:col-span-4 sm:ml-4 md:ml-6 lg:ml-10 xl:px-10 md:pl-6 pl-4 lg:mr-5 mt-10">
        <Seccion1 />
        <Seccion2 />
        <Seccion3 />
        <Seccion4 />
        <Seccion5 />
        <ButtonNavegacion />
      </main>
      <article className="col-span-1 mt-5 hidden md:flex justify-start">
        <Sidebar sections={sections} currentSection={currentSection}  />
      </article>
    </div>
  );
}

export default Rutas;
