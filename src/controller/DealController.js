import PipeDriveService from '../services/pipedriveService';
class DealController {
    async index(req, res) {
        try {
            const response = await PipeDriveService.findAllDealWithStatusWon()
            return res.status(200).json(response)
        } catch (error) {
            console.log(error)
            return res.status(500).json(error)
        }
    }
}

export default new DealController()