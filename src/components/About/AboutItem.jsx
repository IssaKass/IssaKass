import React from "react";
import styles from "./AboutItem.module.css";

function AboutItem({ about }) {
	return (
		<div className={styles.about_item}>
			<img
				className={styles.about_item_image}
				src={about.imageSrc}
				alt={about.imageAlt}
				loading="lazy"
				width="40"
				height="40"
			/>
			<div>
				<h3 className={styles.about_item_title}>{about.title}</h3>
				<p className={styles.about_item_description}>{about.description}</p>
			</div>
		</div>
	);
}

export default AboutItem;
