import 'dotenv/config'
import axios from 'axios'

const BASE_URL_BLING = process.env.BLING_URL
const blingApi = axios.create({
    baseURL: BASE_URL_BLING
})

export { blingApi }