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
  }, []);
  return (
    <div className="grid grid-cols-5" id="rutas">
      <main className="col-span-4 ml-10 px-10 mr-5">
        <Seccion1 />
        <Seccion2 />
        <Seccion3 />
        <Seccion4 />
        <Seccion5 />
        <ButtonNavegacion />
      </main>
      <article className="col-span-1 mt-5">
        <Sidebar sections={sections} currentSection={currentSection}  />
      </article>
    </div>
  );
}

export default Rutas;
