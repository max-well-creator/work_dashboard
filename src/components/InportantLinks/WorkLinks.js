import React from "react";
import Link from "next/link";
import styles from "./WorkLinks.module.scss";
import Tooltip from "../Tooltip/tooltip";

export default function WorkLinks({ title, links }) {
	return (
		<div className={styles.container}>
			<h2>{title}</h2>

			<div className={styles.linksContainer}>
				{links.length > 0 &&
					links.map((link, index) => (
						<>
							<Tooltip content={link.description} position="right">
								<div key={index} className={styles.linkItem}>
									<Link href={link.url} target="_blank">
										{link.title}
									</Link>
								</div>
							</Tooltip>
						</>
					))}
			</div>
		</div>
	);
}
