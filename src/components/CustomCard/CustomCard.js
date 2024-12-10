import React from "react";
import {
	Card,
	CardBody,
	CardHeader,
	CardText,
	Button,
	CardTitle,
} from "reactstrap";

import styles from "./CustomCard.module.scss";

export default function CustomCard({ row, dataHeaders, background }) {
	const {
		id,
		state,
		license_statues,
		a_status,
		o_status,
		a_expiration,
		o_expiration,
	} = row;
	const {
		STATUS_HEADING,
		ASTATUS_HEADING,
		OSTATUS_HEADING,
		AEXPIRATION_HEADING,
		OEXPIRATION_HEADING,
	} = dataHeaders;

	// Headings and data array
	const rowData = [
		{
			title: STATUS_HEADING,
			info: license_statues,
		},
		,
		{
			title: ASTATUS_HEADING,
			info: a_status,
		},
		{
			title: OSTATUS_HEADING,
			info: o_status,
		},
		{
			title: AEXPIRATION_HEADING,
			info: a_expiration,
		},
		{
			title: OEXPIRATION_HEADING,
			info: o_expiration,
		},
	];

	// You can conditionally style the card based on the status

	return (
		<Card className={styles.card} style={{ backgroundColor: background }}>
			<CardHeader>{state}</CardHeader>
			<CardBody>
				{rowData.map((info, index) => (
					<>
						<CardTitle>{info.title}</CardTitle>
						<CardText key={index}>{info.info}</CardText>
					</>
				))}

				<Button>More Info</Button>
			</CardBody>
		</Card>
	);
}
