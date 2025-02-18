import React from "react";
import "./Skills.css";

const skills = [
	{
		name: "Html",
		imgUrl: "/images/html.png",
	},
	{
		name: "CSS",
		imgUrl: "/images/css.png",
	},
	{
		name: "Sass",
		imgUrl: "/images/sass.png",
	},
	{
		name: "Tailwind CSS",
		imgUrl: "/images/tailwind.png",
	},
	{
		name: "JavaScript",
		imgUrl: "/images/js.png",
	},
	{
		name: "TypeScript",
		imgUrl: "/images/typescript.png",
	},
	{
		name: "React",
		imgUrl: "/images/react.png",
	},
	{
		name: "NextJS",
		imgUrl: "/images/nextjs.svg",
	},
	{
		name: "Redux",
		imgUrl: "/images/redux.png",
	},
	{
		name: "React Router",
		imgUrl: "/images/router.png",
	},
	{
		name: "Git",
		imgUrl: "/images/git.png",
	},
	{
		name: "Figma",
		imgUrl: "/images/figma.png",
	},
];

function Skills() {
	return (
		<>
			<div className='skills-main-container'>
				<h1 className='section-title skill-title'>Skills</h1>
				<div className='skill-container'>
					{skills.map((skill, i) => {
						return (
							<div className='skill' key={i}>
								<img
									src={`${process.env.PUBLIC_URL}${skill.imgUrl}`}
									alt={skill.name}
									className='logo'
								/>
								<p>{skill.name}</p>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
}

export default Skills;
