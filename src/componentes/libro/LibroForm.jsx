import { useEffect, useState } from "react"
import { findAll } from "../../servicio/AutorService";
import { editorialFindAll } from "../../servicio/EditorialService";
import { useParams } from 'react-router';
import { libroFindById, libroSave } from "../../servicio/LibroService";
import Swal from "sweetalert2";
import { useNavigate } from 'react-router';

export const LibroForm = () => {
    const navegar = useNavigate()
    const[titulo,setTitulo]= useState("")
    const{id}=useParams();
    const [libro, setLibro] = useState({})
    const [autores,setAutores]=useState([])
    const [editoriales,setEditoriales]= useState([])
    const [error,setError]= useState({})
    const seleccion = async(id)=>{
        const respuesta = await libroFindById(id);
        console.log(respuesta);
        setLibro(respuesta.data)
    }
    const traer = async ()=>{
        const respuesta = await findAll();
        const editorial = await editorialFindAll();
        setAutores(respuesta.data)
        setEditoriales(editorial.data);
    }
    const cambio = ({target})=>{
        const {name,value}=target;
        setLibro({
            ... libro,
            
            [name]:value,
        })
        console.log(name);
    }
    const crear = async (libro)=>{
        console.log(libro);
        event.preventDefault();
        try {
        await  libroSave(libro);
        Swal.fire('Creado', `Libro ${libro.nombre} creado con exito!!!`, 'success')
        navegar("/libros")
        
            
        } catch (error) {
           if (error.response.status==404 || error.response.status==500){
            setError(error.response.data)
            Swal.fire('Error','Completo los campos correctamente', 'error');
           }
        }
            
        

    }
    const editar=(id)=>{
        event.preventDefault();
        console.log(libro);

    }

    useEffect(()=>{
        traer()
        if(id!=undefined){
            setTitulo('Editar Libro')
            seleccion(id)
        }else{
            setTitulo('Crear Libro')
        }
        
    },[])
    return (<>
        <div className="card">
            <h5 className="card-header">{titulo}</h5>
            <div className="card-body">
                <form >


                    <div className="modal-body">
                        <input
                            value={libro.nombre}
                            onChange={cambio}
                            type="text" className="form-control my-3 w-75" placeholder="nombre"
                            name="nombre" />
                        <p className="text-danger">{error?.nombre}</p>
                    </div>
                    <div className="modal-body">
                        <input
                            value={libro.paginas}
                            onChange={cambio}
                            type="text" className="form-control my-3 w-75" placeholder="paginas"
                            name="paginas" />
                        <p className="text-danger">{error?.paginas}</p>
                    </div>


                   
 <div className="modal-body">
<select name="idAutor"  onChange={cambio} value={libro.idAutor} className="form-select" aria-label="Default select example">
  {autores.map(autor=>(

  <option  key={autor.id} value={autor.id}>{autor.nombre}</option>
 
))}
  </select>
  </div>
  <div className="modal-body my-2">
<select name="idEditorial" onChange={cambio}  className="form-select" aria-label="Default select example">
  {editoriales.map(e=>(

  <option  key={e.id} value={e.id}>{e.nombre}</option>
 
))}
  </select>
  </div>
  {id == undefined ? <button disabled={libro.nombre == undefined || 
  libro.idAutor== undefined ||
   libro.idEditorial==undefined} onClick={() => crear(libro)} className="btn btn-dark m-4"> Crear</button> :
                        <button className="btn btn-dark m-4" onClick={() => editar(id)}> Editar</button>}
                </form>

            </div>
        </div>

    </>)
}