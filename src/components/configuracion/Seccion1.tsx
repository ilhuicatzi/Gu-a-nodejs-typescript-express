import CodeBash from "@/components/code/CodeBash";

function Seccion1() {
  return (
    <section id="configuracion1" className="w-11/12 pt-24 pb-10">
    <h2 className="text-4xl font-semibold">Inicializa el proyecto</h2>
    <p className="mt-6">
      Para inicializar el proyecto necesitas tener instalado Node.js en tu
      equipo. Si no lo tienes instalado, puedes descargarlo desde la página
      oficial de <a className="font-medium hover:underline hover:text-blue-600 cursor-pointer" href="https://nodejs.org/en" target="_blank">NodeJS</a>.
    </p>
    <p className="mt-6">
      Otra recomendación es tener instalado un manejador de paquetes como npm o yarn, en este caso utilizaremos <code>npm</code>.
      Y como una última recomendación, tener instalado un editor de código como <a className="font-medium hover:underline hover:text-blue-600 cursor-pointer" href="https://code.visualstudio.com/" target="_blank">Visual Studio Code</a>.
    </p>
    <div className="mt-6">
      Para inicializar el proyecto, ejecuta el siguiente comando:
      <CodeBash codeString="npm init -y"/>
    </div>
    <p>
      Este comando creará un archivo <code>package.json</code> en la raíz del proyecto.
      Este archivo es el encargado de almacenar la información del proyecto, como el nombre, la versión, las dependencias, entre otros.
    </p>
  </section>
  )
}

export default Seccion1