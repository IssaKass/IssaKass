import React, { useEffect, useState } from "react";
import styles from "./About.module.css";
import AboutItem from "./AboutItem";
import SectionTitle from "../SectionTitle";

function About() {
	const [aboutData, setAboutData] = useState([]);

	useEffect(() => {
		fetch(`${import.meta.env.VITE_API_URL}/about.json`)
			.then((res) => res.json())
			.then((data) => setAboutData(data))
			.catch((err) => console.error("Error fetching 'about' data:", err));
	}, []);

	return (
		<section id="about" className={styles.about}>
			<div className={`container ${styles.container}`}>
				<SectionTitle title="About" href="#about" />
				<div className={styles.wrapper}>
					<div className={styles.image_wrapper}>
						<img
							className={styles.image}
							src={`${import.meta.env.VITE_IMAGES_URL}/about/aboutImage.png`}
							alt="about image"
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
