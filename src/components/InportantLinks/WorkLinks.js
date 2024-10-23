import { links } from "@/data/workLinks";
import Link from "next/link";
import React from "react";
import styles from "./WorkLinks.module.scss";

export default function WorkLinks() {
	return (
		<div className={styles.WorkLinks}>
			<h2>Work Links</h2>
			{links.map((link, index) => {
				return (
					<div key={index}>
						<Link href={link.url} target="_blank">
							{link.title}
						</Link>
					</div>
				);
			})}
		</div>
	);
}
