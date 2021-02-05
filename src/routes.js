import { Router } from 'express'
import DealController from './controller/DealController';


const Routers = Router()

Routers.get('/deals', DealController.index)

export { Routers }