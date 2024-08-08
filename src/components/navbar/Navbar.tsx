import { Link } from "react-router-dom";
import DarkButton from "./DarkButton";
import { GithubIcon } from "../../assets/icons/GithubIcon";
import { Hamburger } from "@/assets/icons/Hamburger";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="h-16 relative">
      <nav className="z-30 backdrop-blur-md bg-zinc-200/20 dark:bg-zinc-950/20 fixed w-full flex justify-between items-center md:px-16 px-4 py-3">
        <ul className="hidden md:flex items-center gap-4">
          <li>
            <Link to="/">
              <img
                className="w-12 h-12 object-cover rounded-full border-2 border-transparent hover:border-blue-600"
                src="/zao-logo.jpeg"
                alt="zao logo"
              />
            </Link>
          </li>
          <li className="cursor-pointer px-4 py-1 text-md font-medium hover:text-blue-600 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-800">
            <Link to="/configuracion/#configuracion">Configuración</Link>
          </li>
          <li className="cursor-pointer px-4 py-1 text-md font-medium hover:text-blue-600 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-800">
            <Link to="/inicializacion/#inicializacion">Inicialización</Link>
          </li>
          <li className="cursor-pointer px-4 py-1 text-md font-medium hover:text-blue-600 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-800">
            <Link to="/rutas/#rutas">Routes</Link>
          </li>
        </ul>

        <div className="flex justify-center items-center md:hidden mr-2 p-2 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-800">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center"
            aria-label="menu"
          >
            <Hamburger className="text-xl" />
          </button>
        </div>

        <ul className="flex items-center gap-2">
          <li className="mr-2 p-2 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-800">
            <button
              aria-label="github"
              className="flex items-center"
              onClick={() =>
                window.open(
                  "https://github.com/ilhuicatzi/Guia-nodejs-typescript-express",
                  "_blank"
                )
              }
            >
              <GithubIcon className="text-xl" />
            </button>
          </li>
          <li>
            <DarkButton />
          </li>
        </ul>

        {isOpen && (
          <div className="absolute top-14 w-full pr-8 flex justify-center md:hidden">
            <ul className="w-full flex flex-col items-center gap-2 bg-zinc-200/95 dark:bg-zinc-900/95 p-4 rounded-lg">
              <Link to="/" className="w-full flex justify-center" onClick={()=> setIsOpen(false)}>
                <li className="w-full cursor-pointer flex justify-center px-4 py-2 text-md font-medium hover:text-blue-600 rounded-lg hover:bg-zinc-300 dark:hover:bg-zinc-800">
                  Home
                </li>
              </Link>

              <Link to="/configuracion/#configuracion" className="w-full flex justify-center" onClick={()=> setIsOpen(false)}>
                <li className="w-full cursor-pointer flex justify-center px-4 py-2 text-md font-medium hover:text-blue-600 rounded-lg hover:bg-zinc-300 dark:hover:bg-zinc-800">
                  Configuración
                </li>
              </Link>

              <Link to="/inicializacion/#inicializacion" className="w-full flex justify-center" onClick={()=> setIsOpen(false)}>
                <li className="w-full cursor-pointer flex justify-center px-4 py-2 text-md font-medium hover:text-blue-600 rounded-lg hover:bg-zinc-300 dark:hover:bg-zinc-800">
                  Inicialización
                </li>
              </Link>

              <Link to="/rutas/#rutas" className="w-full flex justify-center" onClick={()=> setIsOpen(false)}>
                <li className="w-full cursor-pointer flex justify-center px-4 py-2 text-md font-medium hover:text-blue-600 rounded-lg hover:bg-zinc-300 dark:hover:bg-zinc-800">
                  Routes
                </li>
              </Link>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
