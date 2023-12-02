import React from "react";
import styles from "./Header.module.css";
import { FaBars, FaXmark } from "react-icons/fa6";

function Header() {
	const [isNavOpen, setIsNavOpen] = React.useState(false);

	function toggleNav() {
		setIsNavOpen((isNavOpen) => !isNavOpen);
	}

	function closeNav() {
		setIsNavOpen(false);
	}

	return (
		<header className={styles.header}>
			<div className={`container ${styles.container}`}>
				<a className={styles.logo} href="#">
					IssaKass
				</a>
				<nav className={`${styles.nav} ${isNavOpen && styles.nav_open}`}>
					<ul className={styles.nav_list}>
						<li className={styles.nav_item}>
							<a className={styles.nav_link} href="#about" onClick={closeNav}>
								About
							</a>
						</li>
						<li className={styles.nav_item}>
							<a
								className={styles.nav_link}
								href="#experience"
								onClick={closeNav}
							>
								Experience
							</a>
						</li>
						<li className={styles.nav_item}>
							<a
								className={styles.nav_link}
								href="#projects"
								onClick={closeNav}
							>
								Projects
							</a>
						</li>
						<li className={styles.nav_item}>
							<a className={styles.nav_link} href="#contact" onClick={closeNav}>
								Contact
							</a>
						</li>
					</ul>
				</nav>
				<button
					aria-label="Navigation menu button"
					className={styles.menu_button}
					onClick={toggleNav}
				>
					{isNavOpen ? <FaXmark size={16} /> : <FaBars size={16} />}
				</button>
			</div>
		</header>
	);
}

export default Header;
