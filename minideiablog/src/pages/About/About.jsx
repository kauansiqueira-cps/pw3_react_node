import React from 'react'
import style from './About_module.css'

const About = () => {
    return (
        <>
            <div className={style.about}>
                <h2>Sobre IdeiaMini <span>Blog</span></h2>
                <p>
                    Este projeto será desenvolvido para aprimorar as habilidades
                    da turma de desenvolvimento de sistemas na Etec Sylvio de Mattos Carvalho de Matão - SP.
                </p>
                <a href="#" className={style.btn}>
                    Nova Postagem
                </a>
            </div>
        </>
    )
}

export default About