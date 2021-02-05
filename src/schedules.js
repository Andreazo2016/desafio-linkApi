import cron from 'node-cron'
import InsertDealDB from './jobs/insertDealDB';


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


export { insertDealPipeDriveDB }