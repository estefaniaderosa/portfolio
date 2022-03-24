import React from 'react';
import './About.css';
import {  useSelector } from "react-redux";

const About = () => {
    const language = useSelector(store => store.language);
    return (
        <>
            <div className="about-container">
                <div className="about-pic"><img src={`${process.env.PUBLIC_URL}/images/linkedin.jpeg`} alt="Estefania's profile img"/></div>

                <div className="about-text"><h1>Estefanía De Rosa Gil</h1><h2>Front-end Developer</h2><p>{language === "spanish" ? "Hola! 👋 Soy Estefanía, desarrolladora Front-end junior establecida en Gandia, Valencia 👩🏻‍💻. He realizado varios proyectos para poner en práctica todo lo que he aprendido en diferentes Bootcamps y como autodidacta.Tengo un grado en Gestión Cultural e Historia del Arte 🎓, y he trabajado en Banco Santander en los últimos años. Me encantan los desafíos (siempre dispuesta a aprender cosas nuevas) y resolver problemas, es por eso que programar es mi pasión 🙌." : "Hi! 👋 I’m Estefanía, a Gandia-based, junior Front-end Developer. 👩🏻‍💻. I’ve been working in some projects to put in practice all the things that I learned in Coding Bootcamps and as self-taught. I have a degree in Art History & Management 🎓, and have been working in the banking industry for the past years. I'm into challenges (always happy to learn new things) and solving problems, that's why I find in coding my passion 🙌."}</p></div>
            </div>
        </>
    )
}

export default About


