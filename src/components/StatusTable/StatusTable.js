"use client";
import dataHeaders from "@/constants/stateRegistrationStatus";
import statesRegData from "@/data/stateRegistrationStatus";
import React from "react";
import styles from "./StatusTable.module.scss";

const StatusTable = () => {
	const {
		ID_HEADING,
		STATE_HEADING,
		STATUS_HEADING,
		ASTATUS_HEADING,
		OSTATUS_HEADING,
		AEXPIRATION_HEADING,
		OEXPIRATION_HEADING,
		APPROVED_COLOR,
		REJECTED_COLOR,
		PENDING_COLOR,
	} = dataHeaders;

	// Helper function to get the correct CSS class based on the color
	const getRowColorClass = (color) => {
		if (color === APPROVED_COLOR) {
			return styles.statusApproved;
		}
		if (color === REJECTED_COLOR) {
			return styles.statusRejected;
		}
		if (color === PENDING_COLOR) {
			return styles.statusPending;
		}

		return "";
	};

	return (
		<div className={styles.tableContainer}>
			<table className={styles.statusTable}>
				<thead>
					<tr>
						<th>{ID_HEADING}</th>
						<th>{STATE_HEADING}</th>
						<th>{STATUS_HEADING}</th>
						<th>{ASTATUS_HEADING}</th>
						<th>{OSTATUS_HEADING}</th>
						<th>{AEXPIRATION_HEADING}</th>
						<th>{OEXPIRATION_HEADING}</th>
					</tr>
				</thead>
				<tbody>
					{statesRegData.map((row) => {
						const rowColorClass = getRowColorClass(row.color);
						return (
							<tr key={row.id} className={rowColorClass}>
								<td>{row.id}</td>
								<td>{row.state}</td>
								<td>{row.license_statues}</td>
								<td>{row.a_status}</td>
								<td>{row.o_status}</td>
								<td>{row.a_expiration}</td>
								<td>{row.o_expiration}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};

export default StatusTable;
