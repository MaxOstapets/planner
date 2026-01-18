import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import { noteRouter } from "./note/note.controller"

dotenv.config()

const app = express()
const DB_URL = process.env.DB_URL as string
const PORT = process.env.PORT

async function dbConnect() {
    try {
        await mongoose.connect(DB_URL)
        console.log("MONGO IS CONNECTED")
    } catch (e: any) {
        console.log("ERROR:", e.message)
    }
}

dbConnect()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static('public'))

app.use("/notes", noteRouter)

app.listen(PORT, () => { console.log(`SERVER IS RUNNING ON PORT ${PORT}`) })