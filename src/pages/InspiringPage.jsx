import "./InspiringPage.css"
import { useState } from "react"

import marie from "../images/women/marie.jpg"
import malala from "../images/women/malala.jpg"
import frida from "../images/women/frida.jpg"
import parks from "../images/women/parks.jpg"

import cleopatra from "../images/women/cleopatra.jpg"
import lovelace from "../images/women/lovelace.jpg"
import joan from "../images/women/joan.jpg"
import hypatia from "../images/women/hypatia.jpg"

import merkel from "../images/women/merkel.jpg"
import thatcher from "../images/women/thatcher.jpg"

import greta from "../images/women/greta.jpg"
import maathai from "../images/women/maathai.jpg"
import okeeffe from "../images/women/okeeffe.jpg"
import gandhi from "../images/women/gandhi.jpg"
import goodall from "../images/women/goodall.jpg"



const women = [

    {
        name:"Marie Curie",
        info:"The first female and the only person awarded Nobel Prizes in two different sciences — Physics and Chemistry. She pioneered research on the radioactive elements radium and polonium in France in 1898.",
        img:marie,
        category:"Science",
        region:"Europe",
        period:"1900s",
        link:"https://www.britannica.com/biography/Marie-Curie"
    },

    {
        name:"Malala Yousafzai",
        info:"The youngest ever Nobel Peace Prize winner, who has become a global symbol of resistance to the Taliban's restrictions on girls' education.",
        img:malala,
        category:"Activism",
        region:"Asia",
        period:"2000s",
        link:"https://www.britannica.com/biography/Malala-Yousafzai"
    },

    {
        name:"Rosa Parks",
        info:"A catalyst for the modern civil rights movement in the United States after refusing to surrender her seat on a bus to a white passenger in Montgomery. She became a symbol of dignity and resistance to racial segregation.",
        img:parks,
        category:"Activism",
        region:"America",
        period:"1900s",
        link:"https://www.history.com/topics/black-history/rosa-parks"
    },

    {
        name:"Frida Kahlo",
        info:"A symbol of Mexican culture and feminine power, after her striking self-portraits and symbolic explorations of identity, pain and resilience in the 1930s-1940s.",
        img:frida,
        category:"Art",
        region:"America",
        period:"1900s",
        link:"https://www.britannica.com/biography/Frida-Kahlo"
    },

    {
        name:"Cleopatra",
        info:"Rome's most powerful leader, known for her political prowess, intelligence, and influence. She was the last active ruler of Egypt from the Ptolemaic dynasty and played a crucial role in the transition from the Roman Republic to the Roman Empire.",
        img:cleopatra,
        category:"Politics",
        region:"Africa",
        period:"Ancient",
        link:"https://www.britannica.com/biography/Cleopatra-queen-of-Egypt"
    },

    {
        name:"Ada Lovelace",
        info:"The world's first computer programmer who wrote the first algorithms on Charles Babbage's analytical engine.",
        img:lovelace,
        category:"Science",
        region:"Europe",
        period:"1800s",
        link:"https://www.britannica.com/biography/Ada-Lovelace"
    },

    {
        name:"Joan of Arc",
        info:"The national heroine of France, one of the commanders of the French troops in the Hundred Years' War. Her leadership helped turn the tide of the Hundred Years' War.",
        img:joan,
        category:"Politics",
        region:"Europe",
        period:"Middle Ages",
        link:"https://www.britannica.com/biography/Saint-Joan-of-Arc"
    },

    {
        name:"Hypatia",
        info:"Known as one of the earliest female scientists for significant contributions to mathematics and philosophy.",
        img:hypatia,
        category:"Science",
        region:"Africa",
        period:"Ancient",
        link:"https://www.britannica.com/biography/Hypatia"
    },

    {
        name:"Margaret Thatcher",
        info:"Known as the \"Iron Lady,\" she became the first woman to hold the office and the longest-serving British premier of the 20th century.",
        img:thatcher,
        category:"Politics",
        region:"Europe",
        period:"1900s",
        link:"https://www.britannica.com/biography/Margaret-Thatcher"
    },

    {
        name:"Angela Merkel",
        info:"The country's first female chancellor widely recognized for her pragmatic, steady leadership and central role in shaping European and global politics.",
        img:merkel,
        category:"Politics",
        region:"Europe",
        period:"2000s",
        link:"https://www.britannica.com/biography/Angela-Merkel"
    },

    {
        name:"Greta Thunberg",
        info:"One of the Swedish environmental activists who organized the youth protest, which later brought climate change issues to the forefront of international politics and public awareness.",
        img:greta,
        category:"Activism",
        region:"Europe",
        period:"2000s",
        link:"https://www.britannica.com/biography/Greta-Thunberg"
    },

    {
        name:"Wangari Maathai",
        info:"Founder of the Green Belt movement and the first African woman to receive the Nobel Peace Prize. Tens of millions of trees were planted on her initiative.",
        img:maathai,
        category:"Activism",
        region:"Africa",
        period:"2000s",
        link:"https://www.nobelprize.org/prizes/peace/2004/maathai/facts/"
    },

    {
        name:"Georgia O'Keeffe",
        info:"\"The mother of American Modernism\" for developing a distinctive visual language that combined abstraction and realism. Her works changed the art of the 20th century.",
        img:okeeffe,
        category:"Art",
        region:"America",
        period:"1900s"
    },

        {
        name:"Indira Gandhi",
        info:"Indian stateswoman, the first and only woman to hold the post of Prime Minister of India so far. She brought victory to India in the Indo-Pakistani war of 1971, thereby consolidating her status as a decisive leader.",
        img:gandhi,
        category:"Politics",
        region:"Asia",
        period:"1900s"
    },

    {
        name:"Jane Goodall",
        info:"Pioneered research on wild chimpanzees in Gombe Stream, Tanzania in the 1960s. It changed the understanding of animal behavior and human attitudes towards nature.",
        img:goodall,
        category:"Science",
        region:"Europe",
        period:"1900s",
        link:"https://www.nationalgeographic.com/science/article/jane-goodall"
    }

]



function InspiringPage(){

    const [category,setCategory] = useState("")
    const [region,setRegion] = useState("")
    const [period,setPeriod] = useState("")
    const [page,setPage] = useState(1)



    const filteredWomen = women.filter((woman)=>{

        return(

            (category === "" || woman.category === category) &&
            (region === "" || woman.region === region) &&
            (period === "" || woman.period === period)

        )

    })



    const itemsPerPage = 12

    const start = (page-1)*itemsPerPage
    const end = start + itemsPerPage

    const currentWomen = filteredWomen.slice(start,end)



    const nextPage = ()=>{

        if(page < Math.ceil(filteredWomen.length/itemsPerPage)){
            setPage(page+1)
        }

    }

    const prevPage = ()=>{

        if(page>1){
            setPage(page-1)
        }

    }



    const clearFilters = ()=>{

        setCategory("")
        setRegion("")
        setPeriod("")
        setPage(1)

    }

    const openWomanSource = (link) => {
        if(link){
            window.open(link, "_blank", "noopener,noreferrer")
        }
    }



    return(

        <div className="bio-page">


            <div className="hero-background">

                <div className="content-container">

                    <div className="bio-hero">

                        <div className="bio-left">

                            <h1>EVERY</h1>
                            <p>Woman has a history</p>

                        </div>

                        <div className="bio-quote">

                            "The purpose of a storyteller is not to tell you how to think,
                            but to give you questions to think upon." - Brandon Sanderson

                        </div>

                    </div>

                </div>

            </div>



            <div className="bio-filter">

                <select value={category} onChange={(e)=>{setCategory(e.target.value); setPage(1)}}>

                    <option value="">Category</option>
                    <option value="Science">Science</option>
                    <option value="Art">Art</option>
                    <option value="Activism">Activism</option>
                    <option value="Politics">Politics</option>

                </select>



                <select value={period} onChange={(e)=>{setPeriod(e.target.value); setPage(1)}}>

                    <option value="">Time Period</option>
                    <option value="Ancient">Ancient</option>
                    <option value="Middle Ages">Middle Ages</option>
                    <option value="1800s">1800s</option>
                    <option value="1900s">1900s</option>
                    <option value="2000s">2000s</option>

                </select>



                <select value={region} onChange={(e)=>{setRegion(e.target.value); setPage(1)}}>

                    <option value="">Region</option>
                    <option value="Europe">Europe</option>
                    <option value="Asia">Asia</option>
                    <option value="America">America</option>
                    <option value="Africa">Africa</option>

                </select>


                <button onClick={clearFilters}>
                    Clear
                </button>

            </div>



            <div className="bio-grid">

                {currentWomen.map((woman,index)=>(

                    <div
                        className={`bio-card ${woman.link ? "bio-card-link" : ""}`}
                        key={woman.name + page}
                        style={{animationDelay: `${index * 0.1}s`}}
                        onClick={() => openWomanSource(woman.link)}
                        onKeyDown={(event) => {
                            if((event.key === "Enter" || event.key === " ") && woman.link){
                                event.preventDefault()
                                openWomanSource(woman.link)
                            }
                        }}
                        role={woman.link ? "link" : undefined}
                        tabIndex={woman.link ? 0 : -1}
                    >

                        <img src={woman.img} alt={woman.name}/>

                        <div className="name-overlay">
                            <h3>{woman.name}</h3>
                        </div>

                        <div className="overlay">

                            <h3>{woman.name}</h3>
                            <p>{woman.info}</p>

                        </div>

                    </div>

                ))}

            </div>



            <div className="pagination">

                {page > 1 && (
                    <button onClick={prevPage}>{"< Previous"}</button>
                )}

                <span className="active">{page}</span>

                {page < Math.ceil(filteredWomen.length/itemsPerPage) && (
                    <button onClick={nextPage}>{"Next >"}</button>
                )}

            </div>

        </div>

    )

}

export default InspiringPage
