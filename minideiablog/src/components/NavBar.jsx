import React from 'react'
import styles from './NavBar.module.css'
import { useAuthentication } from '../hooks/useAuthentication'
import { useAuthValue } from '../context/AuthContext'
import { NavLink, useNavigate } from 'react-router-dom'
const NavBar = () => {
    const { user } = useAuthValue()
    const { logout } = useAuthentication()

    const navigate = useNavigate()

    return (
        <div>
            <nav className={styles.navbar}>
                <div className={styles.brand}>
                    Ideia<span>App</span>

                    {user && (
                        <>
                            <div>
                                Bem Vindo: <span>{user.displayName}</span>
                            </div>

                        </>
                    )}

                </div>
                <ul className={styles.links_list}>
                    <li>
                        <NavLink to="/" className={({ isActive }) => (isActive ? styles.isActive : null)}>Home</NavLink>
                    </li>
                    {!user && (
                        <>
                            <li>
                                <NavLink to="/login" className={({ isActive }) => (isActive ? styles.isActive : null)}>Login </NavLink>
                            </li>
                            <li>
                                <NavLink to="/register" className={({ isActive }) => (isActive ? styles.isActive : null)}>Register </NavLink>
                            </li>
                        </>
                    )}
                    <li>
                        <NavLink to="/about" className={({ isActive }) => (isActive ? styles.isActive : null)}>About</NavLink>
                    </li>
                    {user && (
                        <>
                            <li>
                                <NavLink to="/post/create" className={({ isActive }) => (isActive ? styles.isActive : null)}>New Post</NavLink>
                            </li>
                            <li>
                                <button className={styles.logout} onClick={logout}>Exit</button>
                            </li>
                        </>
                    )}
                </ul>
            </nav>
        </div>
    )
}

export default NavBar
