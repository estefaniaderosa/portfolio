import React from "react";
import "./About.css";
import { useSelector } from "react-redux";

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
						{language === "spanish" ? (
							<div>
								{" "}
								<p style={{ marginBottom: 10 }}>
									Hola! 👋 Soy Estefanía, Soy desarrolladora frontend 👩🏻‍💻 con más
									de dos años de experiencia, especializada en HTML, CSS,
									JavaScript y React. Me apasiona crear experiencias de usuario
									fluidas y atractivas, enfocándome en la funcionalidad y el
									diseño de interfaces web.
								</p>
								<p style={{ marginBottom: 10 }}>
									{" "}
									Mi formación en Historia del Arte y Gestión Cultural me ha
									dado una perspectiva única para combinar estética y
									creatividad con la resolución de problemas técnicos, algo que
									encuentro esencial en el desarrollo web.{" "}
								</p>
								<p style={{ marginBottom: 10 }}>
									{" "}
									Durante mi carrera he trabajado en proyectos reales que me han
									permitido seguir perfeccionando mis habilidades y aprender de
									los desafíos del día a día.{" "}
								</p>
								<p style={{ marginBottom: 10 }}>
									{" "}
									Soy una persona en constante aprendizaje y siempre busco
									nuevas oportunidades para mejorar, ya sea a través de cursos,
									workshops o participando en eventos como hackathons.{" "}
								</p>
								<p>
									{" "}
									Mi objetivo es seguir creciendo como profesional y contribuir
									al desarrollo de soluciones web innovadoras.
								</p>
							</div>
						) : (
							<div>
								{" "}
								<p style={{ marginBottom: 10 }}>
									Hi! 👋 I’m Estefanía, I am a frontend developer 👩🏻‍💻 with over
									two years of experience, specializing in HTML, CSS,
									JavaScript, and React. I am passionate about creating smooth
									and engaging user experiences, focusing on both functionality
									and web interface design.
								</p>
								<p style={{ marginBottom: 10 }}>
									{" "}
									My background in Art History and Cultural Management has given
									me a unique perspective, allowing me to combine aesthetics and
									creativity with technical problem-solving—an essential skill
									in web development.{" "}
								</p>
								<p style={{ marginBottom: 10 }}>
									{" "}
									Throughout my career, I have worked on real-world projects
									that have allowed me to further refine my skills and learn
									from everyday challenges.
								</p>
								<p style={{ marginBottom: 10 }}>
									{" "}
									I am a lifelong learner, always seeking new opportunities to
									grow, whether through courses, workshops, or participating in
									events like hackathons.{" "}
								</p>
								<p>
									My goal is to continue growing as a professional and
									contribute to the development of innovative web solutions.
								</p>
							</div>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default About;
