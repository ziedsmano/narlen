import "./SleepModal.css"
import { useState, useEffect } from "react"

import bg from "../images/sleep-modal/sleep-bg.jpg"

import sleep1 from "../images/sleep-modal/sleep-growth.png"
import sleep2 from "../images/sleep-modal/sleep-emotions.png"
import sleep3 from "../images/sleep-modal/sleep-energy.png"

function SleepModal({ isOpen, onClose }) {

    const [show,setShow] = useState(false)
    const [closing,setClosing] = useState(false)

    useEffect(()=>{

        if(isOpen){
            setShow(true)
        }

    },[isOpen])


    function handleClose(){

        setClosing(true)

        setTimeout(()=>{

            setClosing(false)
            setShow(false)
            onClose()

        },450)

    }

    if(!show) return null


    return(

        <div className={`sleep-overlay ${closing ? "overlay-closing" : ""}`}>

            <div className={`sleep-modal ${closing ? "modal-closing" : ""}`}>

                <button
                    className="sleep-close"
                    onClick={handleClose}
                >
                    ✕
                </button>


                <div
                    className="sleep-container"
                    style={{ backgroundImage:`url(${bg})` }}
                >

                    <h1 className="sleep-title">
                        Sleep & Teenage Development
                    </h1>

                    <p className="sleep-subtitle">
                        Discover how quality sleep supports growth, emotions and daily energy.
                    </p>


                    {/* CARD 1 */}

                    <div className="sleep-card">

                        <img src={sleep1} alt="growth"/>

                        <div className="sleep-text">

                            <h3>
                                1. Biological Growth and Tissue Repair
                            </h3>

                            <p>
                                Deep sleep is when the body releases growth hormones and repairs tissues.
                                This process supports bone development, muscle growth and healthy
                                physical development during puberty.
                            </p>

                        </div>

                    </div>


                    {/* CARD 2 */}

                    <div className="sleep-card">

                        <img src={sleep2} alt="emotions"/>

                        <div className="sleep-text">

                            <h3>
                                2. Emotional Processing
                            </h3>

                            <p>
                                Sleep helps the brain process emotions and experiences from the day.
                                This strengthens emotional stability and helps teenagers manage
                                mood changes more effectively.
                            </p>

                        </div>

                    </div>


                    {/* CARD 3 */}

                    <div className="sleep-card">

                        <img src={sleep3} alt="energy"/>

                        <div className="sleep-text">

                            <h3>
                                3. Energy, Immunity and Focus
                            </h3>

                            <p>
                                Getting 8–10 hours of sleep restores energy levels, supports the
                                immune system and improves concentration and learning abilities.
                            </p>

                        </div>

                    </div>


                </div>

            </div>

        </div>

    )

}

export default SleepModal