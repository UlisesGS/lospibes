import  axios  from 'axios';
import Swal from 'sweetalert2';

const url= 'http://localhost:8090/api/libro'

export const libroFindAll= async()=>{
    try {
        return await axios.get(url);
    } catch (error) {
        throw error;
    }
}
export const libroFindById = async(id)=>{
    try {
        const respuesta= await axios.get(`${url}/${id}`)
        console.log(respuesta);
        return respuesta;
    } catch (error) {
        Swal.fire('Error', `Libro con el id ${id} no encontrado`, 'error');
    }
}
export const libroSave=async(libro)=>{
    let{nombre,paginas,idAutor,idEditorial}=libro;
    paginas = parseInt(paginas);
    idAutor = parseInt(idAutor)
    idEditorial= parseInt(idEditorial)
    console.log(libro);
    try {
        return await axios.post(url,{
            nombre,
            paginas,
            idAutor,
            idEditorial
        })
        
    } catch (error) {
        throw error;
        
    }
}
export const libroDelete = async(id)=>{
    await axios.delete(`${url}/${id}`)

}