import DealRepository from '../repositories/DealRepository';
import BlingService from '../services/blingService';

class DealController {
    async index(req, res) {
        try {
            const deals = await DealRepository.findAll()
            return res.status(200).json(deals)
        } catch (error) {
            console.log(error)
            return res.status(500).json(error)
        }
    }
}

export default new DealController()