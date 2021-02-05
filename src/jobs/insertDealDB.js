import DealRepository from '../repositories/DealRepository';
import PipeDriveService from '../services/pipedriveService'

export default async function insertDealDB() {
    try {
        
        console.log('-------- Iniciando insercao de deals no BD ------------')

        const deals = await DealRepository.findAll()

        const dealsLength = deals.length

        const data = await PipeDriveService.findAllDealWithStatusWon(dealsLength)

        if (data) {
            console.log('Inserindo.....')
            const dealList = data.map(({
                title,
                value,
                currency,
                won_time
            }) => ({
                title,
                value,
                currency,
                won_time
            }))

            await DealRepository.saveMany(dealList)
        }

        console.log('-------- Finalizado insercao de deals no BD ------------')

    } catch (error) {
        console.log(error);
        console.log("Error na insercao das deals")
    }
}