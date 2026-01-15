import s from "./index.module.css"

export const ActionButton = ({ text }) => {
    return <button className={s.action}>{text}</button>
}
