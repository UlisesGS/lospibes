import { Route, Routes } from "react-router"
import { ListaPage } from "./componentes/ListaPage"
import { AutorForm } from "./componentes/AutorForm"
import { EditorialList } from "./componentes/editorial/EditorialList"
import { EditorialForm } from "./componentes/editorial/EditorialForm"
import { LibroList } from "./componentes/libro/LibroList"
import { LibroForm } from "./componentes/libro/LibroForm"

export const RutasApp = ()=>{
    return (<>
        <Routes>
      <Route path="/" element={<ListaPage></ListaPage>} />
      <Route path="/autores" element={<ListaPage></ListaPage>} />
      <Route path="/libros" element={<LibroList/>} />
      <Route path="/libros/form" element={<LibroForm/>} />
      <Route path="/libros/form/:id" element={<LibroForm/>} />

      <Route path="/autoresForm" element={<AutorForm />} />
      <Route path="/autoresForm/editar/:id" element={<AutorForm />} />
      <Route path="/editoriales" element={<EditorialList/>} />
      <Route path="/editorial/editar" element={<EditorialForm />} />
      <Route path="/editorial/editar/:id" element={<EditorialForm />} />
    </Routes>

    
    </>)
}