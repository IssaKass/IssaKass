import React, { useState } from "react";
import styles from "./Hero.module.css";
import DownloadButton from "../DownloadButton";
import randomItem from "../../utils";

const greetingEmojies = ["👋", "😁", "🔥"];

function Hero() {
	const emoji = randomItem(greetingEmojies);

	return (
		<section id="hero" className={styles.hero}>
			<div className={`container ${styles.container}`}>
				<div className={styles.content}>
					<h1 className={styles.title}>
						<span className={styles.emoji}>{emoji}</span>&nbsp; Hi, I'm IssaKass
					</h1>
					<p className={styles.description}>
						I'm a full-stack developer with 1 year of experience using React and
						Flask. Reach out if you'd like to learn more!
					</p>
					<DownloadButton
						fileToDownload={"/issakass/cv.pdf"}
						text={"Download my CV"}
						greetingText={"Thanks 👍"}
					/>
				</div>
				<div className={styles.image_wrapper}>
					<img
						src={`${import.meta.env.VITE_IMAGES_URL}/hero/hero.png`}
						alt=""
					/>
				</div>
			</div>
		</section>
	);
}

export default Hero;
