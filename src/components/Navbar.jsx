import { NavLink } from "react-router-dom"

function Navbar({ theme, onToggleTheme }){
    const themeLabel = theme === "dark" ? "Light mode" : "Dark mode"


    return(

        <div className="navbar">

            <div className="logo">
                <NavLink to="/">NAR.LEN</NavLink>
            </div>

            <div className="menu">

                <NavLink to="/">Home</NavLink>

                <NavLink to="/history">History</NavLink>

                <NavLink to="/literature">Literature</NavLink>

                <NavLink to="/biology">Biology</NavLink>

                <button
                    type="button"
                    className="theme-toggle"
                    onClick={onToggleTheme}
                    aria-label={themeLabel}
                    title={themeLabel}
                >
                    <span className="theme-toggle__icon" aria-hidden="true">
                        {theme === "dark" ? "☀" : "☾"}
                    </span>
                    <span className="theme-toggle__text">
                        {theme === "dark" ? "Light" : "Dark"}
                    </span>
                </button>

            </div>

        </div>

    )

}

export default Navbar
