import React from "react";
import "./App.css";
import About from "./About";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Project from "./Project";
import Skills from "./Skills";
import { useSelector } from "react-redux";



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
			<div id='projects'></div>
			<div className='project-container-father'>
				<h1 className='section-title'>
					{language === "spanish" ? "Proyectos" : "Projects"}
				</h1>

				<div className='box'>
					<Project
						pimage={`${process.env.PUBLIC_URL}/images/portfolio.png`}
						palt='project-img'
						demo='https://estefaniaderosa.github.io/nuwescl1/'
						git='https://github.com/estefaniaderosa/nuwescl1'
						pname='NUWE SCL Frontend'
						pdescription={
							language === "spanish"
								? "Solución al primer reto Frontend de la Summer Coding League de NUWE, en el que he obtenido el 1er puesto en el ranking."
								: "Winner project of the first week for the Nuwe.io Summer Coding League Frontend challenge: Nuwe Basic Profile. "
						}
						ptags='#React &nbsp;&nbsp; #Redux &nbsp;&nbsp; #Hooks &nbsp;&nbsp; #UnsplashAPI &nbsp;&nbsp; #Responsive &nbsp;&nbsp; #Flexbox'
					/>
				</div>

				<div className='box'>
					<Project
						pimage={`${process.env.PUBLIC_URL}/images/gbhotel.png`}
						demo='https://estefaniaderosa.github.io/gbhotel/'
						palt='project-img'
						pname='Grand Beach Hotel'
						git='https://github.com/estefaniaderosa/gbhotel'
						pdescription={
							language === "spanish"
								? "App Responsive de hotel ficticio. Puedes subscribirte al newsletter, reservar diferentes tipos de habitaciones, tours y leer reviews. App desarollada en React usando Hooks y React Router para la navegación. Hecha un vistazo a las animaciones CSS en las tarjetas rotativas, avatares y botones!"
								: "Responsive fictional hotel App. You can subscribe to the newsletter, book different rooms & tours and read reviews! This app was built in React using Hooks and React Router for navigation. Check out the CSS animations in avatars, flipping cards and effected buttons."
						}
						ptags='#React &nbsp; #Hooks &nbsp; #React-Router &nbsp; #CSS &nbsp;  #Flexbox&nbsp;#Responsive'
					/>
				</div>

				<div className='box'>
					<Project
						pimage={`${process.env.PUBLIC_URL}/images/todo.png`}
						palt='project-img'
						pname="What's the plan for today?"
						demo='https://estefaniaderosa.github.io/planner/'
						git='https://github.com/estefaniaderosa/planner'
						pdescription={
							language === "spanish"
								? "Lista interactiva para mantener organizadas las tareas diarias.Puedes editar cada tarea, marcarlas como completas o eliminarlas. Cada vez que se agrega o se borra una tarea, el color de las tareas previas en la lista cambiará. Esta app fue desarrollada en React usando Hooks y Local Storage."
								: "Interactive To Do List to keep your daily tasks organized. You can edit each task, mark them as completed or delete them. Everytime a task is added or deleted on the list, the colour of the previous tasks will change. This app was built in React using Hooks and Local Storage."
						}
						ptags='#React &nbsp;&nbsp; #Hooks &nbsp;&nbsp; #Responsive&nbsp;&nbsp; #CSS &nbsp;&nbsp; #Local Storage '
					/>
				</div>

				<div className='box'>
					<Project
						pimage={`${process.env.PUBLIC_URL}/images/flappyghost.png`}
						palt='project-img'
						pname='FlappyGhost'
						demo='https://estefaniaderosa.github.io/flappyghost'
						git='https://github.com/estefaniaderosa/flappyghost'
						pdescription={
							language === "spanish"
								? "Evita que este adorable fantasmita se estrelle con las tuberias o el piso. Cada vez que Ghosty pasa por un par de tuberias exitosamente, obtienes un punto. Este juego esta inspirado en FlappyBird y completamente desarrollado en JavaScript nativo."
								: "Try to keep this cute ghost away from the pipes and the ground! Everytime Ghosty pass through a pair of pipes successfully you get one point. This arcade-style game is inspired in FlappyBird and fully developed in Vanilla Javascript. "
						}
						ptags='#JavaScript &nbsp;&nbsp; #Vanilla &nbsp;&nbsp; #CSS'
					/>
				</div>

				<div className='box'>
					<Project
						pimage={`${process.env.PUBLIC_URL}/images/pokedex.png`}
						palt='project-img'
						demo='https://estefaniaderosa.github.io/pokedex'
						git='https://github.com/estefaniaderosa/pokedex'
						pname='Pokedex'
						pdescription={
							language === "spanish"
								? "App que consume datos de la API de Pokemon y muestra información sobre los primeros 151 Pokemon. Escribe el nombre de tu Pokemon favorito y conoce su tipo, movimiento y habilidad principal. Esta app ha sido desarrollada en React usando Hooks, Axios y Semantic UI."
								: "An app that fetches data from the Pokemon API and displays information about the first 151 Pokemon. Write the name of your favourite Pokemon and get to know it’s type, main-move, and main-ability. This app was developed in React using Hooks, Axios and Semantic UI."
						}
						ptags='#React &nbsp;&nbsp; #Hooks &nbsp;&nbsp;#CSS &nbsp;&nbsp; #PokeAPI &nbsp;&nbsp; #Axios &nbsp;&nbsp; #SemanticUI'
					/>
				</div>
			</div>

			<div id='contact'></div>
			<Contact />
			<p className='footer'>Made with &hearts; by Estefanía De Rosa Gil</p>
		</>
	);
}

export default App;
