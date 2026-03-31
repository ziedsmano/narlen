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
        heroText: "Exploring the stories of women who shaped society, culture, and equality.",
        cards: [
            {
                title: "Women in Kazakhstan's History",
                description: "Learn about incredible Kazakh women leaders and pioneers who shaped their nation's history."
            },
            {
                title: "International Women's Day",
                description: "Discover the origins and significance of March 8 and the history of women's rights."
            },
            {
                title: "The History of Feminism",
                description: "Explore the key milestones and waves of the feminist movement."
            },
            {
                title: "Inspiring Women Through History",
                description: "Meet remarkable women who changed the world in science, politics and art."
            }
        ],
        quizEyebrow: "Knowledge Check",
        quizTitle: "Finish the history page with a live quiz",
        quizText: "A short Kahoot works best here as the final step after examining the cards and modals. This allows you to consolidate the given information in your memory for a longer time.",
        quizNote: "The quiz opens in a new tab.",
        quizButton: "Open Kahoot Quiz"
    },
    ru: {
        heroTitle: "ИСТОРИЯ",
        heroText: "Изучаем истории женщин, которые повлияли на общество, культуру и равенство.",
        cards: [
            {
                title: "Женщины в истории Казахстана",
                description: "Узнай о выдающихся казахских женщинах-лидерах и первопроходцах, которые повлияли на историю своей страны."
            },
            {
                title: "Международный женский день",
                description: "Узнай об истоках и значении 8 Марта и истории борьбы за права женщин."
            },
            {
                title: "История феминизма",
                description: "Изучи ключевые этапы и волны феминистского движения."
            },
            {
                title: "Вдохновляющие женщины в истории",
                description: "Познакомься с выдающимися женщинами, изменившими мир в науке, политике и искусстве."
            }
        ],
        quizEyebrow: "Проверка знаний",
        quizTitle: "Заверши страницу истории живым квизом",
        quizText: "Короткий Kahoot лучше всего подходит здесь как финальный этап после карточек и модалок. Так информация закрепляется в памяти надолго.",
        quizNote: "Квиз откроется в новой вкладке, потому что Kahoot не позволяет встраивать его прямо на эту страницу.",
        quizButton: "Открыть Kahoot"
    },
    kz: {
        heroTitle: "ТАРИХ",
        heroText: "Қоғамға, мәдениетке және теңдікке әсер еткен әйелдердің тарихын зерттеу.",
        cards: [
            {
                title: "Қазақстан тарихындағы әйелдер",
                description: "Ел тарихына ықпал еткен қазақтың көрнекті әйел көшбасшылары мен ізашарлары туралы біліңіз."
            },
            {
                title: "Халықаралық әйелдер күні",
                description: "8 наурыздың шығу тегі мен маңызын және әйелдер құқығы тарихын зерттеңіз."
            },
            {
                title: "Феминизм тарихы",
                description: "Феминистік қозғалыстың негізгі кезеңдері мен толқындарын танып шығыңыз."
            },
            {
                title: "Тарихтағы шабыт беретін әйелдер",
                description: "Ғылымда, саясатта және өнерде әлемді өзгерткен ерекше әйелдермен танысыңыз."
            }
        ],
        quizEyebrow: "Білімді тексеру",
        quizTitle: "Тарих бетін тірі квизбен аяқтаңыз",
        quizText: "Қысқа Kahoot осы жерде карточкалар мен модальдарды қарап шыққаннан кейінгі соңғы қадам ретінде өте ыңғайлы. Ол ақпаратты жадыңда ұзағырақ сақтауға көмектеседі.",
        quizNote: "Kahoot бұл бетке тікелей ендіруге рұқсат бермейтіндіктен, квиз жаңа бетте ашылады.",
        quizButton: "Kahoot квизін ашу"
    }
}

function HistoryPage() {
    const kahootUrl = "https://create.kahoot.it/details/eac088a6-ca8d-455e-93c5-5592ce34563f"
    const navigate = useNavigate()
    const { language } = useLanguage()
    const text = copy[language]

    const [womenModalOpen, setWomenModalOpen] = useState(false)
    const [marchModalOpen, setMarchModalOpen] = useState(false)

    const handleClick = (e, path) => {
        const card = e.currentTarget
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

                    <p>
                        {text.heroText}
                    </p>

                </div>

                <img src={hero} alt="history" />

            </div>

            <div className="history-grid">

                <div
                    className="history-card clickable"
                    onClick={() => setWomenModalOpen(true)}
                >

                    <div>

                        <h3>{text.cards[0].title}</h3>

                        <p>
                            {text.cards[0].description}
                        </p>

                    </div>

                    <img src={kazakh} alt="kazakh" />

                </div>

                <div
                    className="history-card clickable"
                    onClick={() => setMarchModalOpen(true)}
                >

                    <div>

                        <h3>{text.cards[1].title}</h3>

                        <p>
                            {text.cards[1].description}
                        </p>

                    </div>

                    <img src={march8} alt="march8" />

                </div>

                <div
                    className="history-card clickable"
                    onClick={(e) => handleClick(e, "/feminism")}
                >

                    <div>

                        <h3>{text.cards[2].title}</h3>

                        <p>
                            {text.cards[2].description}
                        </p>

                    </div>

                    <img src={feminism} alt="feminism" />

                </div>

                <div
                    className="history-card clickable"
                    onClick={(e) => handleClick(e, "/inspiring")}
                >

                    <div>

                        <h3>{text.cards[3].title}</h3>

                        <p>
                            {text.cards[3].description}
                        </p>

                    </div>

                    <img src={inspiring} alt="inspiring" />

                </div>

                <KazakhWomenModal
                    isOpen={womenModalOpen}
                    onClose={() => setWomenModalOpen(false)}
                />

            </div>

            <section className="history-quiz-section">

                <div className="history-quiz-copy">
                    <span className="history-quiz-eyebrow">{text.quizEyebrow}</span>

                    <h2>{text.quizTitle}</h2>

                    <p>
                        {text.quizText}
                    </p>
                </div>

                <div className="history-quiz-panel">
                    <div className="history-quiz-badge">5-10 min</div>

                    <p className="history-quiz-note">
                        {text.quizNote}
                    </p>

                    <a
                        className="history-quiz-button"
                        href={kahootUrl}
                        target="_blank"
                        rel="noreferrer"
                    >
                        {text.quizButton}
                    </a>
                </div>

            </section>

            <March8Modal
                isOpen={marchModalOpen}
                onClose={() => setMarchModalOpen(false)}
            />

        </div>
    )
}

export default HistoryPage
