import { Router } from "express";
import { noteCreateService } from "./note.service";
import { Note } from "../models/note.model";

const noteRouter = Router()

noteRouter.get("/all", async (req, res) => {
    const notes = await Note.find()
    return res.send(notes)
})

noteRouter.post("/new", async (req, res) => {
    const { title, level, description, listTitle, list } = req.body
    try {
        const result = await noteCreateService({ title, level, description, listTitle, list })
        res.send(result)
    } catch {
        res.redirect("/new")
        throw new Error("NOTE ERROR")
    }
})

noteRouter.delete("/delete/:_id", async (req, res) => {
    try {
        const { _id } = req.params
        const deletedNote = await Note.findByIdAndDelete(_id)
        res.json(`NOTE ${deletedNote} DELETED`)
    } catch {
        throw new Error("DELETE ERROR")
    }
})

noteRouter.patch("/edit/:_id", async (req, res) => {
    try {
        const { _id } = req.params
        const editedNote = await Note.updateOne({ _id }, { $set: req.body })
        res.json(editedNote)
    } catch {
        throw new Error("EDIT ERROR")
    }
})

export { noteRouter }