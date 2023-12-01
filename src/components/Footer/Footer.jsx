import React from "react";
import styles from "./Footer.module.css";

function Footer() {
	return (
		<footer className={styles.footer}>
			<div className="container">
				<p className={styles.copyright}>
					Copyright &copy; 2023 - IssaKass
					<a
						className={styles.link}
						href="https://www.freepik.com/free-ai-image/illustration-young-man-with-hat-glasses-with-briefcase_65676261.htm#query=avatar&position=1&from_view=author&uuid=763c9be1-79db-447d-b047-0cfab4a1de18"
						target="_blank"
					>
						Image By flatart
					</a>
				</p>
			</div>
		</footer>
	);
}

export default Footer;
