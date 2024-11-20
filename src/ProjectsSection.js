import React from "react";
import projects from "./projects.json"
import { useSelector } from "react-redux";
import Project from "./components/Project";

function ProjectsSection() {
    const language = useSelector((store) => store.language);
    return (
        <div>
          		<div id='projects'></div>
			<div className='box'>
				<h1 className='section-title'>
					{language === "spanish" ? "Proyectos" : "Projects"}
				</h1>
			</div>
			<div className='project-container-main'>
				{projects.map((project, i) => {
					return (
						<div className='box' key={i}>
							<Project
								image={`${process.env.PUBLIC_URL}${project.imgUrl}`}
								alt={project.name}
								demo={project.demo}
								git={project.git}
								name={project.name}
								description={
									language === "spanish"
										? project.esDescription
										: project.enDescription
								}
								tags={project.tags}
							/>
						</div>
					);
				})}
			</div>  
        </div>
    )
}

export default ProjectsSection
