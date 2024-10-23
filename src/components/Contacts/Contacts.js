import React from "react";
import { AGContacts, AquaVIVEContacts } from "@/data/employees";
import ContactsTable from "../ContactsTable/ContactsTable";
import styles from "./Contacts.module.scss";

export default function WorkContacts() {
	return (
		<div>
			<div className={styles.AGContacts}>
				<ContactsTable contacts={AGContacts} />
			</div>
			<div className={styles.AquaVIVEContacts}>
				<ContactsTable contacts={AquaVIVEContacts} />
			</div>
		</div>
	);
}
