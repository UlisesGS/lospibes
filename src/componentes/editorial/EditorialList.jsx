import { useEffect, useState } from "react"
import { editorialDelete, editorialFindAll } from "../../servicio/EditorialService";
import {  NavLink, useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";


export const EditorialList=()=>{
  const navegar = useNavigate();
    const [lista, setLista]= useState([]);
   
    const listar =async()=>{
        const respuesta = await editorialFindAll()
     console.log(respuesta.data);

    setLista(respuesta.data)
     console.log(lista);   

    }
    useEffect(()=>{
        listar();
      },[])
    const abrir = ()=>{
      navegar('/editorial/editar')
    }
    const titulo = 'Lista Editorial';
    const eliminar =async(id)=>{
      try {
        await editorialDelete(id);
        Swal.fire('Eliminado', 'La Editorial fue eliminada con exito', 'info');
        setLista(lista.filter(e=>e.id!=id))
      } catch (error) {
        console.log(error);
      }
    }
    return (<>
    <div className="card">
  <h5 className="card-header">{titulo}</h5>
  
  <div className="card-body">
  <button onClick={abrir} className="btn btn-dark btn-sm  m-1">Crear</button>
  <table className="table">
  <thead>
    <tr>
      <th >Id</th>
      <th >Nombre</th>
      <th >Editar</th>
      <th >Eliminar</th>
    </tr>
  </thead>
  <tbody>
    {lista.map(a =>(
        <tr key={a.id} >
        <td>{a.id}</td>
        <td>{a.nombre}</td>
        <td>
        <NavLink  className="btn btn-sm btn-outline-secondary" 
        to={`/editorial/editar/${a.id}`}>Editar
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