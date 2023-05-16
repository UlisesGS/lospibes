import { useEffect, useState } from "react"
import { findAll } from "../servicio/AutorService";
import Swal from "sweetalert2";

export const ListaPage=()=>{

    const[autores,setAutores]= useState([]);
    const traerAutores = async()=>{
        const respuesta = await findAll();
        console.log(respuesta.data);
        setAutores(respuesta.data)

    }
    const editar= (id) => {
    Swal.fire('En construccion',`para el ${id} esta en contruccion`,'info')
    }
    useEffect(()=>{
      traerAutores();
    },[])
    return (<>
    <h5 className="m-4">Lista de Autores</h5>
 <table className="table table-hover table-striped">

<thead>
    <tr>
        <th>id</th>
        <th>Nombre</th>
       

      
            <th>editar</th>
        
            <th>eliminar</th>
       
    </tr>
</thead>
<tbody>
{autores.map(a=>(
        <tr key={a.id}>
        <td>{a.id}</td>
        <td>{a.nombre}</td>
        <td>
            <button onClick={()=>editar(a.id)} className="btn btn-dark btn-sm">Editar</button>
            
        </td>
        <td>
            <button className="btn btn-danger btn-sm">Eliminar</button>
            
        </td>
        </tr>
   ))}
   
   
       
</tbody>
</table>

    </>)
}