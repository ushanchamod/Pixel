import mongoose from 'mongoose'; 
import dotenv from 'dotenv';
dotenv.config();

const MONGO_URI ="mongodb+srv://" + process.env.MONGO_DB + ":" + encodeURIComponent(process.env.MONGO_KEY) + "@cluster0.kwwqwrw.mongodb.net/?retryWrites=true&w=majority";

export const DB =  async() => {

  try {
      await mongoose.connect(MONGO_URI, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          useCreateIndex: true
      })

  } catch (err) {
      console.log(err);
      process.exit(1);
  }

}


