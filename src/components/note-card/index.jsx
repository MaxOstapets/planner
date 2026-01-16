import s from "./index.module.css"

export const NoteCard = () => {
    return (
        <div className={s.card}>
            <section className={s.hat}>
                <span className={s.title}>Підготовка до здачі курсової роботи</span>
                <p className={s.level}>Дуже важливо</p>
            </section>
            <section className={s.noteDescription}>
                <span className={s.description}>основні кроки, які необхідно виконати для успішного завершення та здачі курсової роботи в установлений термін.</span>
                <div className={s.points}>
                    <p className={s.listTytle}>Задачі:</p>
                    <ol className={s.list}>
                        <li className={s.item}>Перевірити оформлення титульної сторінки</li>
                        <li className={s.item}>Перечитати та відредагувати розділи 1–2</li>
                        <li className={s.item}>Написати висновок</li>
                        <li className={s.item}>Оформити список використаних джерел</li>
                        <li className={s.item}>Перевірити роботу на помилки та плагіат</li>
                    </ol>
                </div>
                <div className={s.buttons}>
                    <button className={s.button}>
                        <span className={s.textButton}>Видалити</span>
                        <img src="./images/delete.svg" alt="delete" />
                    </button>
                    <button className={s.button}>
                        <span className={s.textButton}>Редагувати</span>
                        <img src="./images/edit.svg" alt="delete" />
                    </button>
                    <button className={`${s.button} ${s.complete}`}>
                        <span className={s.textButton}>Завершити</span>
                        <img src="./images/complete.svg" alt="delete" />
                    </button>
                </div>
            </section>
        </div>
    )
}