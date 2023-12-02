import React, { useState } from "react";
import { saveAs } from "file-saver";
import styles from "./DownloadButton.module.css";

function DownloadButton({ fileToDownload, filename, text, greetingText }) {
	const [isDownloaded, setIsDownloaded] = useState(false);

	async function downloadFile() {
		try {
			const response = await fetch(fileToDownload);
			const blob = await response.blob();
			saveAs(blob, filename);
		} catch (error) {
			console.error("Error downloading file:", error);
		}
	}

	function handleDownload() {
		downloadFile(filename);
		setIsDownloaded(true);

		setTimeout(() => {
			setIsDownloaded(false);
		}, 5000);
	}

	return (
		<button
			className={`btn ${isDownloaded && styles.active}`}
			onClick={handleDownload}
			disabled={isDownloaded}
			aria-label="Download button"
		>
			{isDownloaded ? greetingText : text}
		</button>
	);
}

export default DownloadButton;
