import React from "react";
import "./Skills.css";

function Skills() {
	return (
		<>
			<div className='skills-main-container'>
				<h1 className='section-title skill-title'>Skills</h1>
				<div className='skill-container'>
					<div className='skill'>
						<img
							src={`${process.env.PUBLIC_URL}/images/html.png`}
							alt='Html Logo'
							className='logo'
						/>
						<p>Html</p>
					</div>
					<div className='skill'>
						<img
							src={`${process.env.PUBLIC_URL}/images/css.png`}
							alt='CSS Logo'
							className='logo'
						/>
						<p>CSS</p>
					</div>
					<div className='skill'>
						<img
							src={`${process.env.PUBLIC_URL}/images/sass.png`}
							alt='Sass Logo'
							className='logo'
						/>
						<p>Sass</p>
					</div>
					<div className='skill'>
						<img
							src={`${process.env.PUBLIC_URL}/images/tailwind.png`}
							alt='Tailwind Logo'
							className='logo'
						/>
						<p>Tailwind CSS</p>
					</div>
					<div className='skill'>
						<img
							src={`${process.env.PUBLIC_URL}/images/js.png`}
							alt='Js Logo'
							className='logo'
						/>
						<p>JavaScript</p>
					</div>
					<div className='skill react'>
						<img
							src={`${process.env.PUBLIC_URL}/images/react.png`}
							alt='React Logo'
							className='logo'
						/>
						<p>React</p>
					</div>
					<div className='skill'>
						<img
							src={`${process.env.PUBLIC_URL}/images/nextjs.svg`}
							alt='Next Logo'
							className='logo'
						/>
						<p>NextJS</p>
					</div>
					<div className='skill'>
						<img
							src={`${process.env.PUBLIC_URL}/images/reactq.png`}
							alt='React Query'
							className='logo'
						/>
						<p>React Query</p>
					</div>
					<div className='skill'>
						<img
							src={`${process.env.PUBLIC_URL}/images/redux.png`}
							alt='Redux Logo'
							className='logo'
						/>
						<p>Redux</p>
					</div>
					<div className='skill'>
						<img
							src={`${process.env.PUBLIC_URL}/images/router.png`}
							alt='React Router'
							className='logo'
						/>
						<p>React Router</p>
					</div>

					<div className='skill'>
						<img
							src={`${process.env.PUBLIC_URL}/images/git.png`}
							alt='Git Logo'
							className='logo'
						/>
						<p>Git</p>
					</div>
					<div className='skill'>
						<img
							src={`${process.env.PUBLIC_URL}/images/figma.png`}
							alt='Figma Logo'
							className='logo'
						/>
						<p>Figma</p>
					</div>
				</div>
			</div>
		</>
	);
}

export default Skills;
