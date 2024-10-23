import { links } from "@/data/workLinks";
import Link from "next/link";
import React from "react";
import styles from "./WorkLinks.module.scss";

export default function WorkLinks() {
	return (
		<div className={styles.workLinksContainer}>
			<h2>Work Links</h2>
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
