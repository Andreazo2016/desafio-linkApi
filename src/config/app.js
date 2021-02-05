import express from 'express'
import {Routers } from '../routes'
import '../database/mongo/index'
import {insertDealPipeDriveDB} from '../schedules'

const app = express()

app.use(Routers)

insertDealPipeDriveDB.start();

export { app }