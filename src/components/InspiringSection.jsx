import women from "../images/women-history.png"
import { Link } from "react-router-dom"

function InspiringSection(){

    return(

        <section className="inspiring-section">

            <div className="inspiring-text">

                <h2>Inspiring Women<br/>Making History</h2>

                <p>
                    Discover how remarkable women shaped our world and history.
                </p>

                <Link to="/inspiring" className="read-btn">
                    Read Stories
                </Link>
            </div>

            <div className="inspiring-image">

                <img src={women} alt="women"/>

            </div>

        </section>

    )

}

export default InspiringSection