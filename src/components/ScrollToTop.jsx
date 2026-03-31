import { useEffect } from "react"
import { useLocation } from "react-router-dom"

function ScrollToTop() {
    const { pathname } = useLocation()

    useEffect(() => {
        if (!("scrollRestoration" in window.history)) {
            return undefined
        }

        const previousScrollRestoration = window.history.scrollRestoration
        window.history.scrollRestoration = "manual"

        return () => {
            window.history.scrollRestoration = previousScrollRestoration
        }
    }, [])

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

    return null
}

export default ScrollToTop
