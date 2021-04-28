import { clienteAxios } from "../config/axios";
import Swal from "sweetalert2";
import '../styles/alert.css';
import { Redirect } from "react-router";
import { Link } from "react-router-dom";

export const CreatePreferencia = async ( phone , history) => {

    const {id,name_product,description,url,cantidad,precio} = phone;

    const newprecio = precio.split(".",2);
    const newa = newprecio.join('')

    console.log(history)

    try {

        const result = await clienteAxios.post('/api/products', {
            "id": id ,
            "name_product": name_product,
            "description" : description,
            "url": url,
            "cantidad": parseInt(cantidad),
            "precio": parseInt(newa)
        } )
        console.log(result)
        const point = result.data.producto.body.init_point;
        if(result){
            window.location.href = point; 
        }else {
            return null;
        }
    } catch (error) {
        console.log(error)
        Swal.fire('Error','El producto no se agrego','error')

    }

}