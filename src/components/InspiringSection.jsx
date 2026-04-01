import women from "../images/women-history.png"
import { Link } from "react-router-dom"
import { useLanguage } from "../context/LanguageContext"

const copy = {
    en: {
        title: "Inspiring Women\nMaking History",
        description: "Discover remarkable women whose decisions, courage, and work changed the world.",
        cta: "Read Stories",
        imageAlt: "Women making history"
    },
    ru: {
        title: "Вдохновляющие женщины,\nкоторые творят историю",
        description: "Познакомься с выдающимися женщинами, чьи решения, смелость и труд меняли мир.",
        cta: "Читать истории",
        imageAlt: "Женщины, меняющие историю"
    },
    kz: {
        title: "Тарих жасаған\nшабыт беретін әйелдер",
        description: "Әлемді өзгерткен ерекше әйелдердің батылдығы, еңбегі мен жолымен таныс.",
        cta: "Оқиғаларды оқу",
        imageAlt: "Тарих жасаған әйелдер"
    }
}

function InspiringSection() {
    const { language } = useLanguage()
    const text = copy[language]

    return (
        <section className="inspiring-section">
            <div className="inspiring-text">
                <h2>{text.title.split("\n").map((part, index) => (
                    <span key={part}>
                        {part}
                        {index === 0 && <br />}
                    </span>
                ))}</h2>

                <p>{text.description}</p>

                <Link to="/inspiring" className="read-btn">
                    {text.cta}
                </Link>
            </div>

            <div className="inspiring-image">
                <img src={women} alt={text.imageAlt} />
            </div>
        </section>
    )
}

export default InspiringSection
