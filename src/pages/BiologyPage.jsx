import "./BiologyPage.css"

import heroImg from "../images/biology-hero.png"
import brain from "../images/brain.png"
import water from "../images/water.png"
import sleep from "../images/sleep.png"

import WaterModal from "./WaterModal"
import SleepModal from "./SleepModal"
import BrainModal from "./BrainModal"

import microscope from "../images/microscope.png"
import atom from "../images/atom.png"
import chat from "../images/chat.png"
import doctor from "../images/doctor.png"

import emailjs from "@emailjs/browser"
import { useRef, useState } from "react"

function BiologyPage(){

    const form = useRef()

    const [openBrain,setOpenBrain] = useState(false)
    const [openWater,setOpenWater] = useState(false)
    const [sleepOpen,setSleepOpen] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm(
            "YOUR_SERVICE_ID",
            "YOUR_TEMPLATE_ID",
            form.current,
            "YOUR_PUBLIC_KEY"
        ).then(
            () => {
                alert("Question sent successfully!")
            },
            () => {
                alert("Error sending message")
            }
        )
    }

    return(

        <div className="biology-page">

            <img src={microscope} className="bio-decor micro2" alt="" />
            <img src={microscope} className="bio-decor micro3" alt="" />
            <img src={microscope} className="bio-decor micro4" alt="" />

            <img src={atom} className="bio-decor atom1" alt="" />
            <img src={atom} className="bio-decor atom2" alt="" />
            <img src={atom} className="bio-decor atom4" alt="" />


            {/* HERO */}

            <div className="bio-top-bg">

                <section className="bio-hero">

                    <div className="bio-hero-text">

                        <h1>Your Growing Body: A Beautiful Biology Journey</h1>

                        <p>
                            Explore the natural science of puberty and your development with clear guidance.
                        </p>

                        <button
                            className="explore-btn"
                            onClick={()=>{
                                document.getElementById("facts").scrollIntoView({behavior:"smooth"})
                            }}
                        >
                            Explore Biology
                        </button>

                    </div>

                    <img
                        src={heroImg}
                        className="bio-hero-img"
                        alt="biology"
                    />

                </section>

            </div>


            {/* VIDEOS */}

            <section className="bio-videos">

                <h2>Dive Into Your Biology</h2>

                <p>
                    Watch supportive videos explaining the changes you experience.
                </p>

                <div className="video-grid">

                    <div className="video-card">
                        <iframe
                            src="https://www.youtube.com/embed/LcKlJc_AG2k"
                            title="Understanding Puberty"
                            allowFullScreen
                        ></iframe>
                    </div>

                    <div className="video-card">
                        <iframe
                            src="https://www.youtube.com/embed/KpMOjUN-_eg"
                            title="Menstrual Cycle"
                            allowFullScreen
                        ></iframe>
                    </div>

                    <div className="video-card">
                        <iframe
                            src="https://www.youtube.com/embed/9XIRrAKgmwE"
                            title="Emotional Wellbeing"
                            allowFullScreen
                        ></iframe>
                    </div>

                </div>

            </section>


            <div className="bio-gradient-divider"></div>


            {/* FACTS */}

            <section id="facts" className="bio-facts">

                <h2>Interesting Biology Facts</h2>

                <div className="facts-grid">

                    {/* BRAIN */}

                    <div
                        className="fact-card"
                        onClick={()=>setOpenBrain(true)}
                    >
                        <img src={brain} className="fact-icon" alt="" />
                        <p>Your brain forms new connections during puberty.</p>
                    </div>


                    {/* WATER */}

                    <div
                        className="fact-card"
                        onClick={()=>setOpenWater(true)}
                    >
                        <img src={water} className="fact-icon" alt="" />
                        <p>Drinking water supports hormone balance.</p>
                    </div>


                    {/* SLEEP */}

                    <div
                        className="fact-card"
                        onClick={()=>setSleepOpen(true)}
                    >
                        <img src={sleep} className="fact-icon" alt="" />
                        <p>Sleep is essential for growth and emotional health.</p>
                    </div>

                </div>

            </section>


            {/* QUIZ */}

            <section className="bio-quiz-section">

                <div className="quiz-header">

                    <h2>Interactive Learning & Feedback</h2>

                    <h1>Continue Your Learning Journey</h1>

                    <h3>Interactive Biology Quiz</h3>

                </div>


                <div className="quiz-cards">

                    <div className="quiz-card">

                        <div className="quiz-title">

                            <img src={chat} className="quiz-icon" alt="" />

                            <h4>Join our safe space.</h4>

                        </div>

                        <p>
                            Ask a question anonymously or share your thoughts
                            with other girls in Kazakhstan.
                        </p>

                        <textarea placeholder="Input to discussion here..."></textarea>

                        <button className="quiz-btn">
                            Post to Forum
                        </button>

                    </div>



                    <form ref={form} onSubmit={sendEmail} className="quiz-card">

                        <div className="quiz-title">

                            <img src={doctor} className="quiz-icon" alt="" />

                            <h4>Connect with an Expert</h4>

                        </div>

                        <p>
                            Have a deeper question? Write to us and a female doctor
                            or counselor will reply privately.
                        </p>

                        <input name="name" placeholder="Your Name (optional)" />

                        <input name="age" placeholder="Your Age" />

                        <textarea name="message" placeholder="Your Question"></textarea>

                        <button type="submit" className="quiz-btn">
                            Submit Question
                        </button>

                    </form>

                </div>

            </section>


            {/* MODALS */}

            <BrainModal
                isOpen={openBrain}
                onClose={()=>setOpenBrain(false)}
            />

            <WaterModal
                isOpen={openWater}
                onClose={()=>setOpenWater(false)}
            />

            <SleepModal
                isOpen={sleepOpen}
                onClose={()=>setSleepOpen(false)}
            />

        </div>

    )

}

export default BiologyPage