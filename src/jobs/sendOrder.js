import DealRepository from '../repositories/DealRepository';
import BlingService from '../services/blingService'

export default async function sendOrder() {
    try {

        console.log('-------- Enviando Pedidos ------------')

        const deals = await DealRepository.findAllOrderNotBlingSent()

        for (const deal of deals) {
            const response = await BlingService.sendOrder(deal)
            console.log(`sent: ${JSON.stringify(response)}`)
            await DealRepository.updateStatusBlingSend(deal._id)
        }


        console.log('-------- Ordens enviada ------------')

    } catch (error) {
        console.log(error);
        console.log("Error na insercao das deals")
    }
}