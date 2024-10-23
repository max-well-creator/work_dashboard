import React from "react";
import Link from "next/link";
import styles from "./nav.module.scss";

export default function CustomNav() {
	return (
		<nav className={styles.navbar}>
			<div className={styles.brand}>
				<p className={styles.brandText}>AG USA</p>
			</div>
			<div className={styles.navContent}>
				<ul className={styles.navList}>
					<li className={styles.navItem}>
						<Link href="/" className={styles.navLink}>
							Home
						</Link>
					</li>
					<li className={styles.navItem}>
						<Link href="/product_reg_status" className={styles.navLink}>
							Product Registration Status
						</Link>
					</li>
					<li className={styles.navItem}>
						<Link
							href="/schedule"
							className={styles.navLink}
							aria-current="page">
							Tonnage Reporting Schedule
						</Link>
					</li>
					<li className={styles.navItem}>
						<Link href="/contacts" className={styles.navLink}>
							Employee Directory
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
}
