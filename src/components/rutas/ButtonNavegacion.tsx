
import { ArrowPreview } from "@/assets/icons/ArrowPreview";
import { useNavigate } from "react-router-dom";

function ButtonNavegacion() {
    const navigate = useNavigate();
  return (
    <article className="my-24 w-11/12 flex justify-start items-center">
    <button
        className="transition duration-300 group hover:ring-primary w-52 py-5 pr-10 pl-5 rounded-xl ring-1 ring-muted flex flex-col gap-y-3 items-end"
        onClick={() => navigate("/inicializacion")}
      >
        <span className="text-xs uppercase font-extralight text-muted group-hover:text-muted-foreground">
          Antes
        </span>
        <p className="group-hover:text-blue-600 text-muted-foreground font-medium text-lg flex items-center gap-3">
        <ArrowPreview className="w-6 h-6" />
          <span>Inicialización</span>
        </p>
      </button>
    </article>

  )
}

export default ButtonNavegacion