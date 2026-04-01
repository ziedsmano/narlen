import { useEffect, useState } from "react"
import { useLanguage } from "../context/LanguageContext"

const quotes = {
    en: [
        {
            text: "If you don't get out of the box you've been raised in, you won't understand how much bigger the world is.",
            author: "Angelina Jolie"
        },
        {
            text: "Girls should never be afraid to be smart.",
            author: "Emma Watson"
        },
        {
            text: "There is no limit to what we, as women, can accomplish.",
            author: "Michelle Obama"
        },
        {
            text: "I want every girl to know that her voice can change the world.",
            author: "Malala Yousafzai"
        },
        {
            text: "No one can make you feel inferior without your consent.",
            author: "Eleanor Roosevelt"
        },
        {
            text: "Be brave, not perfect.",
            author: "Reshma Saujani"
        }
    ],
    ru: [
        {
            text: "Если не выйти за пределы мира, в котором тебя вырастили, невозможно понять, насколько велик этот мир.",
            author: "Анджелина Джоли"
        },
        {
            text: "Девочки никогда не должны бояться быть умными.",
            author: "Эмма Уотсон"
        },
        {
            text: "Нет предела тому, чего мы, женщины, можем добиться.",
            author: "Мишель Обама"
        },
        {
            text: "Я хочу, чтобы каждая девочка знала: её голос может изменить мир.",
            author: "Малала Юсуфзай"
        },
        {
            text: "Никто не может заставить тебя чувствовать себя хуже без твоего согласия.",
            author: "Элеонора Рузвельт"
        },
        {
            text: "Будь смелой, а не идеальной.",
            author: "Решма Сауджани"
        }
    ],
    kz: [
        {
            text: "Өзің өскен шеңберден шықпайынша, әлемнің қаншалық кең екенін түсіне алмайсың.",
            author: "Анджелина Джоли"
        },
        {
            text: "Қыздар ақылды болудан ешқашан қорықпауы керек.",
            author: "Эмма Уотсон"
        },
        {
            text: "Біз, әйелдер, неге қол жеткізе алатынымызға шек жоқ.",
            author: "Мишель Обама"
        },
        {
            text: "Әрбір қыз өз дауысы әлемді өзгерте алатынын білуі керек.",
            author: "Малала Юсуфзай"
        },
        {
            text: "Сенің келісіміңсіз ешкім сені төмен сезіндіре алмайды.",
            author: "Элеонора Рузвельт"
        },
        {
            text: "Мінсіз болуға емес, батыл болуға ұмтыл.",
            author: "Решма Сауджани"
        }
    ]
}

function QuoteBar() {
    const { language } = useLanguage()
    const [index, setIndex] = useState(0)
    const items = quotes[language]

    useEffect(() => {
        setIndex(0)
    }, [language])

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % items.length)
        }, 12000)

        return () => clearInterval(interval)
    }, [items.length])

    return (
        <div className="quote-bar">
            <p className="quote-text">
                "{items[index].text}"
                <span className="quote-author"> - {items[index].author}</span>
            </p>
        </div>
    )
}

export default QuoteBar
