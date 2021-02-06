import DealRepository from '../repositories/DealRepository'

class DealService {
    async saveMany(deals) {
        await DealRepository.saveMany(deals)
    }
    async findAll() {
        const deals = await DealRepository.findAll()
        return deals
    }
    async findAllAggregateByDate() {
        const deals = await DealRepository.findAllAggregateByDate()
        return deals
    }
    async findAllNotBlingSent() {
        const dealsNotSent = await DealRepository.findAllNotBlingSent()
        return dealsNotSent
    }
    async updateStatusBlingSend(id) {
        await DealRepository.updateStatusBlingSend(id)
    }
}

export default new DealService()