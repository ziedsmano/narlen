import { NavLink } from "react-router-dom"
import { useLanguage } from "../context/LanguageContext"

function Navbar({ theme, onToggleTheme }) {
    const { language, setLanguage, supportedLanguages } = useLanguage()

    const copy = {
        en: {
            home: "Home",
            history: "History",
            literature: "Literature",
            biology: "Biology",
            themeLabel: theme === "dark" ? "Light mode" : "Dark mode",
            themeText: theme === "dark" ? "Light" : "Dark"
        },
        ru: {
            home: "Главная",
            history: "История",
            literature: "Литература",
            biology: "Биология",
            themeLabel: theme === "dark" ? "Светлая тема" : "Тёмная тема",
            themeText: theme === "dark" ? "Светлая" : "Тёмная"
        },
        kz: {
            home: "Басты бет",
            history: "Тарих",
            literature: "Әдебиет",
            biology: "Биология",
            themeLabel: theme === "dark" ? "Жарық режим" : "Қараңғы режим",
            themeText: theme === "dark" ? "Жарық" : "Қараңғы"
        }
    }[language]

    return (
        <div className="navbar">

            <div className="logo">
                <NavLink to="/">NAR.LEN</NavLink>
            </div>

            <div className="menu">

                <NavLink to="/">{copy.home}</NavLink>

                <NavLink to="/history">{copy.history}</NavLink>

                <NavLink to="/literature">{copy.literature}</NavLink>

                <NavLink to="/biology">{copy.biology}</NavLink>

                <div className="language-switcher" aria-label="Language switcher">
                    {supportedLanguages.map((value) => (
                        <button
                            key={value}
                            type="button"
                            className={`language-switcher__button ${language === value ? "is-active" : ""}`}
                            onClick={() => setLanguage(value)}
                        >
                            {value.toUpperCase()}
                        </button>
                    ))}
                </div>

                <button
                    type="button"
                    className="theme-toggle"
                    onClick={onToggleTheme}
                    aria-label={copy.themeLabel}
                    title={copy.themeLabel}
                >
                    <span className="theme-toggle__icon" aria-hidden="true">
                        {theme === "dark" ? "\u2600" : "\u263E"}
                    </span>
                    <span className="theme-toggle__text">
                        {copy.themeText}
                    </span>
                </button>

            </div>

        </div>
    )
}

export default Navbar
