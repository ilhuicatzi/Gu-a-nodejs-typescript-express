import CodeJs from "@/components/code/CodeJs";
import { codeInitApp, codeInitIndex, codeInitConfig } from "@/utils/codeInit";

function Seccion4() {
  return (
            <section id="inicializacion4" className="w-11/12 pt-24 pb-10">
        <h2 className="text-4xl font-semibold">Inicializando el Servidor</h2>
        <p className="mt-6">
          Con los paquetes instalados, se puede comenzar con el código para inicializar el servidor. Para ello, en el archivo <code>src/app.ts</code> se debe agregar el siguiente código:

          <CodeJs codeString={codeInitApp} />
        </p>
        <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Resumen del Código</h1>
      <ul className="list-disc pl-5 space-y-2">
        <li>
          <span className="font-semibold">Importaciones:</span> Se importan los módulos <code>express</code> para crear la aplicación del servidor y <code>morgan</code> para registrar las solicitudes HTTP.
        </li>
        <li>
          <span className="font-semibold">Inicialización de la Aplicación:</span> Se crea una instancia de la aplicación Express mediante <code>const app = express();</code>.
        </li>
        <li>
          <span className="font-semibold">Middleware:</span>
          <ul className="list-decimal pl-5">
            <li>
              <code>app.use(express.json())</code>: Permite manejar solicitudes con cuerpos en formato JSON.
            </li>
            <li>
              <code>{`app.use(express.urlencoded({ extended: true }))`}</code>: Permite manejar datos de formularios codificados en URL, con <code>extended: true</code> para análisis más complejo.
            </li>
            <li>
              <code>{`app.use(morgan('dev'))`}</code>: Configura Morgan para registrar las solicitudes en un formato de desarrollo.
            </li>
          </ul>
        </li>
        <li>
          <span className="font-semibold">Rutas:</span> 
          <code>app.get("/")</code>: Define una ruta para el método GET en la raíz (<code>/</code>). Responde con un objeto JSON que contiene un mensaje de bienvenida.
        </li>
        <li>
          <span className="font-semibold">Exportación:</span> <code>export default app</code>: Exporta la instancia de la aplicación para su uso en otros módulos.
        </li>
      </ul>
    </div>
    <p className="mb-5">
      Con este código, se ha inicializado una aplicación Express básica que responde con un mensaje de bienvenida en la ruta raíz. En la siguiente sección, se verá cómo se puede configurar el servidor para escuchar en un puerto específico.
    </p>
    <p>
      Para ello exportaremos la aplicación en el archivo <code>src/app.ts</code> y la importaremos en el archivo <code>src/index.ts</code> para inicializar el servidor, como se muestra en el siguiente código:
      <CodeJs codeString={codeInitIndex} />
    </p>
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Inicio del Servidor</h1>
      <ul className="list-disc pl-5 space-y-2">
        <li>
          <span className="font-semibold">Importaciones:</span> Se importa la instancia de la aplicación Express desde el archivo <code>app.ts</code> y la constante <code>PORT</code> desde el archivo de configuración.
        </li>
        <li>
          <span className="font-semibold">Inicio del Servidor:</span> Se utiliza <code>{`app.listen(PORT, () => {...})`}</code> para iniciar el servidor y escuchar en el puerto especificado por la constante <code>PORT</code>.
        </li>
        <li>
          <span className="font-semibold">Mensaje de Consola:</span> Cuando el servidor se inicia correctamente, se muestra un mensaje en la consola indicando la URL del servidor, construida concatenando <code>http://localhost:</code> y el valor de <code>PORT</code>.
        </li>
      </ul>
      <p className="mt-5">
        Cabe mensionar que el archivo <code>src/config.ts</code> debe contener la constante <code>PORT</code> con el número de puerto en el que se desea que el servidor escuche. Por ejemplo:
        <CodeJs codeString={codeInitConfig} />
      </p>
    </div>

    <p>
      Con estos pasos, se ha configurado el servidor para escuchar en un puerto específico y responder con un mensaje de bienvenida en la ruta raíz. Para iniciar el servidor en modo de desarrollo, se puede ejecutar el comando <code>npm run dev</code> en la terminal.
    </p>

    <p className="mt-5">
      En la siguiente sección, se verá cómo se pueden agregar rutas y controladores para manejar diferentes solicitudes HTTP.
    </p>
        </section>
  )
}

export default Seccion4