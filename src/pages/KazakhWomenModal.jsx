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


function KazakhWomenModal({ isOpen, onClose }) {

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

        <div className={`women-overlay ${closing ? "overlay-closing" : ""}`}>

            <div className={`women-modal ${closing ? "modal-closing" : ""}`}>

                <button
                    className="women-close"
                    onClick={handleClose}
                >
                    ✕
                </button>


                <div
                    className="women-container"
                    style={{ backgroundImage:`url(${bg})` }}
                >

                    <h1 className="women-title">
                        Remarkable Women of Kazakhstan
                    </h1>


                    <div className="women-card">

                        <img src={dina} alt="dina"/>

                        <div>

                            <h3>Dina Nurpeisova</h3>

                            <p>
                                Legendary dombra performer and composer,
                                People's Artist of Kazakhstan.
                            </p>

                        </div>

                    </div>



                    <div className="women-card">

                        <img src={gulsim} alt="gulsim"/>

                        <div>

                            <h3>Gulsim Asfendiyarova</h3>

                            <p>
                                One of the first Kazakh female doctors
                                and pioneer of women's education.
                            </p>

                        </div>

                    </div>



                    <div className="women-card">

                        <img src={akkagaz} alt="akkagaz"/>

                        <div>

                            <h3>Akkagaz Doszhanova</h3>

                            <p>
                                One of the first female doctors
                                and women's rights advocate.
                            </p>

                        </div>

                    </div>



                    <div className="women-card">

                        <img src={nazipa} alt="nazipa"/>

                        <div>

                            <h3>Nazipa Kulzhanova</h3>

                            <p>
                                Journalist, educator and active participant
                                of the Alash movement.
                            </p>

                        </div>

                    </div>



                    <div className="women-card">

                        <img src={hiuaz} alt="hiuaz"/>

                        <div>

                            <h3>Hiuaz Dospanova</h3>

                            <p>
                                The first Kazakh female military pilot
                                who flew more than 300 combat missions.
                            </p>

                        </div>

                    </div>



                    <div className="women-card">

                        <img src={kulyash} alt="kulyash"/>

                        <div>

                            <h3>Kulyash Baiseitova</h3>

                            <p>
                                Legendary Kazakh opera singer and
                                cultural icon.
                            </p>

                        </div>

                    </div>



                    <div className="women-card">

                        <img src={roza} alt="roza"/>

                        <div>

                            <h3>Roza Baglanova</h3>

                            <p>
                                Famous singer who performed for soldiers
                                during World War II.
                            </p>

                        </div>

                    </div>



                    <div className="women-card">

                        <img src={shara} alt="shara"/>

                        <div>

                            <h3>Shara Zhienkulova</h3>

                            <p>
                                Founder of professional Kazakh stage dance
                                and famous choreographer.
                            </p>

                        </div>

                    </div>



                    <div className="women-card">

                        <img src={alma} alt="alma"/>

                        <div>

                            <h3>Alma Orazbayeva</h3>

                            <p>
                                Pioneer of women's equality movement
                                in Kazakhstan.
                            </p>

                        </div>

                    </div>


                </div>

            </div>

        </div>

    )

}

export default KazakhWomenModal