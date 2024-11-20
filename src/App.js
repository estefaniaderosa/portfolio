import React from "react";
import "./App.css";
import About from "./About";
import Contact from "./Contact";
import Navbar from "./components/Navbar";
import Skills from "./Skills";
import { useSelector } from "react-redux";
import ProjectsSection from "./ProjectsSection";

function App() {
	const language = useSelector((store) => store.language);
	return (
		<>
			<Navbar />
			<div id='aboutme'></div>
			<About />
			<div id='skills'></div>
			<Skills />
			<div className='vector1'></div>
			<ProjectsSection />
			<div id='contact'></div>
			<Contact />
			<p className='footer'>Made with &hearts; by Estefanía De Rosa Gil</p>
		</>
	);
}

export default App;
