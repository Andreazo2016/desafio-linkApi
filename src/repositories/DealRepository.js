import Deal from '../database/mongo/schemas/Deal'

class DealRepository{
    async saveMany(deals){
        await Deal.insertMany(deals)
    }
    async findAll(){
        const deals = await Deal.find({})
        return deals
    }
}

export default new DealRepository()