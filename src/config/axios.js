import axios from 'axios'

export const clienteAxios = axios.create({
    baseURL : 'https://felipetrick12-ecommerce-mp.herokuapp.com'
});