import { NavLink } from "react-router-dom"
import { useLanguage } from "../context/LanguageContext"
import { getNavigationCopy, navItems } from "./navigationConfig"

function BottomNavIcon({ itemKey }) {
    const icons = {
        home: (
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4 10.5 12 4l8 6.5" />
                <path d="M6.5 9.5V20h11V9.5" />
                <path d="M10 20v-5h4v5" />
            </svg>
        ),
        history: (
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 5a7 7 0 1 1-6.2 3.8" />
                <path d="M5 4v4h4" />
                <path d="M12 8v4l2.8 1.8" />
            </svg>
        ),
        literature: (
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M5 6.5A2.5 2.5 0 0 1 7.5 4H19v14H7.5A2.5 2.5 0 0 0 5 20.5z" />
                <path d="M7.5 4A2.5 2.5 0 0 0 5 6.5V20.5" />
                <path d="M9 8h6" />
                <path d="M9 11h6" />
            </svg>
        ),
        biology: (
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.5 15.5c3.5 0 7-2.5 7-7 0-1.7-.5-3.2-1.6-4.5" />
                <path d="M8.5 15.5c0 2.5 1.8 4.5 4.2 4.5 2.7 0 5.3-2.3 6.3-5.6" />
                <path d="M5 13c2.5 0 5-1.5 6.3-4" />
                <path d="M7 18c2-.2 3.9-1.2 5.3-2.8" />
            </svg>
        )
    }

    return <span className="bottom-nav__icon">{icons[itemKey]}</span>
}

function BottomNav() {
    const { language } = useLanguage()
    const copy = getNavigationCopy(language, "light")

    return (
        <nav className="bottom-nav" aria-label="Mobile navigation">
            {navItems.map((item) => (
                <NavLink key={item.to} to={item.to} className="bottom-nav__link">
                    <BottomNavIcon itemKey={item.key} />
                    <span className="bottom-nav__text">{copy[item.key]}</span>
                </NavLink>
            ))}
        </nav>
    )
}

export default BottomNav
