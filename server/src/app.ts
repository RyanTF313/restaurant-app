import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import 'dotenv/config';
import routes from './routes.js';
import { requestLogger } from './middlewares/logger.middleware.js';


const app = express();

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));
app.use(express.json());
app.use(cookieParser());
app.use('/api', routes);
app.use(requestLogger);

export default app;
