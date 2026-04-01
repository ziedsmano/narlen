import { NavLink } from "react-router-dom"
import { useLanguage } from "../context/LanguageContext"
import ReadAloudButton from "./ReadAloudButton"
import { getNavigationCopy, navItems } from "./navigationConfig"

function Navbar({ theme, onToggleTheme }) {
    const { language, setLanguage, supportedLanguages } = useLanguage()
    const copy = getNavigationCopy(language, theme)

    return (
        <div className="navbar">
            <div className="logo">
                <NavLink to="/">NAR.LEN</NavLink>
            </div>

            <div className="menu">
                {navItems.map((item) => (
                    <NavLink key={item.to} to={item.to}>
                        {copy[item.key]}
                    </NavLink>
                ))}
            </div>

            <div className="navbar-controls">
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

                <ReadAloudButton compact />
            </div>
        </div>
    )
}

export default Navbar
