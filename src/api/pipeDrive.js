import axios from 'axios';

const BASE_URL_PIPEDRIVE = `https://${process.env.MY_COMPANY_DOMAIN}.pipedrive.com/api/v1`;
const PipeDriveApi = axios.create({
    baseURL: BASE_URL_PIPEDRIVE
})

export { PipeDriveApi }