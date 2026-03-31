import girls from "../images/girls.png"
import { useLanguage } from "../context/LanguageContext"

const copy = {
    en: {
        title: "Empowering Girls Through Education",
        description: "NAR.LEN helps girls grow stronger through education, knowledge and inspiration.",
        mission: "Our Mission",
        missionTooltip: "Our mission is to empower and educate young ladies by raising their awareness of topics which are usually overlooked at schools. We want to create a safe and convenient space for learning.",
        cta: "Get Involved",
        imageAlt: "girls"
    },
    ru: {
        title: "Раскрывая силу девушек через образование",
        description: "NAR.LEN помогает девушкам становиться сильнее через образование, знания и вдохновение.",
        mission: "Наша миссия",
        missionTooltip: "Наша миссия заключается в том, чтобы поддерживать и просвещать девушек, повышая их осведомлённость о темах, которые часто остаются без внимания в школах. Мы хотим создать безопасное и удобное пространство для обучения.",
        cta: "Присоединиться",
        imageAlt: "девушки"
    },
    kz: {
        title: "Қыздарды білім арқылы қолдау",
        description: "NAR.LEN қыздарға білім, таным және шабыт арқылы күшейе түсуге көмектеседі.",
        mission: "Біздің миссиямыз",
        missionTooltip: "Біздің миссиямыз - мектептерде жиі назардан тыс қалатын тақырыптар бойынша қыздардың хабардарлығын арттырып, оларды қолдау және білім беру. Біз оқу үшін қауіпсіз әрі ыңғайлы орта құрғымыз келеді.",
        cta: "Қосылу",
        imageAlt: "қыздар"
    }
}

function Hero() {
    const { language } = useLanguage()
    const text = copy[language]

    return (
        <section className="hero">

            <div className="hero-text">

                <h1>{text.title}</h1>

                <p>
                    {text.description}
                </p>

                <div className="hero-buttons">

                    <div className="tooltip-container">

                        <button className="btn-primary">
                            {text.mission}
                        </button>

                        <span className="tooltip-text">
                            {text.missionTooltip}
                        </span>

                    </div>

                    <button
                        className="btn-secondary"
                        onClick={() => window.open("https://www.instagram.com/narlen.project/", "_blank", "noopener,noreferrer")}
                    >
                        {text.cta}
                    </button>

                </div>

            </div>

            <div className="hero-image">
                <img src={girls} alt={text.imageAlt} />
            </div>

        </section>
    )
}

export default Hero
