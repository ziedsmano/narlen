import { useState, useEffect } from "react"
import { useLanguage } from "../context/LanguageContext"
import "./FeminismPage.css"
import todayBg from "../images/feminism/today-bg.jpg"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, EffectFade, Autoplay } from "swiper/modules"

import "swiper/css"
import "swiper/css/navigation"

import bg1 from "../images/feminism/background/bg1.jpg"
import bg2 from "../images/feminism/background/bg2.jpg"
import bg3 from "../images/feminism/background/bg3.jpg"
import bg4 from "../images/feminism/background/bg4.jpg"
import early1 from "../images/feminism/early/early1.jpg"
import early2 from "../images/feminism/early/early2.jpg"
import early3 from "../images/feminism/early/early3.jpg"
import en1 from "../images/feminism/enlightenment/en1.jpg"
import en2 from "../images/feminism/enlightenment/en2.jpg"
import en3 from "../images/feminism/enlightenment/en3.jpg"
import fourth1 from "../images/feminism/fourthwave/fow1.jpg"
import fourth2 from "../images/feminism/fourthwave/fow2.jpg"
import fourth3 from "../images/feminism/fourthwave/fow3.jpg"
import fourth4 from "../images/feminism/fourthwave/fow4.jpg"
import tw2 from "../images/feminism/thirdwave/tw2.jpg"
import sw1 from "../images/feminism/secondwave/sw1.jpg"
import sw2 from "../images/feminism/secondwave/sw2.jpg"
import sw3 from "../images/feminism/secondwave/sw3.jpg"
import sw4 from "../images/feminism/secondwave/sw4.jpg"
import fw1 from "../images/feminism/firstwave/fw1.jpg"
import fw2 from "../images/feminism/firstwave/fw2.jpg"
import fw3 from "../images/feminism/firstwave/fw3.jpg"
import fw4 from "../images/feminism/firstwave/fw4.jpg"

const content = {
    en: {
        heroTitle: "The History of Feminism",
        heroText: "From early struggles for rights to modern global movements",
        sources: "Sources",
        todayTitle: "Feminism Today",
        cards: [
            {
                year: "Before the 15th Century",
                title: "Background",
                preview: "Women had very limited rights in most societies and were often excluded from education, property, and public life.",
                images: [bg1, bg2, bg3, bg4],
                body: ["For centuries women were confined mainly to domestic roles.", "In many societies they could not study, own property independently, or fully participate in public life.", "This period shows how deep the roots of gender inequality were."]
            },
            {
                year: "Late 14th - 16th Century",
                title: "Early Feminist Thought",
                preview: "Christine de Pizan and Laura Cereta challenged assumptions about women and defended education.",
                images: [early1, early2, early3],
                body: ["Thinkers such as Christine de Pizan began openly defending women's intellectual potential.", "Writers argued that women would be seen as equal if they had equal access to education.", "This laid the groundwork for later feminist writing."]
            },
            {
                year: "18th Century",
                title: "Enlightenment Influence",
                preview: "Olympe de Gouges and Mary Wollstonecraft argued for equality in education, work, and politics.",
                images: [en1, en2, en3],
                body: ["Writers of the Enlightenment challenged the idea that women existed only for men.", "Texts such as A Vindication of the Rights of Woman argued for equal opportunity in education and civic life.", "These ideas became foundational to modern feminism."]
            },
            {
                year: "19th Century - Early 20th Century",
                title: "First Wave Feminism",
                preview: "The first wave focused on legal status, formal equality, and especially women's right to vote.",
                images: [fw1, fw2, fw3, fw4],
                body: ["Events like the Seneca Falls Convention gave public shape to the demand for women's equality.", "Activists focused on legal rights, civic participation, and suffrage.", "This struggle led to major voting rights victories in several countries."]
            },
            {
                year: "1960s - 1980s",
                title: "Second Wave Feminism",
                preview: "The second wave expanded feminism to work, family, sexuality, and control over one's body.",
                images: [sw1, sw2, sw3, sw4],
                body: ["Feminism moved beyond voting rights and examined inequality in daily life.", "Debates focused on work, wages, family roles, reproductive rights, and sexism in institutions.", "It also encouraged broader conversations about race, class, and representation."]
            },
            {
                year: "1990s - 2010s",
                title: "Third Wave Feminism",
                preview: "The third wave introduced ideas such as intersectionality, gender fluidity, and new feminist identities.",
                images: [tw2],
                body: ["Third-wave feminism questioned older definitions of femininity and equality.", "It drew energy from media, youth culture, and new theories about identity.", "This period opened space for more diverse feminist voices."]
            },
            {
                year: "2012 - Present",
                title: "Fourth Wave Feminism",
                preview: "The fourth wave emphasizes online activism, anti-harassment work, and intersectional justice.",
                images: [fourth1, fourth2, fourth3, fourth4],
                body: ["Social media became a major tool for feminist organizing.", "Movements such as #MeToo helped millions speak openly about harassment and violence.", "This wave is marked by digital activism, global solidarity, and the pursuit of social justice."]
            }
        ],
        todayCards: [
            {
                icon: "🎓",
                title: "Education",
                text: "Girls' access to education has improved globally, but millions of young women still do not complete secondary school.",
                href: "https://data.unicef.org/topic/gender/gender-disparities-in-education/"
            },
            {
                icon: "👩‍💼",
                title: "Leadership",
                text: "Women hold more leadership roles than before, yet structural bias still limits promotion and decision-making power.",
                href: "https://www.mckinsey.com/capabilities/people-and-organizational-performance/our-insights/women-in-the-workplace"
            },
            {
                icon: "🌐",
                title: "Digital Activism",
                text: "Online spaces allow women to share experiences, organize quickly, and build collective action across borders.",
                href: "https://journals.openedition.org/cidades/10315?lang=en"
            }
        ]
    },
    ru: {
        heroTitle: "История феминизма",
        heroText: "От ранней борьбы за права до современных глобальных движений",
        sources: "Источники",
        todayTitle: "Феминизм сегодня",
        cards: [
            { year: "До XV века", title: "Предпосылки", preview: "Во многих обществах женщины имели очень ограниченные права и часто были исключены из образования, собственности и общественной жизни.", images: [bg1, bg2, bg3, bg4], body: ["На протяжении веков женщины в основном были ограничены домашними ролями.", "Во многих обществах они не могли учиться, самостоятельно владеть имуществом или полноценно участвовать в общественной жизни.", "Этот период показывает, насколько глубоки исторические корни гендерного неравенства."] },
            { year: "Конец XIV - XVI век", title: "Ранняя феминистская мысль", preview: "Кристина Пизанская и Лаура Черета начали оспаривать взгляды на женщин и отстаивать право на образование.", images: [early1, early2, early3], body: ["Такие мыслительницы, как Кристина Пизанская, открыто защищали интеллектуальный потенциал женщин.", "Писательницы утверждали, что женщины будут восприниматься как равные, если получат равный доступ к образованию.", "Так формировалась основа для более поздних феминистских текстов."] },
            { year: "XVIII век", title: "Влияние Просвещения", preview: "Олимпия де Гуж и Мэри Уолстонкрафт выступали за равенство в образовании, труде и политике.", images: [en1, en2, en3], body: ["Авторы эпохи Просвещения оспаривали представление о женщине как о существе только для мужчин.", "Такие тексты, как «Защита прав женщины», требовали равных возможностей в образовании и гражданской жизни.", "Эти идеи стали важной основой современного феминизма."] },
            { year: "XIX век - начало XX века", title: "Первая волна феминизма", preview: "Первая волна была сосредоточена на правовом статусе, формальном равенстве и особенно на праве голоса.", images: [fw1, fw2, fw3, fw4], body: ["Такие события, как Сенека-Фоллсская конвенция, придали публичную форму требованиям женского равенства.", "Активистки сосредоточились на правовых правах, гражданском участии и избирательном праве.", "Эта борьба привела к важным победам в вопросе голосования в ряде стран."] },
            { year: "1960-е - 1980-е", title: "Вторая волна феминизма", preview: "Вторая волна расширила повестку до работы, семьи, сексуальности и контроля над своим телом.", images: [sw1, sw2, sw3, sw4], body: ["Феминизм вышел за пределы темы избирательного права и начал анализировать неравенство в повседневной жизни.", "Обсуждения касались труда, зарплаты, семейных ролей, репродуктивных прав и сексизма в институтах.", "Одновременно выросло внимание к вопросам расы, класса и представительства."] },
            { year: "1990-е - 2010-е", title: "Третья волна феминизма", preview: "Третья волна ввела идеи интерсекциональности, гендерной гибкости и новых феминистских идентичностей.", images: [tw2], body: ["Третья волна поставила под вопрос старые представления о женственности и равенстве.", "Она опиралась на медиа, молодёжную культуру и новые теории идентичности.", "В этот период в феминизме стало больше разнообразных голосов."] },
            { year: "2012 - наши дни", title: "Четвёртая волна феминизма", preview: "Четвёртая волна делает акцент на онлайн-активизме, борьбе с домогательствами и интерсекциональной справедливости.", images: [fourth1, fourth2, fourth3, fourth4], body: ["Социальные сети стали важным инструментом феминистской самоорганизации.", "Такие движения, как #MeToo, помогли миллионам женщин открыто говорить о домогательствах и насилии.", "Эта волна связана с цифровым активизмом, глобальной солидарностью и стремлением к социальной справедливости."] }
        ],
        todayCards: [
            { icon: "🎓", title: "Образование", text: "Доступ девочек к образованию в мире улучшился, но миллионы молодых женщин всё ещё не заканчивают среднюю школу.", href: "https://data.unicef.org/topic/gender/gender-disparities-in-education/" },
            { icon: "👩‍💼", title: "Лидерство", text: "Женщины занимают больше руководящих ролей, чем раньше, но системные барьеры всё ещё ограничивают продвижение и влияние.", href: "https://www.mckinsey.com/capabilities/people-and-organizational-performance/our-insights/women-in-the-workplace" },
            { icon: "🌐", title: "Цифровой активизм", text: "Онлайн-пространство позволяет женщинам делиться опытом, быстро объединяться и запускать коллективные действия через границы.", href: "https://journals.openedition.org/cidades/10315?lang=en" }
        ]
    },
    kz: {
        heroTitle: "Феминизм тарихы",
        heroText: "Құқық үшін алғашқы күрестен қазіргі жаһандық қозғалыстарға дейін",
        sources: "Дереккөздер",
        todayTitle: "Феминизм бүгін",
        cards: [
            { year: "XV ғасырға дейін", title: "Алғышарттар", preview: "Көптеген қоғамдарда әйелдердің құқықтары өте шектеулі болды және олар білімнен, меншік иеленуден және қоғамдық өмірден жиі шеттетілді.", images: [bg1, bg2, bg3, bg4], body: ["Ғасырлар бойы әйелдер көбіне үй ішіндегі рөлдермен шектелді.", "Көптеген қоғамдарда олар оқи алмады, мүлікті өз бетінше иелене алмады және қоғамдық өмірге толық қатыса алмады.", "Бұл кезең гендерлік теңсіздіктің тарихи тамыры қаншалық терең екенін көрсетеді."] },
            { year: "XIV ғасырдың соңы - XVI ғасыр", title: "Ерте феминистік ой", preview: "Кристина де Пизан мен Лаура Черета әйелдер туралы ескі түсініктерге қарсы шығып, білім құқығын қорғады.", images: [early1, early2, early3], body: ["Кристина де Пизан сияқты ойшылдар әйелдердің интеллектуалдық әлеуетін ашық қорғады.", "Жазушылар әйелдерге тең білім берілсе, олар да ерлермен тең қабылданатынын айтты.", "Осылайша кейінгі феминистік жазбаларға негіз қаланды."] },
            { year: "XVIII ғасыр", title: "Ағартушылық ықпалы", preview: "Олимпия де Гуж бен Мэри Уолстонкрафт білімде, еңбекте және саясатта теңдік талап етті.", images: [en1, en2, en3], body: ["Ағартушылық дәуірінің авторлары әйел тек еркек үшін өмір сүреді деген түсінікке қарсы шықты.", "«Әйел құқықтарын қорғау» сияқты мәтіндер білім мен азаматтық өмірде тең мүмкіндік сұрады.", "Бұл идеялар заманауи феминизмнің маңызды негізіне айналды."] },
            { year: "XIX ғасыр - XX ғасырдың басы", title: "Феминизмнің бірінші толқыны", preview: "Бірінші толқын құқықтық мәртебе, формалды теңдік және әсіресе сайлау құқығына назар аударды.", images: [fw1, fw2, fw3, fw4], body: ["Сенека-Фоллс сияқты оқиғалар әйел теңдігі талабын ашық қоғамдық деңгейге шығарды.", "Белсенділер құқықтық құқықтарға, азаматтық қатысуға және сайлау құқығына басымдық берді.", "Бұл күрес бірнеше елде дауыс беру құқығы бойынша ірі жеңістерге әкелді."] },
            { year: "1960-жылдар - 1980-жылдар", title: "Феминизмнің екінші толқыны", preview: "Екінші толқын феминизмді жұмыс, отбасы, сексуалдық және өз денесі туралы шешімге дейін кеңейтті.", images: [sw1, sw2, sw3, sw4], body: ["Феминизм дауыс беру құқығынан асып, күнделікті өмірдегі теңсіздікті талдай бастады.", "Талқылаулар еңбек, жалақы, отбасылық рөлдер, репродуктивтік құқықтар және жүйелік сексизмге арналды.", "Сонымен бірге нәсіл, тап және өкілдік мәселелеріне де көбірек назар аударылды."] },
            { year: "1990-жылдар - 2010-жылдар", title: "Феминизмнің үшінші толқыны", preview: "Үшінші толқын интерсекционалдық, гендерлік икемділік және жаңа феминистік сәйкестік идеяларын енгізді.", images: [tw2], body: ["Үшінші толқын әйелдік пен теңдік туралы бұрынғы түсініктерді қайта қарастырды.", "Ол медиаға, жастар мәдениетіне және жаңа identity теорияларына сүйенді.", "Осы кезеңде феминизмде әртүрлі дауыстар көбейді."] },
            { year: "2012 - бүгінге дейін", title: "Феминизмнің төртінші толқыны", preview: "Төртінші толқын онлайн-белсенділікке, қудалауға қарсы күреске және интерсекционалды әділетке мән береді.", images: [fourth1, fourth2, fourth3, fourth4], body: ["Әлеуметтік желілер феминистік ұйымдасудың басты құралына айналды.", "#MeToo сияқты қозғалыстар миллиондаған әйелге зорлық пен қудалау туралы ашық айтуға мүмкіндік берді.", "Бұл толқын цифрлық белсенділікпен, жаһандық ынтымақпен және әлеуметтік әділетке ұмтылумен сипатталады."] }
        ],
        todayCards: [
            { icon: "🎓", title: "Білім", text: "Әлемде қыздардың білімге қолжетімділігі жақсарды, бірақ әлі де миллиондаған жас әйел орта білімді толық аяқтамайды.", href: "https://data.unicef.org/topic/gender/gender-disparities-in-education/" },
            { icon: "👩‍💼", title: "Көшбасшылық", text: "Әйелдер басшылық рөлдерде көбейіп келеді, бірақ жүйелік кедергілер олардың өсуі мен шешім қабылдауға ықпалын әлі де шектейді.", href: "https://www.mckinsey.com/capabilities/people-and-organizational-performance/our-insights/women-in-the-workplace" },
            { icon: "🌐", title: "Цифрлық белсенділік", text: "Онлайн кеңістік әйелдерге тәжірибе бөлісуге, тез бірігуге және шекарадан тыс ортақ әрекет бастауға мүмкіндік береді.", href: "https://journals.openedition.org/cidades/10315?lang=en" }
        ]
    }
}

function FeminismPage() {
    const { language } = useLanguage()
    const text = content[language]
    const [active, setActive] = useState(null)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="feminism-page">
            <section className="feminism-hero">
                <div className="hero-overlay"></div>

                <div className="hero-content">
                    <h1>{text.heroTitle}</h1>
                    <p>{text.heroText}</p>
                </div>
            </section>

            <div className="timeline-wrapper">
                <div className="timeline">
                    <div className="timeline-line"></div>

                    {text.cards.map((event, index) => (
                        <div className="timeline-row" key={event.title}>
                            <div className="timeline-year">{event.year}</div>

                            <div className={`timeline-card ${index % 2 === 0 ? "left" : "right"}`} onClick={() => setActive(index)}>
                                <h3>{event.title}</h3>
                                <p>{event.preview}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <details className="history-sources">
                    <summary>{text.sources}</summary>

                    <div className="history-sources-links">
                        <a href="https://www.britannica.com/topic/gender-equality" target="_blank" rel="noreferrer">
                            Britannica: Gender Equality
                        </a>
                        <a href="https://en.wikipedia.org/wiki/History_of_feminism" target="_blank" rel="noreferrer">
                            Wikipedia: History of Feminism
                        </a>
                    </div>
                </details>
            </div>

            {active !== null && (
                <div className="modal">
                    <div className="modal-content">
                        <button className="close" onClick={() => setActive(null)}>x</button>

                        <Swiper
                            modules={[Navigation, EffectFade, Autoplay]}
                            autoplay={{ delay: 4000 }}
                            navigation
                            loop
                            grabCursor
                            effect="fade"
                            fadeEffect={{ crossFade: true }}
                            speed={800}
                            className="swiper"
                        >
                            {text.cards[active].images.map((img) => (
                                <SwiperSlide key={img}>
                                    <div className="modal-slide" style={{ backgroundImage: `url(${img})` }}>
                                        <div className="modal-gradient"></div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        <div className="modal-text">
                            <h2>{text.cards[active].title}</h2>

                            <div className="modal-text-scroll">
                                {text.cards[active].body.map((item) => <p key={item}>{item}</p>)}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <section className="feminism-today" style={{ backgroundImage: `url(${todayBg})` }}>
                <div className="today-overlay"></div>
                <h2>{text.todayTitle}</h2>

                <div className="today-grid">
                    {text.todayCards.map((card) => (
                        <a className="today-card today-card-link" href={card.href} target="_blank" rel="noreferrer" key={card.title}>
                            <div className="today-icon">{card.icon}</div>
                            <h3>{card.title}</h3>
                            <p>{card.text}</p>
                        </a>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default FeminismPage
