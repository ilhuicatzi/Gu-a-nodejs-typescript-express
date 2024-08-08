import CodeBash from "@/components/code/CodeBash";
import CodeJson from "@/components/code/CodeJson";
import { codeESLint } from "@/utils/codeConfig";

function Seccion4() {
  return (
    <section id="configuracion4" className="w-11/12 pt-24 pb-10">
      <h2 className="text-4xl font-semibold">Instalación de ESLint</h2>
      <p className="mt-6">
        ESLint es una herramienta de análisis de código estático para
        identificar problemas en el código JavaScript. Para instalar ESLint en
        el proyecto, ejecuta el siguiente comando:
        <CodeBash codeString="npm install eslint --save-dev" />
      </p>
      <p className="mt-6">
        Este comando instalará ESLint como una dependencia de desarrollo en el
        proyecto. Aunque ESLint se puede instalar de forma global, es
        recomendable instalarlo localmente en el proyecto para evitar conflictos
        de versiones.
      </p>
      <p className="mt-6">
        Otra consideración importante es instalar las reglas de ESLint para
        Typescript. Para ello, ejecuta el siguiente comando:
        <CodeBash codeString="npx @typescript-eslint/parser -D" />
        Este paquete reemplaza al parser predeterminado de ESLint por uno
        específico para TypeScript. Esto permite a ESLint analizar archivos
        TypeScript.
      </p>
      <p className="mt-6">
        Otro paquete importante a instalar es el siguiente:
        <CodeBash codeString="npx @typescript-eslint/eslint-plugin -D" />
        Este paquete proporciona las reglas de linting específicas para
        TypeScript. Al instalar este paquete, se habilitan las reglas de linting
        de TypeScript en ESLint.
      </p>
      <p className="mt-6">
        Después de instalar los paquetes, debes configurar ESLint para que use
        el parser y el plugin de TypeScript. Puedes hacerlo creando un archivo{" "}
        <code className="font-extralight">`.eslintrc.json`</code> en la raíz de
        tu proyecto y agregando lo siguiente:
        <CodeJson codeString={codeESLint} />
      </p>
      <div className=" rounded-lg  p-6">
        <h1 className="text-xl font-semibold mb-4">
          Comentarios sobre la .eslintrc.json
        </h1>
        <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
          <li>
            <span className="font-extralight font-mono hover:underline text-primary">
              parser:
            </span>{" "}
            Especifica el parser a utilizar, en este caso, el parser de
            TypeScript.
          </li>
          <li>
            <span className="font-extralight font-mono hover:underline text-primary">
              parserOptions:
            </span>{" "}
            Configura las opciones del parser.
            <ul className="list-decimal pl-5">
              <li>
                <span className="font-extralight font-mono hover:underline text-primary">
                  ecmaVersion:
                </span>{" "}
                Define la versión de ECMAScript a utilizar (12 corresponde a
                ES2021).
              </li>
              <li>
                <span className="font-extralight font-mono hover:underline text-primary">
                  sourceType:
                </span>{" "}
                Indica que se utilizarán módulos ES.
              </li>
            </ul>
          </li>
          <li>
            <span className="font-extralight font-mono hover:underline text-primary">
              plugins:
            </span>{" "}
            Lista de plugins que se utilizarán, incluyendo el plugin de
            TypeScript y el plugin de importaciones.
          </li>
          <li>
            <span className="font-extralight font-mono hover:underline text-primary">
              extends:
            </span>{" "}
            Define las configuraciones base que se extenderán.
            <ul className="list-decimal pl-5">
              <li>
                <span className="font-extralight font-mono hover:underline text-primary">
                  eslint:recommended:
                </span>{" "}
                Activa un conjunto de reglas recomendadas por ESLint.
              </li>
              <li>
                <span className="font-extralight font-mono hover:underline text-primary">
                  plugin:@typescript-eslint/recommended:
                </span>{" "}
                Activa reglas recomendadas para TypeScript.
              </li>
              <li>
                <span className="font-extralight font-mono hover:underline text-primary">
                  prettier:
                </span>{" "}
                Desactiva reglas de ESLint que podrían entrar en conflicto con
                Prettier.
              </li>
            </ul>
          </li>
          <li>
            <span className="font-extralight font-mono hover:underline text-primary">
              rules:
            </span>{" "}
            Define reglas personalizadas para el análisis de código.
            <ul className="list-decimal pl-5">
              <li>
                <span className="font-extralight font-mono hover:underline text-primary">
                  @typescript-eslint/no-unused-vars:
                </span>{" "}
                Genera un error si hay variables no utilizadas.
              </li>
              <li>
                <span className="font-extralight font-mono hover:underline text-primary">
                  @typescript-eslint/consistent-type-definitions:
                </span>{" "}
                Requiere el uso de `type` para definiciones de tipos.
              </li>
              <li>
                <span className="font-extralight font-mono hover:underline text-primary">
                  @typescript-eslint/explicit-module-boundary-types:
                </span>{" "}
                Advierte si las funciones exportadas no tienen un tipo de
                retorno explícito.
              </li>
              <li>
                <span className="font-extralight font-mono hover:underline text-primary">
                  @typescript-eslint/no-explicit-any:
                </span>{" "}
                Advierte sobre el uso del tipo `any`.
              </li>
              <li>
                <span className="font-extralight font-mono hover:underline text-primary">
                  @typescript-eslint/prefer-namespace-keyword:
                </span>{" "}
                Recomienda el uso de `namespace` en lugar de `module`.
              </li>
            </ul>
          </li>
          <li>
            <span className="font-extralight font-mono hover:underline text-primary">
              env:
            </span>{" "}
            Define los entornos en los que se ejecutará el código.
            <ul className="list-decimal pl-5">
              <li>
                <span className="font-extralight font-mono hover:underline text-primary">
                  browser:
                </span>{" "}
                Indica que el código se ejecutará en un entorno de navegador.
              </li>
              <li>
                <span className="font-extralight font-mono hover:underline text-primary">
                  es2021:
                </span>{" "}
                Habilita características de ECMAScript 2021.
              </li>
            </ul>
          </li>
          <li>
            <span className="font-extralight font-mono hover:underline text-primary">
              overrides:
            </span>{" "}
            Permite especificar reglas diferentes para archivos específicos.
            <ul className="list-decimal pl-5">
              <li>
                <span className="font-extralight font-mono hover:underline text-primary">
                  files:
                </span>{" "}
                Aplica las reglas a archivos de prueba (`*.test.ts`,
                `*.spec.ts`).
              </li>
              <li>
                <span className="font-extralight font-mono hover:underline text-primary">
                  rules:
                </span>{" "}
                Desactiva la advertencia sobre el uso de `any` en archivos de
                prueba.
              </li>
            </ul>
          </li>
        </ul>
        <p className="text-lg mt-4">
          Bueno, hasta aquí hemos llegado con la configuración de nuestro
          proyecto con Node.js y Typescript.
          <br />
          <br />A continuación, procederemos al desarrollo de un servidor web
          con Express y Typescript.
        </p>
      </div>
    </section>
  );
}

export default Seccion4;
