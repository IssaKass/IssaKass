import React from "react";
import aboutData from "../../data/about.json";
import SectionTitle from "../SectionTitle";
import styles from "./About.module.css";
import AboutItem from "./AboutItem";

function About() {
	return (
		<section id="about" className={styles.about}>
			<div className={`container ${styles.container}`}>
				<SectionTitle title="About" href="#about" />
				<div className={styles.wrapper}>
					<div className={styles.image_wrapper}>
						<img
							className={styles.image}
							src={"/assets/about/aboutImage.webp"}
							alt="about image"
							loading="lazy"
							width="100"
							height="300"
						/>
					</div>
					<div>
						{aboutData.map((data, index) => (
							<AboutItem key={index} about={data} />
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

export default About;
