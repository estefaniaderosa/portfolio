import React from "react";
import "./About.css";
import { useSelector } from "react-redux";
import AboutSpanish from "./components/AboutSpanish";
import AboutEnglish from "./components/AboutEnglish";

const About = () => {
	const language = useSelector((store) => store.language);
	return (
		<>
			<div className='about-container'>
				<div className='about-pic'>
					<img
						src={`${process.env.PUBLIC_URL}/images/linkedin.jpeg`}
						alt="Estefania's profile img"
					/>
				</div>

				<div className='about-text'>
					<h1>Estefanía De Rosa Gil</h1>
					<h2>Front-end Developer</h2>
					<div>
						{language === "spanish" ? <AboutSpanish /> : <AboutEnglish />}
					</div>
				</div>
			</div>
		</>
	);
};

export default About;
