import express from 'express';
import dotenv from "dotenv"
import { infoLogger } from './lib/util/logger';


const app = express();
dotenv.config();


const port = process.env.PORT || 3001;


app.listen(port, () => {
  infoLogger(`Server is running on http://localhost:${port}`)
});