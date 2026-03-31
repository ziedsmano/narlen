import "./KazakhWomenModal.css"
import { useState, useEffect } from "react"

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

const women = [
    {
        image: dina,
        alt: "dina",
        name: "Dina Nurpeisova",
        source: "https://en.wikipedia.org/wiki/Dina_Nurpeisova",
        details: [
            "A renowned Kazakh kyuishi composer and People's Artist of Kazakhstan (1861-1955).",
            "In 1937, she participated in the Republican Competition of Folk Performers. At the age of 75, she won a prize at the First All-Union Competition of Folk Instrument Performers in Moscow.",
            "At 83, she again won prizes at the Decade of Arts of the Central Asian Republics in Tashkent.",
            "As a child, she met and studied with the great kyuishi Kurmangazy Sagyrbayev.",
            "She composed the kyuis \"Bulbul,\" \"Zhiger,\" \"Bayzhuma,\" \"Kerbez,\" \"On Altynshy Zhyl,\" \"Kosalka,\" \"Asem Kokyr,\" \"Toybastar,\" \"Ana Buyrygy,\" \"Zhekys,\" and others."
        ]
    },
    {
        image: gulsim,
        alt: "gulsim",
        name: "Gulsim Asfendiyarova",
        source: "https://en.wikipedia.org/wiki/Gulsum_Asfendiyarova",
        details: [
            "One of the first Kazakh female doctors. She graduated from a girls' gymnasium in Tashkent and the Women's Medical Institute in St. Petersburg.",
            "She became the first Kazakh woman to earn a medical degree.",
            "In 1913, she was the head physician of the maternity hospital in Tashkent. At the request of the Turkestan Regional Bureau of Muslim Organizations, she opened a midwifery school for local women and became its director and instructor."
        ]
    },
    {
        image: akkagaz,
        alt: "akkagaz",
        name: "Akkagaz Doszhanova",
        source: "https://qazinform.com/news/women-of-kazakhstan-who-left-their-marks-on-nations-history-61c544",
        details: [
            "One of the first female doctors, a teacher, and an active advocate for women's rights.",
            "She studied medical courses in Moscow, at the Tomsk Medical Institute, and at the Faculty of Medicine at the Central Asian State University.",
            "In addition to her medical practice, she was involved in organizational and pedagogical work.",
            "Her articles on medicine were published in the journals and newspapers \"Ayel Tendigi,\" \"Abai,\" and \"Zhas Azamat.\"",
            "In 1930-1931, she worked as a gynecologist at Hospital No. 1 in Almaty."
        ]
    },
    {
        image: nazipa,
        alt: "nazipa",
        name: "Nazipa Kulzhanova",
        source: "https://qazinform.com/news/women-of-kazakhstan-who-left-their-marks-on-nations-history-61c544",
        details: [
            "One of the first Kazakh women journalists and educators. An active participant in the Alash movement.",
            "She wrote articles on women's issues for the newspapers \"Kazakh,\" \"Saryarka,\" and \"Alash.\"",
            "In 1920, she joined the special commission of the People's Commissariat of Education of the Kazakh ASSR for publishing textbooks and books in the Kazakh language, and later, the committee for the introduction of the new Kazakh alphabet.",
            "She worked for the publications \"Aykap,\" \"Kazakh,\" \"Birlik Tuy,\" \"Alash,\" \"Enbekshi Kazak,\" \"Kyzyl Kazakstan,\" and the magazine \"Ayel Tendigi.\"",
            "She wrote textbooks for Kazakh schools.",
            "Alexander Zataevich gave the ethnographer the songs \"Gaini-au, saulem\" and \"Kadyr zary\"."
        ]
    },
    {
        image: hiuaz,
        alt: "hiuaz",
        name: "Hiuaz Dospanova",
        source: "https://en.wikipedia.org/wiki/Khiuaz_Dospanova",
        details: [
            "During World War II, she flew over 300 combat sorties, destroying enemy military equipment and weapons depots.",
            "She is the first and only Kazakh female military pilot.",
            "She flew missions on the fronts of the North Caucasus, South Caucasus, Ukraine, and Belarus.",
            "Despite being wounded twice, she returned to duty after treatment.",
            "During the war, she was nicknamed the \"Air Princess\" and the \"Night Witch.\"",
            "During her lifetime, she was awarded Kazakhstan's highest title, \"Khalyk Kaharmany\" (People's Hero).",
            "She died in 2008 at the age of 86."
        ]
    },
    {
        image: kulyash,
        alt: "kulyash",
        name: "Kulyash Baiseitova",
        source: "https://qazinform.com/news/women-of-kazakhstan-who-left-their-marks-on-nations-history-61c544",
        details: [
            "Famous Kazakh singer with a \"nightingale voice\" (1912-1957).",
            "At 24, she became a People's Artist of the USSR. One of the founders of Kazakh opera.",
            "In 1936, she participated in the Decade of Kazakh Literature and Art in Moscow.",
            "Her performance at the Bolshoi Theater was highly praised by Joseph Stalin, who noted her skill."
        ]
    },
    {
        image: roza,
        alt: "roza",
        name: "Roza Baglanova",
        source: "https://qazinform.com/news/women-of-kazakhstan-who-left-their-marks-on-nations-history-61c544",
        details: [
            "A renowned singer, famous for her songs \"Kesteli Oramal\" and \"Ah, Samara, Little Town.\"",
            "During the war, she performed for soldiers at the front.",
            "On May 9, 1945, she participated in the Victory Concert in Berlin.",
            "Later, she became a soloist with the Abai Kazakh Opera and Ballet Theater and the Kazakh Philharmonic.",
            "She performed songs of the world and toured extensively, promoting Kazakh art abroad.",
            "For her contribution to culture, she received the title \"Khalyk Kaharmany.\""
        ]
    },
    {
        image: shara,
        alt: "shara",
        name: "Shara Zhienkulova",
        source: "https://qazinform.com/news/women-of-kazakhstan-who-left-their-marks-on-nations-history-61c544",
        details: [
            "Founder of professional Kazakh stage dance.",
            "At 16, she began performing on stage with her husband, Kurmanbek Zhandarbekov, at the Kazakh Drama Theater.",
            "She played leading roles in Mukhtar Auezov's plays \"Englik-Kebek\" and \"Karagoz.\"",
            "In the play \"Aiman-Sholpan,\" she debuted the national dance \"Kelinshek.\"",
            "Author of the books \"Kazakh Bileri\" and \"Bi Kupiyasy.\" She traveled extensively throughout the country, collecting elements of Kazakh dance."
        ]
    },
    {
        image: alma,
        alt: "alma",
        name: "Alma Orazbayeva",
        source: "https://qazinform.com/news/women-of-kazakhstan-who-left-their-marks-on-nations-history-61c544",
        details: [
            "One of the founders of the women's equality movement in the early 20th century.",
            "She visited Kazakh villages, explained women's rights, and helped them obtain an education.",
            "In 1922, she became the head of the women's department at the Kazakh Regional Party Committee and played a major role in eradicating illiteracy among women."
        ]
    }
]

function KazakhWomenModal({ isOpen, onClose }) {

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

            <div
                className={`women-modal app-modal-shell ${closing ? "modal-closing" : ""}`}
                role="dialog"
                aria-modal="true"
                aria-labelledby="kazakh-women-modal-title"
            >

                <button
                    className="women-close app-modal-close"
                    onClick={handleClose}
                    aria-label="Close dialog"
                    data-read-aloud-ignore="true"
                >
                    ×
                </button>

                <div
                    className="women-container app-modal-content app-modal-content--history"
                    data-read-aloud-target="true"
                    style={{ backgroundImage: `url(${bg})` }}
                >

                    <h1 id="kazakh-women-modal-title" className="women-title">
                        Remarkable Women of Kazakhstan
                    </h1>

                    {women.map((woman) => (
                        <a
                            key={woman.name}
                            className="women-card women-card-link"
                            data-read-aloud-block="true"
                            href={woman.source}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img src={woman.image} alt={woman.alt} />

                            <div>
                                <h3>{woman.name}</h3>

                                {woman.details.map((detail, index) => (
                                    <p key={`${woman.name}-${index}`}>{detail}</p>
                                ))}
                            </div>
                        </a>
                    ))}

                </div>

            </div>

        </div>

    )

}

export default KazakhWomenModal
