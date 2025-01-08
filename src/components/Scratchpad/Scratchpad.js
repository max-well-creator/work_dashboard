import React from "react";
import ContactInfo from "./ContactInfo/ContactInfo";
import AddressInfo from "./AddressInfo/AddressInfo";

const Scratchpad = () => {
	return (
		<div>
			<hr />
			<AddressInfo
				name="AG-USA, LLC"
				taxId="82-1839219"
				addressLine1="119 Palmetto RD Tyrone GA 30290"
				addressLine2="PO Box 73019, Newnan, GA 30271"
				phone="888-588-3139"
				website="https://www.ag-usa.net/"
				billingAddress="545 Mapledale Trail, Sharpsburg, GA 30277"
			/>
			<hr />
			<ContactInfo
				name="Paul Schneider Jr"
				title="President"
				email="paul@max-well.us"
				phone="678-552-5757 // 888-588-3139"
			/>
			<ContactInfo
				name="Jordan Devaney"
				title="Product Registration and Licensing"
				email="productreg@ag-usa.net"
				phone="810-772-0086"
			/>
		</div>
	);
};

export default Scratchpad;
