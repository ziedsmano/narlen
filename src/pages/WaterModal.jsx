import "./WaterModal.css"
import { useState, useEffect } from "react"

import bg from "../images/water-modal/water-bg.jpg"

import water1 from "../images/water-modal/water-hormones.png"
import water2 from "../images/water-modal/water-skin.png"
import water3 from "../images/water-modal/water-energy.png"

function WaterModal({ isOpen, onClose }) {

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

        <div className={`water-overlay ${closing ? "overlay-closing" : ""}`}>

            <div className={`water-modal ${closing ? "modal-closing" : ""}`}>

                <button
                    className="water-close"
                    onClick={handleClose}
                >
                    ✕
                </button>

                <div
                    className="water-container"
                    style={{backgroundImage:`url(${bg})`}}
                >

                    <h1 className="water-title">
                        Hydration & Your Body
                    </h1>

                    <p className="water-subtitle">
                        Discover how water supports hormones, skin health and brain energy during puberty.
                    </p>


                    <div className="water-card">

                        <img src={water1} alt="hormones"/>

                        <div className="water-text">

                            <h3>1. Hormonal Messengers and Fluid Flow</h3>

                            <p>
                                Hormones are chemical messengers that travel through the bloodstream.
                                Drinking enough water helps maintain healthy blood volume so these
                                signals can move efficiently throughout your body and support growth
                                and development during puberty.
                            </p>

                        </div>

                    </div>


                    <div className="water-card">

                        <img src={water2} alt="skin"/>

                        <div className="water-text">

                            <h3>2. Skin Resilience and Natural Glow</h3>

                            <p>
                                During puberty your skin becomes more active due to hormonal changes.
                                Proper hydration supports skin elasticity, improves circulation and
                                helps maintain a healthy, natural glow.
                            </p>

                        </div>

                    </div>


                    <div className="water-card">

                        <img src={water3} alt="energy"/>

                        <div className="water-text">

                            <h3>3. Energy, Detox, and Focus</h3>

                            <p>
                                Water helps your body remove waste and supports brain function.
                                Staying hydrated improves concentration, energy levels and overall
                                mental clarity during school and daily activities.
                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    )

}

export default WaterModal