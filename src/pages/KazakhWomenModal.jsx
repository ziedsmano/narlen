import "./KazakhWomenModal.css"
import { useState, useEffect } from "react"
import { useLanguage } from "../context/LanguageContext"

import bg from "../images/history-bg.jpg"

import dina from "../images/women/dina.jpg"
import gulsim from "../images/women/gulsim.jpg"
import akkagaz from "../images/women/akkagaz.jpg"
import nazipa from "../images/women/nazipa.jpg"
import hiuaz from "../images/women/hiuaz.jpg"
import kulyash from "../images/women/kulyash.jpg"
import roza from "../images/women/roza.jpg"
import shara from "../images/women/shara.jpg"
import alma from "../images/women/alma.jpg"

const copy = {
    en: { title: "Remarkable Women of Kazakhstan", close: "Close dialog" },
    ru: { title: "Выдающиеся женщины Казахстана", close: "Закрыть окно" },
    kz: { title: "Қазақстанның көрнекті әйелдері", close: "Терезені жабу" }
}

const women = [
    {
        image: dina,
        alt: "Dina Nurpeisova",
        name: "Dina Nurpeisova",
        source: "https://en.wikipedia.org/wiki/Dina_Nurpeisova",
        details: {
            en: ["Renowned Kazakh kuishi, composer, and People's Artist of Kazakhstan.", "She won major awards in folk music competitions even in her seventies and eighties.", "She studied with Kurmangazy and left behind many famous kuy compositions."],
            ru: ["Выдающаяся казахская кюйши, композитор и Народная артистка Казахстана.", "Даже в семьдесят и восемьдесят лет она побеждала на крупных конкурсах народных исполнителей.", "Она училась у Курмангазы и оставила после себя множество известных кюев."],
            kz: ["Көрнекті қазақ күйші-композиторы және Қазақстанның халық әртісі.", "Жетпіс-сексен жасында да халық орындаушылары байқауларында жүлде алған.", "Құрманғазымен жүздесіп, көптеген танымал күйлер қалдырды."]
        }
    },
    {
        image: gulsim,
        alt: "Gulsim Asfendiyarova",
        name: "Gulsim Asfendiyarova",
        source: "https://en.wikipedia.org/wiki/Gulsum_Asfendiyarova",
        details: {
            en: ["One of the first Kazakh female doctors.", "She became the first Kazakh woman to earn a medical degree.", "She also opened and led a midwifery school for local women in Turkestan."],
            ru: ["Одна из первых казахских женщин-врачей.", "Она стала первой казахской женщиной с медицинским дипломом.", "Также она открыла и возглавила акушерскую школу для местных женщин в Туркестане."],
            kz: ["Алғашқы қазақ әйел дәрігерлерінің бірі.", "Ол медицина дипломын алған алғашқы қазақ әйелі болды.", "Сонымен қатар Түркістанда жергілікті әйелдерге арналған акушерлік мектеп ашып, оны басқарды."]
        }
    },
    {
        image: akkagaz,
        alt: "Akkagaz Doszhanova",
        name: "Akkagaz Doszhanova",
        source: "https://qazinform.com/news/women-of-kazakhstan-who-left-their-marks-on-nations-history-61c544",
        details: {
            en: ["One of the first female doctors, a teacher, and an advocate for women's rights.", "She studied medicine in several major institutions, including Moscow and Tomsk.", "Alongside medical work, she wrote and organized educational initiatives."],
            ru: ["Одна из первых женщин-врачей, педагог и защитница прав женщин.", "Она изучала медицину в крупных учебных центрах, включая Москву и Томск.", "Помимо врачебной практики, она занималась просветительской и организационной работой."],
            kz: ["Алғашқы әйел дәрігерлердің бірі, ұстаз және әйел құқықтарын қолдаушы.", "Ол Мәскеу мен Томскіні қоса алғанда, бірнеше ірі оқу орнында медицина оқыды.", "Дәрігерлікпен қатар ағартушылық және ұйымдастырушылық жұмыстар атқарды."]
        }
    },
    {
        image: nazipa,
        alt: "Nazipa Kulzhanova",
        name: "Nazipa Kulzhanova",
        source: "https://qazinform.com/news/women-of-kazakhstan-who-left-their-marks-on-nations-history-61c544",
        details: {
            en: ["One of the first Kazakh women journalists and educators, active in the Alash movement.", "She wrote about women's issues and education in major publications.", "She also worked on textbooks and the development of the Kazakh alphabet."],
            ru: ["Одна из первых казахских журналисток и просветительниц, активная участница движения Алаш.", "Она писала о женских вопросах и образовании в крупных изданиях.", "Также она работала над учебниками и вопросами развития казахского алфавита."],
            kz: ["Қазақтың алғашқы журналист және ағартушы әйелдерінің бірі, Алаш қозғалысына белсенді қатысқан.", "Ол әйел мәселесі мен білім туралы ірі басылымдарда жазды.", "Сондай-ақ оқулықтар мен қазақ әліпбиін дамыту ісіне үлес қосты."]
        }
    },
    {
        image: hiuaz,
        alt: "Hiuaz Dospanova",
        name: "Hiuaz Dospanova",
        source: "https://en.wikipedia.org/wiki/Khiuaz_Dospanova",
        details: {
            en: ["The first and only Kazakh female military pilot.", "During World War II she completed more than 300 combat sorties.", "Despite serious injuries, she returned to service and later received the title People's Hero of Kazakhstan."],
            ru: ["Первая и единственная казахская женщина-военный лётчик.", "Во время Второй мировой войны она совершила более 300 боевых вылетов.", "Несмотря на тяжёлые ранения, она вернулась в строй и позже получила звание «Халық Қаһарманы»."],
            kz: ["Тұңғыш әрі жалғыз қазақ әйел әскери ұшқышы.", "Екінші дүниежүзілік соғыс кезінде 300-ден астам жауынгерлік ұшу жасаған.", "Ауыр жарақаттарына қарамастан, қызметке қайта оралып, кейін «Халық Қаһарманы» атағын алды."]
        }
    },
    {
        image: kulyash,
        alt: "Kulyash Baiseitova",
        name: "Kulyash Baiseitova",
        source: "https://qazinform.com/news/women-of-kazakhstan-who-left-their-marks-on-nations-history-61c544",
        details: {
            en: ["Famous Kazakh singer known for her brilliant soprano voice.", "At twenty-four she became a People's Artist of the USSR.", "She was among the founders of Kazakh opera and performed at the Bolshoi Theatre."],
            ru: ["Известная казахская певица с выдающимся сопрано.", "В двадцать четыре года она стала Народной артисткой СССР.", "Она была одной из основательниц казахской оперы и выступала в Большом театре."],
            kz: ["Ғажайып сопраносымен танылған әйгілі қазақ әншісі.", "Жиырма төрт жасында КСРО халық әртісі атанды.", "Ол қазақ операсының негізін қалаушылардың бірі болып, Үлкен театрда өнер көрсетті."]
        }
    },
    {
        image: roza,
        alt: "Roza Baglanova",
        name: "Roza Baglanova",
        source: "https://qazinform.com/news/women-of-kazakhstan-who-left-their-marks-on-nations-history-61c544",
        details: {
            en: ["Renowned Kazakh singer loved for her stage presence and repertoire.", "During the war she performed for soldiers and later sang at the Victory Concert in Berlin.", "She became an important ambassador of Kazakh music abroad."],
            ru: ["Выдающаяся казахская певица, любимая за сценическую силу и репертуар.", "Во время войны она выступала перед солдатами, а затем пела на концерте Победы в Берлине.", "Она стала важным послом казахской музыки за рубежом."],
            kz: ["Сахнадағы қуаты мен ән қорымен танылған көрнекті қазақ әншісі.", "Соғыс кезінде сарбаздарға ән айтып, кейін Берлиндегі Жеңіс концертінде өнер көрсетті.", "Ол қазақ музыкасын шетелге танытқан маңызды тұлға болды."]
        }
    },
    {
        image: shara,
        alt: "Shara Zhienkulova",
        name: "Shara Zhienkulova",
        source: "https://qazinform.com/news/women-of-kazakhstan-who-left-their-marks-on-nations-history-61c544",
        details: {
            en: ["Founder of professional Kazakh stage dance.", "She performed major dramatic roles and helped shape national choreography.", "She also wrote books and collected elements of traditional Kazakh dance."],
            ru: ["Основательница профессионального казахского сценического танца.", "Она исполняла крупные театральные роли и формировала национальную хореографию.", "Также она писала книги и собирала элементы традиционного казахского танца."],
            kz: ["Кәсіби қазақ сахналық биінің негізін қалаушы.", "Ол ірі драмалық рөлдер ойнап, ұлттық хореографияның қалыптасуына үлес қосты.", "Сонымен қатар кітаптар жазып, дәстүрлі қазақ биінің элементтерін жинады."]
        }
    },
    {
        image: alma,
        alt: "Alma Orazbayeva",
        name: "Alma Orazbayeva",
        source: "https://qazinform.com/news/women-of-kazakhstan-who-left-their-marks-on-nations-history-61c544",
        details: {
            en: ["One of the founders of the women's equality movement in the early 20th century.", "She traveled to villages, explained women's rights, and helped women access education.", "She played a major role in campaigns against illiteracy among women."],
            ru: ["Одна из основательниц движения за равноправие женщин в начале XX века.", "Она ездила по аулам, объясняла женщинам их права и помогала получать образование.", "Она сыграла важную роль в борьбе с неграмотностью среди женщин."],
            kz: ["XX ғасырдың басындағы әйел теңдігі қозғалысының негізін қалаушылардың бірі.", "Ол ауылдарды аралап, әйелдерге олардың құқықтарын түсіндіріп, білім алуға көмектесті.", "Әйелдер арасындағы сауатсыздықты жою ісінде үлкен рөл атқарды."]
        }
    }
]

function KazakhWomenModal({ isOpen, onClose }) {
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
            <div className={`women-modal app-modal-shell ${closing ? "modal-closing" : ""}`} role="dialog" aria-modal="true" aria-labelledby="kazakh-women-modal-title">
                <button className="women-close app-modal-close" onClick={handleClose} aria-label={text.close} data-read-aloud-ignore="true">
                    ×
                </button>

                <div className="women-container app-modal-content app-modal-content--history" data-read-aloud-target="true" style={{ backgroundImage: `url(${bg})` }}>
                    <h1 id="kazakh-women-modal-title" className="women-title">{text.title}</h1>

                    {women.map((woman) => (
                        <a key={woman.name} className="women-card women-card-link" data-read-aloud-block="true" href={woman.source} target="_blank" rel="noreferrer">
                            <img src={woman.image} alt={woman.alt} />

                            <div>
                                <h3>{woman.name}</h3>
                                {woman.details[language].map((detail) => <p key={detail}>{detail}</p>)}
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default KazakhWomenModal
