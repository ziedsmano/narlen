import { useState } from "react";
import girls from "../images/girls.png";

function Hero(){

    const [openMission, setOpenMission] = useState(false);

    return(

        <section className="hero">

            <div className="hero-text">

                <h1>Empowering Girls Through Education</h1>

                <p>
                    NAR.LEN helps girls grow stronger through education,
                    knowledge and inspiration.
                </p>

                <div className="hero-buttons">

                    <div className="tooltip-container">

                        <button className="btn-primary">
                            Our Mission
                        </button>

                        <span className="tooltip-text">
                            Our mission is to empower girls through education,
                            confidence and equal opportunities.
                        </span>

                    </div>

                    <button className="btn-secondary">
                        Get Involved
                    </button>

                </div>

            </div>

            <div className="hero-image">
                <img src={girls} alt="girls"/>
            </div>

        </section>

    )

}

export default Hero