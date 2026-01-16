import s from "./index.module.css"

export const Points = () => {
    return (
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
    )
}