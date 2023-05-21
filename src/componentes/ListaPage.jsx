import { useEffect, useState } from "react"
import { findAll } from "../servicio/AutorService";
import Swal from "sweetalert2";
import { useNavigate} from "react-router-dom";
import { NavLink } from "react-router-dom";
import { eliminar } from './../servicio/AutorService';
let autorinicial={
    id:0,
    nombre:"",
}
export const ListaPage=()=>{
    const navegar = useNavigate();
    const[autores,setAutores]= useState([]);
   // const[autor,setAutor]=useState(autorinicial)
  let autor={

   }
    const traerAutores = async()=>{
        const respuesta = await findAll();
        console.log(respuesta.data);
        setAutores(respuesta.data)

    }
    
    const editar= (a) => {
       // console.log(a);
       // setAutor(autorinicial)
       // setAutor(a);
       autor=a
        console.log(autor);
    //Swal.fire('En construccion',`para el ${a.nombre} esta en contruccion`,'info')
    navegar('/autoresForm')
    }
    useEffect(()=>{
      traerAutores();
    },[])
    /*
    useEffect(()=>{
        traerAutores();
      },[autores])
      */
    const abrirFomulario=()=>{
        navegar("/autoresForm");

    }
    const eliminarA= async(id)=>{
        setAutores(autores.filter(a=>a.id!=id))
        await eliminar(id);
     
    
        Swal.fire('Eliminar', `Autor ${id} fue elimado con exito`, 'info')
        navegar("/autores")

    }
    return (<>
    <h5 className="m-4">Lista de Autores</h5>
    <button onClick={()=>abrirFomulario()} className="btn btn-dark m-4">Crear Autor</button>
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
        <NavLink  className="btn btn-sm btn-outline-secondary" 
        to={`/autoresForm/editar/${a.id}`}>Editar
        </NavLink>
            
        </td>
        <td>
            <button onClick={()=>eliminarA(a.id)} className="btn btn-danger btn-sm">Eliminar</button>
            
        </td>
        </tr>
   ))}
   
   
       
</tbody>
</table>

    </>)
}