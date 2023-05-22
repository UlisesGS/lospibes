import { useEffect, useState } from "react"
import { libroDelete, libroFindAll } from "../../servicio/LibroService"
import { NavLink } from 'react-router-dom';
import { findAll, findById } from "../../servicio/AutorService";
import Swal from "sweetalert2";
import { useNavigate } from 'react-router';

export const LibroList=()=>{
    const navegar = useNavigate()
const [lista,setLista]= useState([])

const titulo = 'Lista de Libros'

const traer = async()=>{
    const respuesta = await libroFindAll();
    setLista(respuesta.data)
    console.log(respuesta.data);
}
useEffect(()=>{
    traer()
    

},[])
const verAutor= async(id)=>{
    const respuesta=  await findById(id);
    let autor =`id: ${respuesta.data.id}` +` \n Nombre: ${respuesta.data.nombre}`;

    Swal.fire({
        icon: 'info',
        title: 'Autor ',
        text: autor, 
    

      
      })
      

}
const eliminar = async(id)=>{
    await libroDelete(id)
    Swal.fire('Eliminado',`EL libro con id ${id} fue eliminado con exito`, 'warning');
    setLista(lista.filter(l=>l.id!=id))

}
const abrirFormulario=()=>{
navegar("/libros/form")
}
    
    return (<>
     <div className="card">
  <h5 className="card-header">{titulo}</h5>
  
  <div className="card-body">
  <button onClick={abrirFormulario} className="btn btn-dark btn-sm  m-1">Crear</button>
  <table className="table">
  <thead>
    <tr>
      <th >Id</th>
      <th >Nombre</th>
      <th >Paginas</th>
      <th >Autor</th>
      <th >Editorial</th>
      <th >Editar</th>
      <th >Eliminar</th>
    </tr>
  </thead>
  <tbody>
    {lista.map(a =>(
        <tr key={a.id} >
        <td>{a.id}</td>
        <td>{a.nombre}</td>
        <td>{a.paginas}</td>
        <td>{a.idAutor} <button onClick={()=>verAutor(a.idAutor)} className="btn btn-primary btn-sm">ver</button></td>
        <td>{a.idEditorial}</td>
        <td>
        <NavLink  className="btn btn-sm btn-outline-secondary" 
        to={`/libros/form/${a.id}`}>Editar
        </NavLink>
            
        </td>
        <td>
            <button onClick={()=>eliminar(a.id)}  className="btn btn-danger btn-sm">Eliminar</button>
            
        </td>
        </tr>
    ))}
    
   

  </tbody>
  </table>
 
  </div>
</div>

    </>)
}