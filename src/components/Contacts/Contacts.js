"use client";
import React, { useState, useEffect } from "react";
import { AGContacts, AquaVIVEContacts } from "@/data/employees";
import ContactsTable from "../ContactsTable/ContactsTable";
import styles from "./Contacts.module.scss";

export default function WorkContacts() {
	let [contactLength, setContactLength] = useState(0);

	useEffect(() => {
		let AGContactLength = AGContacts.length;
		let AquaViveContactLength = AquaVIVEContacts.length;
		let totalEmployees = AGContactLength + AquaViveContactLength;
		setContactLength(totalEmployees);
	}, []);

	return (
		<div className={styles.contacts}>
			<h3>Showing {contactLength} employees.</h3>
			<div className={styles.AGContacts}>
				<ContactsTable contacts={AGContacts} />
			</div>
			<div className={styles.AquaVIVEContacts}>
				<ContactsTable contacts={AquaVIVEContacts} />
			</div>
		</div>
	);
}
