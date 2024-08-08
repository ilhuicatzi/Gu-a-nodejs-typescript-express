import CodeBash from "../code/CodeBash"
import CodeJson from "../code/CodeJson"

const codeJsson_1 = `{
    "name": "node-typescript",
    "version": "1.0.0",
    "main": "index.js",
    "scripts": {
      "test": "echo \\"Error: no test specified\\" && exit 1"
    },
    "keywords": [],
    "author": "",
    "license": "ISC",
    "description": "",
    "devDependencies": {
      "typescript": "^5.5.4"
    }
  }
  `

function Seccion2() {
  return (
    <section id="configuracion2" className="pt-24 pb-10 w-11/12">
    <h2 className="text-4xl font-semibold">Instalación de Typescript</h2>
    <p className="mt-6">
      Typescript es un superconjunto de JavaScript que añade tipado estático al lenguaje.
      Para instalar Typescript en el proyecto, ejecuta el siguiente comando:
      <CodeBash codeString="npm install typescript --save-dev"/>
    </p>
    <p>
      Este comando instalará Typescript como una dependencia de desarrollo en el proyecto.
    </p>
    <p>
      Para verificar que Typescript se instaló correctamente, ejecuta el siguiente comando:
      <CodeBash codeString="npx tsc --version" />
    </p>
    <p>
      Otra forma de verificar la instalación de Typescript es visualizando el archivo <code>package.json</code> y verificar que se haya agregado la dependencia de Typescript.
      <CodeJson codeString={codeJsson_1} />
      Para este ejemplo usaremos la versión 5.5.4 de Typescript.
    </p>
  </section>
  )
}

export default Seccion2