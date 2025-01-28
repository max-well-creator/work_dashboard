const AddressInfo = ({
	name,
	addressLine1,
	addressLine2,
	phone,
	website,
	taxId,
	billingAddress,
}) => (
	<div>
		<h4>{name}</h4>
		<p>Physical Address: {addressLine1}</p>
		<p>Mailing Address: {addressLine2}</p>
		<p>Billing for Credit Card: {billingAddress}</p>
		<p>Tax ID: {taxId}</p>
		{phone && <p>Phone: {phone}</p>}
		{website && (
			<p>
				Website:{" "}
				<a href={website} target="_blank" rel="noopener noreferrer">
					{website}
				</a>
			</p>
		)}
	</div>
);
export default AddressInfo;
