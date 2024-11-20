import React from "react";
import "./Navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { changeLanguage } from "../Redux"; //para hacer el dispatch importo el action creator

const Navbar = () => {
	const dispatch = useDispatch();
	const language = useSelector((store) => store.language); //importo esto cada vez que quiera leer una propiedad del store y tener acceso

	return (
		<>
			<div className='navbar'>
				<div className='language'>
					<button onClick={() => dispatch(changeLanguage("spanish"))}>
						ES
					</button>{" "}
					|
					<button onClick={() => dispatch(changeLanguage("english"))}>
						EN
					</button>
				</div>
				<ul className='sections'>
					<li>
						<a href='#aboutme'>
							{language === "spanish" ? "Sobre mí" : "About Me"}
						</a>
					</li>
					<li>
						<a href='#skills'>Skills</a>
					</li>
					<li>
						<a href='#projects'>
							{language === "spanish" ? "Proyectos" : "Projects"}
						</a>
					</li>
					<li>
						<a href='#contact'>
							{language === "spanish" ? "Contacto" : "Contact"}
						</a>
					</li>
				</ul>
			</div>
		</>
	);
};

export default Navbar;
