import "./March8Modal.css"
import { useState, useEffect } from "react"
import { useLanguage } from "../context/LanguageContext"

import bg from "../images/history-bg.jpg"
import protest from "../images/march8/protest.jpg"
import clara from "../images/march8/clara.jpg"
import firstWomensDay from "../images/march8/first-womens-day.png"
import officialWomensDay from "../images/march8/official-womens-day.png"

const copy = {
    en: {
        close: "Close modal",
        title: "International Women's Day",
        dedication: "Dedicated to women's achievements and the protection of their rights.",
        subtitle: "From factory protests to a global rights movement",
        openSource: "Open source for",
        cards: [
            {
                image: protest,
                alt: "1908 protest",
                title: "1908 New York Protest",
                link: "https://tengrinews.kz/curious/8-marta-vs-chto-stoit-znat-o-prazdnike-i-ego-istorii-594143/",
                paragraphs: ["In the late 19th and early 20th centuries, many women worked 12-14 hours a day in factories while receiving much lower pay than men.", "This inequality led to protests by textile workers in New York on March 8, 1908.", "\"Bread and roses!\" became one of the best-known slogans.", "The women demanded shorter hours, fair pay, and voting rights."],
                quoteIndexes: [2]
            },
            {
                image: clara,
                alt: "Clara Zetkin",
                title: "Clara Zetkin and the Idea of March 8",
                link: "https://www.britannica.com/biography/Clara-Zetkin",
                paragraphs: ["Clara Zetkin was a German socialist and public figure who played a major role in the creation of International Women's Day.", "In 1910, at the International Conference of Socialist Women in Copenhagen, she proposed creating a special day devoted to women's struggle for equal rights.", "Delegates from 17 countries supported the idea."],
                quoteIndexes: []
            },
            {
                image: firstWomensDay,
                alt: "First Women's Day",
                title: "The First Women's Day",
                link: "https://www.internationalwomensday.com/Activity/15586/The-history-of-IWD",
                paragraphs: ["On March 19, 1911, the first large-scale observance was held.", "Hundreds of thousands of women joined rallies across Austria-Hungary, Denmark, Germany, and Switzerland.", "Activists such as Rosa Luxemburg also helped spread the idea."],
                quoteIndexes: []
            },
            {
                image: officialWomensDay,
                alt: "Official Women's Day",
                title: "International Recognition",
                link: "https://news.un.org/ru/story/2026/03/1467495",
                paragraphs: ["In 1945, the UN Charter formally affirmed the principle of equality between women and men.", "In 1975, the United Nations marked March 8 officially as International Women's Day.", "Later, the UN General Assembly supported March 8 as a day connected to women's rights and international peace."],
                quoteIndexes: []
            }
        ]
    },
    ru: {
        close: "Закрыть окно",
        title: "Международный женский день",
        dedication: "Посвящён достижениям женщин и защите их прав.",
        subtitle: "От фабричных протестов к мировому движению за права",
        openSource: "Открыть источник для",
        cards: [
            {
                image: protest,
                alt: "Протест 1908 года",
                title: "Протест в Нью-Йорке в 1908 году",
                link: "https://tengrinews.kz/curious/8-marta-vs-chto-stoit-znat-o-prazdnike-i-ego-istorii-594143/",
                paragraphs: ["В конце XIX и начале XX века многие женщины работали на фабриках по 12-14 часов в день и получали значительно меньше мужчин.", "Именно это неравенство привело к протестам текстильщиц в Нью-Йорке 8 марта 1908 года.", "\"Хлеба и роз!\" стало одним из самых известных лозунгов.", "Женщины требовали сокращения рабочего дня, справедливой оплаты и избирательных прав."],
                quoteIndexes: [2]
            },
            {
                image: clara,
                alt: "Клара Цеткин",
                title: "Клара Цеткин и идея 8 Марта",
                link: "https://www.britannica.com/biography/Clara-Zetkin",
                paragraphs: ["Клара Цеткин была немецкой социалисткой и общественной деятельницей, сыгравшей важную роль в создании Международного женского дня.", "В 1910 году на Международной конференции социалисток в Копенгагене она предложила учредить особый день борьбы женщин за равные права.", "Делегаты из 17 стран поддержали эту идею."],
                quoteIndexes: []
            },
            {
                image: firstWomensDay,
                alt: "Первый женский день",
                title: "Первый женский день",
                link: "https://www.internationalwomensday.com/Activity/15586/The-history-of-IWD",
                paragraphs: ["19 марта 1911 года прошло первое массовое празднование.", "Сотни тысяч женщин вышли на митинги и демонстрации в Австро-Венгрии, Дании, Германии и Швейцарии.", "Распространению идеи также помогали активистки, такие как Роза Люксембург."],
                quoteIndexes: []
            },
            {
                image: officialWomensDay,
                alt: "Официальный женский день",
                title: "Международное признание",
                link: "https://news.un.org/ru/story/2026/03/1467495",
                paragraphs: ["В 1945 году Устав ООН закрепил принцип равенства женщин и мужчин.", "В 1975 году Организация Объединённых Наций официально отметила 8 Марта как Международный женский день.", "Позднее Генеральная Ассамблея ООН поддержала 8 Марта как день, связанный с правами женщин и международным миром."],
                quoteIndexes: []
            }
        ]
    },
    kz: {
        close: "Терезені жабу",
        title: "Халықаралық әйелдер күні",
        dedication: "Әйелдердің жетістіктері мен құқықтарын қорғауға арналған.",
        subtitle: "Зауыттағы наразылықтардан әлемдік құқық қозғалысына дейін",
        openSource: "Дереккөзді ашу:",
        cards: [
            {
                image: protest,
                alt: "1908 жылғы наразылық",
                title: "1908 жылғы Нью-Йорк наразылығы",
                link: "https://tengrinews.kz/curious/8-marta-vs-chto-stoit-znat-o-prazdnike-i-ego-istorii-594143/",
                paragraphs: ["XIX ғасырдың соңы мен XX ғасырдың басында көптеген әйел фабрикада күніне 12-14 сағат жұмыс істеп, ерлерден әлдеқайда аз жалақы алды.", "Осындай теңсіздік 1908 жылғы 8 наурызда Нью-Йорктегі тоқыма жұмысшыларының наразылығына әкелді.", "\"Нан және раушан!\" ең танымал ұрандардың біріне айналды.", "Әйелдер жұмыс уақытын қысқартуды, әділ жалақыны және дауыс беру құқығын талап етті."],
                quoteIndexes: [2]
            },
            {
                image: clara,
                alt: "Клара Цеткин",
                title: "Клара Цеткин және 8 наурыз идеясы",
                link: "https://www.britannica.com/biography/Clara-Zetkin",
                paragraphs: ["Клара Цеткин - Халықаралық әйелдер күнінің қалыптасуына үлкен үлес қосқан неміс социалисті және қоғам қайраткері.", "1910 жылы Копенгагендегі социалист әйелдердің халықаралық конференциясында ол әйелдердің тең құқық үшін күресіне арналған арнайы күн ұсынды.", "Бұл идеяны 17 елден келген делегаттар қолдады."],
                quoteIndexes: []
            },
            {
                image: firstWomensDay,
                alt: "Алғашқы әйелдер күні",
                title: "Алғашқы әйелдер күні",
                link: "https://www.internationalwomensday.com/Activity/15586/The-history-of-IWD",
                paragraphs: ["1911 жылғы 19 наурызда алғашқы ірі мерекелеу өтті.", "Австрия-Венгрия, Дания, Германия және Швейцарияда жүздеген мың әйел митингілерге қатысты.", "Роза Люксембург сияқты белсенділер де бұл идеяның таралуына ықпал етті."],
                quoteIndexes: []
            },
            {
                image: officialWomensDay,
                alt: "Ресми әйелдер күні",
                title: "Халықаралық мойындалу",
                link: "https://news.un.org/ru/story/2026/03/1467495",
                paragraphs: ["1945 жылы БҰҰ Жарғысы әйелдер мен ерлер теңдігі қағидатын бекітті.", "1975 жылы Біріккен Ұлттар Ұйымы 8 наурызды ресми түрде Халықаралық әйелдер күні ретінде атап өтті.", "Кейін БҰҰ Бас Ассамблеясы 8 наурызды әйел құқықтары мен халықаралық бейбітшілікке байланысты күн ретінде қолдады."],
                quoteIndexes: []
            }
        ]
    }
}

function March8Modal({ isOpen, onClose }) {
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
        <div className={`women-overlay app-modal-overlay ${closing ? "overlay-closing" : ""}`}>
            <div className={`women-modal app-modal-shell ${closing ? "modal-closing" : ""}`} role="dialog" aria-modal="true" aria-labelledby="march8-modal-title">
                <button className="women-close app-modal-close" onClick={handleClose} aria-label={text.close} data-read-aloud-ignore="true">
                    ×
                </button>

                <div className="women-container app-modal-content app-modal-content--history" data-read-aloud-target="true" style={{ backgroundImage: `url(${bg})` }}>
                    <h1 id="march8-modal-title" className="women-title">{text.title}</h1>
                    <p className="women-dedication">{text.dedication}</p>
                    <p className="women-subtitle">{text.subtitle}</p>

                    {text.cards.map((card) => (
                        <a
                            key={card.title}
                            className="women-card-link"
                            data-read-aloud-block="true"
                            href={card.link}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`${text.openSource} ${card.title}`}
                        >
                            <div className="women-card">
                                <img src={card.image} alt={card.alt} />

                                <div>
                                    <h3>{card.title}</h3>

                                    {card.paragraphs.map((paragraph, index) => (
                                        <p key={`${card.title}-${index}`} className={card.quoteIndexes.includes(index) ? "women-quote" : undefined}>
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default March8Modal
