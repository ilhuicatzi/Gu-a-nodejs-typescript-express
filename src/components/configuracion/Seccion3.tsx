import CodeComponent from "@/components/code/CodeComponent";
import TsConfigComentarios from "./subConfiguracion/TsConfigComentarios";
import { codeTsconfigModified2 } from "@/utils/codeConfig";

function Seccion3() {
  return (
    <section id="configuracion3" className="md:w-11/12 md:pt-24 pt-5 pb-10 text-sm sm:text-base">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">Configuración de Typescript</h2>
      <p className="mt-6">
        Para configurar Typescript en el proyecto, necesitas crear un archivo de
        configuración llamado <code>tsconfig.json</code>. Este archivo es el
        encargado de almacenar la configuración de Typescript.
      </p>
      <div className="mt-6">
        Para crear el archivo de configuración, ejecuta el siguiente comando:
        <CodeComponent codeString="npx tsc --init" />
      </div>
      <p className="mt-6">
        Este comando creará un archivo <code>tsconfig.json</code> en la raíz del
        proyecto. Este archivo contiene la configuración por defecto de
        Typescript.
      </p>
      <p className="mt-6">
        Del archivo de configuración, se pueden modificar las opciones según las
        necesidades del proyecto. Para más información sobre las opciones de
        configuración, visita la documentación oficial de Typescript.
      </p>
      <div className="mt-6">
        Pero para fines prácticos, puedes realizar la siguiente configuracion en
        el archivo <code>tsconfig.json</code>:
        <CodeComponent codeString={codeTsconfigModified2} />
      </div>
      <TsConfigComentarios />
    </section>
  );
}

export default Seccion3;
