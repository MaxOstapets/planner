import s from "./index.module.css"

export const Hat = () => {
    return (
        <header className={s.header}>
            <img className={s.logo} src="./images/logo.svg" alt="logo" />
            <span className={s.title}>Planner</span>
        </header>
    )
}