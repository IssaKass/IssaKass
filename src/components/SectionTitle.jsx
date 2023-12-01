import React from "react";
import { FaLink } from "react-icons/fa6";
import styles from "./SectionTitle.module.css";

function SectionTitle({ title, href }) {
	return (
		<h2 className={styles.title}>
			<a className={styles.link} href={href}>
				<span className={styles.text}>{title}</span>
				<FaLink className={styles.icon} size={18} />
			</a>
		</h2>
	);
}

export default SectionTitle;
