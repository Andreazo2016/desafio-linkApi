import 'dotenv/config'
import createXmlOrder from '../util/bling/createXmlOrder'
import { blingApi } from '../api/bling'

class BlingService {

    async sendOrder(order) {
        const xml = await createXmlOrder(order)
        const response = await blingApi.post(`?apikey=${process.env.BLING_API_KEY}&xml=${xml}`)
        return response.data
    }
}

export default new BlingService()