import axios from "axios";

const url = 'http://localhost:8090/api/autor';
export const findAll= async()=>{
    try {
        const respuesta= await axios.get(url)
        console.log(respuesta);
        return respuesta;
    } catch (error) {
        throw error;
        
    }
}
