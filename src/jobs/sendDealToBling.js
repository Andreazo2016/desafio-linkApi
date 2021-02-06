import DealService from '../services/DealService';
import BlingService from '../services/blingService'

export default async function sendOrder() {
    try {

        const deals = await DealService.findAllNotBlingSent()

        for (const deal of deals) {
            console.log('-------- Enviando deals ------------')
            const response = await BlingService.sendOrder(deal)
            console.log(`deal: ${JSON.stringify(response)}`)
            console.log('-------- deals enviada ------------')
            await DealService.updateStatusBlingSend(deal._id)
        }


    } catch (error) {
        console.log(error);
        console.log("Error na insercao das deals")
    }
}