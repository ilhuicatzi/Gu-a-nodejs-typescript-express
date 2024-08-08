import {ArrowNext} from "@/assets/icons/ArrowNext";
import { ArrowPreview } from "@/assets/icons/ArrowPreview";
import { useNavigate } from "react-router-dom";

function ButtonNavegacion() {
    const navigate = useNavigate();
  return (
    <article className="my-24 w-11/12 gap-4 flex flex-col justify-center sm:flex-row sm:justify-between items-center">
    <button
        className="transition duration-300 group hover:ring-primary md:w-52 md:py-5 md:pl-10 pr-5 p-2 rounded-xl ring-1 ring-muted flex flex-col gap-y-3 items-end"
        onClick={() => navigate("/configuracion")}
      >
        <span className="hidden md:flex text-xs uppercase font-extralight text-muted group-hover:text-muted-foreground">
          Antes
        </span>
        <p className="py-0.5 group-hover:text-blue-600 text-muted-foreground font-medium text-sm md:text-base lg:text-lg flex items-center gap-3">
        <ArrowPreview className="w-6 h-6" />
          <span>Configuración</span>
        </p>
      </button>

      <button
        className="transition duration-300 group hover:ring-primary md:w-52 md:py-5 md:pr-10 pl-5 p-2 rounded-xl ring-1 ring-muted flex flex-col gap-y-3"
        onClick={() => navigate("/rutas")}
      >
        <span className="hidden md:flex text-xs uppercase font-extralight text-muted group-hover:text-muted-foreground">
          Proximo
        </span>
        <p className="group-hover:text-blue-600 text-muted-foreground font-medium text-sm md:text-base lg:text-lg flex items-center gap-3">
          <span>Rutas</span>
          <ArrowNext className="w-7 h-7" />
        </p>
      </button>
    </article>
  )
}

export default ButtonNavegacion