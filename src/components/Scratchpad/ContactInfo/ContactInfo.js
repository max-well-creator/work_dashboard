const ContactInfo = ({ name, title, email, phone }) => (
	<div>
		<h4>{name}</h4>
		<p>{title}</p>
		<p>
			Email: <a href={`mailto:${email}`}>{email}</a>
		</p>
		<p>Phone: {phone}</p>
	</div>
);

export default ContactInfo;
