import s from "./index.module.css"

export const NewNoteButton = () => {
    return (
        <button className={s.newNote}>
            <span className={s.text}>Нова нотатка</span>
            <img src="./images/newNote.svg" alt="new note" />
        </button>
    )
}