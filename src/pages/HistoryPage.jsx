import "./HistoryPage.css"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import KazakhWomenModal from "./KazakhWomenModal"
import March8Modal from "./March8Modal"
import { useLanguage } from "../context/LanguageContext"

import hero from "../images/history-hero.png"
import kazakh from "../images/kazakh-women.png"
import march8 from "../images/march8.png"
import feminism from "../images/feminism.png"
import inspiring from "../images/inspiring.png"

const copy = {
    en: {
        heroTitle: "HISTORY",
        heroText: "Explore the stories of women who shaped society, culture, and equality.",
        cards: [
            { title: "Women in Kazakhstan's History", description: "Learn about remarkable Kazakh women leaders, creators, and pioneers who shaped the history of their country." },
            { title: "International Women's Day", description: "Discover where March 8 comes from and why it became an important date in the history of women's rights." },
            { title: "The History of Feminism", description: "Explore key milestones and waves of the feminist movement." },
            { title: "Inspiring Women Through History", description: "Meet women who changed the world through science, politics, activism, and art." }
        ],
        quizEyebrow: "Knowledge Check",
        quizTitle: "Finish the history page with a live quiz",
        quizText: "A short Kahoot works well as the final step after the cards and modals. It helps you review the information and remember it longer.",
        quizTime: "5-10 min",
        quizNote: "The quiz opens in a new tab.",
        quizButton: "Open Kahoot Quiz",
        heroAlt: "History illustration"
    },
    ru: {
        heroTitle: "ИСТОРИЯ",
        heroText: "Изучай истории женщин, которые повлияли на общество, культуру и борьбу за равенство.",
        cards: [
            { title: "Женщины в истории Казахстана", description: "Узнай о выдающихся казахских женщинах-лидерах, создательницах и первопроходцах, повлиявших на историю страны." },
            { title: "Международный женский день", description: "Узнай, откуда появился день 8 Марта и почему он стал важной датой в истории прав женщин." },
            { title: "История феминизма", description: "Изучи ключевые этапы и волны феминистского движения." },
            { title: "Вдохновляющие женщины в истории", description: "Познакомься с женщинами, которые меняли мир через науку, политику, активизм и искусство." }
        ],
        quizEyebrow: "Проверка знаний",
        quizTitle: "Заверши страницу истории живым квизом",
        quizText: "Короткий Kahoot хорошо подходит как финальный шаг после карточек и модалок. Он помогает повторить материал и лучше его запомнить.",
        quizTime: "5-10 мин",
        quizNote: "Квиз откроется в новой вкладке.",
        quizButton: "Открыть Kahoot",
        heroAlt: "Иллюстрация по истории"
    },
    kz: {
        heroTitle: "ТАРИХ",
        heroText: "Қоғамға, мәдениетке және теңдікке әсер еткен әйелдердің тарихын зертте.",
        cards: [
            { title: "Қазақстан тарихындағы әйелдер", description: "Ел тарихына ықпал еткен көрнекті қазақ әйел көшбасшылары, өнерпаздары мен алғашқы ізашарлары туралы біл." },
            { title: "Халықаралық әйелдер күні", description: "8 наурыздың қайдан шыққанын және оның әйел құқықтары тарихындағы маңызын біл." },
            { title: "Феминизм тарихы", description: "Феминистік қозғалыстың негізгі кезеңдері мен толқындарын зертте." },
            { title: "Тарихтағы шабыт беретін әйелдер", description: "Ғылым, саясат, белсенділік және өнер арқылы әлемді өзгерткен әйелдермен таныс." }
        ],
        quizEyebrow: "Білімді тексеру",
        quizTitle: "Тарих бетін тірі квизбен аяқта",
        quizText: "Қысқа Kahoot карточкалар мен модальдардан кейінгі соңғы қадам ретінде ыңғайлы. Ол мәліметті қайталап, ұзақ уақыт есте сақтауға көмектеседі.",
        quizTime: "5-10 мин",
        quizNote: "Квиз жаңа бетте ашылады.",
        quizButton: "Kahoot квизін ашу",
        heroAlt: "Тарих иллюстрациясы"
    }
}

function HistoryPage() {
    const kahootUrl = "https://create.kahoot.it/details/eac088a6-ca8d-455e-93c5-5592ce34563f"
    const navigate = useNavigate()
    const { language } = useLanguage()
    const text = copy[language]
    const [womenModalOpen, setWomenModalOpen] = useState(false)
    const [marchModalOpen, setMarchModalOpen] = useState(false)

    const handleClick = (event, path) => {
        const card = event.currentTarget
        card.classList.add("card-clicked")

        setTimeout(() => {
            navigate(path)
        }, 250)
    }

    return (
        <div className="history-page">
            <div className="history-hero">
                <div className="history-text">
                    <h1>{text.heroTitle}</h1>
                    <p>{text.heroText}</p>
                </div>

                <img src={hero} alt={text.heroAlt} />
            </div>

            <div className="history-grid">
                {[
                    { image: kazakh, alt: "kazakh", action: () => setWomenModalOpen(true), card: text.cards[0] },
                    { image: march8, alt: "march8", action: () => setMarchModalOpen(true), card: text.cards[1] },
                    { image: feminism, alt: "feminism", action: (event) => handleClick(event, "/feminism"), card: text.cards[2] },
                    { image: inspiring, alt: "inspiring", action: (event) => handleClick(event, "/inspiring"), card: text.cards[3] }
                ].map((item) => (
                    <div className="history-card clickable" onClick={item.action} key={item.card.title}>
                        <div>
                            <h3>{item.card.title}</h3>
                            <p>{item.card.description}</p>
                        </div>

                        <img src={item.image} alt={item.alt} />
                    </div>
                ))}

                <KazakhWomenModal isOpen={womenModalOpen} onClose={() => setWomenModalOpen(false)} />
            </div>

            <section className="history-quiz-section">
                <div className="history-quiz-copy">
                    <span className="history-quiz-eyebrow">{text.quizEyebrow}</span>
                    <h2>{text.quizTitle}</h2>
                    <p>{text.quizText}</p>
                </div>

                <div className="history-quiz-panel">
                    <div className="history-quiz-badge">{text.quizTime}</div>
                    <p className="history-quiz-note">{text.quizNote}</p>

                    <a className="history-quiz-button" href={kahootUrl} target="_blank" rel="noreferrer">
                        {text.quizButton}
                    </a>
                </div>
            </section>

            <March8Modal isOpen={marchModalOpen} onClose={() => setMarchModalOpen(false)} />
        </div>
    )
}

export default HistoryPage
