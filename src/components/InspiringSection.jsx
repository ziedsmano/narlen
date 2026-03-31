import women from "../images/women-history.png"
import { Link } from "react-router-dom"
import { useLanguage } from "../context/LanguageContext"

const copy = {
    en: {
        title: "Inspiring Women\nMaking History",
        description: "Let's discover the wonderful women who shaped our world and history.",
        cta: "Read Stories"
    },
    ru: {
        title: "Вдохновляющие женщины,\nкоторые творят историю",
        description: "Давай узнаем о замечательных женщинах, которые изменили наш мир и историю.",
        cta: "Читать истории"
    },
    kz: {
        title: "Тарих жасаған\nшабыт беретін әйелдер",
        description: "Әлем мен тарихты өзгерткен тамаша әйелдермен танысайық.",
        cta: "Оқиғаларды оқу"
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

                <p>
                    {text.description}
                </p>

                <Link to="/inspiring" className="read-btn">
                    {text.cta}
                </Link>
            </div>

            <div className="inspiring-image">

                <img src={women} alt="women" />

            </div>

        </section>
    )
}

export default InspiringSection
