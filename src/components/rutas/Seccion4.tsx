import CodeComponent from "../code/CodeComponent"
import { codeIntegracion } from "@/utils/codeRutas"

function Seccion4() {
  return (
    <section id="rutas4" className="w-11/12 pt-24 pb-10">
    <h2 className="text-4xl font-semibold">Integración de Rutas y Controladores</h2>
    <p className="mt-6">
    Luego, puedes integrar las rutas y los controladores de la siguiente manera:
    </p>
    <CodeComponent codeString={ codeIntegracion} />
    <p>
        Note que al importar el controlador, se está importando la función que se encarga de manejar las solicitudes a la ruta <code>/users</code>. Haciendo esto, el código de la ruta se mantiene limpio y fácil de leer.
    </p>
    <p className="mt-6">
        Como un comentario adicional, es importante mencionar que en aplicaciones más grandes, es común organizar los controladores en diferentes archivos, agrupándolos por funcionalidad o recurso. Además es en los controladores donde se manejan las interacciones con la base de datos, permitiendo que las rutas se mantengan limpias y enfocadas en la lógica de negocio.
    </p>
    </section>
    )
}

export default Seccion4