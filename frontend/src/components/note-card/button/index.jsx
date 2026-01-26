import s from "./index.module.css"

export const Button = ({ text, icon, style, click }) => {
    return (
        <button className={`${s.button} ${style}`} onClick={click}>
            <span className={s.textButton}>{text}</span>
            <img src={icon} alt="icon" />
        </button>
    )
}