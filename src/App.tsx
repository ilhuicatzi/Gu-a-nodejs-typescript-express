import { Route, Routes } from "react-router-dom";
import Home from "./pages/HomePage";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Configuracion from "@/pages/Configuracion";
import CodeTsconfigDefault from "./pages/codigos/CodeTsconfigDefault";
import Inicializacion from "@/pages/Inicializacion";
import Rutas from "./pages/Rutas";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/configuracion" element={<Configuracion />} />
        <Route path="/configuracion/code/tsconfigDefault" element={<CodeTsconfigDefault />} />
        <Route path="/inicializacion" element={<Inicializacion />} />
        <Route path="/rutas" element={<Rutas />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
