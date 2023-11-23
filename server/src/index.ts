import express, { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import { DB } from "./service/Database";
import { UserRouter, imageRouter } from "./routes";

dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(`${req.method} ${req.path}`);
  next();
});


app.use('/user', UserRouter)
app.use('/image', imageRouter)


app.get("/", async (req: Request, res: Response) => {
  //add image to database
});





DB().then(() => {
    console.clear();
    console.log("Database connected");
    app.listen(process.env.PORT, () => {
      console.log(`Server listening on port ${process.env.PORT}`);
    });
  }).catch((err) => {
    console.log(err);
    process.exit(1);
  });
