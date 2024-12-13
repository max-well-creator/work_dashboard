import {
	CustomerWebsiteLinks,
	BackOfficeLinks,
	FileStorage,
	Server,
	CRMTools,
	ReportingTools,
	SalesSites,
	PaymentGateways,
	MaxWellResources,
} from "../data/workLinks";

import React from "react";
import styles from "./home.module.scss";
import WorkLinks from "../components/InportantLinks/WorkLinks";

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
					<WorkLinks title="File Storing" links={FileStorage} />
				</div>
				<div styles={styles.serverLinks}>
					<WorkLinks title="Server" links={Server} />
				</div>
				<div styles={styles.cRMLinks}>
					<WorkLinks title="CRM" links={CRMTools} />
				</div>

				<div styles={styles.salesLinks}>
					<WorkLinks title="Sales" links={SalesSites} />
				</div>
				<div styles={styles.paymentProcessor}>
					<WorkLinks title="Payment" links={PaymentGateways} />
				</div>
				<div styles={styles.MaxWellWebsites}>
					<WorkLinks title="Max-Well Links" links={MaxWellResources} />
				</div>
			</div>
		</div>
	);
}
