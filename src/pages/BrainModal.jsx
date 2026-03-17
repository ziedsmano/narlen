import "./BrainModal.css"
import { useState, useEffect } from "react"

import bg from "../images/brain-modal/brain-bg.jpg"

import neuro from "../images/brain-modal/brain-neuro.png"
import emotions from "../images/brain-modal/brain-emotions.png"
import sleep from "../images/brain-modal/brain-sleep.png"

function BrainModal({ isOpen, onClose }) {

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

        <div className={`brain-overlay ${closing ? "overlay-closing" : ""}`}>

            <div className={`brain-modal ${closing ? "modal-closing" : ""}`}>

                <button
                    className="brain-close"
                    onClick={handleClose}
                >
                    ✕
                </button>

                <div
                    className="brain-container"
                    style={{ backgroundImage:`url(${bg})` }}
                >

                    <h1 className="brain-title">
                        Deep Dive: The Transforming Teenage Brain
                    </h1>

                    <p className="brain-subtitle">
                        Explore how your brain builds unique connections during puberty,
                        shaping who you become.
                    </p>


                    <div className="brain-card">

                        <img src={neuro} alt="" />

                        <div className="brain-text">

                            <h3>
                                1. The Big Brain Upgrade (Neuroplasticity)
                            </h3>

                            <p>
                                During puberty your brain undergoes a powerful transformation.
                                It forms thousands of new neural connections based on your
                                experiences and learning.

                                This process makes the brain more efficient and helps
                                develop stronger thinking, creativity, and memory.
                            </p>

                        </div>

                    </div>


                    <div className="brain-card">

                        <img src={emotions} alt="" />

                        <div className="brain-text">

                            <h3>
                                2. Hormones and Emotional Waves
                            </h3>

                            <p>
                                Hormones influence both the body and the brain.
                                They interact with the emotional center of your brain,
                                which is why mood changes are common during puberty.

                                Learning to understand these emotions helps build
                                emotional intelligence and resilience.
                            </p>

                        </div>

                    </div>


                    <div className="brain-card">

                        <img src={sleep} alt="" />

                        <div className="brain-text">

                            <h3>
                                3. Brain Health and Body Care
                            </h3>

                            <p>
                                Healthy habits support your brain’s development.

                                Sleep strengthens memory and concentration,
                                water helps brain activity, and nutritious food
                                fuels brain growth and emotional balance.
                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    )

}

export default BrainModal