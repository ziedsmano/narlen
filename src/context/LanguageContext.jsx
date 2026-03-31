import { createContext, useContext, useEffect, useMemo, useState } from "react"

const LANGUAGE_STORAGE_KEY = "language"
const DEFAULT_LANGUAGE = "en"
const SUPPORTED_LANGUAGES = ["en", "ru", "kz"]

const LanguageContext = createContext(null)

function getInitialLanguage() {
    if (typeof window === "undefined") {
        return DEFAULT_LANGUAGE
    }

    const savedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY)

    if (SUPPORTED_LANGUAGES.includes(savedLanguage)) {
        return savedLanguage
    }

    return DEFAULT_LANGUAGE
}

export function LanguageProvider({ children }) {
    const [language, setLanguage] = useState(getInitialLanguage)

    useEffect(() => {
        window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language)
        document.documentElement.lang = language === "kz" ? "kk" : language
    }, [language])

    const value = useMemo(() => ({
        language,
        setLanguage,
        supportedLanguages: SUPPORTED_LANGUAGES
    }), [language])

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    )
}

export function useLanguage() {
    const context = useContext(LanguageContext)

    if (!context) {
        throw new Error("useLanguage must be used within LanguageProvider")
    }

    return context
}
