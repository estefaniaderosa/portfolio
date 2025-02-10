import React from "react";
import "./Contact.css";
import { useSelector } from "react-redux";
import Pdf from "./PDF/ESTEFANIA_DE_ROSA_GIL_CV.pdf";
import Pdf_es from "./PDF_ES/ESTEFANIA_DE_ROSA_GIL_CV_ES.pdf";

const contactItems = [
	{
		name: "LinkedIn",
		url: "https://www.linkedin.com/in/estefaniaderosagil/",
		imgUrl: "/images/linkedin.png",
	},
	{
		name: "Mail",
		url: "mailto:estefania.derosa@gmail.com",
		imgUrl: "/images/mail.png",
	},
	{
		name: "CV",
		imgUrl: "/images/cv.png",
	},
	{
		name: "Github",
		url: "https://github.com/estefaniaderosa",
		imgUrl: "/images/github.png",
	},
	{
		name: "Codepen",
		url: "https://codepen.io/estefaniaderosa",
		imgUrl: "/images/codepen.png",
	},
];

function Contact() {
	const language = useSelector((store) => store.language);

	return (
		<>
			<div className='contact-section'>
				<h1 className='section-title contact-title'>
					{language === "spanish" ? "Contacto" : "Contact"}
				</h1>
				<div className='contact-container'>
					{contactItems.map((item, i) => {
						return (
							<div className='contact' key={i}>
								<a
									href={
										item.name === "CV"
											? `${language === "spanish" ? Pdf_es : Pdf}`
											: item.url
									}
									target='_blank'>
									<img
										src={`${process.env.PUBLIC_URL}${item.imgUrl}`}
										alt={item.name}
										className='icon'
									/>
									<p>{item.name}</p>
								</a>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
}

export default Contact;
