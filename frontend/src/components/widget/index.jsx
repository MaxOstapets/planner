import s from "./index.module.css"
import { ActionButton } from "./action-button"
import { useState } from "react"

export const Widget = () => {
    const [items, setItems] = useState([])
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [listTitle, setListTitle] = useState("")
    const [level, setLevel] = useState("")

    const handlerSetItems = () => { setItems(prev => [...prev, { text: "" }]) }

    const save = async () => {
        await fetch("http://localhost:3000/notes/new", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                title: title,
                level: level,
                description: description,
                listTitle: listTitle,
                list: items.map(i => i.text)
            })
        })
    }

    return (
        <div className={s.widget}>
            <section className={s.start}>
                <input type="text" className={s.title} placeholder="Назва нотатки" onChange={(e) => setTitle(e.target.value)} value={title} />
                <div className={s.buttons}>
                    <ActionButton text="додати опис" />
                    <ActionButton text="створити список" />
                    <ActionButton text="вказати рівень важливості" />
                    <ActionButton text="обрати колір" />
                </div>
            </section>
            <section className={s.inputs}>
                <textarea className={s.description} placeholder="Опис" onChange={(e) => setDescription(e.target.value)} value={description}></textarea>
                <div className={s.list}>
                    <input type="text" className={s.listTitle} placeholder="Назва списку" onChange={(e) => setListTitle(e.target.value)} value={listTitle} />
                    <ul className={s.items}>
                        {items.map((el, i) => (
                            <li key={i} className={s.item}>
                                <p className={s.number}>{i + 1}</p>
                                <input type="text" className={s.inputItem} placeholder="елемент списку" value={el.text} onChange={(e) => {
                                    const updated = [...items]
                                    updated[i].text = e.target.value
                                    setItems(updated)
                                }}
                                />
                            </li>
                        ))}
                    </ul>
                    <button className={s.addItem} onClick={handlerSetItems}>+</button>
                </div>
                <input type="text" className={s.level} placeholder="Рівень важливості" value={level} onChange={(e) => { setLevel(e.target.value) }} />
            </section>
            <button className={s.save} onClick={save}>Зберегти</button>
        </div>
    )
}