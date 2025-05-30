import express from 'express';
import dotenv from "dotenv"
import { infoLogger } from './lib/util/logger';
import errorHandler from './middleware/errorHandler';


const app = express();
dotenv.config();


const port = process.env.PORT || 3001;

app.use(errorHandler)

app.listen(port, () => {
  infoLogger(`Server is running on http://localhost:${port}`)
});