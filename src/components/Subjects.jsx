import { Link } from "react-router-dom"
import books from "../images/books.png"
import history from "../images/history.png"
import biology from "../images/biology.png"
import { useLanguage } from "../context/LanguageContext"

const copy = {
    en: {
        literature: {
            title: "Literature",
            description: "Powerful women writers, memorable heroines, and stories that stay with you."
        },
        history: {
            title: "History",
            description: "The history of feminism, women's rights, and women who changed society."
        },
        biology: {
            title: "Biology",
            description: "Puberty, menstruation, sleep, nutrition, and caring for your health."
        },
        alt: {
            books: "Books",
            history: "History illustration",
            biology: "Biology illustration"
        }
    },
    ru: {
        literature: {
            title: "Литература",
            description: "Сильные писательницы, яркие героини и истории, которые остаются в памяти."
        },
        history: {
            title: "История",
            description: "История феминизма, прав женщин и женщин, которые меняли общество."
        },
        biology: {
            title: "Биология",
            description: "Пубертат, менструация, сон, питание и забота о своём здоровье."
        },
        alt: {
            books: "Книги",
            history: "Иллюстрация по истории",
            biology: "Иллюстрация по биологии"
        }
    },
    kz: {
        literature: {
            title: "Әдебиет",
            description: "Күшті жазушы әйелдер, есте қалатын кейіпкерлер және шабыт беретін оқиғалар."
        },
        history: {
            title: "Тарих",
            description: "Феминизм тарихы, әйелдер құқықтары және қоғамды өзгерткен әйелдер."
        },
        biology: {
            title: "Биология",
            description: "Жыныстық жетілу, етеккір, ұйқы, тамақтану және денсаулыққа күтім."
        },
        alt: {
            books: "Кітаптар",
            history: "Тарих иллюстрациясы",
            biology: "Биология иллюстрациясы"
        }
    }
}

function Subjects() {
    const { language } = useLanguage()
    const text = copy[language]

    return (
        <section className="subjects">
            <Link to="/literature" className="card">
                <img src={books} alt={text.alt.books} />
                <h3>{text.literature.title}</h3>
                <p>{text.literature.description}</p>
            </Link>

            <Link to="/history" className="card">
                <img src={history} alt={text.alt.history} />
                <h3>{text.history.title}</h3>
                <p>{text.history.description}</p>
            </Link>

            <Link to="/biology" className="card">
                <img src={biology} alt={text.alt.biology} />
                <h3>{text.biology.title}</h3>
                <p>{text.biology.description}</p>
            </Link>
        </section>
    )
}

export default Subjects
