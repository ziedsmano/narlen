import "./BrainModal.css"
import { useState, useEffect } from "react"
import { useLanguage } from "../context/LanguageContext"

import bg from "../images/brain-modal/brain-bg.jpg"
import neuro from "../images/brain-modal/brain-neuro.png"
import emotions from "../images/brain-modal/brain-emotions.png"
import sleep from "../images/brain-modal/brain-sleep.png"

const BRAIN_SOURCE_URL = "https://www.hiwellapp.com/blog/ergenlikte-beyin"

const copy = {
    en: {
        close: "Close dialog",
        title: "Deep Dive: The Transforming Teenage Brain",
        subtitle: "Learn how puberty activates key brain systems and supports the development of thinking, emotions, and future goals.",
        source: "Source",
        cards: [
            {
                title: "1. The hypothalamic-pituitary-gonadal axis",
                text: [
                    "This axis is active before and shortly after birth, then stays quiet for a long period because of inhibitory brain signals.",
                    "During adolescence, it becomes active again. This begins the production of sex hormones and tells the body that puberty is starting."
                ]
            },
            {
                title: "2. How does the brain develop?",
                text: [
                    "Hormones begin to influence the brain more strongly during puberty.",
                    "Brain development starts before birth and continues for many years, especially in the front part of the brain, which matures quickly in adolescence."
                ]
            },
            {
                title: "3. What happens when the front brain develops?",
                text: [
                    "Teenagers become more curious, more willing to explore, and more interested in new experiences and future goals.",
                    "When a teenager has meaningful goals, learning often becomes easier because the brain is closely connected to emotion and motivation."
                ]
            }
        ]
    },
    ru: {
        close: "Закрыть окно",
        title: "Подробнее: как меняется мозг в подростковом возрасте",
        subtitle: "Узнай, как пубертат активирует важные системы мозга и влияет на мышление, эмоции и будущие цели.",
        source: "Источник",
        cards: [
            {
                title: "1. Гипоталамо-гипофизарно-гонадная ось",
                text: [
                    "Эта система активна до рождения и вскоре после него, а затем надолго подавляется тормозящими сигналами мозга.",
                    "В подростковом возрасте она снова включается. Так начинается выработка половых гормонов, и тело получает сигнал к началу пубертата."
                ]
            },
            {
                title: "2. Как развивается мозг?",
                text: [
                    "Во время пубертата гормоны начинают сильнее влиять на мозг.",
                    "Развитие мозга начинается ещё до рождения и продолжается много лет, особенно в лобных отделах, которые быстро дозревают именно в подростковый период."
                ]
            },
            {
                title: "3. Что происходит при развитии лобных отделов?",
                text: [
                    "Подростки становятся любопытнее, чаще пробуют новое и начинают больше думать о своём будущем.",
                    "Когда у подростка появляются важные цели, учиться становится легче, потому что мозг тесно связан с эмоциями и мотивацией."
                ]
            }
        ]
    },
    kz: {
        close: "Терезені жабу",
        title: "Тереңірек: жасөспірім мидағы өзгерістер",
        subtitle: "Пубертат мидың маңызды жүйелерін қалай іске қосатынын және ойлау, эмоция мен болашақ мақсаттарға қалай әсер ететінін біл.",
        source: "Дереккөз",
        cards: [
            {
                title: "1. Гипоталамус-гипофиз-гонада осі",
                text: [
                    "Бұл жүйе туғанға дейін және туғаннан кейінгі қысқа кезеңде белсенді болады, кейін ми сигналдарының әсерінен ұзақ уақыт тынышталады.",
                    "Жасөспірімдік шақта ол қайта іске қосылады. Осылайша жыныс гормондары бөлініп, денеге пубертаттың басталғаны туралы белгі беріледі."
                ]
            },
            {
                title: "2. Ми қалай дамиды?",
                text: [
                    "Жыныстық жетілу кезінде гормондар миға күштірек әсер ете бастайды.",
                    "Мидың дамуы туылмай тұрып басталып, көптеген жыл бойы жалғасады, әсіресе алдыңғы бөлігі жасөспірім кезде жылдам жетіледі."
                ]
            },
            {
                title: "3. Мидың алдыңғы бөлігі дамығанда не болады?",
                text: [
                    "Жасөспірімдер қызығырақ болып, жаңа нәрселерді зерттеуге және болашақ жайлы ойлануға бейім болады.",
                    "Егер жасөспірімнің айқын мақсаты болса, оқу да тиімдірек жүреді, себебі ми эмоция мен мотивациямен тығыз байланысты."
                ]
            }
        ]
    }
}

function BrainModal({ isOpen, onClose }) {
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
        <div className={`brain-overlay app-modal-overlay ${closing ? "overlay-closing" : ""}`}>
            <div
                className={`brain-modal app-modal-shell ${closing ? "modal-closing" : ""}`}
                role="dialog"
                aria-modal="true"
                aria-labelledby="brain-modal-title"
            >
                <button
                    className="brain-close app-modal-close"
                    onClick={handleClose}
                    aria-label={text.close}
                    data-read-aloud-ignore="true"
                >
                    ×
                </button>

                <div
                    className="brain-container app-modal-content app-modal-content--brain"
                    data-read-aloud-target="true"
                    style={{ backgroundImage: `url(${bg})` }}
                >
                    <h1 id="brain-modal-title" className="brain-title">{text.title}</h1>
                    <p className="brain-subtitle">{text.subtitle}</p>

                    {[
                        { image: neuro, content: text.cards[0] },
                        { image: emotions, content: text.cards[1] },
                        { image: sleep, content: text.cards[2] }
                    ].map((item) => (
                        <div className="brain-card" data-read-aloud-block="true" key={item.content.title}>
                            <img src={item.image} alt="" />

                            <div className="brain-text">
                                <h3>{item.content.title}</h3>
                                {item.content.text.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                            </div>
                        </div>
                    ))}

                    <div className="brain-source-wrap">
                        <a className="brain-source-link" href={BRAIN_SOURCE_URL} target="_blank" rel="noreferrer">
                            {text.source}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BrainModal
