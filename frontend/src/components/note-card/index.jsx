import s from "./index.module.css"
import { Button } from "./button"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useState } from "react"

export const NoteCard = ({ title, level, description, listTitle, list, id }) => {
    const queryClient = useQueryClient()

    const [edit, setEdit] = useState(false)
    const [titleInput, setTitleInput] = useState(title)
    const [levelInput, setLevelInput] = useState(level)
    const [descriptionInput, setDescriptionInput] = useState(description)

    const toggleEdit = () => setEdit(prev => !prev)

    const removeNote = async () => {
        const res = await fetch(`http://localhost:3000/notes/delete/${id}`, { method: "DELETE" })
        return res.json()
    }

    const removeMutation = useMutation({
        mutationFn: removeNote,
        onSuccess: () => { queryClient.invalidateQueries({ queryKey: ["notes"] }) }
    })

    const editNote = async () => {
        const res = await fetch(`http://localhost:3000/notes/edit/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                title: titleInput,
                level: levelInput,
                description: descriptionInput,
            }),
        })
        return res.json()
    }

    const editMutation = useMutation({
        mutationFn: editNote,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["notes"] })
            setEdit(false)
        }
    })

    return (
        <div className={s.card} id={id}>
            {edit ? (
                <>
                    <section className={s.hat}>
                        <input value={titleInput} onChange={(e) => setTitleInput(e.target.value)} />
                        <input value={levelInput} onChange={(e) => setLevelInput(e.target.value)} />
                    </section>
                    <section className={s.noteDescription}>
                        <input value={descriptionInput} onChange={(e) => setDescriptionInput(e.target.value)} />
                        <div className={s.points}>
                            <p className={s.listTytle}>{listTitle}</p>
                            <ol className={s.list}>{list.map((el) => (<li className={s.item} key={el}>{el}</li>))}</ol>
                        </div>
                        <Button text="Підтвердити" icon="./images/edit.svg" click={() => editMutation.mutate()} />
                    </section>
                </>
            ) : (
                <>
                    <section className={s.hat}>
                        <span className={s.title}>{title}</span>
                        <p className={s.level}>{level}</p>
                    </section>
                    <section className={s.noteDescription}>
                        <span className={s.description}>{description}</span>
                        <div className={s.points}>
                            <p className={s.listTytle}>{listTitle}</p>
                            <ol className={s.list}>{list.map((el) => (<li className={s.item} key={el}>{el}</li>))}</ol>
                        </div>
                        <div className={s.buttons}>
                            <Button text="Видалити" icon="./images/delete.svg" click={() => removeMutation.mutate()} />
                            <Button text="Редагувати" icon="./images/edit.svg" click={toggleEdit} />
                            <Button text="Завершити" icon="./images/complete.svg" click={() => removeMutation.mutate()} style={s.complete} />
                        </div>
                    </section>
                </>
            )}
        </div>
    )
}