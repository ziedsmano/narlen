
import "./HistoryPage.css"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import KazakhWomenModal from "./KazakhWomenModal"
import March8Modal from "./March8Modal"

import hero from "../images/history-hero.png"
import kazakh from "../images/kazakh-women.png"
import march8 from "../images/march8.png"
import feminism from "../images/feminism.png"
import inspiring from "../images/inspiring.png"

function HistoryPage(){

    const navigate = useNavigate()

    const [womenModalOpen,setWomenModalOpen] = useState(false)
    const [marchModalOpen,setMarchModalOpen] = useState(false)
    const handleClick = (e, path) => {

        const card = e.currentTarget
        card.classList.add("card-clicked")

        setTimeout(() => {
            navigate(path)
        }, 250)

    }

    return(

        <div className="history-page">

            {/* HERO */}

            <div className="history-hero">

                <div className="history-text">

                    <h1>HISTORY</h1>

                    <p>
                        Exploring the stories of women who shaped
                        society, culture, and equality.
                    </p>

                </div>

                <img src={hero} alt="history"/>

            </div>


            {/* GRID */}

            <div className="history-grid">


                <div
                    className="history-card clickable"
                    onClick={() => setWomenModalOpen(true)}
                >

                    <div>

                        <h3>Women in Kazakhstan's History</h3>

                        <p>
                            Learn about incredible Kazakh women leaders and pioneers
                            who shaped their nation's history.
                        </p>

                    </div>

                    <img src={kazakh} alt="kazakh"/>

                </div>



                <div
                    className="history-card clickable"
                    onClick={()=>setMarchModalOpen(true)}
                >

                    <div>

                        <h3>International Women's Day</h3>

                        <p>
                            Discover the origins and significance of March 8 and the
                            history of women's rights.
                        </p>

                    </div>

                    <img src={march8} alt="march8"/>

                </div>



                <div
                    className="history-card clickable"
                    onClick={(e)=>handleClick(e,"/feminism")}
                >

                    <div>

                        <h3>The History of Feminism</h3>

                        <p>
                            Explore the key milestones and waves of the feminist movement.
                        </p>

                    </div>

                    <img src={feminism} alt="feminism"/>

                </div>



                <div
                    className="history-card clickable"
                    onClick={(e)=>handleClick(e,"/inspiring")}
                >

                    <div>

                        <h3>Inspiring Women Through History</h3>

                        <p>
                            Meet remarkable women who changed the world in science,
                            politics and art.
                        </p>

                    </div>

                    <img src={inspiring} alt="inspiring"/>

                </div>

                <KazakhWomenModal
                    isOpen={womenModalOpen}
                    onClose={()=>setWomenModalOpen(false)}
                />

            </div>

            <March8Modal
                isOpen={marchModalOpen}
                onClose={()=>setMarchModalOpen(false)}
            />


        </div>

    )

}

export default HistoryPage