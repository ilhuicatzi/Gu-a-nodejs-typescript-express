import CodeJs from "../code/CodeJs";
import { codeEjemploMongo } from "@/utils/codeRutas";

function Seccion5() {
  return (
    <section id="rutas5x" className="w-11/12 pt-24 pb-10">
      <h2 className="text-4xl font-semibold">Ejemplo de Controladores</h2>
      <p className="mt-6">
        A continuación se muestra un ejemplo de cómo podrías implementar un
        controlador para manejar el registro, inicio de sesión y obtención de
        información de un usuario con Express, Typescript y MongoDB:
      </p>
      <CodeJs codeString={codeEjemploMongo} />
    </section>
  );
}

export default Seccion5;
