import axios from 'axios';

const BASE_URL_BLING = `https://bling.com.br/Api/v2/pedido/json/`;
const blingApi = axios.create({
    baseURL: BASE_URL_BLING
})

export { blingApi }