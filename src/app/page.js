import {
	CustomerWebsiteLinks,
	BackOfficeLinks,
	FileStoringLinks,
	ServerLinks,
	CRMLinks,
	ReportLinks,
	SalesSites,
} from "@/data/workLinks";

import React from "react";
import styles from "./home.module.scss";
import WorkLinks from "@/components/InportantLinks/WorkLinks";

export default function Home() {
	return (
		<div>
			<div className={styles.workLinksContainer}>
				<div styles={styles.customerLinks}>
					<WorkLinks title="Customer" links={CustomerWebsiteLinks} />
				</div>
				<div styles={styles.backOfficeLinks}>
					<WorkLinks title="Back Office" links={BackOfficeLinks} />
				</div>
				<div styles={styles.fileStoringLinks}>
					<WorkLinks title="File Storing" links={FileStoringLinks} />
				</div>
				<div styles={styles.serverLinks}>
					<WorkLinks title="Server" links={ServerLinks} />
				</div>
				<div styles={styles.cRMLinks}>
					<WorkLinks title="CRM" links={CRMLinks} />
				</div>
				<div styles={styles.reportLinks}>
					<WorkLinks title="Reports" links={ReportLinks} />
				</div>
				<div styles={styles.salesLinks}>
					<WorkLinks title="Sales" links={SalesSites} />
				</div>
			</div>
		</div>
	);
}
