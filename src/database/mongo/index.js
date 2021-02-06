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
        useUnifiedTopology: true,
        useFindAndModify: true
      },
      err => {
        if (!err) {
          console.log("Mongo conectado com sucesso.");
        } else {
          console.log(`Erro ao conectar no MongoDB`);
        }
      }
    );
  }
}

export default new Database();
