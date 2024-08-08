import CodeComponent from "../code/CodeComponent"
import { codeRutas } from "@/utils/codeRutas"

function Seccion2() {
  return (
    <section id="rutas2" className="md:w-11/12 md:pt-24 pt-5 pb-10 text-sm sm:text-base">
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">Rutas (Routes)</h2>
    <p className="mt-6">
    Las rutas en una API REST son las URL a las que los clientes envían solicitudes para interactuar con los recursos. Cada ruta corresponde a un recurso específico y define cómo se debe manejar cada tipo de solicitud HTTP (GET, POST, PUT, DELETE, etc.).
    </p>
    <h3 className="text-xl sm:text-2xl font-medium mt-10">Implementación de Rutas</h3>
    <p className="mt-6">
        Para este ejemplo consideremos un CRUD de usuarios. En Express, puedes definir rutas de la siguiente manera:
    </p>
    <CodeComponent codeString={codeRutas} />
    </section>

  )
}

export default Seccion2