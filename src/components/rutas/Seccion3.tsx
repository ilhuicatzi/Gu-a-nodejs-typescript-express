import CodeComponent from '@/components/code/CodeComponent'
import { codeControladores } from '@/utils/codeRutas'


function Seccion3() {
  return (
    <section id="rutas3" className="w-11/12 pt-24 pb-10">
    <h2 className="text-4xl font-semibold">Controladores (Controllers)</h2>
    <p className="mt-6">
    Los controladores son funciones que contienen la lógica para manejar las solicitudes que llegan a las rutas. Su propósito es separar la lógica de negocio de las rutas, lo que hace que el código sea más modular y fácil de mantener.
    </p>
    <h3 className='text-2xl font-medium mt-10'>Ejemplo de Controladores</h3>
    <p className="mt-6">
    Siguiendo el ejemplo anterior, podrías tener un controlador para manejar las operaciones relacionadas con los usuarios:
    </p>
    <CodeComponent codeString={ codeControladores} />
    </section>
  )
}

export default Seccion3