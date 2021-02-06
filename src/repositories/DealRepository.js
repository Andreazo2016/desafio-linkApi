import Deal from '../database/mongo/schemas/Deal'

class DealRepository {
    
    async saveMany(deals) {
        await Deal.insertMany(deals)
    }

    async findAll() {
        const deals = await Deal.find({}).sort({ createdAt: -1 })
        return deals
    }

    async findAllAggregateByDate() {
        const deals = await Deal.aggregate([
            {
                $group:
                {
                    _id: '$date',
                    totalValue: { $sum: '$value' },
                    qtd: { $sum: 1 },

                }

            },
            {
                $project:
                {
                    _id: 0,
                    totalValue: 1,
                    qtd: 1,
                    date: "$_id"
                }
            },
            { $sort: { count: 1 } },
        ])
        return deals
    }

    async findAllNotBlingSent() {
        const dealsNotSent = await Deal.find({ bling_send: false })
        return dealsNotSent
    }

    async updateStatusBlingSend(id) {
        await Deal.findByIdAndUpdate(id, { bling_send: true })
    }
}

export default new DealRepository()