import { stateFrequencies } from "@/app/data/stateFrequencies";
import React from "react";
import { Table } from "reactstrap";

import styles from "./TonnageSchedule.scss";

export default function TonnageSchedule() {
	return (
		<section className={styles.schedule}>
			<h2>Tonnage Reporting Schedule</h2>
			<div className={styles.table}>
				<Table hover responsive striped>
					<thead>
						<tr>
							<th>State</th>
							<th>Frequency</th>
							<th>How to Submit Tonnage</th>
						</tr>
					</thead>
					<tbody>
						{stateFrequencies.map((item, index) => (
							<tr key={index}>
								<td>{item.state}</td>
								<td>{item.frequency}</td>
								<td
									dangerouslySetInnerHTML={{
										__html: item.how_to_submit,
									}}></td>
							</tr>
						))}
					</tbody>
				</Table>
			</div>
		</section>
	);
}
