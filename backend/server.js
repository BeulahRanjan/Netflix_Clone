import express from "express";
import { ENV_VARS } from "./config/envVars.js";
 import { connectDB } from "./config/db.js";
 import cookieParser from 'cookie-parser';
 import path, { dirname } from 'path';

 const app= express();
const PORT = ENV_VARS.PORT;
const _dirname=path.resolve();

app.use(express.json());
app.use(cookieParser());



app.listen(PORT, ()=>{
    console.log('Server is running at http://localhost:'+ PORT);
    connectDB();
})