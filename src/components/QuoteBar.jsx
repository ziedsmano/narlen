import { useState, useEffect } from "react"

function QuoteBar(){

    const quotes = [

        {
            text:"We cannot all succeed when half of us are held back.",
            author:"Malala Yousafzai"
        },

        {
            text:"There is no limit to what we can accomplish.",
            author:"Michelle Obama"
        },

        {
            text:"Think like a queen. A queen is not afraid to fail.",
            author:"Oprah Winfrey"
        }

    ]

    const [index,setIndex] = useState(0)

    useEffect(()=>{

        const interval = setInterval(()=>{

            setIndex((prev)=>(prev+1)%quotes.length)

        },15000)

        return ()=>clearInterval(interval)

    },[])

    return(

        <div className="quote-bar">

            <p className="quote-text">

                “ {quotes[index].text} ”

                <span className="quote-author">
 — {quotes[index].author}
</span>

            </p>

        </div>

    )

}

export default QuoteBar