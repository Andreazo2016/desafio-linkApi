import Deal from '../database/mongo/schemas/Deal'

class DealRepository {
    async saveMany(deals) {
        await Deal.insertMany(deals)
    }
    async findAll() {
        const deals = await Deal.find({}).sort({ createdAt: -1 })
        return deals
    }
}

export default new DealRepository()