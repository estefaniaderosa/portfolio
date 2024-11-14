import "./Project.css";
import React from "react";

const Project = (props) => {
	return (
		<>
			<div className='project-container'>
				<div className='project-img'>
					<img src={props.pimage} alt={props.palt} className='pimg' />
				</div>
				<div className='project-text'>
					<h1>{props.pname}</h1>
					<p className='description'>{props.pdescription}</p>
					<p className='tags'>{props.ptags}</p>
					<div className='button-container'>
						<a href={props.demo} target='_blank' className='button'>
							Demo
						</a>
						<a href={props.git} target='_blank' className='button'>
							Code
						</a>
					</div>
				</div>
			</div>
		</>
	);
};

export default Project;
