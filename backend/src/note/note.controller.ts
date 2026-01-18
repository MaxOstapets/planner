import { Router } from "express";
import { noteCreateService } from "./note.service";
import { Note } from "../models/note.model";

const noteRouter = Router()

noteRouter.get("/allNotes", async (req, res) => {
    const notes = await Note.find()
    return res.send(notes)
})

noteRouter.post("/newNote", async (req, res) => {
    const { title, level, description, listTite, list } = req.body
    try {
        const result = await noteCreateService({ title, level, description, listTite, list })
        res.send(result)
    } catch (e: any) {
        console.log("NOTE ERROR:", e.message)
        res.redirect("/newNote")
    }
})

export { noteRouter }