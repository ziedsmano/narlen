import { useLanguage } from "../context/LanguageContext"

const copy = {
    en: "Together we can create a world where every girl has equal opportunities.",
    ru: "Вместе мы можем создать мир, в котором у каждой девушки будут равные возможности.",
    kz: "Біз бірге әрбір қызға тең мүмкіндік берілетін әлем құра аламыз."
}

function Footer() {
    const { language } = useLanguage()

    return (
        <footer className="footer">
            <p>{copy[language]}</p>

            <p className="footer-email">
                narlen.project@gmail.com
            </p>
        </footer>
    )
}

export default Footer
