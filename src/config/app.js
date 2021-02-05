import express from 'express'
import { Routers } from '../routes'
import '../database/mongo/index'
import { insertDealPipeDriveDB, sendOrderToBling } from '../schedules'

const app = express()

app.use(Routers)

insertDealPipeDriveDB.start();
sendOrderToBling.start();

export { app }