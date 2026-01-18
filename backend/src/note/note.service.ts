import { Note } from "../models/note.model";

interface INote {
    title: string
    level: string
    description: string
    listTite: string
    list: string[]
}

export const noteCreateService = async (data: INote): Promise<INote> => {
    const note = await Note.create(data)
    return note
}