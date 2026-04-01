import girls from "../images/girls.png"
import { useLanguage } from "../context/LanguageContext"

const copy = {
    en: {
        title: "Empowering Girls Through Education",
        description: "NAR.LEN helps girls grow stronger through education, knowledge, and inspiration.",
        mission: "Our Mission",
        missionTooltip: "We create a safe and supportive space where girls can learn about topics that are often skipped or explained too briefly at school.",
        cta: "Get Involved",
        imageAlt: "Girls standing together"
    },
    ru: {
        title: "Раскрываем силу девушек через образование",
        description: "NAR.LEN помогает девушкам становиться увереннее через знания, образование и вдохновение.",
        mission: "Наша миссия",
        missionTooltip: "Мы создаём безопасное и поддерживающее пространство, где девушки могут узнавать о темах, которые в школе часто не объясняют совсем или затрагивают слишком кратко.",
        cta: "Присоединиться",
        imageAlt: "Девушки вместе"
    },
    kz: {
        title: "Қыздарды білім арқылы қолдау",
        description: "NAR.LEN қыздарға білім, таным және шабыт арқылы күшейе түсуге көмектеседі.",
        mission: "Біздің миссиямыз",
        missionTooltip: "Біз мектепте жиі толық түсіндірілмейтін тақырыптарды қауіпсіз әрі қолдаушы ортада үйренуге мүмкіндік береміз.",
        cta: "Қосылу",
        imageAlt: "Бірге тұрған қыздар"
    }
}

function Hero() {
    const { language } = useLanguage()
    const text = copy[language]

    return (
        <section className="hero">
            <div className="hero-text">
                <h1>{text.title}</h1>

                <p>{text.description}</p>

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
