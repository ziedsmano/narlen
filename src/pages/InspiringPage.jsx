import "./InspiringPage.css"
import { useState } from "react"
import { useLanguage } from "../context/LanguageContext"

import marie from "../images/women/marie.jpg"
import malala from "../images/women/malala.jpg"
import frida from "../images/women/frida.jpg"
import parks from "../images/women/parks.jpg"
import cleopatra from "../images/women/cleopatra.jpg"
import lovelace from "../images/women/lovelace.jpg"
import joan from "../images/women/joan.jpg"
import hypatia from "../images/women/hypatia.jpg"
import merkel from "../images/women/merkel.jpg"
import thatcher from "../images/women/thatcher.jpg"
import greta from "../images/women/greta.jpg"
import maathai from "../images/women/maathai.jpg"
import okeeffe from "../images/women/okeeffe.jpg"
import gandhi from "../images/women/gandhi.jpg"
import goodall from "../images/women/goodall.jpg"

const copy = {
    en: {
        heroWord: "EVERY",
        heroLine: "Woman has a history",
        quote: "\"The purpose of a storyteller is not to tell you how to think, but to give you questions to think upon.\"",
        quoteAuthor: "Brandon Sanderson",
        category: "Category",
        period: "Time Period",
        region: "Region",
        clear: "Clear",
        previous: "< Previous",
        next: "Next >",
        categories: ["Science", "Art", "Activism", "Politics"],
        periods: ["Ancient", "Middle Ages", "1800s", "1900s", "2000s"],
        regions: ["Europe", "Asia", "America", "Africa"]
    },
    ru: {
        heroWord: "КАЖДАЯ",
        heroLine: "женщина имеет свою историю",
        quote: "\"Задача рассказчика не в том, чтобы говорить тебе, как думать, а в том, чтобы дать вопросы, над которыми стоит задуматься.\"",
        quoteAuthor: "Брэндон Сандерсон",
        category: "Категория",
        period: "Период",
        region: "Регион",
        clear: "Сбросить",
        previous: "< Назад",
        next: "Далее >",
        categories: ["Наука", "Искусство", "Активизм", "Политика"],
        periods: ["Древность", "Средние века", "1800-е", "1900-е", "2000-е"],
        regions: ["Европа", "Азия", "Америка", "Африка"]
    },
    kz: {
        heroWord: "ӘРБІР",
        heroLine: "әйелдің өз тарихы бар",
        quote: "\"Әңгімешінің мақсаты саған қалай ойлау керегін айту емес, ойлануға тұрарлық сұрақ беру.\"",
        quoteAuthor: "Брэндон Сандерсон",
        category: "Санат",
        period: "Кезең",
        region: "Аймақ",
        clear: "Тазарту",
        previous: "< Артқа",
        next: "Келесі >",
        categories: ["Ғылым", "Өнер", "Белсенділік", "Саясат"],
        periods: ["Ежелгі дәуір", "Орта ғасыр", "1800-жылдар", "1900-жылдар", "2000-жылдар"],
        regions: ["Еуропа", "Азия", "Америка", "Африка"]
    }
}

const women = [
    {
        name: "Marie Curie",
        img: marie,
        category: "Science",
        region: "Europe",
        period: "1900s",
        link: "https://www.britannica.com/biography/Marie-Curie",
        info: {
            en: "The first woman to win a Nobel Prize and the only person to receive Nobel Prizes in two different sciences: Physics and Chemistry.",
            ru: "Первая женщина, получившая Нобелевскую премию, и единственный человек, удостоенный Нобелевских премий сразу в двух науках: физике и химии.",
            kz: "Нобель сыйлығын алған алғашқы әйел және екі түрлі ғылым бойынша: физика мен химиядан Нобель алған жалғыз адам."
        }
    },
    {
        name: "Malala Yousafzai",
        img: malala,
        category: "Activism",
        region: "Asia",
        period: "2000s",
        link: "https://www.britannica.com/biography/Malala-Yousafzai",
        info: {
            en: "The youngest Nobel Peace Prize winner and a global symbol of girls' right to education.",
            ru: "Самая юная лауреатка Нобелевской премии мира и мировой символ права девочек на образование.",
            kz: "Нобель бейбітшілік сыйлығының ең жас иегері және қыздардың білім алу құқығының жаһандық символы."
        }
    },
    {
        name: "Rosa Parks",
        img: parks,
        category: "Activism",
        region: "America",
        period: "1900s",
        link: "https://www.history.com/topics/black-history/rosa-parks",
        info: {
            en: "Her refusal to give up a bus seat became a turning point in the U.S. civil rights movement.",
            ru: "Её отказ уступить место в автобусе стал переломным моментом в движении за гражданские права в США.",
            kz: "Оның автобуста орнын беруден бас тартуы АҚШ-тағы азаматтық құқықтар қозғалысының маңызды бетбұрысына айналды."
        }
    },
    {
        name: "Frida Kahlo",
        img: frida,
        category: "Art",
        region: "America",
        period: "1900s",
        link: "https://www.britannica.com/biography/Frida-Kahlo",
        info: {
            en: "Mexican artist known for powerful self-portraits about identity, pain, and resilience.",
            ru: "Мексиканская художница, известная сильными автопортретами о личности, боли и стойкости.",
            kz: "Тұлға, ауырсыну және төзімділік туралы әсерлі автопортреттерімен танылған мексикалық суретші."
        }
    },
    {
        name: "Cleopatra",
        img: cleopatra,
        category: "Politics",
        region: "Africa",
        period: "Ancient",
        link: "https://www.britannica.com/biography/Cleopatra-queen-of-Egypt",
        info: {
            en: "The last active ruler of Ptolemaic Egypt, remembered for political intelligence and influence.",
            ru: "Последняя активная правительница Птолемеевского Египта, известная политическим умом и влиянием.",
            kz: "Саяси ақылымен және ықпалымен есте қалған Птолемейлік Египеттің соңғы белсенді билеушісі."
        }
    },
    {
        name: "Ada Lovelace",
        img: lovelace,
        category: "Science",
        region: "Europe",
        period: "1800s",
        link: "https://www.britannica.com/biography/Ada-Lovelace",
        info: {
            en: "Often called the world's first computer programmer for her early algorithmic work.",
            ru: "Её часто называют первым программистом в мире благодаря ранней работе с алгоритмами.",
            kz: "Алгоритмдермен ерте жұмыс істегені үшін оны жиі әлемдегі алғашқы бағдарламалаушы деп атайды."
        }
    },
    {
        name: "Joan of Arc",
        img: joan,
        category: "Politics",
        region: "Europe",
        period: "Middle Ages",
        link: "https://www.britannica.com/biography/Saint-Joan-of-Arc",
        info: {
            en: "French national heroine whose leadership helped change the course of the Hundred Years' War.",
            ru: "Национальная героиня Франции, чьё лидерство помогло изменить ход Столетней войны.",
            kz: "Көшбасшылығы Жүз жылдық соғыстың бағытын өзгертуге көмектескен Францияның ұлттық қаһарманы."
        }
    },
    {
        name: "Hypatia",
        img: hypatia,
        category: "Science",
        region: "Africa",
        period: "Ancient",
        link: "https://www.britannica.com/biography/Hypatia",
        info: {
            en: "One of the earliest known women scientists, remembered for her work in mathematics and philosophy.",
            ru: "Одна из самых ранних известных женщин-учёных, оставившая след в математике и философии.",
            kz: "Математика мен философияға үлес қосқан ең ерте танылған әйел ғалымдардың бірі."
        }
    },
    {
        name: "Margaret Thatcher",
        img: thatcher,
        category: "Politics",
        region: "Europe",
        period: "1900s",
        link: "https://www.britannica.com/biography/Margaret-Thatcher",
        info: {
            en: "The first woman to serve as Prime Minister of the United Kingdom and one of its most influential leaders.",
            ru: "Первая женщина на посту премьер-министра Великобритании и один из самых влиятельных её лидеров.",
            kz: "Ұлыбританияның алғашқы әйел премьер-министрі және елдің ең ықпалды көшбасшыларының бірі."
        }
    },
    {
        name: "Angela Merkel",
        img: merkel,
        category: "Politics",
        region: "Europe",
        period: "2000s",
        link: "https://www.britannica.com/biography/Angela-Merkel",
        info: {
            en: "Germany's first female chancellor, known for pragmatic and steady leadership.",
            ru: "Первая женщина-канцлер Германии, известная прагматичным и стабильным стилем руководства.",
            kz: "Прагматикалық және орнықты басшылығымен танылған Германияның алғашқы әйел канцлері."
        }
    },
    {
        name: "Greta Thunberg",
        img: greta,
        category: "Activism",
        region: "Europe",
        period: "2000s",
        link: "https://www.britannica.com/biography/Greta-Thunberg",
        info: {
            en: "Climate activist who helped bring environmental issues to the center of global public debate.",
            ru: "Климатическая активистка, которая помогла вывести экологические проблемы в центр мирового общественного обсуждения.",
            kz: "Экологиялық мәселелерді жаһандық қоғамдық талқылаудың өзегіне шығаруға көмектескен климат белсендісі."
        }
    },
    {
        name: "Wangari Maathai",
        img: maathai,
        category: "Activism",
        region: "Africa",
        period: "2000s",
        link: "https://www.nobelprize.org/prizes/peace/2004/maathai/facts/",
        info: {
            en: "Founder of the Green Belt Movement and the first African woman to receive the Nobel Peace Prize.",
            ru: "Основательница движения Green Belt и первая африканская женщина, получившая Нобелевскую премию мира.",
            kz: "Green Belt қозғалысының негізін қалаушы және Нобель бейбітшілік сыйлығын алған алғашқы африкалық әйел."
        }
    },
    {
        name: "Georgia O'Keeffe",
        img: okeeffe,
        category: "Art",
        region: "America",
        period: "1900s",
        info: {
            en: "A central figure of American modernism whose visual language changed 20th-century art.",
            ru: "Ключевая фигура американского модернизма, чья художественная манера изменила искусство XX века.",
            kz: "Көркем тілі XX ғасыр өнерін өзгерткен америкалық модернизмнің басты тұлғаларының бірі."
        }
    },
    {
        name: "Indira Gandhi",
        img: gandhi,
        category: "Politics",
        region: "Asia",
        period: "1900s",
        info: {
            en: "The first and only woman Prime Minister of India, remembered as a decisive political leader.",
            ru: "Первая и пока единственная женщина-премьер-министр Индии, запомнившаяся как решительный политический лидер.",
            kz: "Үндістанның алғашқы және әзірге жалғыз әйел премьер-министрі, шешімді саяси көшбасшы ретінде есте қалған."
        }
    },
    {
        name: "Jane Goodall",
        img: goodall,
        category: "Science",
        region: "Europe",
        period: "1900s",
        link: "https://www.nationalgeographic.com/science/article/jane-goodall",
        info: {
            en: "Her research on chimpanzees changed scientific understanding of animal behavior and human connection to nature.",
            ru: "Её исследования шимпанзе изменили научное понимание поведения животных и связи человека с природой.",
            kz: "Шимпанзелерді зерттеуі жануар мінез-құлқы мен адамның табиғатпен байланысын түсінуді өзгертті."
        }
    }
]

function InspiringPage() {
    const { language } = useLanguage()
    const text = copy[language]
    const [category, setCategory] = useState("")
    const [region, setRegion] = useState("")
    const [period, setPeriod] = useState("")
    const [page, setPage] = useState(1)

    const categoryMap = {
        en: { Science: "Science", Art: "Art", Activism: "Activism", Politics: "Politics" },
        ru: { Science: "Наука", Art: "Искусство", Activism: "Активизм", Politics: "Политика" },
        kz: { Science: "Ғылым", Art: "Өнер", Activism: "Белсенділік", Politics: "Саясат" }
    }

    const periodMap = {
        en: { Ancient: "Ancient", "Middle Ages": "Middle Ages", "1800s": "1800s", "1900s": "1900s", "2000s": "2000s" },
        ru: { Ancient: "Древность", "Middle Ages": "Средние века", "1800s": "1800-е", "1900s": "1900-е", "2000s": "2000-е" },
        kz: { Ancient: "Ежелгі дәуір", "Middle Ages": "Орта ғасыр", "1800s": "1800-жылдар", "1900s": "1900-жылдар", "2000s": "2000-жылдар" }
    }

    const regionMap = {
        en: { Europe: "Europe", Asia: "Asia", America: "America", Africa: "Africa" },
        ru: { Europe: "Европа", Asia: "Азия", America: "Америка", Africa: "Африка" },
        kz: { Europe: "Еуропа", Asia: "Азия", America: "Америка", Africa: "Африка" }
    }

    const filteredWomen = women.filter((woman) => (
        (category === "" || woman.category === category) &&
        (region === "" || woman.region === region) &&
        (period === "" || woman.period === period)
    ))

    const itemsPerPage = 12
    const start = (page - 1) * itemsPerPage
    const end = start + itemsPerPage
    const currentWomen = filteredWomen.slice(start, end)

    const nextPage = () => {
        if (page < Math.ceil(filteredWomen.length / itemsPerPage)) {
            setPage(page + 1)
        }
    }

    const prevPage = () => {
        if (page > 1) {
            setPage(page - 1)
        }
    }

    const clearFilters = () => {
        setCategory("")
        setRegion("")
        setPeriod("")
        setPage(1)
    }

    const openWomanSource = (link) => {
        if (link) {
            window.open(link, "_blank", "noopener,noreferrer")
        }
    }

    return (
        <div className="bio-page">
            <div className="hero-background">
                <div className="content-container">
                    <div className="bio-hero">
                        <div className="bio-left">
                            <h1>{text.heroWord}</h1>
                            <p>{text.heroLine}</p>
                        </div>

                        <div className="bio-quote">
                            {text.quote} - {text.quoteAuthor}
                        </div>
                    </div>
                </div>
            </div>

            <div className="bio-filter">
                <select value={category} onChange={(event) => { setCategory(event.target.value); setPage(1) }}>
                    <option value="">{text.category}</option>
                    {Object.keys(categoryMap.en).map((value) => (
                        <option key={value} value={value}>{categoryMap[language][value]}</option>
                    ))}
                </select>

                <select value={period} onChange={(event) => { setPeriod(event.target.value); setPage(1) }}>
                    <option value="">{text.period}</option>
                    {Object.keys(periodMap.en).map((value) => (
                        <option key={value} value={value}>{periodMap[language][value]}</option>
                    ))}
                </select>

                <select value={region} onChange={(event) => { setRegion(event.target.value); setPage(1) }}>
                    <option value="">{text.region}</option>
                    {Object.keys(regionMap.en).map((value) => (
                        <option key={value} value={value}>{regionMap[language][value]}</option>
                    ))}
                </select>

                <button onClick={clearFilters}>{text.clear}</button>
            </div>

            <div className="bio-grid">
                {currentWomen.map((woman, index) => (
                    <div
                        className={`bio-card ${woman.link ? "bio-card-link" : ""}`}
                        key={woman.name}
                        style={{ animationDelay: `${index * 0.1}s` }}
                        onClick={() => openWomanSource(woman.link)}
                        onKeyDown={(event) => {
                            if ((event.key === "Enter" || event.key === " ") && woman.link) {
                                event.preventDefault()
                                openWomanSource(woman.link)
                            }
                        }}
                        role={woman.link ? "link" : undefined}
                        tabIndex={woman.link ? 0 : -1}
                    >
                        <img src={woman.img} alt={woman.name} />

                        <div className="name-overlay">
                            <h3>{woman.name}</h3>
                        </div>

                        <div className="overlay">
                            <h3>{woman.name}</h3>
                            <p>{woman.info[language]}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="pagination">
                {page > 1 && <button onClick={prevPage}>{text.previous}</button>}
                <span className="active">{page}</span>
                {page < Math.ceil(filteredWomen.length / itemsPerPage) && <button onClick={nextPage}>{text.next}</button>}
            </div>
        </div>
    )
}

export default InspiringPage
