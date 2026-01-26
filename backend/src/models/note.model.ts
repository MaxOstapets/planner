import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
    title: { type: String, required: true },
    level: { type: String, required: true },
    description: { type: String, required: true },
    listTitle: { type: String, required: true },
    list: { type: [String], required: true }
})

export const Note = mongoose.model("Note", noteSchema)