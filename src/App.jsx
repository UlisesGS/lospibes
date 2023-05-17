import { AutorForm } from "./componentes/AutorForm"
import { ListaPage } from "./componentes/ListaPage"
import { NavBar } from "./componentes/navBar"
import { Route, Routes } from "react-router-dom"

export const App = () => {
  return (<>
    <NavBar />
    <Routes>
      <Route path="/" element={<ListaPage></ListaPage>} />
      <Route path="/autores" element={<ListaPage></ListaPage>} />
      <Route path="/autoresForm" element={<AutorForm />} />
      <Route path="/autoresForm/editar/:id" element={<AutorForm />} />
    </Routes>

  </>)
}