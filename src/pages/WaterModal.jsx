import "./WaterModal.css"
import { useState, useEffect } from "react"

import bg from "../images/water-modal/water-bg.jpg"

import water1 from "../images/water-modal/water-hormones.png"
import water2 from "../images/water-modal/water-skin.png"
import water3 from "../images/water-modal/water-energy.png"

const WATER_SOURCE_URL = "https://duyguhastanesi.com.tr/ergenlik-doneminde-saglikli-beslenmenin-onemi/"

function WaterModal({ isOpen, onClose }) {

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

        <div className={`water-overlay app-modal-overlay ${closing ? "overlay-closing" : ""}`}>

            <div
                className={`water-modal app-modal-shell ${closing ? "modal-closing" : ""}`}
                role="dialog"
                aria-modal="true"
                aria-labelledby="water-modal-title"
            >

                <button
                    className="water-close app-modal-close"
                    onClick={handleClose}
                    aria-label="Close dialog"
                    data-read-aloud-ignore="true"
                >
                    ×
                </button>

                <div
                    className="water-container app-modal-content app-modal-content--water"
                    data-read-aloud-target="true"
                    style={{ backgroundImage: `url(${bg})` }}
                >

                    <h1 id="water-modal-title" className="water-title">
                        Healthy Eating Habits
                    </h1>

                    <p className="water-subtitle">
                        Learn why balanced eating habits during adolescence support energy, focus and long-term health.
                    </p>

                    <div className="water-card" data-read-aloud-block="true">

                        <img src={water1} alt="hormones" />

                        <div className="water-text">

                            <h3>1. Say No to Fast Food</h3>

                            <p>
                                The first wrong eating habit is fast food consumption. Adolescents usually prefer to eat quickly, so they often choose fast food restaurants. However, fast food contains a high amount of fat, sugar and salt. Consuming fast food on a regular basis can lead to health problems such as obesity, heart disease and diabetes.
                            </p>

                        </div>

                    </div>

                    <div className="water-card" data-read-aloud-block="true">

                        <img src={water2} alt="skin" />

                        <div className="water-text">

                            <h3>2. Overconsumption of Junk Food</h3>

                            <p>
                                The second wrong eating habit is the consumption of junk food. Such foods usually contain a lot of sugar. Overconsumption of junk food can cause weight gain and dental health problems.
                            </p>

                        </div>

                    </div>

                    <div className="water-card" data-read-aloud-block="true">

                        <img src={water3} alt="energy" />

                        <div className="water-text">

                            <h3>3. Breakfast Is Essential</h3>

                            <p>
                                Another wrong eating habit is skipping breakfast. Teenagers usually leave the house in a hurry in the morning and neglect to have breakfast. However, breakfast is the most important meal of the day and is necessary to meet the body's energy needs. Skipping breakfast can cause lack of concentration and low energy. Adopting healthy eating habits during adolescence will help young people lead a healthy life.
                            </p>

                        </div>

                    </div>

                    <div className="water-source-wrap">
                        <a
                            className="water-source-link"
                            href={WATER_SOURCE_URL}
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

export default WaterModal
