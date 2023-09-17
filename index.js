import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import { connectDB } from './Middleware/DB.js';
import userRoute from './Routes/userRoute.js';
import detailRoute from './Routes/detailsRoute.js';

const app = express();
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

dotenv.config();
connectDB();

app.use('/api/users',userRoute);
app.use('/api/details',detailRoute);


const PORT = process.env.PORT || 6743

app.listen(PORT,()=> console.log(`Server running at ${PORT}`));