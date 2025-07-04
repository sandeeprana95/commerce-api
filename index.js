import dotenv from 'dotenv'
dotenv.config()

import mongoose from "mongoose";
mongoose.connect(process.env.DB_URL)
.then(()=>console.log("db connected"))
.catch((err)=>console.log(err.message))

import express from "express"
const app = express()
app.listen(process.env.PORT,()=>console.log(`app is running on ${process.env.PORT}`))

app.get("/",(req,res)=>{
    res.send("hello")
})

