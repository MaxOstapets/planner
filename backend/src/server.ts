import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"

const app = express()

async function dbConnect() {
    try {
        await mongoose.connect("mongodb+srv://maksostapets2007_db_user:5QqYXK1sO331Cv1q@notes.j7gdmj4.mongodb.net/?appName=notes")
        console.log("MONGO IS CONNECTED")
    } catch (e: any) {
        console.log("ERROR:", e.message)
    }
}

dbConnect()