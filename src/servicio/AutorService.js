import axios from "axios";
import Swal from "sweetalert2";

const url = 'http://localhost:8090/api/autor';
const config = () => {
    return {
        headers: {
          
            "Content-Type": "application/json",
        }
    }
}
export const findAll= async()=>{
    try {
        const respuesta= await axios.get(url)
        console.log(respuesta);
        return respuesta;
    } catch (error) {
        throw error;
        
    }
}
export const findById = async(id)=>{
    try {
        return await axios.get(`${url}/${id}`)
    } catch (error) {
      Swal.fire('Error', `el autor ${id} no exite`,'error')
        
    }
}
export const save = async(nombre)=>{
    try {
        return await axios.post(url,{nombre},config)
    } catch (error) {
        throw error;
    }

}
export const update = async(nombre,id)=>{
    try {
        return await axios.put(`${url}/${id}`,{nombre})
    } catch (error) {
        throw error;
    }
    
}
export const eliminar = async(id)=>{
    axios.delete(`${url}/${id}`);
}
