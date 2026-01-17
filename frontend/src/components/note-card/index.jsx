import s from "./index.module.css"
import { Button } from "./button"
import { Points } from "./points"

export const NoteCard = () => {
    return (
        <div className={s.card}>
            <section className={s.hat}>
                <span className={s.title}>Підготовка до здачі курсової роботи</span>
                <p className={s.level}>Дуже важливо</p>
            </section>
            <section className={s.noteDescription}>
                <span className={s.description}>основні кроки, які необхідно виконати для успішного завершення та здачі курсової роботи в установлений термін.</span>
                <Points />
                <div className={s.buttons}>
                    <Button text="Видалити" icon="./images/delete.svg" />
                    <Button text="Редагувати" icon="./images/edit.svg" />
                    <Button text="Завершити" icon="./images/complete.svg" style={s.complete} />
                </div>
            </section>
        </div>
    )
}