import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cookieParser from 'cookie-parser'
import cors from 'cors'

import authRoute from "./routes/auth.js"
import hotelsRoute from "./routes/hotels.js"
import roomsRoute from "./routes/rooms.js"
import userRoute from "./routes/users.js"

const app =express()
dotenv.config()


const connect = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO)
        console.log('connectedDB')
    } catch (error) {
    throw error   
}}
mongoose.connection.on("disconnected",()=>{
    console.log('MongoDB disconnected!');
})
mongoose.connection.on("connected",()=>{
    console.log('MongoDB connected!');
})

//middleware
app.use(express.json())
app.use(cookieParser())
app.use(cors())

app.use("/api/auth",authRoute);
app.use("/api/users",userRoute);
app.use("/api/hotels",hotelsRoute);
app.use("/api/room",roomsRoute);


app.listen(8000 , ()=>{
    connect()
    console.log('App running')
})