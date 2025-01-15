import React from "react";
import { Card } from "reactstrap";

import styles from "./CustomCard.module.scss";

export default function CustomCard({ row, dataHeaders, background }) {
	const {
		state,
		license_statues,
		product_status,
		product_expiration,
		notes,
		is_soil_amendment,
		point_of_contact_email,
		point_of_contact_name,
		point_of_contact_phone,
	} = row;

	const {
		STATUS_HEADING,
		PORDUCT_STATUS_HEADING,
		EXPIRATION_HEADING,
		NOTES_HEADING,
		CONTACT_HEADING,
		IS_SOIL_AMENDMENT,
	} = dataHeaders;

	// Data fields and their corresponding headers
	const fields = [
		{ label: IS_SOIL_AMENDMENT, value: is_soil_amendment },
		{ label: STATUS_HEADING, value: license_statues },
		{ label: PORDUCT_STATUS_HEADING, value: product_status },
		{ label: EXPIRATION_HEADING, value: product_expiration },
		{ label: NOTES_HEADING, value: notes },
	];

	const contactInfo =
		point_of_contact_name || point_of_contact_email || point_of_contact_phone
			? `${point_of_contact_name || ""} ${point_of_contact_email || ""} ${
					point_of_contact_phone || ""
			  }`.trim()
			: null;

	return (
		<Card className={`${styles.card} ${background}`}>
			<h3>{state}</h3>
			<div>
				{fields.map(
					(field, index) =>
						field.value && (
							<div key={index}>
								<p className={styles.title}>{field.label}</p>
								<p className={styles.info}>{field.value}</p>
							</div>
						)
				)}
				{contactInfo && (
					<div>
						<p className={styles.title}>{CONTACT_HEADING}</p>
						<p className={styles.info}>{contactInfo}</p>
					</div>
				)}
			</div>
		</Card>
	);
}
