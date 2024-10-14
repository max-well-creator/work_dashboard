import TonnageSchedule from "./components/tonnage_schedule/TonnageSchedule";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
	return (
		<div className={styles.page}>
			<p>
				<Link href="https://tonnage-cd855155a902.herokuapp.com/">
					Calculate Tonnage
				</Link>
			</p>
			<TonnageSchedule />
		</div>
	);
}
