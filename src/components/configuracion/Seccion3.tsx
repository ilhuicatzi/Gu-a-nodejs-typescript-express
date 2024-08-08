import { Link } from "react-router-dom";
import CodeBash from "@/components/code/CodeBash";
import CodeJson from "@/components/code/CodeJson";
import { codeTsconfigModified2 } from "@/utils/codeConfig";

function Seccion3() {
  return (
    <section id="configuracion3" className="pt-24 pb-10 w-11/12">
    <h2 className="text-4xl font-semibold">
      Configuración de Typescript
    </h2>
    <p className="mt-6">
      Para configurar Typescript en el proyecto, necesitas crear un
      archivo de configuración llamado <code>tsconfig.json</code>. Este
      archivo es el encargado de almacenar la configuración de Typescript.
    </p>
     <p className="mt-6">
      Para crear el archivo de configuración, ejecuta el siguiente
      comando:
      <CodeBash codeString="npx tsc --init" />
    </p>
     <p className="mt-6">
      Este comando creará un archivo <code>tsconfig.json</code> en la raíz
      del proyecto. Este archivo contiene la configuración por defecto de
      Typescript como se muestra en el siguiente enlace:
      <Link className="font-mono underline px-2 text-muted-foreground hover:text-blue-600 font-semibold" to="/configuracion/code/tsconfigDefault">tsconfig.json</Link>
    </p>
    <p className="mt-6">
      Del archivo de configuración, se pueden modificar las opciones según las necesidades del proyecto. Para más información sobre las opciones de configuración, visita la documentación oficial de Typescript.
    </p>
    <p className="mt-6">
      Pero para fines prácticos, puedes realizar la siguiente configuracion
      en el archivo <code>tsconfig.json</code>:
      <CodeJson codeString={codeTsconfigModified2} />
    </p>

    <div className="p-6">
<h2 className="text-xl font-bold mb-4">Comentarios sobre tsconfig.json</h2>
<ul className="list-disc pl-5 space-y-2 text-muted-foreground">
  <li className="hover:text-foreground">
    <span className="text-primary font-extralight font-mono">`target`:</span> Define la versión de JavaScript a la que se compilará el código.
  </li>
  <li className="hover:text-foreground">
    <span className="text-primary font-extralight font-mono">`module`:</span> Especifica el sistema de módulos que se utilizará.
  </li>
  <li className="hover:text-foreground">
    <span className="text-primary font-extralight font-mono">`rootDir`:</span> Indica la ubicación de los archivos fuente.
  </li>
  <li className="hover:text-foreground">
    <span className="text-primary font-extralight font-mono">`outDir`:</span> Define dónde se guardarán los archivos compilados.
  </li>
  <li className="hover:text-foreground">
    <span className="text-primary font-extralight font-mono">`allowSyntheticDefaultImports`:</span> Permite importar módulos sin exportaciones predeterminadas.
  </li>
  <li className="hover:text-foreground">
    <span className="text-primary font-extralight font-mono">`esModuleInterop`:</span> Facilita la interoperabilidad entre diferentes sistemas de módulos.
  </li>
  <li className="hover:text-foreground">
    <span className="text-primary font-extralight font-mono">`forceConsistentCasingInFileNames`:</span> Asegura consistencia en el uso de mayúsculas y minúsculas en los nombres de archivo.
  </li>
  <li className="hover:text-foreground">
    <span className="text-primary font-extralight font-mono">`strict`:</span> Activa todas las comprobaciones de tipo estrictas.
  </li>
  <li className="hover:text-foreground">
    <span className="text-primary font-extralight font-mono">`noImplicitAny`:</span> Evita el uso implícito del tipo any.
  </li>
  <li className="hover:text-foreground">
    <span className="text-primary font-extralight font-mono">`noUnusedLocals`:</span> Genera errores para variables locales no utilizadas.
  </li>
  <li className="hover:text-foreground">
    <span className="text-primary font-extralight font-mono">`noUnusedParameters`:</span> Genera errores para parámetros de función no utilizados.
  </li>
  <li className="hover:text-foreground">
    <span className="text-primary font-extralight font-mono">`noImplicitReturns`:</span> Asegura que todas las rutas de una función devuelvan un valor.
  </li>
  <li className="hover:text-foreground">
    <span className="text-primary font-extralight font-mono">`noFallthroughCasesInSwitch`:</span> Evita caídas en las instrucciones switch.
  </li>
  <li className="hover:text-foreground">
    <span className="text-primary font-extralight font-mono">`skipLibCheck`:</span> Omite la verificación de tipos en bibliotecas.
  </li>
  <li className="hover:text-foreground">
    <span className="text-primary font-extralight font-mono">`noEmitOnError`:</span> Previene la emisión de archivos si hay errores.
  </li>
  <li className="hover:text-foreground">
    <span className="text-primary font-extralight font-mono">`baseUrl` y `paths`:</span> Facilitan la importación de módulos desde rutas específicas.
  </li>
  <li className="hover:text-foreground">
    <span className="text-primary font-extralight font-mono">`include`:</span> Especifica los archivos que se deben compilar.
  </li>
  <li className="hover:text-foreground">
    <span className="text-primary font-extralight font-mono">`exclude`:</span> Define qué archivos o carpetas se deben omitir en la compilación.
  </li>
</ul>
</div>

  </section>
  )
}

export default Seccion3