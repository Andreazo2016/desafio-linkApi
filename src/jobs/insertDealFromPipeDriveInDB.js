import DealService from '../services/DealService'
import PipeDriveService from '../services/pipedriveService'
import moment from 'moment-timezone'

export default async function insertDealDB() {
    try {

        const deals = await DealService.findAll()

        const dealsLength = deals.length

        const data = await PipeDriveService.findAllDealWithStatusWon(dealsLength)

        if (data) {
            console.log('-------- Iniciando insercao de deal no BD ------------')
            console.log('Inserindo.....')
            const dealList = data.map(({
                id,
                person_id,
                title,
                value,
                currency,
                won_time
            }) => ({
                cod: id,
                title,
                owern_name: person_id.name,
                value,
                currency,
                won_time,
                date: moment(new Date()).tz('America/Sao_Paulo').format('DD/MM/YYYY')
            }))

            await DealService.saveMany(dealList)
            console.log('-------- Finalizado insercao de deal no BD ------------')
        }


    } catch (error) {
        console.log(error);
        console.log("Error na insercao das deals")
    }
}