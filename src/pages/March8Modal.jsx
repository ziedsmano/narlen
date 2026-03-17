import "./March8Modal.css"
import { useState, useEffect } from "react"

import bg from "../images/history-bg.jpg"

import protest from "../images/march8/protest.jpg"
import clara from "../images/march8/clara.jpg"


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
                        International Women's Day
                    </h1>

                    <p className="women-subtitle">
                        From factory protests to global rights movement
                    </p>

                    <div className="women-card">

                        <img src={protest} alt="protest"/>

                        <div>

                            <h3>1908 New York Protest</h3>

                            <p>
                                In the early 20th century many women worked long hours in factories.
                                They demanded shorter working hours, better wages and the right to vote.
                            </p>

                            <p>
                                On March 8, 1908 textile workers in New York organized a protest.
                                Their slogan was "Bread and Roses".
                            </p>

                        </div>

                    </div>


                    <div className="women-card">

                        <img src={clara} alt="clara"/>

                        <div>

                            <h3>Clara Zetkin and International Women's Day</h3>

                            <p>
                                Clara Zetkin was a German socialist who proposed creating an
                                international day dedicated to women's rights.
                            </p>

                            <p>
                                In 1910 at the International Conference of Socialist Women in
                                Copenhagen she proposed celebrating a global day for women.
                                Delegates from 17 countries supported the idea.
                            </p>

                        </div>

                    </div>


                </div>

            </div>

        </div>

    )

}

export default March8Modal