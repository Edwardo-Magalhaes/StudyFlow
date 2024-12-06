import { BrowserRouter, Route, Routes } from "react-router-dom";
import Planos from "./pages/Planos";
import Inicio from "./pages/Inicio";
import Edital from "./pages/Edital";
import Cronograma from "./pages/Cronograma";
import { MenuProvider } from "../src/components/Menu/MenuContext"; // Importe o MenuProvider

function AppRoutes() {
  return (
    <MenuProvider> {/* Envolva a aplicação com o MenuProvider */}
      <BrowserRouter>
        <Routes>
          <Route path="/Planos" element={<Planos />}></Route>
          <Route path="/Inicio" element={<Inicio />}></Route>
          <Route path="/Edital" element={<Edital />}></Route>
          <Route path="/Cronograma" element={<Cronograma />}></Route>
        </Routes>
      </BrowserRouter>
    </MenuProvider>
  );
}

export default AppRoutes;
