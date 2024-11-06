import React from "react";
import Link from "next/link";
import styles from "./WorkLinks.module.scss";

export default function WorkLinks({ title, links }) {
	return (
		<div className={styles.container}>
			<h2>{title}</h2>
			<div className={styles.linksContainer}>
				{links.length > 0 &&
					links.map((link, index) => (
						<div key={index} className={styles.linkItem}>
							<Link href={link.url} target="_blank">
								{link.title}
							</Link>
							{link.description && (
								<p className={styles.linkDescription}>{link.description}</p>
							)}
						</div>
					))}
			</div>
		</div>
	);
}
