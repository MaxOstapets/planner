import s from "./index.module.css"

export const NewNoteButton = ({ onClick }) => {
    return (
        <button className={s.newNote} onClick={onClick}>
            <span className={s.text}>Нова нотатка</span>
            <img src="./images/newNote.svg" alt="new note" />
        </button>
    )
}