import { Router } from "express";
import { noteCreateService } from "./note.service";
import { Note } from "../models/note.model";

const noteRouter = Router()

noteRouter.get("/allNotes", async (req, res) => {
    const notes = await Note.find()
    return res.send(notes)
})

noteRouter.post("/newNote", async (req, res) => {
    const { title, level, description, listTitle, list } = req.body
    try {
        const result = await noteCreateService({ title, level, description, listTitle, list })
        res.send(result)
    } catch (e: any) {
        res.redirect("/newNote")
        throw new Error("NOTE ERROR")
    }
})

noteRouter.delete("/deleteNote/:_id", async (req, res) => {
    try {
        const { _id } = req.params
        const deletedNote = await Note.findByIdAndDelete(_id)
        res.json(`NOTE ${deletedNote} DELETED`)
    } catch (e) {
        throw new Error("DELETE ERROR")
    }
})

export { noteRouter }