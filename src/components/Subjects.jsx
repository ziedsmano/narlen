import { Link } from "react-router-dom"

import books from "../images/books.png"
import history from "../images/history.png"
import biology from "../images/biology.png"


function Subjects(){

    return(

        <section className="subjects">

            <Link to="/literature" className="card">

                <img src={books} alt="books"/>

                <h3>Literature</h3>

                <p>
                    Powerful female characters and inspiring stories.
                </p>

            </Link>


            <Link to="/history" className="card">

                <img src={history} alt="history"/>

                <h3>History</h3>

                <p>
                    The history of feminism and great women.
                </p>

            </Link>


            <Link to="/biology" className="card">

                <img src={biology} alt="biology"/>

                <h3>Biology</h3>

                <p>
                    Puberty, menstruation and health education.
                </p>

            </Link>



        </section>

    )

}

export default Subjects

