"use client";
import React, { useState } from "react";
import styles from "./tooltip.module.scss"; // Import SCSS Module

const Tooltip = ({ children, content, position = "bottom" }) => {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<div
			className={styles.tooltipContainer}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}>
			<span className={styles.tooltipTarget}>{children}</span>

			{isHovered && (
				<div className={`${styles.tooltip} ${styles[position]}`}>{content}</div>
			)}
		</div>
	);
};

export default Tooltip;
