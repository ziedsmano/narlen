import "./BiologyPage.css"

import heroImg from "../images/biology-hero.png"
import brain from "../images/brain.png"
import water from "../images/water.png"
import sleep from "../images/sleep.png"

import WaterModal from "./WaterModal"
import SleepModal from "./SleepModal"
import BrainModal from "./BrainModal"

import microscope from "../images/microscope.png"
import atom from "../images/atom.png"
import chat from "../images/chat.png"
import doctor from "../images/doctor.png"

import emailjs from "@emailjs/browser"
import { useState } from "react"
import { useLanguage } from "../context/LanguageContext"

const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID
const EMAILJS_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY
const CONTACT_EMAIL = process.env.REACT_APP_CONTACT_EMAIL || "narlen.project@gmail.com"
const BIOLOGY_KAHOOT_URL = "https://create.kahoot.it/share/check-your-knowsley-of-biology/d6fcb8c6-44bd-4358-ab1a-c70a2025344f"

const initialForumForm = {
    name: "",
    message: ""
}

const initialQuestionForm = {
    name: "",
    age: "",
    message: ""
}

const copy = {
    en: {
        alerts: {
            emailConfig: "Email sending is not configured yet. Add the EmailJS keys in your .env file.",
            sendError: "Error sending message. Please try again.",
            forumRequired: "Please write your forum message first.",
            forumSuccess: "Forum message sent successfully!",
            questionRequired: "Please write your question first.",
            questionSuccess: "Question sent successfully!"
        },
        heroTitle: "Your Growing Body: A Beautiful Biology Journey",
        heroText: "Explore puberty and body development with clear, supportive explanations.",
        heroButton: "Explore Biology",
        heroAlt: "Biology illustration",
        videosTitle: "Dive Into Your Biology",
        videosText: "Watch gentle, informative videos about the changes your body and emotions go through.",
        videoTitles: ["Understanding Puberty", "Menstrual Cycle", "Emotional Wellbeing"],
        factsTitle: "Interesting Biology Facts",
        facts: [
            "Your brain builds new connections during puberty.",
            "Water supports hormone balance and overall wellbeing.",
            "Sleep is essential for growth, focus, and emotional health."
        ],
        quiz: {
            eyebrow: "Knowledge Check",
            title: "Continue Your Biology Journey",
            subtitle: "One quiz, one clear next step.",
            badge: "Featured quiz",
            cardTitle: "Finish this page with one live biology quiz",
            cardText: "A short Kahoot is a helpful final step after reading the cards and opening the modals. It helps you remember the key ideas more clearly.",
            duration: "5-10 min",
            note: "The quiz opens in a new tab.",
            button: "Open Kahoot Quiz"
        },
        forum: {
            title: "Join our safe space",
            text: "Ask a question anonymously or share your thoughts with other girls in Kazakhstan.",
            name: "Your name (optional)",
            message: "Write your message here...",
            button: "Post to Forum",
            sending: "Sending..."
        },
        expert: {
            title: "Connect with an Expert",
            text: "Have a more personal question? Write to us and a female doctor or counselor will reply privately.",
            name: "Your name (optional)",
            age: "Your age",
            message: "Your question",
            button: "Submit Question",
            sending: "Sending..."
        }
    },
    ru: {
        alerts: {
            emailConfig: "Отправка писем пока не настроена. Добавь ключи EmailJS в файл .env.",
            sendError: "Ошибка при отправке сообщения. Попробуй ещё раз.",
            forumRequired: "Сначала напиши сообщение для форума.",
            forumSuccess: "Сообщение для форума успешно отправлено!",
            questionRequired: "Сначала напиши свой вопрос.",
            questionSuccess: "Вопрос успешно отправлен!"
        },
        heroTitle: "Твоё взрослеющее тело: красивое путешествие по биологии",
        heroText: "Изучай пубертат и изменения тела с понятными и бережными объяснениями.",
        heroButton: "Изучать биологию",
        heroAlt: "Иллюстрация по биологии",
        videosTitle: "Погружение в биологию",
        videosText: "Посмотри спокойные и полезные видео о том, как меняются твоё тело, гормоны и эмоции.",
        videoTitles: ["Что происходит в пубертате", "Менструальный цикл", "Эмоциональное состояние"],
        factsTitle: "Интересные факты о биологии",
        facts: [
            "Во время пубертата мозг формирует новые связи.",
            "Вода помогает поддерживать гормональный баланс и хорошее самочувствие.",
            "Сон необходим для роста, концентрации и эмоционального здоровья."
        ],
        quiz: {
            eyebrow: "Проверка знаний",
            title: "Продолжай своё путешествие по биологии",
            subtitle: "Один квиз, один понятный следующий шаг.",
            badge: "Рекомендуемый квиз",
            cardTitle: "Заверши страницу одним живым квизом по биологии",
            cardText: "Короткий Kahoot хорошо подходит как финальный шаг после карточек и модалок. Так основные идеи легче запоминаются и лучше закрепляются.",
            duration: "5-10 мин",
            note: "Квиз откроется в новой вкладке.",
            button: "Открыть Kahoot"
        },
        forum: {
            title: "Присоединяйся к нашему безопасному пространству",
            text: "Задай вопрос анонимно или поделись мыслями с другими девушками Казахстана.",
            name: "Твоё имя (необязательно)",
            message: "Напиши своё сообщение...",
            button: "Опубликовать на форуме",
            sending: "Отправка..."
        },
        expert: {
            title: "Связаться со специалистом",
            text: "Есть более личный вопрос? Напиши нам, и женщина-врач или консультант ответит тебе приватно.",
            name: "Твоё имя (необязательно)",
            age: "Твой возраст",
            message: "Твой вопрос",
            button: "Отправить вопрос",
            sending: "Отправка..."
        }
    },
    kz: {
        alerts: {
            emailConfig: "Хат жіберу әлі бапталмаған. EmailJS кілттерін .env файлына қосыңыз.",
            sendError: "Хабар жіберу кезінде қате шықты. Қайтадан көріңіз.",
            forumRequired: "Алдымен форумға хабарлама жазыңыз.",
            forumSuccess: "Форум хабарламасы сәтті жіберілді!",
            questionRequired: "Алдымен сұрағыңызды жазыңыз.",
            questionSuccess: "Сұрағыңыз сәтті жіберілді!"
        },
        heroTitle: "Өсіп келе жатқан денең: биологиядағы әдемі сапар",
        heroText: "Жыныстық жетілу мен дене өзгерістерін түсінікті әрі қолдаушы түсіндірмелермен зертте.",
        heroButton: "Биологияны зерттеу",
        heroAlt: "Биология иллюстрациясы",
        videosTitle: "Биологияңа тереңірек үңіл",
        videosText: "Денеңде, гормондарыңда және сезімдеріңде болатын өзгерістер туралы пайдалы видеоларды қара.",
        videoTitles: ["Жыныстық жетілу туралы", "Етеккір циклі", "Эмоциялық саулық"],
        factsTitle: "Биология туралы қызықты деректер",
        facts: [
            "Жыныстық жетілу кезінде ми жаңа байланыстар құрады.",
            "Су гормондық тепе-теңдік пен жалпы саулықты қолдайды.",
            "Ұйқы өсу, зейін және эмоциялық денсаулық үшін өте маңызды."
        ],
        quiz: {
            eyebrow: "Білімді тексеру",
            title: "Биологиядағы сапарыңды жалғастыр",
            subtitle: "Бір квиз, бір анық келесі қадам.",
            badge: "Ұсынылған квиз",
            cardTitle: "Бұл бетті бір биология квизімен аяқта",
            cardText: "Қысқа Kahoot карточкалар мен модальдарды қарап шыққаннан кейінгі соңғы қадам ретінде өте ыңғайлы. Ол негізгі ойларды жақсырақ есте сақтауға көмектеседі.",
            duration: "5-10 мин",
            note: "Квиз жаңа бетте ашылады.",
            button: "Kahoot ашу"
        },
        forum: {
            title: "Қауіпсіз ортамызға қосыл",
            text: "Сұрағыңды аноним түрде қой немесе Қазақстандағы басқа қыздармен ойыңды бөліс.",
            name: "Атың (міндетті емес)",
            message: "Хабарыңды осында жаз...",
            button: "Форумға жіберу",
            sending: "Жіберілуде..."
        },
        expert: {
            title: "Маманмен байланыс",
            text: "Жеке әрі тереңірек сұрағың бар ма? Бізге жаз, әйел дәрігер немесе кеңесші саған жеке жауап береді.",
            name: "Атың (міндетті емес)",
            age: "Жасың",
            message: "Сұрағың",
            button: "Сұрақ жіберу",
            sending: "Жіберілуде..."
        }
    }
}

function BiologyPage() {
    const { language } = useLanguage()
    const text = copy[language]
    const [openBrain, setOpenBrain] = useState(false)
    const [openWater, setOpenWater] = useState(false)
    const [sleepOpen, setSleepOpen] = useState(false)
    const [forumForm, setForumForm] = useState(initialForumForm)
    const [questionForm, setQuestionForm] = useState(initialQuestionForm)
    const [isForumSending, setIsForumSending] = useState(false)
    const [isQuestionSending, setIsQuestionSending] = useState(false)

    const sendMessage = async ({ type, name, age = "", message }) => {
        if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
            alert(text.alerts.emailConfig)
            return false
        }

        try {
            await emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                {
                    to_email: CONTACT_EMAIL,
                    form_type: type,
                    from_name: name || "Anonymous",
                    age: age || "Not provided",
                    message
                },
                EMAILJS_PUBLIC_KEY
            )

            return true
        } catch (error) {
            alert(text.alerts.sendError)
            return false
        }
    }

    const handleForumSubmit = async (event) => {
        event.preventDefault()

        if (!forumForm.message.trim()) {
            alert(text.alerts.forumRequired)
            return
        }

        setIsForumSending(true)
        const isSent = await sendMessage({ type: "Forum Post", name: forumForm.name.trim(), message: forumForm.message.trim() })

        if (isSent) {
            alert(text.alerts.forumSuccess)
            setForumForm(initialForumForm)
        }

        setIsForumSending(false)
    }

    const handleQuestionSubmit = async (event) => {
        event.preventDefault()

        if (!questionForm.message.trim()) {
            alert(text.alerts.questionRequired)
            return
        }

        setIsQuestionSending(true)
        const isSent = await sendMessage({
            type: "Expert Question",
            name: questionForm.name.trim(),
            age: questionForm.age.trim(),
            message: questionForm.message.trim()
        })

        if (isSent) {
            alert(text.alerts.questionSuccess)
            setQuestionForm(initialQuestionForm)
        }

        setIsQuestionSending(false)
    }

    return (
        <div className="biology-page">
            <img src={microscope} className="bio-decor micro2" alt="" />
            <img src={microscope} className="bio-decor micro3" alt="" />
            <img src={microscope} className="bio-decor micro4" alt="" />
            <img src={atom} className="bio-decor atom1" alt="" />
            <img src={atom} className="bio-decor atom2" alt="" />
            <img src={atom} className="bio-decor atom4" alt="" />

            <div className="bio-top-bg">
                <section className="bio-hero">
                    <div className="bio-hero-text">
                        <h1>{text.heroTitle}</h1>
                        <p>{text.heroText}</p>
                        <button
                            className="explore-btn"
                            onClick={() => document.getElementById("facts").scrollIntoView({ behavior: "smooth" })}
                        >
                            {text.heroButton}
                        </button>
                    </div>

                    <img src={heroImg} className="bio-hero-img" alt={text.heroAlt} />
                </section>
            </div>

            <section className="bio-videos">
                <h2>{text.videosTitle}</h2>
                <p>{text.videosText}</p>

                <div className="video-grid">
                    {[
                        "https://www.youtube.com/embed/LcKlJc_AG2k",
                        "https://www.youtube.com/embed/KpMOjUN-_eg",
                        "https://www.youtube.com/embed/9XIRrAKgmwE"
                    ].map((src, index) => (
                        <div className="video-card" key={src}>
                            <iframe src={src} title={text.videoTitles[index]} allowFullScreen></iframe>
                        </div>
                    ))}
                </div>
            </section>

            <div className="bio-gradient-divider"></div>

            <section id="facts" className="bio-facts">
                <h2>{text.factsTitle}</h2>

                <div className="facts-grid">
                    <div className="fact-card" onClick={() => setOpenBrain(true)}>
                        <img src={brain} className="fact-icon" alt="" />
                        <p>{text.facts[0]}</p>
                    </div>

                    <div className="fact-card" onClick={() => setOpenWater(true)}>
                        <img src={water} className="fact-icon" alt="" />
                        <p>{text.facts[1]}</p>
                    </div>

                    <div className="fact-card" onClick={() => setSleepOpen(true)}>
                        <img src={sleep} className="fact-icon" alt="" />
                        <p>{text.facts[2]}</p>
                    </div>
                </div>
            </section>

            <section className="bio-quiz-section">
                <div className="quiz-header">
                    <h2>{text.quiz.eyebrow}</h2>
                    <h1>{text.quiz.title}</h1>
                    <h3>{text.quiz.subtitle}</h3>
                </div>

                <div className="bio-kahoot-panel">
                    <div className="bio-kahoot-copy">
                        <span className="bio-kahoot-badge">{text.quiz.badge}</span>
                        <h3>{text.quiz.cardTitle}</h3>
                        <p>{text.quiz.cardText}</p>
                    </div>

                    <div className="bio-kahoot-action-card">
                        <div className="bio-kahoot-time">{text.quiz.duration}</div>
                        <p className="bio-kahoot-note">{text.quiz.note}</p>
                        <a className="bio-kahoot-button" href={BIOLOGY_KAHOOT_URL} target="_blank" rel="noreferrer">
                            {text.quiz.button}
                        </a>
                    </div>
                </div>

                <div className="quiz-cards">
                    <form onSubmit={handleForumSubmit} className="quiz-card">
                        <div className="quiz-title">
                            <img src={chat} className="quiz-icon" alt="" />
                            <h4>{text.forum.title}</h4>
                        </div>

                        <p>{text.forum.text}</p>

                        <input
                            value={forumForm.name}
                            onChange={(event) => setForumForm((prev) => ({ ...prev, name: event.target.value }))}
                            placeholder={text.forum.name}
                        />

                        <textarea
                            value={forumForm.message}
                            onChange={(event) => setForumForm((prev) => ({ ...prev, message: event.target.value }))}
                            placeholder={text.forum.message}
                        ></textarea>

                        <button className="quiz-btn" type="submit" disabled={isForumSending}>
                            {isForumSending ? text.forum.sending : text.forum.button}
                        </button>
                    </form>

                    <form onSubmit={handleQuestionSubmit} className="quiz-card">
                        <div className="quiz-title">
                            <img src={doctor} className="quiz-icon" alt="" />
                            <h4>{text.expert.title}</h4>
                        </div>

                        <p>{text.expert.text}</p>

                        <input
                            name="name"
                            value={questionForm.name}
                            onChange={(event) => setQuestionForm((prev) => ({ ...prev, name: event.target.value }))}
                            placeholder={text.expert.name}
                        />

                        <input
                            name="age"
                            value={questionForm.age}
                            onChange={(event) => setQuestionForm((prev) => ({ ...prev, age: event.target.value }))}
                            placeholder={text.expert.age}
                        />

                        <textarea
                            name="message"
                            value={questionForm.message}
                            onChange={(event) => setQuestionForm((prev) => ({ ...prev, message: event.target.value }))}
                            placeholder={text.expert.message}
                        ></textarea>

                        <button type="submit" className="quiz-btn" disabled={isQuestionSending}>
                            {isQuestionSending ? text.expert.sending : text.expert.button}
                        </button>
                    </form>
                </div>
            </section>

            <BrainModal isOpen={openBrain} onClose={() => setOpenBrain(false)} />
            <WaterModal isOpen={openWater} onClose={() => setOpenWater(false)} />
            <SleepModal isOpen={sleepOpen} onClose={() => setSleepOpen(false)} />
        </div>
    )
}

export default BiologyPage
