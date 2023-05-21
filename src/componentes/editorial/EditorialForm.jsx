import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router"
import { editorialEditar, editorialFindById, editorialSave } from "../../servicio/EditorialService"
import Swal from "sweetalert2"
const editorialIncial={
    id:0,
    nombre:"",
}
export const EditorialForm=()=>{
    const navegar = useNavigate()
    const [titulo,setTitulo]=useState("")
    const {id} = useParams()
    const [editorial, setEditorial]= useState(editorialIncial)
    const [error, setError]= useState({})
    const seleccion = async (id)=>{
    const respuesta = await editorialFindById(id);
    console.log(respuesta.data);
    setEditorial(respuesta.data)
    }
    const editar = async (id)=>{
        event.preventDefault();
       // console.log(editorial);
       try {
        await editorialEditar(id,editorial.nombre)
        Swal.fire('Actualizado', `La editorial ${editorial.nombre} fue actualizada con exito`, 'success');
        navegar('/editoriales')
       } catch (error) {
        if (error.response.status ==404){
            setError(error.response.data);
        }
       }
    }
    const crear = async(nombre)=>{
        event.preventDefault();
      try {
        await editorialSave(nombre)
        Swal.fire('Creado', `la Editorial ${nombre} fue creada con exito`, 'success')
        navegar('/editoriales')
      } catch (error) {
        if(error.response.status==404){
            setError(error.response.data)
        }
      }
//console.log(editorial);
    }
    useEffect(()=>{
        if(id!=undefined){
            seleccion(id);
            setTitulo('Editar Editorial')
            console.log(editorial);
        }else{
        setTitulo('Crear Editorial')
        }
    },[])
    const cambio = ({target})=>{
  const {name,value}=target;
  setEditorial({
    ...editorial,
    [name]: value,
})
    }
    return (<>
    <div className="card">
  <h5 className="card-header">{titulo}</h5>
  <div className="card-body">
  <form >
                        

                        <div className="modal-body">
                           
                       
                            <input 
                            value={editorial.nombre}
                            onChange={cambio}
                           
                             type="text" className="form-control my-3 w-75" placeholder="nombre" 
                            name="nombre"/>
                         
                         <p className="text-danger">{error?.nombre}</p>
                               
                            


                        </div>
                        
                     
                        {id==undefined ? <button disabled={editorial.nombre==undefined} onClick={()=>crear(editorial.nombre)} className="btn btn-dark m-4"> Crear</button>:
                        <button className="btn btn-dark m-4" onClick={()=>editar(id)}> Editar</button>}
                        

                       
                    </form>
  
  </div>
</div>
    </>)
}