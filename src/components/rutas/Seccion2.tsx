import CodeJs from "../code/CodeJs"
import { codeRutas } from "@/utils/codeRutas"

function Seccion2() {
  return (
    <section id="rutas2" className="w-11/12 pt-24 pb-10">
    <h2 className="text-4xl font-semibold">Rutas (Routes)</h2>
    <p className="mt-6">
    Las rutas en una API REST son las URL a las que los clientes envían solicitudes para interactuar con los recursos. Cada ruta corresponde a un recurso específico y define cómo se debe manejar cada tipo de solicitud HTTP (GET, POST, PUT, DELETE, etc.).
    </p>
    <h3 className="text-2xl font-medium mt-10">Implementación de Rutas</h3>
    <p className="mt-6">
        Para este ejemplo consideremos un CRUD de usuarios. En Express, puedes definir rutas de la siguiente manera:
    </p>
    <CodeJs codeString={codeRutas} />
    </section>

  )
}

export default Seccion2