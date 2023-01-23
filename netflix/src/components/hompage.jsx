import React from "react";
import style from "./homepage.module.css"
import { NavLink } from "react-router-dom";

const Homepage = (props) => {
    return (
        <>
        <div className={style.welcome_container}>
            <img src="https://www.pngplay.com/wp-content/uploads/13/Kawaii-Aesthetic-Transparent-PNG.png" alt="uwu" />
            <p>
                Mel MMGVO enamorada de Mata
            </p>
            <button>
                <NavLink to = "/peliculas" className={style.nav} > Ver películas </NavLink>
            </button>
        </div>
        </>
    )
}

export default Homepage;