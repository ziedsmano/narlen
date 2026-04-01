import "./WaterModal.css"
import { useState, useEffect } from "react"
import { useLanguage } from "../context/LanguageContext"

import bg from "../images/water-modal/water-bg.jpg"
import water1 from "../images/water-modal/water-hormones.png"
import water2 from "../images/water-modal/water-skin.png"
import water3 from "../images/water-modal/water-energy.png"

const WATER_SOURCE_URL = "https://duyguhastanesi.com.tr/ergenlik-doneminde-saglikli-beslenmenin-onemi/"

const copy = {
    en: {
        close: "Close dialog",
        title: "Healthy Eating Habits",
        subtitle: "Learn why balanced eating habits during adolescence support energy, focus, and long-term health.",
        source: "Source",
        cards: [
            { title: "1. Say No to Fast Food", text: "Fast food often contains too much fat, sugar, and salt. Eating it regularly can increase the risk of obesity, heart disease, and diabetes." },
            { title: "2. Too Much Junk Food", text: "Snacks and sweets can be enjoyable sometimes, but eating too much junk food may lead to weight gain and dental problems." },
            { title: "3. Breakfast Matters", text: "Skipping breakfast can lower your energy and concentration. A balanced breakfast helps the body and brain start the day well." }
        ]
    },
    ru: {
        close: "Закрыть окно",
        title: "Полезные пищевые привычки",
        subtitle: "Узнай, почему сбалансированное питание в подростковом возрасте важно для энергии, концентрации и здоровья в будущем.",
        source: "Источник",
        cards: [
            { title: "1. Меньше фастфуда", text: "Фастфуд часто содержит слишком много жира, сахара и соли. Если есть его регулярно, возрастает риск ожирения, проблем с сердцем и диабета." },
            { title: "2. Слишком много вредных перекусов", text: "Сладости и снеки иногда допустимы, но их избыток может привести к набору веса и проблемам с зубами." },
            { title: "3. Завтрак важен", text: "Если пропускать завтрак, снижается энергия и концентрация. Сбалансированный завтрак помогает телу и мозгу хорошо начать день." }
        ]
    },
    kz: {
        close: "Терезені жабу",
        title: "Дұрыс тамақтану әдеттері",
        subtitle: "Жасөспірім шақта теңгерімді тамақтану неге энергия, зейін және ұзақ мерзімді денсаулық үшін маңызды екенін біл.",
        source: "Дереккөз",
        cards: [
            { title: "1. Фастфудты азайт", text: "Фастфудта май, қант және тұз көп болады. Оны жиі жеу семіздікке, жүрек ауруларына және диабетке әкелуі мүмкін." },
            { title: "2. Зиянды тіскебасарды шамадан тыс жеу", text: "Тәттілер мен снектерді анда-санда жеуге болады, бірақ оларды тым көп тұтыну салмақ қосуға және тіс мәселелеріне себеп болуы мүмкін." },
            { title: "3. Таңғы ас маңызды", text: "Таңғы асты өткізіп жіберсең, энергия мен зейін төмендеуі мүмкін. Теңгерімді таңғы ас дене мен миды күнге жақсы дайындайды." }
        ]
    }
}

function WaterModal({ isOpen, onClose }) {
    const { language } = useLanguage()
    const text = copy[language]
    const [show, setShow] = useState(isOpen)
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
        <div className={`water-overlay app-modal-overlay ${closing ? "overlay-closing" : ""}`}>
            <div className={`water-modal app-modal-shell ${closing ? "modal-closing" : ""}`} role="dialog" aria-modal="true" aria-labelledby="water-modal-title">
                <button className="water-close app-modal-close" onClick={handleClose} aria-label={text.close} data-read-aloud-ignore="true">
                    ×
                </button>

                <div className="water-container app-modal-content app-modal-content--water" data-read-aloud-target="true" style={{ backgroundImage: `url(${bg})` }}>
                    <h1 id="water-modal-title" className="water-title">{text.title}</h1>
                    <p className="water-subtitle">{text.subtitle}</p>

                    {[
                        { image: water1, content: text.cards[0] },
                        { image: water2, content: text.cards[1] },
                        { image: water3, content: text.cards[2] }
                    ].map((item) => (
                        <div className="water-card" data-read-aloud-block="true" key={item.content.title}>
                            <img src={item.image} alt="" />
                            <div className="water-text">
                                <h3>{item.content.title}</h3>
                                <p>{item.content.text}</p>
                            </div>
                        </div>
                    ))}

                    <div className="water-source-wrap">
                        <a className="water-source-link" href={WATER_SOURCE_URL} target="_blank" rel="noreferrer">
                            {text.source}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WaterModal
