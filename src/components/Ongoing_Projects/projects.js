import React from "react";
import styles from "./projects.module.scss";
import ContactInfo from "../Scratchpad/ContactInfo/ContactInfo";

const OngoingProjects = () => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Ongoing Projects</h1>
			<ul className={styles.projectList}>
				<li className={styles.projectItem}>
					Get Mycorr A into Nepal, India, Central and South America
				</li>
			</ul>
			<hr />
			<div className={styles.contact_container}>
				<ContactInfo
					name="Heidi Winter"
					title="Frontline Missions"
					phone="404-693-2194"
					email="heidi@fmusa.org"
				/>
				<p> Email Heidi on Jan 14, 2025</p>
			</div>
			<hr />
			<div className={styles.contact_container}>
				<ContactInfo
					name="David Parshall"
					title="Missionary to Nepal"
					phone="404-693-2194"
					email="flash@psmail.net"
				/>
				<p> Email Heidi on Jan 14, 2025</p>
			</div>
		</div>
	);
};

export default OngoingProjects;
