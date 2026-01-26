import s from "./index.module.css"
import { Button } from "./button"
// import { Points } from "./points"
import { useMutation, useQueryClient } from "@tanstack/react-query"

export const NoteCard = ({ title, level, description, listTitle, list, id }) => {
    const queryClient = useQueryClient()

    const deleteNote = async () => {
        const res = await fetch(`http://localhost:3000/notes/delete/${id}`, { method: "DELETE" })
        return res.json()
    }

    const mutation = useMutation({
        mutationFn: deleteNote,
        onSuccess: () => { queryClient.invalidateQueries({ queryKey: ["notes"] }) },
    })

    return (
        <div className={s.card} id={id}>
            <section className={s.hat}>
                <span className={s.title}>{title}</span>
                <p className={s.level}>{level}</p>
            </section>
            <section className={s.noteDescription}>
                <span className={s.description}>{description}</span>
                <div className={s.points}>
                    <p className={s.listTytle}>{listTitle}</p>
                    <ol className={s.list}>
                        {list.map((el => <li className={s.item} key={el}>{el}</li>))}
                    </ol>
                </div>
                <div className={s.buttons}>
                    <Button text="Видалити" icon="./images/delete.svg" click={() => mutation.mutate(id)} />
                    <Button text="Редагувати" icon="./images/edit.svg" />
                    <Button text="Завершити" icon="./images/complete.svg" style={s.complete} />
                </div>
            </section>
        </div>
    )
}