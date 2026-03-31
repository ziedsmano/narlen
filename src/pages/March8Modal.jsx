import "./March8Modal.css"
import { useState, useEffect } from "react"

import bg from "../images/history-bg.jpg"

import protest from "../images/march8/protest.jpg"
import clara from "../images/march8/clara.jpg"
import firstWomensDay from "../images/march8/first-womens-day.png"
import officialWomensDay from "../images/march8/official-womens-day.png"

const march8Cards = [
    {
        image: protest,
        alt: "protest",
        title: "1908 New York Protest",
        link: "https://tengrinews.kz/curious/8-marta-vs-chto-stoit-znat-o-prazdnike-i-ego-istorii-594143/",
        paragraphs: [
            "In the late 19th and early 20th centuries, despite working 12-14 hours in factories, women were paid significantly less than the opposite sex.",
            "This led to a protest by textile factory workers in New York, which took place on March 8, 1908.",
            "On this day, textile workers from New York garment factories demonstrated.",
            "\"Bread and roses!\" - the main slogan.",
            "They demanded shorter working hours, equal pay, and the granting of voting rights.",
            "The event made a great impression, and later similar protests began to occur in Europe."
        ],
        quoteIndexes: [3]
    },
    {
        image: clara,
        alt: "clara",
        title: "Clara Zetkin and International Women's Day",
        link: "https://www.britannica.com/biography/Clara-Zetkin",
        paragraphs: [
            "Clara Zetkin was a German socialist and public figure who played a key role in the creation of International Women's Day.",
            "In 1889, Clara Zetkin gave a speech about the role of women in the revolutionary struggle when she participated in the work of the Second International in Paris.",
            "After returning to Germany, she promoted the ideas of equal pay and political rights for women through publishing the women's newspaper Equality.",
            "After heading the women's branch of the Social Democratic Party of Germany, Zetkin proposed the establishment of a special day dedicated to women's struggle for equal rights in 1910 at the International Conference of Socialist Women in Copenhagen.",
            "This idea was supported by delegates from 17 countries."
        ],
        quoteIndexes: [2, 4]
    },
    {
        image: firstWomensDay,
        alt: "first women's day",
        title: "First Women's Day",
        link: "https://www.internationalwomensday.com/Activity/15586/The-history-of-IWD",
        paragraphs: [
            "On March 19, 1911, the first mass celebration was held. Hundreds of thousands of women took part in rallies and demonstrations across Austria-Hungary, Denmark, Germany, and Switzerland.",
            "Other activists, including Polish-German revolutionary Rosa Luxemburg, also played an important role in spreading the idea."
        ],
        quoteIndexes: [1]
    },
    {
        image: officialWomensDay,
        alt: "official women's day",
        title: "The Official Women's Day",
        link: "https://news.un.org/ru/story/2026/03/1467495",
        paragraphs: [
            "In 1945, the UN Charter for the first time enshrined the principle of equality of women and men.",
            "At the initiative of the United Nations, the first official International Women's Day was celebrated on March 8, 1975.",
            "Two years later, the UN General Assembly adopted a resolution proclaiming March 8 as \"Women's Rights and International Peace Day\" dedicated to women's rights and international peace."
        ],
        quoteIndexes: [2]
    }
]

function March8Modal({ isOpen, onClose }){

    const [show,setShow] = useState(isOpen)
    const [closing,setClosing] = useState(false)

    useEffect(()=>{
        if(isOpen){
            setShow(true)
        }
    },[isOpen])

    if(!show) return null


    function handleClose(){

        setClosing(true)

        setTimeout(()=>{
            setClosing(false)
            setShow(false)
            onClose()
        },450)

    }


    return(

        <div className={`women-overlay app-modal-overlay ${closing ? "overlay-closing" : ""}`}>

            <div
                className={`women-modal app-modal-shell ${closing ? "modal-closing" : ""}`}
                role="dialog"
                aria-modal="true"
                aria-labelledby="march8-modal-title"
            >

                <button
                    className="women-close app-modal-close"
                    onClick={handleClose}
                    aria-label="Close modal"
                    data-read-aloud-ignore="true"
                >
                    &times;
                </button>


                <div
                    className="women-container app-modal-content app-modal-content--history"
                    data-read-aloud-target="true"
                    style={{ backgroundImage:`url(${bg})` }}
                >

                    <h1 id="march8-modal-title" className="women-title">
                        International Women's Day
                    </h1>

                    <p className="women-dedication">
                        Dedicated to the achievements of women and the protection of their rights.
                    </p>

                    <p className="women-subtitle">
                        From factory protests to global rights movement
                    </p>

                    {march8Cards.map((card)=>(
                        <a
                            key={card.title}
                            className="women-card-link"
                            data-read-aloud-block="true"
                            href={card.link}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`Open source for ${card.title}`}
                        >
                            <div className="women-card">

                                <img src={card.image} alt={card.alt}/>

                                <div>

                                    <h3>{card.title}</h3>

                                    {card.paragraphs.map((paragraph,index)=>(
                                        <p
                                            key={`${card.title}-${index}`}
                                            className={card.quoteIndexes.includes(index) ? "women-quote" : undefined}
                                        >
                                            {paragraph}
                                        </p>
                                    ))}

                                </div>

                            </div>
                        </a>
                    ))}


                </div>

            </div>

        </div>

    )

}

export default March8Modal
