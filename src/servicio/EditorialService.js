import axios from "axios";
import Swal from "sweetalert2";

const url = 'http://localhost:8090/api/editorial';
export const editorialFindAll=async()=>{
    try {
        return await axios.get(url)
        
    } catch (error) {
        Swal.fire('Error', 'Sistema caido', 'error')
        throw error;
    }
}
export const editorialFindById= async(id)=>{
    try {
        return await axios.get(`${url}/${id}`);
    } catch (error) {
        Swal.fire('Error',`la editorial con id ${id} no exites`, 'error');
        throw error;
    }
}
export const editorialSave = async(nombre)=>{
    try {
        return await axios.post(url,{
            nombre
        })
    } catch (error) {
        throw error;
    }
}
export const editorialEditar = async(id,nombre)=>{
    try {
        return await axios.put(`${url}/${id}`,{nombre})
    } catch (error) {
        throw error;
    }
}
export const editorialDelete = async(id)=>{
    await axios.delete(`${url}/${id}`)
}