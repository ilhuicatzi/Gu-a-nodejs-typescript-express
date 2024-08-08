import CodeMd from "@/components/code/CodeMd";
import { codeInitProject } from "@/utils/codeInit";


function Seccion2() {
  return (
    
    <section id="inicializacion2" className="w-11/12 pt-24 pb-10">
    <h2 className="text-4xl font-semibold">Estructura Básica</h2>
    <p className="mt-6">
      Como todo proyecto, es necesario tener una estructura de carpetas y
      archivos bien definida.
    </p>
    <p className="mt-6">
      A continuación se muestra la estructura básica de un servidor con
      Express:
      <CodeMd codeString={codeInitProject} />
    </p>
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Directorios</h2>

      <div className="ml-4">
        <h3 className="text-xl font-medium mb-2">src/</h3>
        <ul className="list-disc ml-6 mb-4">
          <li className="mb-2">
            <strong>controllers/:</strong> Este directorio contiene los
            controladores de la aplicación. Los controladores son
            responsables de manejar las solicitudes entrantes, interactuar
            con la capa de datos y devolver las respuestas adecuadas al
            cliente.
          </li>
          <li className="mb-2">
            <strong>routes/:</strong> Aquí se definen las rutas de la
            aplicación. Cada archivo dentro de este directorio especifica
            los endpoints y asigna los controladores correspondientes para
            gestionar las solicitudes a esos endpoints.
          </li>
          <li className="mb-2">
            <strong>middlewares/:</strong> Este directorio alberga los
            middlewares de la aplicación. Los middlewares son funciones
            que se ejecutan durante el ciclo de vida de una solicitud
            HTTP, y pueden realizar tareas como validación, autenticación,
            y manipulación de solicitudes o respuestas.
          </li>
          <li className="mb-2">
            <strong>app.ts:</strong> Este archivo es el punto de entrada
            de la aplicación. Configura y arranca el servidor, integrando
            las rutas, controladores y middlewares necesarios.
          </li>
          <li className="mb-2">
            <strong>config.ts:</strong> Contiene la configuración de la
            aplicación, como variables de entorno, parámetros de conexión
            a bases de datos y otros ajustes configurables.
          </li>
          <li className="mb-2">
            <strong>index.ts:</strong> Archivo principal que inicia la
            aplicación, importando y configurando los módulos necesarios.
          </li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Archivos</h2>

      <div className="ml-4">
        <ul className="list-disc ml-6 mb-4">
          <li className="mb-2">
            <strong>.gitignore:</strong> Especifica los archivos y
            directorios que Git debe ignorar. Esto es útil para evitar que
            archivos temporales, dependencias y otros archivos
            innecesarios se incluyan en el repositorio.
          </li>
          <li className="mb-2">
            <strong>.eslintignore:</strong> Define qué archivos y
            directorios deben ser ignorados por ESLint, la herramienta de
            análisis estático de código que ayuda a mantener un código
            limpio y consistente.
          </li>
          <li className="mb-2">
            <strong>.eslintrc.json:</strong> Contiene la configuración
            para ESLint, especificando las reglas y ajustes que deben
            aplicarse al analizar el código del proyecto.
          </li>
          <li className="mb-2">
            <strong>package.json:</strong> Archivo de configuración de npm
            que contiene información sobre el proyecto, como sus
            dependencias, scripts y metadatos del proyecto.
          </li>
          <li className="mb-2">
            <strong>tsconfig.json:</strong> Archivo de configuración para
            TypeScript, que define las opciones del compilador y las
            configuraciones del proyecto TypeScript.
          </li>
          <li className="mb-2">
            <strong>README.md:</strong> Archivo de documentación que
            proporciona una descripción general del proyecto,
            instrucciones de instalación, uso, y otra información
            relevante para los desarrolladores y usuarios.
          </li>
        </ul>
      </div>

      <div className="flex justify-center items-center">
        <img className="h-96 rounded-xl object-cover" src="/img/setup_node.png" alt="imagen setup project" />
      </div>

      <p className="mt-4">
        Esta estructura de carpetas y archivos está diseñada para mantener
        el código organizado y modular, facilitando el desarrollo y
        mantenimiento de la aplicación a medida que crece en complejidad.
      </p>
    </div>
  </section>
  )
}

export default Seccion2