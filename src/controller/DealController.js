import DealService from '../services/DealService';

class DealController {
    async reports(req, res) {
        try {
            const deals = await DealService.findAllAggregateByDate()
            return res.status(200).json(deals)
        } catch (error) {
            return res.status(500).json({ message: "Internal Server Error" })
        }
    }
    async all(req, res) {
        try {
            const deals = await DealService.findAll()
            return res.status(200).json(deals)
        } catch (error) {
            return res.status(500).json({ message: "Internal Server Error" })
        }
    }
}

export default new DealController()