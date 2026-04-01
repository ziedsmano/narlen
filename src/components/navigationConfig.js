export const navItems = [
    { to: "/", key: "home" },
    { to: "/history", key: "history" },
    { to: "/literature", key: "literature" },
    { to: "/biology", key: "biology" }
]

export function getNavigationCopy(language, theme) {
    return {
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
}
