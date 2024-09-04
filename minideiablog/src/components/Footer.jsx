import React from 'react'
import styles from './Footer.module.css'
const Footer = () => {
    return (
        <>
            <footer className={styles.footer}>
                <h3>Ideias de quem gosta de ficar com o pé na estrada!</h3>
                <p>IdeiaApp &copy;
                    2024
                </p>
            </footer>
        </>
    )
}

export default Footer