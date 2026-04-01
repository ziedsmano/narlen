import "./SleepModal.css"
import { useState, useEffect } from "react"
import { useLanguage } from "../context/LanguageContext"

import bg from "../images/sleep-modal/sleep-bg.jpg"
import sleep1 from "../images/sleep-modal/sleep-growth.png"
import sleep2 from "../images/sleep-modal/sleep-emotions.png"
import sleep3 from "../images/sleep-modal/sleep-energy.png"

const SLEEP_SOURCE_URL = "https://iyiuykuiyihayat.com/ergenlik-ve-uyku/"

const copy = {
    en: {
        close: "Close dialog",
        title: "Sleep and Teenage Development",
        subtitle: "Learn why healthy sleep habits are essential for concentration, wellbeing, and daily development.",
        source: "Source",
        cards: [
            {
                title: "1. The Main Sleep Problem",
                text: "Too little sleep can reduce academic success and increase risky behavior. Phones, games, and screens also make it harder for the brain to calm down before sleep."
            },
            {
                title: "2. Advice for Teens and Families",
                text: "According to pediatric guidance, teenagers usually need about 8 to 10 hours of sleep per night."
            },
            {
                title: "3. Building a Better Sleep Routine",
                text: "Try to sleep at regular times, limit screens before bed, avoid long daytime naps, keep your room dark and quiet, and avoid caffeine late in the day."
            }
        ]
    },
    ru: {
        close: "Закрыть окно",
        title: "Сон и развитие в подростковом возрасте",
        subtitle: "Узнай, почему здоровые привычки сна так важны для концентрации, самочувствия и повседневного развития.",
        source: "Источник",
        cards: [
            {
                title: "1. Главная проблема со сном",
                text: "Недостаток сна снижает успеваемость и может усиливать рискованное поведение. Телефоны, игры и экраны также мешают мозгу успокоиться перед сном."
            },
            {
                title: "2. Советы для подростков и семей",
                text: "Согласно рекомендациям педиатров, подросткам обычно нужно около 8-10 часов сна за ночь."
            },
            {
                title: "3. Как выстроить хороший режим сна",
                text: "Старайся ложиться примерно в одно и то же время, ограничивать экраны перед сном, не спать днём слишком долго, держать комнату тёмной и тихой и избегать кофеина вечером."
            }
        ]
    },
    kz: {
        close: "Терезені жабу",
        title: "Ұйқы және жасөспірім дамуы",
        subtitle: "Ұйқының дұрыс әдеттері неге зейін, көңіл күй және күнделікті даму үшін өте маңызды екенін біл.",
        source: "Дереккөз",
        cards: [
            {
                title: "1. Ұйқыдағы негізгі мәселе",
                text: "Ұйқының жетіспеуі үлгерімді төмендетіп, қауіпті әрекеттерге бейімділікті арттыруы мүмкін. Телефон, ойын және экрандар да миды ұйқыға дейін тыныштандырмайды."
            },
            {
                title: "2. Жасөспірімдер мен отбасыларға кеңес",
                text: "Педиатрлар ұсынымы бойынша жасөспірімдерге әдетте бір түнде 8-10 сағат ұйқы қажет."
            },
            {
                title: "3. Жақсы ұйқы тәртібін қалыптастыру",
                text: "Бір уақытта ұйықтауға тырыс, ұйықтар алдында экранды азайт, күндіз тым ұзақ ұйықтама, бөлмені тыныш әрі қараңғы ұста және кешке кофеиннен аулақ бол."
            }
        ]
    }
}

function SleepModal({ isOpen, onClose }) {
    const { language } = useLanguage()
    const text = copy[language]
    const [show, setShow] = useState(false)
    const [closing, setClosing] = useState(false)

    useEffect(() => {
        if (isOpen) {
            setShow(true)
        }
    }, [isOpen])

    if (!show) return null

    function handleClose() {
        setClosing(true)

        setTimeout(() => {
            setClosing(false)
            setShow(false)
            onClose()
        }, 450)
    }

    return (
        <div className={`sleep-overlay app-modal-overlay ${closing ? "overlay-closing" : ""}`}>
            <div className={`sleep-modal app-modal-shell ${closing ? "modal-closing" : ""}`} role="dialog" aria-modal="true" aria-labelledby="sleep-modal-title">
                <button className="sleep-close app-modal-close" onClick={handleClose} aria-label={text.close} data-read-aloud-ignore="true">
                    ×
                </button>

                <div className="sleep-container app-modal-content app-modal-content--sleep" data-read-aloud-target="true" style={{ backgroundImage: `url(${bg})` }}>
                    <h1 id="sleep-modal-title" className="sleep-title">{text.title}</h1>
                    <p className="sleep-subtitle">{text.subtitle}</p>

                    {[
                        { image: sleep1, content: text.cards[0] },
                        { image: sleep2, content: text.cards[1] },
                        { image: sleep3, content: text.cards[2] }
                    ].map((item) => (
                        <div className="sleep-card" data-read-aloud-block="true" key={item.content.title}>
                            <img src={item.image} alt="" />

                            <div className="sleep-text">
                                <h3>{item.content.title}</h3>
                                <p>{item.content.text}</p>
                            </div>
                        </div>
                    ))}

                    <div className="sleep-source-wrap">
                        <a className="sleep-source-link" href={SLEEP_SOURCE_URL} target="_blank" rel="noreferrer">
                            {text.source}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SleepModal
