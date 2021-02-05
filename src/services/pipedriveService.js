import 'dotenv/config'
import { PipeDriveApi } from '../api/pipeDrive'

class PipeDriveService {

    async findAllDealWithStatusWon(startFetchDeals = 0) {

        const dealsWon = await PipeDriveApi.get(`/deals?status=won&start=${startFetchDeals}&api_token=${process.env.PIPE_DRIVE_PERSONAL_TOKEN}`)

        const { data, success } = dealsWon.data

        if (!success) throw new Error("Erro Fetch deals")
        
        return data
    }
}


export default new PipeDriveService()