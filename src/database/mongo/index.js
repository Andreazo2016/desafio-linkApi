import mongoose from "mongoose"
import 'dotenv/config'

class Database {
  constructor() {
    this.mongo();
  }

  mongo() {
    this.mongoConnection = mongoose.connect(
      `${process.env.MONGO_URL}`,
      {
        useNewUrlParser: true,
        useFindAndModify: true,
        useUnifiedTopology:true
      },
      err => {
        if (!err) {
          console.log("MongoDB Connection Succeeded.");
        } else {
          console.log(`Error in DB connection:${err}`);
        }
      }
    );
  }
}

export default new Database();
