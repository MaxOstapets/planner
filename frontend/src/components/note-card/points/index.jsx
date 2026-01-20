import s from "./index.module.css"

export const Points = ({ listTytle, item }) => {
    return (
        <div className={s.points}>
            <p className={s.listTytle}>{listTytle}</p>
            <ol className={s.list}>
                <li className={s.item}>{item}</li>
            </ol>
        </div>
    )
}