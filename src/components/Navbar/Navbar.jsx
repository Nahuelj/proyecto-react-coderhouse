import React from 'react'
import styles from "./Navbar.module.css"

const Navbar = () => {
  return (
    <nav>
        <div className={styles.containerNav}>
            <h1>Json</h1>
            <ul>
                <li>
                    <a href="*">Pantalones</a>
                </li>
                <li>
                    <a href="*">Remeras</a>
                </li>
                <li>
                    <a href="*">Abrigos</a>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar