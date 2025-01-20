"use client";
import dataHeaders from "@/constants/stateRegistrationStatus";
import statesRegData from "@/data/stateRegistrationStatus";
import React, { useState, useMemo } from "react";
import styles from "./StatusTable.module.scss";
import CustomCard from "../CustomCard/CustomCard";
import Searchbar from "../Searchbar/searchbar";

const StatusTable = () => {
	const { APPROVED_COLOR, REJECTED_COLOR, PENDING_COLOR } = dataHeaders;

	const [searchTerm, setSearchTerm] = useState(""); // Manage search term here
	const [filteredData, setFilteredData] = useState(statesRegData);

	// Filter data based on the search term
	const computedFilteredData = useMemo(() => {
		if (!searchTerm) return statesRegData;
		return statesRegData.filter((item) =>
			item.state.toLowerCase().includes(searchTerm.toLowerCase())
		);
	}, [searchTerm, statesRegData]);

	// Automatically update filteredData when searchTerm or data changes
	useMemo(() => {
		setFilteredData(computedFilteredData);
	}, [computedFilteredData]);

	// Helper function to get the correct CSS class based on the color
	const getRowColorClass = (color) => {
		if (color === APPROVED_COLOR) return styles.statusApproved;
		if (color === REJECTED_COLOR) return styles.statusRejected;
		if (color === PENDING_COLOR) return styles.statusPending;
		return "";
	};

	// Count states by their status
	const approvedStates = statesRegData.filter(
		(row) => row.color === APPROVED_COLOR
	);
	const pendingStates = statesRegData.filter(
		(row) => row.color === PENDING_COLOR
	);
	const rejectedStates = statesRegData.filter(
		(row) => row.color === REJECTED_COLOR
	);

	return (
		<div className={styles.tableContainer}>
			<div className={styles.totalSearch}>
				<p>{statesRegData.length} States</p>
				<p className={styles.approvedHeading}>
					{approvedStates.length} Approved
				</p>
				<p className={styles.pendingHeading}>{pendingStates.length} Pending</p>
				<p className={styles.rejectedHeading}>
					{rejectedStates.length} Rejected
				</p>
				<Searchbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
			</div>
			<div className={styles.statusTable}>
				{filteredData.map((row) => {
					const rowColorClass = getRowColorClass(row.color);
					return (
						<div className={styles.status_card} key={row.id}>
							<CustomCard
								dataHeaders={dataHeaders}
								row={row}
								background={rowColorClass}
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default StatusTable;
