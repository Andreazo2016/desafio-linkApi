import cron from 'node-cron'
import InsertDealDB from './jobs/insertDealFromPipeDriveInDB';
import SendOrder from './jobs/sendDealToBling';


const insertDealPipeDriveDB = cron.schedule(
    "* * * * *",
    () => {
        InsertDealDB();
    },
    {
        scheduled: true,
        timezone: "America/Sao_Paulo"
    }
);

const sendOrderToBling = cron.schedule(
    "* * * * *",
    () => {
        SendOrder();
    },
    {
        scheduled: true,
        timezone: "America/Sao_Paulo"
    }
);


export { insertDealPipeDriveDB, sendOrderToBling }