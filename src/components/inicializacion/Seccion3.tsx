import CodeComponent from "@/components/code/CodeComponent";
import { codeInitScripts } from "@/utils/codeInit";

function Seccion3() {
  return (
    <section id="inicializacion3" className="md:w-11/12 md:pt-24 pt-5 pb-10 text-sm sm:text-base">
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">Paquetes Necesarios</h2>
    <article className="mt-14">
      <h3 className="text-xl sm:text-2xl font-medium font-mono">Express</h3>
      <div className="mt-2">
        Para inicializar un servidor con Express, es necesario instalar
        express
        <CodeComponent codeString="$ npm install express" />
        y al estar trabajando con TypeScript, también se debe instalar el
        paquete
        <CodeComponent codeString="$ npm install @types/express -D" />
        ya que este paquete contiene las definiciones de tipos de
        TypeScript para Express.
      </div>
    </article>

    <article className="mt-20">
      <h3 className="text-xl sm:text-2xl font-medium font-mono">Morgan</h3>
      <div className="mt-2">
        Morgan es un middleware para registrar las solicitudes HTTP en la
        consola. Para instalarlo, se debe ejecutar el siguiente comando:
        <CodeComponent codeString="$ npm install morgan" />
      </div>
      <div className="mt-2">
        Al igual que con Express, es necesario instalar las definiciones
        de tipos de TypeScript para Morgan:
        <CodeComponent codeString="$ npm install @types/morgan -D" />
      </div>
    </article>

    <article className="mt-20">
      <h3 className="text-xl sm:text-2xl font-medium font-mono">Ts-node-dev</h3>
      <div className="mt-2">
        Ts-node-dev es una herramienta que permite ejecutar archivos
        TypeScript directamente en Node.js. Para instalarlo, se debe
        ejecutar el siguiente comando:
        <CodeComponent codeString="$ npm install ts-node-dev -D" />
      </div>
    </article>

    <article className="mt-20">
      <h3 className="text-xl sm:text-2xl font-medium font-mono">
        Scripts en el package.json
      </h3>
      <div>
        Con estos paquetes instalados, se puede comenzar a inicializar el
        servidor con Express. Para ello será necesario crear los comandos
        de inicio en el archivo <code>package.json</code>. Recomendamos
        agregar los siguientes scripts:
        <CodeComponent codeString={codeInitScripts} />
      </div>
      <div className="p-6">
        <h1 className="text-xl sm:text-2xl font-bold mb-4">
          Descripción de Scripts en package.json
        </h1>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <span className="font-semibold">"dev": </span>
            Ejecuta el servidor de desarrollo utilizando{" "}
            <code className="bg-muted px-1 rounded">
              ts-node-dev
            </code>{" "}
            para compilar y reiniciar automáticamente el código al
            realizar cambios en{" "}
            <code className="bg-muted px-1 rounded">src/index.ts</code>.
          </li>
          <li>
            <span className="font-semibold">"start": </span>
            Inicia la aplicación en producción ejecutando el archivo
            JavaScript compilado ubicado en{" "}
            <code className="bg-muted px-1 rounded">build/index.js</code>.
          </li>
          <li>
            <span className="font-semibold">"tsc": </span>
            Compila el código TypeScript a JavaScript utilizando el
            compilador de TypeScript (
            <code className="bg-muted px-1 rounded">tsc</code>).
          </li>
          <li>
            <span className="font-semibold">"lint": </span>
            Ejecuta ESLint para analizar el código en busca de errores y
            problemas de estilo, ignorando los archivos y carpetas
            especificados en{" "}
            <code className="bg-muted px-1 rounded">.eslintignore</code> y
            analizando archivos con extensiones{" "}
            <code className="bg-muted px-1 rounded">.js</code> y{" "}
            <code className="bg-muted px-1 rounded">.ts</code>.
          </li>
        </ul>
      </div>
    </article>
  </section>
  )
}

export default Seccion3