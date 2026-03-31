import { Link } from "react-router-dom"
import books from "../images/books.png"
import history from "../images/history.png"
import biology from "../images/biology.png"
import { useLanguage } from "../context/LanguageContext"

const copy = {
    en: {
        literature: {
            title: "Literature",
            description: "Powerful female characters and inspiring stories."
        },
        history: {
            title: "History",
            description: "The history of feminism and great women."
        },
        biology: {
            title: "Biology",
            description: "Puberty, menstruation and health education."
        }
    },
    ru: {
        literature: {
            title: "Литература",
            description: "Сильные женские героини и вдохновляющие истории."
        },
        history: {
            title: "История",
            description: "История феминизма и великих женщин."
        },
        biology: {
            title: "Биология",
            description: "Пубертат, менструация и забота о здоровье."
        }
    },
    kz: {
        literature: {
            title: "Әдебиет",
            description: "Күшті әйел кейіпкерлері мен шабыт беретін оқиғалар."
        },
        history: {
            title: "Тарих",
            description: "Феминизм тарихы және ұлы әйелдер."
        },
        biology: {
            title: "Биология",
            description: "Жыныстық жетілу, етеккір және денсаулық туралы білім."
        }
    }
}

function Subjects() {
    const { language } = useLanguage()
    const text = copy[language]

    return (
        <section className="subjects">

            <Link to="/literature" className="card">

                <img src={books} alt="books" />

                <h3>{text.literature.title}</h3>

                <p>
                    {text.literature.description}
                </p>

            </Link>

            <Link to="/history" className="card">

                <img src={history} alt="history" />

                <h3>{text.history.title}</h3>

                <p>
                    {text.history.description}
                </p>

            </Link>

            <Link to="/biology" className="card">

                <img src={biology} alt="biology" />

                <h3>{text.biology.title}</h3>

                <p>
                    {text.biology.description}
                </p>

            </Link>

        </section>
    )
}

export default Subjects
