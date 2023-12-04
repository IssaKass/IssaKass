import React from "react";
import styles from "./AboutItem.module.css";

function AboutItem({ about }) {
	return (
		<div className={styles.about_item}>
			<img
				className={styles.about_item_image}
				src={`${import.meta.env.VITE_IMAGES_URL}${about.imageSrc}`}
				alt={about.imageAlt}
				loading="lazy"
				width="40"
				height="40"
			/>
			<div className="">
				<h3 className={styles.about_item_title}>{about.title}</h3>
				<p className={styles.about_item_description}>{about.description}</p>
			</div>
		</div>
	);
}

export default AboutItem;
