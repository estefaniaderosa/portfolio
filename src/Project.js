import "./Project.css";
import React from "react";

const Project = ({image,alt,name,description,tags,demo,git}) => {
	return (
		<>
			<div className='project-container'>
				<div className='project-img'>
					<img src={image} alt={alt} className='pimg' />
				</div>
				<div className='project-text'>
					<h1>{name}</h1>
					<p className='description'>{description}</p>
					<p className='tags'>{tags}</p>
					<div className='button-container'>
						<a href={demo} target='_blank' className='button'>
							Demo
						</a>
						<a href={git} target='_blank' className='button'>
							Code
						</a>
					</div>
				</div>
			</div>
		</>
	);
};

export default Project;
