import { Router } from 'express'
import DealController from './controller/DealController';


const Routers = Router()

Routers.get('/reports', DealController.reports)
Routers.get('/deals', DealController.all)

export { Routers }