import React from "react";
import { Input, Label } from "reactstrap";
import styles from "./Searchbar.module.scss";

export default function Searchbar({ searchTerm, setSearchTerm }) {
	const searchOnChange = (e) => {
		setSearchTerm(e.target.value); // Directly update the search term
	};

	return (
		<div className={styles.searchBarContainer}>
			<Label for="search">Search by State</Label>
			<Input
				name="search"
				id="search"
				bsSize="lg"
				placeholder="Type to search..."
				value={searchTerm}
				onChange={searchOnChange}
			/>
		</div>
	);
}
