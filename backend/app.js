import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'
import cookieParser from 'cookie-parser';
import { dbConnection } from './database/dbConnection.js';

const app = express();


dotenv.config({path : './config/config.env'});

app.use(
    cors({
    origin : [process.env.FRONTNED_URL],
    methods : ['GET' , 'POST' , 'PUT' , 'DELETE'],
    credentials : true
})
);
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended : true}));

dbConnection();

export default app;
