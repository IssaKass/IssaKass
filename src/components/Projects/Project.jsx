import React from "react";
import styles from "./Project.module.css";

function Project({ project }) {
	const skillsElements = project.skills.map((skill, index) => (
		<li className={styles.project_skill_item} key={index}>
			{skill}
		</li>
	));
	return (
		<div className={styles.project}>
			<img
				className={styles.project_image}
				src={`${import.meta.env.VITE_IMAGES_URL}${project.imageSrc}`}
				alt={project.imageAlt}
			/>
			<h3 className={styles.project_title}>{project.title}</h3>
			<p className={styles.project_description}>{project.description}</p>
			<ul className={styles.project_skill_list}>{skillsElements}</ul>
			<div className={styles.project_links}>
				<a
					className={styles.project_link}
					href={project.sourceUrl}
					target="_blank"
				>
					Source
				</a>
				<a
					className={styles.project_link}
					href={project.demoUrl}
					target="_blank"
				>
					Demo
				</a>
			</div>
		</div>
	);
}

export default Project;
