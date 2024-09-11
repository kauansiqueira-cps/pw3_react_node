import React from 'react'
import styles from './NavBar.module.css'

const NavBar = () => {
    return (
        <div>
            <nav className={styles.navbar}>
                <div className={styles.brand}>
                    Ideia<span>App</span>
                </div>
                <ul className={styles.links_list}>
                    <li>
                        <a href="#" className={({isActive}) => (isActive ? styles.isActive : null)}>Home</a>
                    </li>
                    <li>
                        <a href="#" className={({isActive}) => (isActive ? styles.isActive : null)}>Login</a>
                    </li>
                    <li>
                        <a href="#" className={({isActive}) => (isActive ? styles.isActive : null)}>Register</a>
                    </li>
                    <li>
                        <a href="#" className={({isActive}) => (isActive ? styles.isActive : null)}>New Post</a>
                    </li>
                    <li>
                        <a href="#" className={({isActive}) => (isActive ? styles.isActive : null)}>About</a>
                    </li>
                    <li>
                        <a href="#" className={({isActive}) => (isActive ? styles.isActive : null)}>Exit</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar
