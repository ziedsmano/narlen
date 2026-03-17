import { useEffect, useState } from "react"
import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Subjects from "./components/Subjects"
import Stats from "./components/Stats"
import Footer from "./components/Footer"
import FeminismPage from "./pages/FeminismPage"
import InspiringPage from "./pages/InspiringPage"
import HistoryPage from "./pages/HistoryPage"
import LiteraturePage from "./pages/LiteraturePage"
import BiologyPage from "./pages/BiologyPage"
import QuoteBar from "./components/QuoteBar"
import InspiringSection from "./components/InspiringSection"
import "./style.css"

function App(){
    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem("theme")
        const supportsMatchMedia = typeof window !== "undefined" && typeof window.matchMedia === "function"

        if(savedTheme){
            return savedTheme
        }

        return supportsMatchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light"
    })

    useEffect(() => {
        document.body.dataset.theme = theme
        localStorage.setItem("theme", theme)
    }, [theme])

    const toggleTheme = () => {
        setTheme((currentTheme) => currentTheme === "light" ? "dark" : "light")
    }

    return(
        <div className="app-shell">

            <Navbar theme={theme} onToggleTheme={toggleTheme}/>

            <QuoteBar/>

            <Routes>

                <Route path="/" element={
                    <>
                        <Hero/>

                        <section className="page-section">
                            <Subjects/>
                        </section>

                        <section className="page-section">
                            <Stats/>
                        </section>

                        <section className="page-section">
                            <InspiringSection/>
                        </section>

                    </>
                }/>

                <Route path="/history" element={<HistoryPage/>}/>
                <Route path="/literature" element={<LiteraturePage/>}/>
                <Route path="/biology" element={<BiologyPage/>}/>
                <Route path="/inspiring" element={<InspiringPage/>}/>
                <Route path="/feminism" element={<FeminismPage/>}/>

            </Routes>

            <Footer/>

        </div>

    )

}


export default App
