import React from "react";
import { FaDribbble, FaEnvelope, FaGithub } from "react-icons/fa6";
import styles from "./Contact.module.css";

function Contact() {
	return (
		<section id="contact" className={styles.contact}>
			<div className={`container ${styles.container}`}>
				<div>
					<h2 className={styles.title}>Contact</h2>
					<p className={styles.description}>Feel free to reach out!</p>
				</div>
				<div>
					<ul className={styles.social_list}>
						<li className={styles.social_item}>
							<a
								href="mailto:issakass02@gmail.com"
								className={`${styles.social_link} ${styles.mail}`}
								target="_blank"
							>
								<FaEnvelope size={25} />
								<span>issakass02@gmail.com</span>
							</a>
						</li>
						<li className={styles.social_item}>
							<a
								href="https://dribbble.com/IssaKass"
								className={`${styles.social_link} ${styles.dribbble}`}
								target="_blank"
							>
								<FaDribbble size={25} />
								<span>dirbbble.com/IssaKass</span>
							</a>
						</li>
						<li className={styles.social_item}>
							<a
								href="https://github.com/IssaKass"
								className={`${styles.social_link} ${styles.github}`}
								target="_blank"
							>
								<FaGithub size={25} />
								<span>github.com/IssaKass</span>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
}

export default Contact;
