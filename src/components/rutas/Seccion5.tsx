import CodeComponent from "../code/CodeComponent";
import { codeEjemploMongo } from "@/utils/codeRutas";

function Seccion5() {
  return (
    <section id="rutas5" className="md:w-11/12 md:pt-24 pt-5 pb-10 text-sm sm:text-base">
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">Ejemplo de Controladores</h2>
      <p className="mt-6">
        A continuación se muestra un ejemplo de cómo podrías implementar un
        controlador para manejar el registro, inicio de sesión y obtención de
        información de un usuario con Express, Typescript y MongoDB:
      </p>
      <CodeComponent codeString={codeEjemploMongo} />
    </section>
  );
}

export default Seccion5;
