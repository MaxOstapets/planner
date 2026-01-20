import s from "./index.module.css"
import { Button } from "./button"
// import { Points } from "./points"

export const NoteCard = ({ title, level, description, listTitle, list }) => {
    return (
        <div className={s.card}>
            <section className={s.hat}>
                <span className={s.title}>{title}</span>
                <p className={s.level}>{level}</p>
            </section>
            <section className={s.noteDescription}>
                <span className={s.description}>{description}</span>
                <div className={s.points}>
                    <p className={s.listTytle}>{listTitle}</p>
                    <ol className={s.list}>
                        {list.map((el => <li className={s.item}>{el}</li>))}
                    </ol>
                </div>
                <div className={s.buttons}>
                    <Button text="Видалити" icon="./images/delete.svg" />
                    <Button text="Редагувати" icon="./images/edit.svg" />
                    <Button text="Завершити" icon="./images/complete.svg" style={s.complete} />
                </div>
            </section>
        </div>
    )
}