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
import angelou from "../images/women/angelou.jpg"
import okeeffe from "../images/women/okeeffe.jpg"
import gandhi from "../images/women/gandhi.jpg"
import goodall from "../images/women/goodall.jpg"

import Footer from "../components/Footer"



const women = [

    {
        name:"Marie Curie",
        info:"Discovered radioactivity",
        img:marie,
        category:"Science",
        region:"Europe",
        period:"1900s"
    },

    {
        name:"Malala Yousafzai",
        info:"Youngest Nobel Prize winner",
        img:malala,
        category:"Activism",
        region:"Asia",
        period:"2000s"
    },

    {
        name:"Rosa Parks",
        info:"Civil rights movement symbol",
        img:parks,
        category:"Activism",
        region:"America",
        period:"1900s"
    },

    {
        name:"Frida Kahlo",
        info:"Icon of Mexican art",
        img:frida,
        category:"Art",
        region:"America",
        period:"1900s"
    },

    {
        name:"Cleopatra",
        info:"Last queen of Egypt",
        img:cleopatra,
        category:"Politics",
        region:"Africa",
        period:"Ancient"
    },

    {
        name:"Ada Lovelace",
        info:"First computer programmer",
        img:lovelace,
        category:"Science",
        region:"Europe",
        period:"1800s"
    },

    {
        name:"Joan of Arc",
        info:"Heroine of France",
        img:joan,
        category:"Politics",
        region:"Europe",
        period:"Middle Ages"
    },

    {
        name:"Hypatia",
        info:"Ancient mathematician",
        img:hypatia,
        category:"Science",
        region:"Africa",
        period:"Ancient"
    },

    {
        name:"Margaret Thatcher",
        info:"First female Prime Minister of the UK",
        img:thatcher,
        category:"Politics",
        region:"Europe",
        period:"1900s"
    },

    {
        name:"Angela Merkel",
        info:"German Chancellor",
        img:merkel,
        category:"Politics",
        region:"Europe",
        period:"2000s"
    },

    {
        name:"Greta Thunberg",
        info:"Climate activist",
        img:greta,
        category:"Activism",
        region:"Europe",
        period:"2000s"
    },

    {
        name:"Wangari Maathai",
        info:"Environmental activist and Nobel laureate",
        img:maathai,
        category:"Activism",
        region:"Africa",
        period:"2000s"
    },

    {
        name:"Georgia O'Keeffe",
        info:"American modernist artist",
        img:okeeffe,
        category:"Art",
        region:"America",
        period:"1900s"
    },

    {
        name:"Maya Angelou",
        info:"Famous poet and author",
        img:angelou,
        category:"Art",
        region:"America",
        period:"1900s"
    },

    {
        name:"Indira Gandhi",
        info:"First female Prime Minister of India",
        img:gandhi,
        category:"Politics",
        region:"Asia",
        period:"1900s"
    },

    {
        name:"Jane Goodall",
        info:"Scientist famous for chimpanzee research",
        img:goodall,
        category:"Science",
        region:"Europe",
        period:"1900s"
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



    return(

        <div className="bio-page">


            <div className="hero-background">

                <div className="content-container">

                    <div className="bio-hero">

                        <div className="bio-left">

                            <h1>Biographies</h1>
                            <p>Every woman has a story.</p>

                        </div>

                        <div className="bio-quote">

                            "The purpose of a storyteller is not to tell you how to think,
                            but to give you questions to think upon."

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
                        className="bio-card"
                        key={woman.name + page}
                        style={{animationDelay: `${index * 0.1}s`}}
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