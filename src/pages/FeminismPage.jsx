import { useState, useEffect } from "react"
import "./FeminismPage.css"
import todayBg from "../images/feminism/today-bg.jpg"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, EffectFade, Autoplay } from "swiper/modules"

import "swiper/css"
import "swiper/css/navigation"


// BACKGROUND
import bg1 from "../images/feminism/background/bg1.jpg"
import bg2 from "../images/feminism/background/bg2.jpg"
import bg3 from "../images/feminism/background/bg3.jpg"
import bg4 from "../images/feminism/background/bg4.jpg"

// EARLY FEMINISM
import early1 from "../images/feminism/early/early1.jpg"
import early2 from "../images/feminism/early/early2.jpg"
import early3 from "../images/feminism/early/early3.jpg"

// ENLIGHTENMENT
import en1 from "../images/feminism/enlightenment/en1.jpg"
import en2 from "../images/feminism/enlightenment/en2.jpg"
import en3 from "../images/feminism/enlightenment/en3.jpg"

// FOURTH WAVE
import fourth1 from "../images/feminism/fourthwave/fow1.jpg"
import fourth2 from "../images/feminism/fourthwave/fow2.jpg"
import fourth3 from "../images/feminism/fourthwave/fow3.jpg"
import fourth4 from "../images/feminism/fourthwave/fow4.jpg"

// THIRD WAVE

import tw2 from "../images/feminism/thirdwave/tw2.jpg"


// SECOND WAVE
import sw1 from "../images/feminism/secondwave/sw1.jpg"
import sw2 from "../images/feminism/secondwave/sw2.jpg"
import sw3 from "../images/feminism/secondwave/sw3.jpg"
import sw4 from "../images/feminism/secondwave/sw4.jpg"

// FIRST WAVE
import fw1 from "../images/feminism/firstwave/fw1.jpg"
import fw2 from "../images/feminism/firstwave/fw2.jpg"
import fw3 from "../images/feminism/firstwave/fw3.jpg"
import fw4 from "../images/feminism/firstwave/fw4.jpg"


function FeminismPage(){
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const events = [

        {
            year:"Before the 15th Century",
            title:"Background",

            images:[
                bg1,
                bg2,
                bg3,
                bg4
            ],

            text:`Women had very limited rights in most societies.

"If they win now, what will they not attempt?"
— Marcus Porcius Cato

Demonstrates the deep historical roots of gender inequality.`
        },

        {
            year:"15th – 16th Century",
            title:"Early Feminist Thought",

            images:[
                early1,
                early2,
                early3
            ],

            text:`Christine de Pizan challenged dominant views about women.

Her works defended women's education and intellectual abilities.`
        },

        {
            year:"18th Century",
            title:"Enlightenment Feminism",

            images:[
                en1,
                en2,
                en3
            ],

            text:`Olympe de Gouges published the Declaration of the Rights of Woman.

Mary Wollstonecraft wrote "A Vindication of the Rights of Woman".`
        },

        {
            year:"1848 – 1920",
            title:"First Wave Feminism",

            images:[
                fw1,
                fw2,
                fw3,
                fw4,
            ],

            text:`The first women's rights convention took place in Seneca Falls.

Activists demanded equality, legal rights, and the right for women to vote.

This movement led to the expansion of women's suffrage in many countries
during the late 19th and early 20th centuries.`
        },

        {
            year:"1960 – 1980",
            title:"Second Wave Feminism",

            images:[
                sw1,
                sw2,
                sw3,
                sw4
            ],

            text:`Second wave feminism focused on workplace equality and reproductive rights.

The movement expanded women's rights beyond voting and challenged
social, cultural, and political inequalities.

"The personal is political."`
        },

        {
            year:"1990 – 2010",
            title:"Third Wave Feminism",

            images:[
                tw2
            ],

            text:`Third wave feminism emphasized diversity and identity.

Gender began to be viewed as a spectrum and activism expanded
through media and pop culture.`
        },

        {
            year:"2012 – Present",
            title:"Fourth Wave Feminism",

            images:[
                fourth1,
                fourth2,
                fourth3,
                fourth4
            ],

            text:`Modern feminism focuses on sexual harassment and digital activism.

Movements like #MeToo spread globally.`
        }

    ]

    const [active,setActive] = useState(null)

    return(

        <div className="feminism-page">

            <section className="feminism-hero">

                <div className="hero-overlay"></div>

                <div className="hero-content">

                    <h1>The Evolution of Feminism</h1>

                    <p>From early struggles for rights to modern global movements</p>

                </div>

            </section>

            <div className="timeline-wrapper">

                <div className="timeline">

                    <div className="timeline-line"></div>

                    {events.map((event,index)=>(

                        <div className="timeline-row" key={index}>

                            <div className="timeline-year">
                                {event.year}
                            </div>

                            <div
                                className={`timeline-card ${index%2===0 ? "left":"right"}`}
                                onClick={()=>setActive(index)}
                            >

                                <h3>{event.title}</h3>

                                <p>{event.text.substring(0,100)}...</p>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

            {active !== null && (

                <div className="modal">

                    <div className="modal-content">

                        <button
                            className="close"
                            onClick={()=>setActive(null)}
                        >
                            ✕
                        </button>

                        <Swiper
                            modules={[Navigation, EffectFade, Autoplay]}
                            autoplay={{ delay:4000 }}
                            navigation={true}
                            loop={true}
                            grabCursor={true}
                            effect="fade"
                            fadeEffect={{ crossFade:true }}
                            speed={800}
                            className="swiper"
                        >

                            {events[active].images.map((img,index)=>(
                                <SwiperSlide key={index}>

                                    <div
                                        className="modal-slide"
                                        style={{ backgroundImage:`url(${img})` }}
                                    >

                                        <div className="modal-gradient"></div>

                                    </div>

                                </SwiperSlide>
                            ))}

                        </Swiper>

                        <div className="modal-text">

                            <h2>{events[active].title}</h2>

                            <p>{events[active].text}</p>

                        </div>

                    </div>

                </div>

            )}

            <section
                className="feminism-today"
                style={{ backgroundImage: `url(${todayBg})` }}
            >

                <div className="today-overlay"></div>

                <h2>Feminism Today</h2>

                <div className="today-grid">

                    <div className="today-card">
                        <div className="today-icon">🎓</div>
                        <h3>Education</h3>
                        <p>Empowering women through equal access to education.</p>
                    </div>

                    <div className="today-card">
                        <div className="today-icon">👩‍💼</div>
                        <h3>Leadership</h3>
                        <p>Women influencing politics, science and global policy.</p>
                    </div>

                    <div className="today-card">
                        <div className="today-icon">🌐</div>
                        <h3>Digital Activism</h3>
                        <p>Online movements supporting equality worldwide.</p>
                    </div>

                </div>

            </section>

        </div>

    )

}

export default FeminismPage