import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { useReadAloud } from "../hooks/useReadAloud"
import { useLanguage } from "../context/LanguageContext"

const copy = {
    en: {
        stopLabel: "Stop read aloud mode",
        startLabel: "Turn on read aloud mode",
        stop: "Stop",
        listenMode: "Listen Mode",
        unsupported: "Read aloud is unavailable in this browser.",
        selecting: "Listen Mode is on. Click any card, section, or modal text block.",
        idle: "Turn on Listen Mode, then click the block you want to hear."
    },
    ru: {
        stopLabel: "Остановить режим озвучивания",
        startLabel: "Включить режим озвучивания",
        stop: "Стоп",
        listenMode: "Слушать",
        unsupported: "Озвучивание недоступно в этом браузере.",
        selecting: "Режим озвучивания включён. Нажми на карточку, секцию или текстовый блок в модальном окне.",
        idle: "Включи режим прослушивания, затем нажми на блок, который хочешь услышать."
    },
    kz: {
        stopLabel: "Дауыстап оқу режимін тоқтату",
        startLabel: "Дауыстап оқу режимін қосу",
        stop: "Тоқтату",
        listenMode: "Тыңдау",
        unsupported: "Бұл браузерде дауыстап оқу қолжетімсіз.",
        selecting: "Тыңдау режимі қосулы. Кез келген карта, бөлім немесе модаль мәтін блогын басыңыз.",
        idle: "Тыңдау режимін қосып, тыңдағыңыз келетін блокты басыңыз."
    }
}

function ReadAloudButton({ compact = false }) {
    const location = useLocation()
    const { language } = useLanguage()
    const {
        error,
        isSpeaking,
        isSelecting,
        isSupported,
        startSelectionMode,
        stop
    } = useReadAloud("#main-content")

    useEffect(() => {
        stop()
    }, [location.pathname, stop])

    const handleClick = () => {
        if (isSelecting || isSpeaking) {
            stop()
            return
        }

        startSelectionMode()
    }

    const text = copy[language]
    const buttonLabel = isSelecting || isSpeaking
        ? text.stopLabel
        : text.startLabel

    return (
        <div className="read-aloud" data-read-aloud-ignore="true">
            <button
                type="button"
                className={`read-aloud__button ${(isSelecting || isSpeaking) ? "is-active" : ""}`}
                onClick={handleClick}
                aria-label={buttonLabel}
                aria-pressed={isSelecting || isSpeaking}
                title={buttonLabel}
                disabled={!isSupported}
            >
                <span className="read-aloud__icon" aria-hidden="true">
                    {isSelecting || isSpeaking ? "\u25A0" : "\u{1F50A}"}
                </span>

                <span className="read-aloud__label">
                    {isSelecting || isSpeaking ? text.stop : text.listenMode}
                </span>
            </button>

            {!compact && (
                <p className="read-aloud__status" aria-live="polite">
                    {error || (
                        !isSupported
                            ? text.unsupported
                            : isSelecting
                                ? text.selecting
                                : text.idle
                    )}
                </p>
            )}
        </div>
    )
}

export default ReadAloudButton
