import React from "react";
import { NavLink } from "react-router-dom"
import styles from "./header.module.css"


const Header = (props) => {
    return (
        <>
            <header className={styles.header_container}>
                <ul>
                    <li><NavLink to = "/" className={styles.navLink} >Inicio</NavLink></li>
                    <li><NavLink to = "/peliculas" className={styles.navLink} >Películas</NavLink></li>
                    <li><NavLink to = "/createmovie" className={styles.navLink} >Crear pelicula</NavLink></li>
                </ul>
                <div className={styles.search_container}>
                    <input type="text" name="search" placeholder="Busca una película"/>
                    <button>Buscar</button>
                </div>
            </header>
        </>
    )
}

export default Header;