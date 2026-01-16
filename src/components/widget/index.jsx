import s from "./index.module.css"
import { ActionButton } from "./action-button"

export const Widget = () => {
    return (
        <div className={s.widget}>
            <section className={s.start}>
                <input type="text" className={s.title} placeholder="Назва нотатки" />
                <div className={s.buttons}>
                    <ActionButton text="додати опис" />
                    <ActionButton text="створити список" />
                    <ActionButton text="вказати рівень важливості" />
                    <ActionButton text="обрати колір" />
                </div>
            </section>
            <section className={s.inputs}>
                <textarea className={s.description} placeholder="Опис"></textarea>
                <div className={s.list}>
                    <input type="text" className={s.listTitle} placeholder="Назва списку" />
                    <ul className={s.items}>
                        <li className={s.item}>
                            <p className={s.number}>1</p>
                            <input type="text" className={s.inputItem} placeholder="елемент списку" />
                        </li>
                    </ul>
                </div>
                <input type="text" className={s.level} placeholder="Рівень важливості" />
            </section>
            <button className={s.save}>Зберегти</button>
        </div>
    )
}