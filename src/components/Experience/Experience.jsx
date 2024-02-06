import React from "react";
import certifications from "../../data/certifications.json";
import skills from "../../data/skills.json";
import SectionTitle from "../SectionTitle";
import Certification from "./Certification";
import styles from "./Experience.module.css";
import Skill from "./Skill";

function Experience() {
	const skillsElements = skills.map((skillGroup, index) => (
		<div className={styles.skills_group} key={index}>
			<h4 className={styles.skills_type}>{skillGroup.type}</h4>
			<div className={styles.skills_elements}>
				{skillGroup.skills
					.sort((skill1, skill2) => skill1.title.localeCompare(skill2.title))
					.map((skill, index) => (
						<Skill key={index} skill={skill} />
					))}
			</div>
		</div>
	));

	const certificationsElements = certifications.map((certification, index) => (
		<Certification key={index} certification={certification} />
	));

	return (
		<section id="experience" className={styles.experience}>
			<div className="container">
				<SectionTitle title="Experience" href="#experience" />
				<div className={styles.wrapper}>
					<div className={styles.skills_wrapper}>
						<h3 className={styles.subtitle}>Skills</h3>
						<div className={styles.skills}>{skillsElements}</div>
					</div>
					<div className={styles.certifications_wrapper}>
						<h3 className={styles.subtitle}>Certifications</h3>
						<div className={styles.certifications}>
							{certificationsElements}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Experience;
