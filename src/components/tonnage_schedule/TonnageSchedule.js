import { stateFrequencies } from "@/data/stateFrequencies";
import React from "react";
import { Table } from "reactstrap";

import styles from "./TonnageSchedule.module.scss";

export default function TonnageSchedule() {
	return (
		<section className={styles.schedule}>
			<div className={styles.table}>
				<Table hover striped>
					<thead>
						<tr>
							<th>State</th>
							<th>Frequency</th>
							<th>Notes</th>
							<th>Requires county in report?</th>
							<th>How to Submit Tonnage</th>
							<th>Due Date</th>
							<th>Last Completed</th>
						</tr>
					</thead>
					<tbody>
						{stateFrequencies.map((item, index) => (
							<tr key={index}>
								<td>{item.state}</td>
								<td>{item.frequency}</td>
								<td className={styles.notes}>{item.notes}</td>
								<td>{item.requires_county_in_tonnage}</td>
								<td
									className={styles.submit}
									dangerouslySetInnerHTML={{
										__html: item.how_to_submit,
									}}></td>
								<td>{item.due}</td>
								<td>{item.last_completed}</td>
							</tr>
						))}
					</tbody>
				</Table>
			</div>
		</section>
	);
}
