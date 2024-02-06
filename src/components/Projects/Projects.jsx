import React from "react";
import projects from "../../data/projects.json";
import SectionTitle from "../SectionTitle";
import Project from "./Project";
import styles from "./Projects.module.css";

function Projects() {
	const projectsElements = projects.map((project, index) => (
		<Project key={index} project={project} />
	));

	return (
		<section id="projects" className={styles.projects}>
			<div className="container">
				<SectionTitle title="Projects" href="#projects" />
				<div className={styles.wrapper}>{projectsElements}</div>
			</div>
		</section>
	);
}

export default Projects;
