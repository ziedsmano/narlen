import "./SleepModal.css"
import { useState, useEffect } from "react"

import bg from "../images/sleep-modal/sleep-bg.jpg"

import sleep1 from "../images/sleep-modal/sleep-growth.png"
import sleep2 from "../images/sleep-modal/sleep-emotions.png"
import sleep3 from "../images/sleep-modal/sleep-energy.png"

const SLEEP_SOURCE_URL = "https://iyiuykuiyihayat.com/ergenlik-ve-uyku/"

function SleepModal({ isOpen, onClose }) {

    const [show, setShow] = useState(false)
    const [closing, setClosing] = useState(false)

    useEffect(() => {

        if (isOpen) {
            setShow(true)
        }

    }, [isOpen])

    function handleClose() {

        setClosing(true)

        setTimeout(() => {

            setClosing(false)
            setShow(false)
            onClose()

        }, 450)

    }

    if (!show) return null

    return (

        <div className={`sleep-overlay app-modal-overlay ${closing ? "overlay-closing" : ""}`}>

            <div
                className={`sleep-modal app-modal-shell ${closing ? "modal-closing" : ""}`}
                role="dialog"
                aria-modal="true"
                aria-labelledby="sleep-modal-title"
            >

                <button
                    className="sleep-close app-modal-close"
                    onClick={handleClose}
                    aria-label="Close dialog"
                    data-read-aloud-ignore="true"
                >
                    ×
                </button>

                <div
                    className="sleep-container app-modal-content app-modal-content--sleep"
                    data-read-aloud-target="true"
                    style={{ backgroundImage: `url(${bg})` }}
                >

                    <h1 id="sleep-modal-title" className="sleep-title">
                        Sleep & Teenage Development
                    </h1>

                    <p className="sleep-subtitle">
                        Learn why healthy sleep habits are essential for concentration, wellbeing and daily development.
                    </p>

                    <div className="sleep-card" data-read-aloud-block="true">

                        <img src={sleep1} alt="growth" />

                        <div className="sleep-text">

                            <h3>
                                1. The Main Problem with Sleep Routine
                            </h3>

                            <p>
                                Getting not enough sleep reduces success and increases risky behaviors. The use of electronic media disrupts sleep by increasing cognitive, emotional and physiological excitability in young people.
                            </p>

                        </div>

                    </div>

                    <div className="sleep-card" data-read-aloud-block="true">

                        <img src={sleep2} alt="advice" />

                        <div className="sleep-text">

                            <h3>
                                2. Advice for Young People and Their Families
                            </h3>

                            <p>
                                According to the guidelines of the American Academy of Pediatrics, the recommended amount of sleep for adolescents is stated as an average of 8-10 hours per night.
                            </p>

                        </div>

                    </div>

                    <div className="sleep-card" data-read-aloud-block="true">

                        <img src={sleep3} alt="bedtime routine" />

                        <div className="sleep-text">

                            <h3>
                                3. Useful Pieces of Advice to Have a Good Bedtime Routine
                            </h3>

                            <p>
                                Set and maintain a regular bedtime routine. Restrict electronic devices and games 1 hour before bedtime. Prevent sleeping at inappropriate times during the day. Provide a dark and quiet sleeping environment. Pay attention to daily exercise, but avoid exercise close to bedtime. Never use nicotine and alcohol, and restrict caffeine intake, especially in the evening.
                            </p>

                        </div>

                    </div>

                    <div className="sleep-source-wrap">
                        <a
                            className="sleep-source-link"
                            href={SLEEP_SOURCE_URL}
                            target="_blank"
                            rel="noreferrer"
                        >
                            Source
                        </a>
                    </div>

                </div>

            </div>

        </div>

    )

}

export default SleepModal
