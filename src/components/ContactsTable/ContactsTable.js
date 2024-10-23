import React from "react";
import { Table } from "reactstrap";
import styles from "./ContactsTable.module.scss";
import Link from "next/link";

export default function ContactsTable({ title, contacts }) {
	return (
		<section className={styles.schedule}>
			<h3>{title}</h3>
			<div className={styles.table}>
				<Table hover responsive striped>
					<thead>
						<tr>
							<th>Name</th>
							<th>Company</th>
							<th>Title</th>
							<th>Business Phone</th>
							<th>Mobile</th>
							<th>Email</th>
						</tr>
					</thead>
					<tbody>
						{contacts.map((item, index) => (
							<tr key={index}>
								<td>{item.name}</td>
								<td>{item.company}</td>
								<td>{item.jobTitle}</td>
								<td>{item.businessPhone}</td>
								<td>{item.mobilePhone}</td>
								<td>
									<Link href={`mailto:${item.email}`}>{item.email}</Link>
								</td>
							</tr>
						))}
					</tbody>
				</Table>
			</div>
		</section>
	);
}
