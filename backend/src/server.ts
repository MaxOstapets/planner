import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"

dotenv.config()

const app = express()
const DB_URL = process.env.DB_URL as string

async function dbConnect() {
    try {
        await mongoose.connect(DB_URL)
        console.log("MONGO IS CONNECTED")
    } catch (e: any) {
        console.log("ERROR:", e.message)
    }
}

dbConnect()