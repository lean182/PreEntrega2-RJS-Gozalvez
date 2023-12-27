import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import NavBar from "./componentes/NavBar/NavBar";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./componentes/Error/Error";

import "./App.css";

function App() {
  return (
    <div id="app">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer saludo="Bienvenidos a mi Primer eCommerce" />}
          />
          <Route
            path="/categorias/:categoria"
            element={<ItemListContainer saludo="Bienvenidos a mi Primer eCommerce" />}
          />
          <Route path="/detalle/:id" element={<ItemDetailContainer />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
