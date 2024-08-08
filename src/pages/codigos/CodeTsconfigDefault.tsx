import CodeJson from "@/components/code/CodeJson";
import { codeTsconfig } from "@/utils/codeConfig";
import { Link } from "react-router-dom";
import { ArrowBack } from "@/assets/icons/ArrowBack";

function CodeTsconfigDefault() {
  return (
    <section className="flex justify-center items-center mt-10">
      <article className="flex flex-col items-center w-full px-10">
        <div className="flex justify-between w-full items-center gap-3">
          <Link to="/configuracion" className="flex items-center rounded-full p-1 hover:bg-muted">
            <ArrowBack className="text-3xl" />
            <span className="sr-only">Volver</span>
          </Link>
          <h2 className="w-full text-start text-3xl ">Configuración default de Typescript</h2>
        </div>
        <div className="w-full">
        <CodeJson codeString={codeTsconfig} />
        </div>
      </article>
    </section>
  );
}

export default CodeTsconfigDefault;
