import s from "./index.module.css"

export const Button = ({ text, icon, style }) => {
    return (
        <button className={`${s.button} ${style}`}>
            <span className={s.textButton}>{text}</span>
            <img src={icon} alt="icon" />
        </button>
    )
}