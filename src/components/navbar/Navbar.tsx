import { Link } from "react-router-dom";
import DarkButton from "./DarkButton";
import { GithubIcon } from "../../assets/icons/GithubIcon";

function Navbar() {
  return (
<div className="h-20">
<nav className="z-30 backdrop-blur-md bg-zinc-200/20 dark:bg-zinc-950/20 fixed w-full flex justify-between items-center sm:px-16 px-4 py-3">
        <ul className="flex items-center gap-4">
          <li>
            <Link to="/">
              <img
                className="w-12 h-12 object-cover rounded-full border-2 border-transparent hover:border-blue-600"
                src="/zao-logo.jpeg"
                alt="zao logo"
              />
            </Link>
          </li>
          <li className="px-4 py-1 text-md font-medium hover:text-blue-600 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-800">
            <Link to="/configuracion">Configuración</Link>
          </li>
          <li className="px-4 py-1 text-md font-medium hover:text-blue-600 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-800">
            <Link to="/inicializacion">Inicialización</Link>
          </li>
          <li className="px-4 py-1 text-md font-medium hover:text-blue-600 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-800">
            <Link to="/rutas">Routes</Link>
          </li>
        </ul>
        <ul className="flex items-center gap-2">
          <li className="mr-2 p-2 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-800">
            <button
              className="flex items-center"
              onClick={() =>
                window.open("https://github.com/ilhuicatzi", "_blank")
              }
            >
              <GithubIcon className="text-xl" />
            </button>
          </li>
          <li>
            <DarkButton />
          </li>
        </ul>
      </nav>
</div>
  );
}

export default Navbar;
