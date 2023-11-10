import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const Server = async() => {
  const app = express();





  app.listen(process.env.PORT, () => {
    console.clear();
    console.log(`Server is running on port ${process.env.PORT}`);
  });
  

}

Server();