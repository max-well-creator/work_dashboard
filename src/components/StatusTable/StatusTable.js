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
		NOTES_HEADING,
		AEXPIRATION_HEADING,
		OEXPIRATION_HEADING,
	} = dataHeaders;

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
					{statesRegData.map((row) => (
						<tr key={row.id} style={{ backgroundColor: row.color }}>
							<td>{row.id}</td>
							<td>{row.state}</td>
							<td>{row.license_statues}</td>
							<td>{row.a_status}</td>
							<td>{row.o_status}</td>
							<td>{row.a_expiration}</td>
							<td>{row.o_expiration}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default StatusTable;
