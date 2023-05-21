import { RutasApp } from "./RutasApp"
import { AutorForm } from "./componentes/AutorForm"
import { ListaPage } from "./componentes/ListaPage"
import { EditorialList } from "./componentes/editorial/EditorialList"
import { NavBar } from "./componentes/navBar"
import { Route, Routes } from "react-router-dom"

export const App = () => {
  return (<>
    <NavBar />
    <RutasApp />
  </>)
}