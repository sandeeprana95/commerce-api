import dotenv from 'dotenv'
dotenv.config()

import mongoose from "mongoose";
mongoose.connect(process.env.DB_URL)
.then(()=>console.log("db connected"))
.catch((err)=>console.log(err.message))

import express from "express"
import cors from "cors"
import productRouter from './routes/product.routes.js';
const app = express()
app.listen(process.env.PORT,()=>console.log(`app is running on ${process.env.PORT}`))
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(cors({
    orgin:"http://localhost:5173"
}))


app.use("/product",productRouter)

