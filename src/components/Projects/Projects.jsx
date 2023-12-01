import React, { useEffect, useState } from "react";
import Project from "./Project";
import styles from "./Projects.module.css";
import SectionTitle from "../SectionTitle";

function Projects() {
	const [projects, setProjects] = useState([]);

	useEffect(() => {
		fetch(`${import.meta.env.VITE_API_URL}/projects.json`)
			.then((res) => res.json())
			.then((data) => setProjects(data))
			.catch((err) => console.error("Error fetching 'projects' data:", err));
	}, []);

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
