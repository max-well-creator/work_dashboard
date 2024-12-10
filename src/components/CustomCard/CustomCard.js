import React from "react";
import { Card, Button } from "reactstrap";

import styles from "./CustomCard.module.scss";

export default function CustomCard({ row, dataHeaders, background }) {
	const { id, state, license_statues, product_status, product_expiration } =
		row;
	const { STATUS_HEADING, PORDUCT_STATUS_HEADING, EXPIRATION_HEADING } =
		dataHeaders;

	// Headings and data array
	const rowData = [
		{
			title: STATUS_HEADING,
			info: license_statues,
		},
		,
		{
			title: PORDUCT_STATUS_HEADING,
			info: product_status,
		},
		{
			title: EXPIRATION_HEADING,
			info: product_expiration,
		},
	];

	// You can conditionally style the card based on the status
	return (
		<Card className={`${styles.card} ${background}`}>
			<h3>{state}</h3>
			<div>
				{rowData.map((info, index) => (
					<div key={index}>
						<p className={styles.title}>{info.title}</p>
						<p className={styles.info}>{info.info}</p>
					</div>
				))}
				<Button>More Info</Button>
			</div>
		</Card>
	);
}
