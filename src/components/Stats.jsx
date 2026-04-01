import { useLanguage } from "../context/LanguageContext"

const copy = {
    en: {
        title: "Statistics on Gender Equality",
        items: [
            { value: "122M", text: "Girls are out of school worldwide", icon: "\u{1F393}" },
            { value: "28.2%", text: "Women work in the STEM workforce", icon: "\u{1F4BB}" },
            { value: "20%", text: "Average global gender pay gap", icon: "\u{1F4B0}" },
            { value: "33%", text: "Women are represented in national parliaments worldwide", icon: "\u{1F3DB}\uFE0F" }
        ]
    },
    ru: {
        title: "Статистика по гендерному равенству",
        items: [
            { value: "122M", text: "девочек по всему миру не посещают школу", icon: "\u{1F393}" },
            { value: "28.2%", text: "женщин работают в сфере STEM", icon: "\u{1F4BB}" },
            { value: "20%", text: "составляет средний глобальный разрыв в оплате труда", icon: "\u{1F4B0}" },
            { value: "33%", text: "женщин представлены в национальных парламентах мира", icon: "\u{1F3DB}\uFE0F" }
        ]
    },
    kz: {
        title: "Гендерлік теңдік статистикасы",
        items: [
            { value: "122M", text: "қыз бала әлем бойынша мектепке бармайды", icon: "\u{1F393}" },
            { value: "28.2%", text: "әйел STEM саласында жұмыс істейді", icon: "\u{1F4BB}" },
            { value: "20%", text: "орташа әлемдік гендерлік жалақы алшақтығы", icon: "\u{1F4B0}" },
            { value: "33%", text: "әйелдер ұлттық парламенттерде ұсынылған", icon: "\u{1F3DB}\uFE0F" }
        ]
    }
}

const links = [
    "https://www.gce-us.org/girls-education/",
    "https://swe.org/research/2025/global-stem-workplace/",
    "https://www.weforum.org/publications/global-gender-gap-report-2024/",
    "https://www.weforum.org/publications/global-gender-gap-report-2024/"
]

function Stats() {
    const { language } = useLanguage()
    const text = copy[language]

    return (
        <div className="stats">
            <div className="stats-container">
                <h2>{text.title}</h2>

                <div className="stats-grid">
                    {text.items.map((item, index) => (
                        <a
                            key={item.value}
                            href={links[index]}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="stat"
                        >
                            <div className="stat-icon">{item.icon}</div>
                            <h3>{item.value}</h3>
                            <p>{item.text}</p>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Stats
