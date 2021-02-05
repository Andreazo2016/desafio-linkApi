import Deal from '../database/mongo/schemas/Deal'

class DealRepository {
    async saveMany(deals) {
        await Deal.insertMany(deals)
    }
    async findAll() {
        const deals = await Deal.find({}).sort({ createdAt: -1 })
        return deals
    }
    async findAllOrderNotBlingSent() {
        const dealsNotSent = await Deal.find({ bling_send: false })
        return dealsNotSent
    }
    async updateStatusBlingSend(id) {
        await Deal.findByIdAndUpdate(id, { bling_send: true })
    }
}

export default new DealRepository()