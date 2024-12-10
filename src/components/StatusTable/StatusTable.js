"use client";
import dataHeaders from "@/constants/stateRegistrationStatus";
import statesRegData from "@/data/stateRegistrationStatus";
import React from "react";
import styles from "./StatusTable.module.scss";
import CustomCard from "../CustomCard/CustomCard";

const StatusTable = () => {
	const { APPROVED_COLOR, REJECTED_COLOR, PENDING_COLOR } = dataHeaders;

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
			<div className={styles.statusTable}>
				{statesRegData.map((row) => {
					const rowColorClass = getRowColorClass(row.color);
					return (
						<CustomCard
							key={row.id}
							dataHeaders={dataHeaders}
							row={row}
							background={rowColorClass}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default StatusTable;
