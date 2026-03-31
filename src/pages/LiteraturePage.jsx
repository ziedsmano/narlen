import React, { useState } from "react"
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

const writers = [
    {
        image: austen,
        alt: "Jane Austen",
        name: "Jane Austen",
        source: "https://ru.wikipedia.org/wiki/Остин,_Джейн",
        details: [
            "English writer, influential cultural figure of the 18th century.",
            "She focused on plots exploring women's dependence on marriage and their desire for economic security.",
            "Many of Austen's works were published under a pseudonym, which is why she achieved little fame during her lifetime."
        ]
    },
    {
        image: bronte,
        alt: "Charlotte Bronte",
        name: "Charlotte Bronte",
        source: "https://ru.wikipedia.org/wiki/Бронте,_Шарлотта",
        details: [
            "The eldest of the three Bronte sisters.",
            "One of the early authors who experimented with various poetic forms, including the long narrative and dramatic monologue.",
            "Although her first novel, The Teacher, was rejected by publishers, Jane Eyre in 1847 was critically acclaimed and became part of world literature."
        ]
    },
    {
        image: morrison,
        alt: "Toni Morrison",
        name: "Toni Morrison",
        source: "https://ru.wikipedia.org/wiki/Моррисон,_Тони",
        details: [
            "American writer and editor, one of the most important writers of the 20th century and winner of the 1993 Nobel Prize in Literature.",
            "Her work raises themes about the lives of African Americans, racism, and the history of slavery.",
            "Beloved, Song of Solomon, and The Bluest Eye are among her best known works."
        ]
    },
    {
        image: rowling,
        alt: "J.K. Rowling",
        name: "J.K. Rowling",
        source: "https://ru.wikipedia.org/wiki/Роулинг,_Джоан",
        details: [
            "British author, film producer, and screenwriter, best known as the author of the Harry Potter series.",
            "She spent 7 years working on the first draft of the series, which was initially rejected by 12 publishers.",
            "She has won numerous awards and sold over 500 million copies of her works."
        ]
    },
    {
        image: fariza,
        alt: "Fariza Ongarsynova",
        name: "Fariza Ongarsynova",
        source: "https://adebiportal.kz/kz/news/view/qazaq-adebietindegi-zazusy-aielder__2940",
        details: [
            "Kazakh national writer, journalist, and deputy of the Mazhilis of the Parliament of Kazakhstan.",
            "Her writing combines civic voice, lyrical power, and themes of identity and womanhood.",
            "She is remembered as one of the strongest female voices in Kazakh literature."
        ]
    },
    {
        image: sara,
        alt: "Sara Mynzhasarova",
        name: "Sara Mynzhasarova",
        source: "https://adebiportal.kz/kz/news/view/qazaq-adebietindegi-zazusy-aielder__2940",
        details: [
            "One of the early Kazakh women novelists in the history of Central Asia.",
            "Her works include philosophical reflections on life, time, human destiny, and relationships.",
            "Her literary path helped broaden the place of women in Kazakh prose."
        ]
    },
    {
        image: marfuga,
        alt: "Marfuga Aitkhozina",
        name: "Marfuga Aitkhozina",
        source: "https://adebiportal.kz/kz/news/view/qazaq-adebietindegi-zazusy-aielder__2940",
        details: [
            "Kazakh poet and journalist.",
            "She wrote more than 40 collections and became widely read across different generations.",
            "Her works were translated and published in more than 40 foreign languages."
        ]
    },
    {
        image: kanipa,
        alt: "Kanipa Bugybayeva",
        name: "Kanipa Bugybayeva",
        source: "https://adebiportal.kz/kz/news/view/qazaq-adebietindegi-zazusy-aielder__2940",
        details: [
            "Kazakh poetess nominated for the State Prize in Literature and Art.",
            "Her poetry collections found a wide audience and highlighted emotional depth and national imagery.",
            "She once said: \"I was born with poetry. This is my destiny.\""
        ]
    },
    {
        image: sappho,
        alt: "Sappho",
        name: "Sappho",
        source: "https://ru.wikipedia.org/wiki/Сапфо",
        details: [
            "Ancient Greek poet and musician, author of monodic lyric poetry.",
            "She is one of the Nine Lyric Poets of ancient Greece.",
            "Sappho's poems survive mostly in fragments, but her influence remains immense."
        ]
    },
    {
        image: shelley,
        alt: "Mary Shelley",
        name: "Mary Shelley",
        source: "https://ru.wikipedia.org/wiki/Шелли,_Мэри",
        details: [
            "English writer, best known for Frankenstein (1818), an early example of science fiction.",
            "She also edited and promoted the works of Percy Bysshe Shelley.",
            "Her work bridges Gothic fiction, philosophy, and early speculative literature."
        ]
    },
    {
        image: christie,
        alt: "Agatha Christie",
        name: "Agatha Christie",
        source: "https://ru.wikipedia.org/wiki/Кристи,_Агата",
        details: [
            "British writer, playwright, and one of the most renowned detective writers in world literature.",
            "She wrote 66 detective novels, 14 short story collections, and more than 20 plays.",
            "Her books have sold over two billion copies, placing her among the most published authors in history."
        ]
    },
    {
        image: mistral,
        alt: "Gabriela Mistral",
        name: "Gabriela Mistral",
        source: "https://ru.wikipedia.org/wiki/Габриела_Мистраль",
        details: [
            "Chilean poet, teacher, and diplomat.",
            "In 1945, she became the first Latin American woman to receive the Nobel Prize in Literature.",
            "Her poetry is known for simplicity of language, emotional tension, and humanism."
        ]
    },
    {
        image: atwood,
        alt: "Margaret Atwood",
        name: "Margaret Atwood",
        source: "https://ru.wikipedia.org/wiki/Этвуд,_Маргарет",
        details: [
            "Canadian writer, poet, essayist, and public intellectual.",
            "Her works combine feminist themes, irony, and elements of speculative fiction.",
            "The Handmaid's Tale became a cultural icon and made Atwood one of the most influential authors of our time."
        ]
    },
    {
        image: alexievich,
        alt: "Svetlana Alexievich",
        name: "Svetlana Alexievich",
        source: "https://ru.wikipedia.org/wiki/Алексиевич,_Светлана_Александровна",
        details: [
            "Belarusian writer, journalist, and winner of the 2015 Nobel Prize in Literature.",
            "She created a unique form of documentary prose built from the collective voices of eyewitnesses.",
            "Her themes include war, memory, trauma, and the aftermath of historical catastrophe."
        ]
    },
    {
        image: beauvoir,
        alt: "Simone de Beauvoir",
        name: "Simone de Beauvoir",
        source: "https://ru.wikipedia.org/wiki/Бовуар,_Симона_де",
        details: [
            "French writer, existentialist philosopher, and feminist, one of the central intellectual figures of the 20th century.",
            "The Second Sex became a foundation of modern feminist thought and changed public perceptions of women's roles in society.",
            "Her ideas had a profound influence on gender philosophy and literary criticism."
        ]
    },
    {
        image: nazipa,
        alt: "Nazipa Kulzhanova",
        name: "Nazipa Kulzhanova",
        source: "https://kaganmedia.org/kz/Nomad/tarixta-aty-qalgan-qazaq-aielderi",
        details: [
            "Kazakhstan's first female journalist, teacher, translator, and ethnographer.",
            "One of the few female activists in the Alash movement, she actively advocated for women's education and rights.",
            "From the 1910s onward, she published articles on education and women's rights in major Kazakh newspapers."
        ]
    }
]

function LiteraturePage() {

    const [openModal, setOpenModal] = useState(false)

    return (

        <div className="literature-page">


            <section className="literature-hero-section">

                <div className="literature-hero-bg"></div>

                <div className="literature-hero-container">

                    <div className="literature-hero">

                        <div className="hero-text">

                            <h1>Women in Literature</h1>

                            <p>
                                Discover the voices and stories of influential women writers.
                            </p>

                            <button
                                className="books-btn"
                                onClick={() => setOpenModal(true)}
                            >
                                Recommended Books
                            </button>

                        </div>

                        <img
                            src={girl}
                            alt="reading girl"
                            className="hero-img"
                        />

                    </div>

                </div>

            </section>


            <section className="videos">

                <h2>Watch Video Series</h2>

                <div className="video-grid">

                    <div className="video-card">
                        <iframe
                            src="https://www.youtube.com/embed/SiCnOZN8pqk?si=A4KjDGsklug1mEsw"
                            title="video"
                            allowFullScreen
                        ></iframe>
                    </div>

                    <div className="video-card">
                        <iframe
                            src="https://www.youtube.com/embed/WortZ7xtiN4"
                            title="video"
                            allowFullScreen
                        ></iframe>
                    </div>

                    <div className="video-card">
                        <iframe
                            src="https://www.youtube.com/embed/1nJF0xeWSng"
                            title="video"
                            allowFullScreen
                        ></iframe>
                    </div>

                </div>

            </section>


            <section className="writers">

                <h2 className="writers-title">Famous Women Writers</h2>

                <div className="writers-container">

                    <div className="writers-grid">

                        {writers.map((writer) => (
                            <div className="writer-card" key={writer.name}>
                                <img src={writer.image} alt={writer.alt}/>

                                <div className="writer-info">
                                    <h3>{writer.name}</h3>

                                    {writer.details.map((detail, index) => (
                                        <p key={`${writer.name}-${index}`}>{detail}</p>
                                    ))}

                                    <a
                                        className="writer-source-link"
                                        href={writer.source}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Source
                                    </a>
                                </div>
                            </div>
                        ))}

                    </div>

                </div>

            </section>


            <RecommendedBooksModal
                isOpen={openModal}
                onClose={() => setOpenModal(false)}
            />

        </div>

    )
}

export default LiteraturePage
