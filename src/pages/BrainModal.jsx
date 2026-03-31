import "./BrainModal.css"
import { useState, useEffect } from "react"

import bg from "../images/brain-modal/brain-bg.jpg"

import neuro from "../images/brain-modal/brain-neuro.png"
import emotions from "../images/brain-modal/brain-emotions.png"
import sleep from "../images/brain-modal/brain-sleep.png"

const BRAIN_SOURCE_URL = "https://www.hiwellapp.com/blog/ergenlikte-beyin"

function BrainModal({ isOpen, onClose }) {

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

        <div className={`brain-overlay app-modal-overlay ${closing ? "overlay-closing" : ""}`}>

            <div
                className={`brain-modal app-modal-shell ${closing ? "modal-closing" : ""}`}
                role="dialog"
                aria-modal="true"
                aria-labelledby="brain-modal-title"
            >

                <button
                    className="brain-close app-modal-close"
                    onClick={handleClose}
                    aria-label="Close dialog"
                    data-read-aloud-ignore="true"
                >
                    ×
                </button>

                <div
                    className="brain-container app-modal-content app-modal-content--brain"
                    data-read-aloud-target="true"
                    style={{ backgroundImage: `url(${bg})` }}
                >

                    <h1 id="brain-modal-title" className="brain-title">
                        Deep Dive: The Transforming Teenage Brain
                    </h1>

                    <p className="brain-subtitle">
                        Learn how puberty activates key brain systems and supports the development of thinking, emotions, and future goals.
                    </p>

                    <div className="brain-card" data-read-aloud-block="true">

                        <img src={neuro} alt="" />

                        <div className="brain-text">

                            <h3>
                                1. The hypothalamic-pituitary-gonadal axis
                            </h3>

                            <p>The hypothalamic-pituitary-gonadal axis in the brain is active in the prenatal and postnatal periods, but is then suppressed by the inhibiting gamma-aminobutyric acid (GABA). </p>
                            <p>In adolescence, this axis becomes active again and the production of sex hormones begins. The brain transmits messages in the form of hormones and tells the body to start puberty.</p>


                        </div>

                    </div>

                    <div className="brain-card" data-read-aloud-block="true">

                        <img src={emotions} alt="" />

                        <div className="brain-text">

                            <h3>
                                2. How does the brain develop?
                            </h3>

                            <p>
                                Different hormones start to influence the brain in puberty. The development of the brain starts when the baby is in the womb of the mother and continues to develop after birth except the front part of the brain. The front part will start developing from the middle of childhood, and especially in puberty it develops very quickly. The brain develops from the back to the front.
                            </p>



                        </div>

                    </div>

                    <div className="brain-card" data-read-aloud-block="true">

                        <img src={sleep} alt="" />

                        <div className="brain-text">

                            <h3>
                                3. What happens when the front brain develops?
                            </h3>

                            <p>
                                Teenagers start to think out of the box by exploring the world. As a result, in puberty teenagers are eager to share information about themselves, try new hobbies, or take social risks. They begin to think about their future goals. When teenagers have clear goals about their future, they can learn new information effectively because their brains are systems of emotional learning.
                            </p>

                        </div>

                    </div>

                    <div className="brain-source-wrap">
                        <a
                            className="brain-source-link"
                            href={BRAIN_SOURCE_URL}
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

export default BrainModal
