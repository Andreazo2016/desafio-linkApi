import cron from 'node-cron'
import InsertDealDB from './jobs/insertDealFromPipeDriveInDB';
import SendOrder from './jobs/sendDealToBling';


const insertDealsPipeDriveDB = cron.schedule(
    "* * * * *",
    () => {
        InsertDealDB();
    },
    {
        scheduled: true,
        timezone: "America/Sao_Paulo"
    }
);

const sendDealsToBling = cron.schedule(
    "* * * * *",
    () => {
        SendOrder();
    },
    {
        scheduled: true,
        timezone: "America/Sao_Paulo"
    }
);


export { insertDealsPipeDriveDB, sendDealsToBling }