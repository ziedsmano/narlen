import { useState } from "react"
import { useLanguage } from "../context/LanguageContext"
import "./LiteraturePage.css"

import RecommendedBooksModal from "./RecommendedBooksModal"

import girl from "../images/literature-girl.png"

import austen from "../images/women-books/austen.png"
import bronte from "../images/women-books/bronte.png"
import morrison from "../images/women-books/morrison.jpg"
import rowling from "../images/women-books/rowling.jpg"
import fariza from "../images/women-books/fariza.jpg"
import sara from "../images/women-books/sara.jpg"
import marfuga from "../images/women-books/marfuga.jpg"
import kanipa from "../images/women-books/kanipa.jpg"
import sappho from "../images/women-books/sappho.jpg"
import shelley from "../images/women-books/shelley.jpg"
import christie from "../images/women-books/christie.jpg"
import mistral from "../images/women-books/mistral.jpg"
import atwood from "../images/women-books/atwood.jpg"
import alexievich from "../images/women-books/alexievich.jpg"
import beauvoir from "../images/women-books/beauvoir.jpg"
import nazipa from "../images/women-books/nazipa.jpg"

const pageCopy = {
    en: {
        heroTitle: "Women in Literature",
        heroText: "Discover the voices, books, and ideas of influential women writers from different times and cultures.",
        heroButton: "Recommended Books",
        heroAlt: "Girl reading",
        videosTitle: "Watch Video Series",
        writersTitle: "Famous Women Writers",
        source: "Source"
    },
    ru: {
        heroTitle: "Женщины в литературе",
        heroText: "Открой для себя голоса, книги и идеи влиятельных писательниц разных эпох и культур.",
        heroButton: "Рекомендуемые книги",
        heroAlt: "Читающая девушка",
        videosTitle: "Смотреть видеосерию",
        writersTitle: "Известные писательницы",
        source: "Источник"
    },
    kz: {
        heroTitle: "Әдебиеттегі әйелдер",
        heroText: "Әр дәуір мен мәдениеттегі ықпалды жазушы әйелдердің дауысы, кітаптары мен идеяларымен таныс.",
        heroButton: "Ұсынылатын кітаптар",
        heroAlt: "Кітап оқып отырған қыз",
        videosTitle: "Бейнесерияны қарау",
        writersTitle: "Белгілі жазушы әйелдер",
        source: "Дереккөз"
    }
}

const writers = [
    {
        image: austen,
        alt: "Jane Austen",
        name: "Jane Austen",
        imageClassName: "writer-image--austen",
        source: "https://ru.wikipedia.org/wiki/%D0%9E%D1%81%D1%82%D0%B8%D0%BD,_%D0%94%D0%B6%D0%B5%D0%B9%D0%BD",
        details: {
            en: [
                "English novelist and one of the most influential literary voices of the late 18th and early 19th centuries.",
                "Her novels explored how women's futures were often shaped by marriage, money, and social expectations.",
                "Many of her works were first published anonymously, so broad recognition came after her lifetime."
            ],
            ru: [
                "Английская писательница и один из самых влиятельных литературных голосов конца XVIII и начала XIX века.",
                "В её романах показано, как судьба женщин часто зависела от брака, денег и общественных ожиданий.",
                "Многие её произведения сначала выходили анонимно, поэтому широкое признание пришло уже после её жизни."
            ],
            kz: [
                "Ағылшын жазушысы, XVIII ғасырдың соңы мен XIX ғасырдың басындағы ең ықпалды әдеби тұлғалардың бірі.",
                "Оның романдары әйел тағдырының неке, қаржы және қоғам күтулерімен қаншалық байланысқанын көрсетеді.",
                "Көптеген шығармалары алғашында авторы көрсетілмей жарияланғандықтан, кең танымалдық оған кейінірек келді."
            ]
        }
    },
    {
        image: bronte,
        alt: "Charlotte Bronte",
        name: "Charlotte Bronte",
        imageClassName: "writer-image--bronte",
        source: "https://ru.wikipedia.org/wiki/%D0%91%D1%80%D0%BE%D0%BD%D1%82%D0%B5,_%D0%A8%D0%B0%D1%80%D0%BB%D0%BE%D1%82%D1%82%D0%B0",
        details: {
            en: [
                "The eldest of the Bronte sisters and a major figure of English literature.",
                "She worked with different literary forms, including poetry, narrative prose, and dramatic monologue.",
                "Her novel Jane Eyre became a classic after earlier publishing setbacks."
            ],
            ru: [
                "Старшая из сестёр Бронте и важная фигура английской литературы.",
                "Она работала с разными литературными формами: поэзией, прозой и драматическим монологом.",
                "Её роман «Джейн Эйр» стал классикой после первых отказов издателей."
            ],
            kz: [
                "Бронте әпкелі-сіңлілерінің үлкені және ағылшын әдебиетінің ірі өкілі.",
                "Ол поэзия, прозалық баяндау және драмалық монолог сияқты түрлі әдеби формалармен жұмыс істеді.",
                "Алғашқы баспа қиындықтарына қарамастан, оның «Jane Eyre» романы классикаға айналды."
            ]
        }
    },
    {
        image: morrison,
        alt: "Toni Morrison",
        name: "Toni Morrison",
        imageClassName: "writer-image--morrison",
        source: "https://ru.wikipedia.org/wiki/%D0%9C%D0%BE%D1%80%D1%80%D0%B8%D1%81%D0%BE%D0%BD,_%D0%A2%D0%BE%D0%BD%D0%B8",
        details: {
            en: [
                "American writer and editor, and winner of the 1993 Nobel Prize in Literature.",
                "Her books examine African American life, racism, memory, and the legacy of slavery.",
                "Beloved, Song of Solomon, and The Bluest Eye are among her best known works."
            ],
            ru: [
                "Американская писательница и редактор, лауреат Нобелевской премии по литературе 1993 года.",
                "Её книги исследуют жизнь афроамериканцев, расизм, память и наследие рабства.",
                "Среди самых известных произведений - «Возлюбленная», «Песнь Соломона» и «Самые голубые глаза»."
            ],
            kz: [
                "Америкалық жазушы әрі редактор, 1993 жылғы әдебиет саласындағы Нобель сыйлығының лауреаты.",
                "Оның кітаптары афроамерикалықтардың өмірін, нәсілшілдікті, жад пен құлдық мұрасын зерттейді.",
                "Ең танымал шығармаларының қатарында «Beloved», «Song of Solomon» және «The Bluest Eye» бар."
            ]
        }
    },
    {
        image: rowling,
        alt: "J.K. Rowling",
        name: "J.K. Rowling",
        imageClassName: "writer-image--rowling",
        source: "https://ru.wikipedia.org/wiki/%D0%A0%D0%BE%D1%83%D0%BB%D0%B8%D0%BD%D0%B3,_%D0%94%D0%B6%D0%BE%D0%B0%D0%BD",
        details: {
            en: [
                "British author, screenwriter, and producer best known for the Harry Potter series.",
                "She spent years developing the first book, which was rejected by many publishers before success arrived.",
                "Her books have sold hundreds of millions of copies worldwide."
            ],
            ru: [
                "Британская писательница, сценаристка и продюсер, наиболее известная по серии о Гарри Поттере.",
                "Она много лет работала над первой книгой, которую сначала отклонили многие издатели.",
                "Её книги разошлись по миру сотнями миллионов экземпляров."
            ],
            kz: [
                "Гарри Поттер сериясымен танылған британдық жазушы, сценарист және продюсер.",
                "Алғашқы кітабын ол бірнеше жыл жазып, оны көптеген баспалар алғашында қабылдамаған.",
                "Оның кітаптары әлем бойынша жүздеген миллион дана болып таралды."
            ]
        }
    },
    {
        image: fariza,
        alt: "Fariza Ongarsynova",
        name: "Fariza Ongarsynova",
        imageClassName: "writer-image--fariza",
        source: "https://adebiportal.kz/kz/news/view/qazaq-adebietindegi-zazusy-aielder__2940",
        details: {
            en: [
                "Kazakh national writer, journalist, and public figure.",
                "Her poetry combined civic courage, lyrical power, and deep reflections on womanhood and identity.",
                "She is remembered as one of the strongest female voices in Kazakh literature."
            ],
            ru: [
                "Казахская народная писательница, журналистка и общественный деятель.",
                "Её поэзия соединяла гражданскую смелость, лирическую силу и глубокие размышления о женщине и самоидентичности.",
                "Её помнят как один из самых сильных женских голосов казахской литературы."
            ],
            kz: [
                "Қазақтың халық жазушысы, журналист әрі қоғам қайраткері.",
                "Оның поэзиясы азаматтық үнді, лирикалық қуатты және әйел болмысы жайлы терең ойларды біріктірді.",
                "Ол қазақ әдебиетіндегі ең қуатты әйел дауыстарының бірі ретінде есте қалды."
            ]
        }
    },
    {
        image: sara,
        alt: "Sara Mynzhasarova",
        name: "Sara Mynzhasarova",
        imageClassName: "writer-image--sara",
        source: "https://adebiportal.kz/kz/news/view/qazaq-adebietindegi-zazusy-aielder__2940",
        details: {
            en: [
                "One of the early Kazakh women novelists in Central Asian literary history.",
                "Her works reflected on life, time, fate, and human relationships.",
                "She helped widen the place of women in Kazakh prose."
            ],
            ru: [
                "Одна из ранних казахских писательниц-романисток в истории литературы Центральной Азии.",
                "В её произведениях звучали размышления о жизни, времени, судьбе и человеческих отношениях.",
                "Она помогла расширить место женщины в казахской прозе."
            ],
            kz: [
                "Орталық Азия әдебиеті тарихындағы ерте қазақ романшы әйелдердің бірі.",
                "Оның шығармаларында өмір, уақыт, тағдыр және адам қарым-қатынасы жайлы ойлар көрініс тапты.",
                "Ол қазақ прозасындағы әйел орнының кеңеюіне ықпал етті."
            ]
        }
    },
    {
        image: marfuga,
        alt: "Marfuga Aitkhozina",
        name: "Marfuga Aitkhozina",
        imageClassName: "writer-image--aitkhozina",
        source: "https://adebiportal.kz/kz/news/view/qazaq-adebietindegi-zazusy-aielder__2940",
        details: {
            en: [
                "Kazakh poet and journalist.",
                "She wrote more than forty collections and was widely read across generations.",
                "Her works were translated into many foreign languages."
            ],
            ru: [
                "Казахская поэтесса и журналистка.",
                "Она написала более сорока сборников и была популярна у разных поколений читателей.",
                "Её произведения переводились на многие иностранные языки."
            ],
            kz: [
                "Қазақ ақыны әрі журналист.",
                "Ол қырықтан астам жинақ жазып, әр буын оқырманына кеңінен танылды.",
                "Шығармалары көптеген шет тілдеріне аударылды."
            ]
        }
    },
    {
        image: kanipa,
        alt: "Kanipa Bugybayeva",
        name: "Kanipa Bugybayeva",
        imageClassName: "writer-image--kanipa",
        source: "https://adebiportal.kz/kz/news/view/qazaq-adebietindegi-zazusy-aielder__2940",
        details: {
            en: [
                "Kazakh poet nominated for the State Prize in Literature and Art.",
                "Her poetry was valued for emotional depth and national imagery.",
                "She once said that poetry was her destiny."
            ],
            ru: [
                "Казахская поэтесса, номинированная на Государственную премию в области литературы и искусства.",
                "Её поэзия ценится за эмоциональную глубину и национальную образность.",
                "Она говорила, что поэзия - это её судьба."
            ],
            kz: [
                "Әдебиет пен өнер саласындағы Мемлекеттік сыйлыққа ұсынылған қазақ ақыны.",
                "Оның поэзиясы эмоциялық тереңдігімен және ұлттық бейнелілігімен бағаланды.",
                "Ол поэзияны өз тағдырым деп айтқан."
            ]
        }
    },
    {
        image: sappho,
        alt: "Sappho",
        name: "Sappho",
        imageClassName: "writer-image--sappho",
        source: "https://ru.wikipedia.org/wiki/%D0%A1%D0%B0%D0%BF%D1%84%D0%BE",
        details: {
            en: [
                "Ancient Greek poet and musician, famous for lyric poetry.",
                "She is counted among the Nine Lyric Poets of ancient Greece.",
                "Only fragments of her poetry survive, but her influence remains immense."
            ],
            ru: [
                "Древнегреческая поэтесса и музыкант, прославившаяся лирической поэзией.",
                "Её относят к девяти великим лирическим поэтам Древней Греции.",
                "До нас дошли лишь фрагменты её стихов, но её влияние остаётся огромным."
            ],
            kz: [
                "Лирикалық поэзиясымен танылған ежелгі грек ақыны және музыкант.",
                "Ол Ежелгі Грекияның тоғыз ұлы лирик ақынының қатарына жатады.",
                "Өлеңдерінің аз ғана бөлігі сақталса да, оның ықпалы өте зор."
            ]
        }
    },
    {
        image: shelley,
        alt: "Mary Shelley",
        name: "Mary Shelley",
        imageClassName: "writer-image--shelley",
        source: "https://ru.wikipedia.org/wiki/%D0%A8%D0%B5%D0%BB%D0%BB%D0%B8,_%D0%9C%D1%8D%D1%80%D0%B8",
        details: {
            en: [
                "English writer best known for Frankenstein, one of the early classics of science fiction.",
                "She also edited and preserved the literary legacy of Percy Bysshe Shelley.",
                "Her writing connects Gothic fiction, philosophy, and early speculative literature."
            ],
            ru: [
                "Английская писательница, наиболее известная романом «Франкенштейн», одним из ранних классических произведений научной фантастики.",
                "Она также редактировала и сохраняла литературное наследие Перси Биши Шелли.",
                "Её творчество соединяет готику, философию и раннюю спекулятивную литературу."
            ],
            kz: [
                "«Frankenstein» романымен танылған ағылшын жазушысы, ғылыми фантастиканың ерте классиктерінің бірі.",
                "Ол Перси Биши Шеллидің әдеби мұрасын да өңдеп, сақтауға үлес қосты.",
                "Оның шығармашылығы готика, философия және ерте speculative әдебиетті тоғыстырды."
            ]
        }
    },
    {
        image: christie,
        alt: "Agatha Christie",
        name: "Agatha Christie",
        imageClassName: "writer-image--christie",
        source: "https://ru.wikipedia.org/wiki/%D0%9A%D1%80%D0%B8%D1%81%D1%82%D0%B8,_%D0%90%D0%B3%D0%B0%D1%82%D0%B0",
        details: {
            en: [
                "British writer and one of the most famous detective authors in world literature.",
                "She wrote dozens of novels, story collections, and plays.",
                "Her books have sold more than two billion copies."
            ],
            ru: [
                "Британская писательница и одна из самых известных авторов детективов в мировой литературе.",
                "Она написала десятки романов, сборников рассказов и пьес.",
                "Её книги разошлись тиражом более двух миллиардов экземпляров."
            ],
            kz: [
                "Әлем әдебиетіндегі ең танымал детектив авторларының бірі болған британдық жазушы.",
                "Ол ондаған роман, әңгімелер жинағы мен пьеса жазды.",
                "Оның кітаптары екі миллиардтан астам данамен таралған."
            ]
        }
    },
    {
        image: mistral,
        alt: "Gabriela Mistral",
        name: "Gabriela Mistral",
        imageClassName: "writer-image--mistral",
        source: "https://ru.wikipedia.org/wiki/%D0%93%D0%B0%D0%B1%D1%80%D0%B8%D0%B5%D0%BB%D0%B0_%D0%9C%D0%B8%D1%81%D1%82%D1%80%D0%B0%D0%BB%D1%8C",
        details: {
            en: [
                "Chilean poet, teacher, and diplomat.",
                "In 1945, she became the first Latin American woman to receive the Nobel Prize in Literature.",
                "Her poetry is remembered for emotional intensity, simplicity, and humanism."
            ],
            ru: [
                "Чилийская поэтесса, педагог и дипломат.",
                "В 1945 году она стала первой женщиной из Латинской Америки, получившей Нобелевскую премию по литературе.",
                "Её поэзия запомнилась эмоциональной силой, простотой языка и гуманизмом."
            ],
            kz: [
                "Чилилік ақын, ұстаз және дипломат.",
                "1945 жылы ол әдебиет саласындағы Нобель сыйлығын алған Латын Америкасындағы алғашқы әйел атанды.",
                "Оның поэзиясы эмоциялық қуатымен, тілінің қарапайымдылығымен және гуманизмімен есте қалды."
            ]
        }
    },
    {
        image: atwood,
        alt: "Margaret Atwood",
        name: "Margaret Atwood",
        imageClassName: "writer-image--atwood",
        source: "https://ru.wikipedia.org/wiki/%D0%AD%D1%82%D0%B2%D1%83%D0%B4,_%D0%9C%D0%B0%D1%80%D0%B3%D0%B0%D1%80%D0%B5%D1%82",
        details: {
            en: [
                "Canadian writer, poet, and essayist.",
                "Her works combine feminist themes, irony, and speculative imagination.",
                "The Handmaid's Tale made her one of the most influential contemporary authors."
            ],
            ru: [
                "Канадская писательница, поэтесса и эссеистка.",
                "Её произведения соединяют феминистские темы, иронию и элементы спекулятивной литературы.",
                "Роман «Рассказ служанки» сделал её одной из самых влиятельных современных авторов."
            ],
            kz: [
                "Канадалық жазушы, ақын және эссеист.",
                "Оның шығармалары феминистік тақырыптарды, иронияны және қиял элементтерін біріктіреді.",
                "«The Handmaid's Tale» романы оны заманауи ең ықпалды авторлардың біріне айналдырды."
            ]
        }
    },
    {
        image: alexievich,
        alt: "Svetlana Alexievich",
        name: "Svetlana Alexievich",
        imageClassName: "writer-image--alexievich",
        source: "https://ru.wikipedia.org/wiki/%D0%90%D0%BB%D0%B5%D0%BA%D1%81%D0%B8%D0%B5%D0%B2%D0%B8%D1%87,_%D0%A1%D0%B2%D0%B5%D1%82%D0%BB%D0%B0%D0%BD%D0%B0_%D0%90%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80%D0%BE%D0%B2%D0%BD%D0%B0",
        details: {
            en: [
                "Belarusian writer, journalist, and Nobel Prize winner in Literature.",
                "She created a unique documentary prose built from the voices of witnesses.",
                "Her works focus on war, memory, trauma, and historical catastrophe."
            ],
            ru: [
                "Белорусская писательница, журналистка и лауреат Нобелевской премии по литературе.",
                "Она создала уникальную документальную прозу, основанную на голосах очевидцев.",
                "Её произведения посвящены войне, памяти, травме и историческим катастрофам."
            ],
            kz: [
                "Беларусь жазушысы, журналист және әдебиет саласындағы Нобель сыйлығының лауреаты.",
                "Ол куәгерлер дауысына құрылған бірегей деректі прозаны қалыптастырды.",
                "Оның шығармалары соғыс, жады, жарақат және тарихи апат тақырыптарына арналған."
            ]
        }
    },
    {
        image: beauvoir,
        alt: "Simone de Beauvoir",
        name: "Simone de Beauvoir",
        imageClassName: "writer-image--beauvoir",
        source: "https://ru.wikipedia.org/wiki/%D0%91%D0%BE%D0%B2%D1%83%D0%B0%D1%80,_%D0%A1%D0%B8%D0%BC%D0%BE%D0%BD%D0%B0_%D0%B4%D0%B5",
        details: {
            en: [
                "French writer, philosopher, and one of the central feminist thinkers of the 20th century.",
                "The Second Sex became a foundation of modern feminist theory.",
                "Her ideas strongly influenced philosophy, gender studies, and literary criticism."
            ],
            ru: [
                "Французская писательница, философ и одна из ключевых феминистских мыслительниц XX века.",
                "Книга «Второй пол» стала основой современной феминистской теории.",
                "Её идеи сильно повлияли на философию, гендерные исследования и литературную критику."
            ],
            kz: [
                "Француз жазушысы, философ және XX ғасырдағы басты феминистік ойшылдардың бірі.",
                "«The Second Sex» еңбегі заманауи феминистік теорияның негізіне айналды.",
                "Оның идеялары философияға, gender studies саласына және әдеби сынға зор әсер етті."
            ]
        }
    },
    {
        image: nazipa,
        alt: "Nazipa Kulzhanova",
        name: "Nazipa Kulzhanova",
        imageClassName: "writer-image--nazipa",
        source: "https://kaganmedia.org/kz/Nomad/tarixta-aty-qalgan-qazaq-aielderi",
        details: {
            en: [
                "Kazakhstan's first female journalist, teacher, translator, and ethnographer.",
                "She was among the few women active in the Alash movement and strongly supported women's education.",
                "From the 1910s onward, she published articles on education and women's rights in major Kazakh newspapers."
            ],
            ru: [
                "Первая женщина-журналистка Казахстана, педагог, переводчица и этнограф.",
                "Она была одной из немногих женщин-участниц движения Алаш и активно поддерживала образование женщин.",
                "С 1910-х годов она публиковала статьи об образовании и правах женщин в крупных казахских изданиях."
            ],
            kz: [
                "Қазақстанның тұңғыш әйел журналисі, педагог, аудармашы және этнограф.",
                "Ол Алаш қозғалысына қатысқан аз әйелдің бірі болып, қыздар білімін белсенді қолдады.",
                "1910 жылдардан бастап ол ірі қазақ басылымдарында білім мен әйел құқықтары туралы мақалалар жариялады."
            ]
        }
    }
]

function LiteraturePage() {
    const { language } = useLanguage()
    const text = pageCopy[language]
    const [openModal, setOpenModal] = useState(false)
    const [expandedWriter, setExpandedWriter] = useState(null)
    const writerToggleText = {
        en: { open: "Read more", close: "Hide" },
        ru: { open: "Подробнее", close: "Скрыть" },
        kz: { open: "Толығырақ", close: "Жасыру" }
    }

    return (
        <div className="literature-page">
            <section className="literature-hero-section">
                <div className="literature-hero-bg"></div>

                <div className="literature-hero-container">
                    <div className="literature-hero">
                        <div className="hero-text">
                            <h1>{text.heroTitle}</h1>
                            <p>{text.heroText}</p>

                            <button className="books-btn" onClick={() => setOpenModal(true)}>
                                {text.heroButton}
                            </button>
                        </div>

                        <img src={girl} alt={text.heroAlt} className="hero-img" />
                    </div>
                </div>
            </section>

            <section className="videos">
                <h2>{text.videosTitle}</h2>

                <div className="video-grid">
                    {[
                        "https://www.youtube.com/embed/SiCnOZN8pqk?si=A4KjDGsklug1mEsw",
                        "https://www.youtube.com/embed/WortZ7xtiN4",
                        "https://www.youtube.com/embed/1nJF0xeWSng"
                    ].map((src, index) => (
                        <div className="video-card" key={`${src}-${index}`}>
                            <iframe src={src} title={`${text.videosTitle} ${index + 1}`} allowFullScreen></iframe>
                        </div>
                    ))}
                </div>
            </section>

            <section className="writers">
                <h2 className="writers-title">{text.writersTitle}</h2>

                <div className="writers-container">
                    <div className="writers-grid">
                        {writers.map((writer) => (
                            <div className={`writer-card ${expandedWriter === writer.name ? "is-expanded" : ""}`} key={writer.name}>
                                <div className="writer-media">
                                    <img src={writer.image} alt={writer.alt} className={writer.imageClassName || ""} />

                                    <div className="writer-info">
                                        <div className="writer-info-header">
                                            <h3>{writer.name}</h3>

                                            <button
                                                type="button"
                                                className="writer-toggle"
                                                onClick={() =>
                                                    setExpandedWriter((current) => (current === writer.name ? null : writer.name))
                                                }
                                                aria-expanded={expandedWriter === writer.name}
                                            >
                                                {expandedWriter === writer.name
                                                    ? writerToggleText[language].close
                                                    : writerToggleText[language].open}
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div className="writer-info-body">
                                    {writer.details[language].map((detail) => (
                                        <p key={detail}>{detail}</p>
                                    ))}

                                    <a className="writer-source-link" href={writer.source} target="_blank" rel="noreferrer">
                                        {text.source}
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <RecommendedBooksModal isOpen={openModal} onClose={() => setOpenModal(false)} />
        </div>
    )
}

export default LiteraturePage
