import React from 'react';
import './Contact.css';
import { useSelector } from "react-redux";


function Contact() {
    const language = useSelector(store => store.language);
    
    return (
        <>
        <div className="contact-section">
        <h1 className="section-title contact-title">{language === "spanish" ? "Contacto" : "Contact"}</h1>
        <div className="contact-container">
            <div className="contact"><a href='https://www.linkedin.com/in/estefaniaderosagil/' target='_blank'><img src="./images/linkedin.png" alt="LinkedIn icon" className="icon"/><p>LinkedIn</p></a></div>
            <div className="contact" ><a href={'mailto:estefania.derosa@gmail.com'}><img src="./images/mail.png" alt="mail icon" className="icon"/><p>Mail</p></a></div>
            <div className="contact"><a href={'./cvt_estefaniaderosagil.pdf'}><img src="./images/cv.png" alt="resume icon" className="icon"/><p>{language === "spanish" ? "CV" : "Resume"}</p></a></div>
            <div className="contact"><a href='https://github.com/estefaniaderosa' target='_blank'><img src="./images/github.png" alt="github icon" className="icon"/><p>Github</p></a></div>
            <div className="contact"><a href='https://codepen.io/estefaniaderosa' target='_blank'><img src="./images/codepen.png" alt="codepen icon" className="icon"/><p>Codepen</p></a></div>

            </div>       
             </div>
            
        </>
    )
}

export default Contact;