import express from 'express';
import dotenv from "dotenv"
import { infoLogger } from './lib/util/logger';
import errorHandler from './middleware/errorHandler';
import userRoute from './routes/authRoute'


const app = express();
dotenv.config();

// middlewares 
app.use(express.json())

// routes
app.use("/api/auth",userRoute)


app.use(errorHandler)

const port = process.env.PORT || 3001;
app.listen(port, () => {
  infoLogger(`Server is running on http://localhost:${port}`)
});