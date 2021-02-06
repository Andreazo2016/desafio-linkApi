import express from 'express'
import { Routers } from '../routes'
import '../database/mongo/index'
import { insertDealsPipeDriveDB, sendDealsToBling } from '../schedules'

const app = express()

app.use(Routers)

insertDealsPipeDriveDB.start();
sendDealsToBling.start();

export { app }