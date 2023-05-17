import { useEffect, useState } from "react";
import { findById, save } from "../servicio/AutorService";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

export const AutorForm = ()=>{

    const {id}= useParams();
    const [autor,setAutor]=useState({});
    const traer = async(id)=>{
        const respuesta = await findById(id)
        setAutor(respuesta.data)

        console.log(respuesta.data);
    }
    useEffect(()=>{
        if(id!=undefined){
            traer(id)
        }
      
    },[])
    const crear= async(nombre)=>{
        event.preventDefault();
       try {
        await  save(nombre)
        Swal.fire('Crear',`Autor ${nombre} fue creado con exito`, 'success');
    }
        catch (error) {
            if(error.response.status==404){
                Swal.fire('Error','Completo los campos correctamente', 'error');
            }
        console.log(error);
       }
    }
      
    const editar=(id)=>{
        event.preventDefault();
        console.log(id);
        console.log(autor.nombre);

    }
    const cambiar =({target})=>{
        const { name, value } = target;
        setAutor({
            ...autor,
            [name]: value,
        })
        console.log(autor);
    }

    return (<>
 <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Formulario Autor</h5>

                    </div>
                    <form >
                        

                        <div className="modal-body">
                           
                       
                            <input 
                            value={autor.nombre}
                            onChange={cambiar}
                             type="text" className="form-control my-3 w-75" placeholder="nombre" 
                            name="nombre"/>
                         

                               
                            


                        </div>
                     
                        {id==undefined ? <button disabled={autor.nombre==undefined} onClick={()=>crear(autor.nombre)} className="btn btn-dark m-4"> Crear</button>:
                        <button className="btn btn-dark m-4" onClick={()=>editar(id)}> Editar</button>}
                        

                       
                    </form>
                </div>
            </div>
    </>)
}