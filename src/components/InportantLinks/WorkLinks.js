import React from "react";
import Link from "next/link";
import styles from "./WorkLinks.module.scss";

export default function WorkLinks({ title, links }) {
	return (
		<div className={styles.container}>
			<h2>{title}</h2>
			<div className={styles.linksContainer}>
				{links.map((link, index) => {
					return (
						<div key={index} className={styles.linkItem}>
							<Link href={link.url} target="_blank">
								{link.title}
							</Link>
						</div>
					);
				})}
			</div>
		</div>
	);
}
