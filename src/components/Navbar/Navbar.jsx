import React from 'react'
import styles from "./Navbar.module.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <div className={styles.containerNav}>
            <h1><Link to="/">Json</Link></h1>
            <ul>
                <li>
                    <Link to="/category/Pantalon">Pantalones</Link>
                </li>
                <li>
                    <Link to="/category/Remera">Remeras</Link>
                </li>
                <li>
                    <Link to="/category/Buzo">Abrigos</Link>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar