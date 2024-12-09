import dataHeaders from "../constants/stateRegistrationStatus";

const {
	APPROVED,
	NOREGISTRATIONREQUIRED,
	APPROVED_COLOR,
	REJECTED_COLOR,
	PENDING_COLOR,
} = dataHeaders;
const statesRegData = [
	{
		id: 1,
		state: "Texas",
		license_statues: APPROVED,
		a_status: NOREGISTRATIONREQUIRED,
		o_status: NOREGISTRATIONREQUIRED,
		notes: "",
		is_soil_amendment: "Yes",
		a_expiration: NOREGISTRATIONREQUIRED,
		o_expiration: NOREGISTRATIONREQUIRED,
		color: APPROVED_COLOR,
	},
	{
		id: 2,
		state: "Arizona",
		license_statues: APPROVED,
		a_status: `${APPROVED}\n Soil Amendment only need to be on file, no reg. process. Just email amendment labels to 'licensing@azda.gov'.`,
		o_status: APPROVED,
		notes: "",
		is_soil_amendment: "Yes",
		a_expiration: "June 2025",
		o_expiration: "June 2025",
		color: APPROVED_COLOR,
	},
	{
		id: 3,
		state: "Colorado",
		license_statues: APPROVED,
		a_status: APPROVED,
		o_status: APPROVED,
		notes: "",
		is_soil_amendment: "Yes",
		a_expiration: "January 2025",
		o_expiration: "January 2025",
		color: APPROVED_COLOR,
	},
	{
		id: 4,
		state: "Wyoming",
		license_statues: APPROVED,
		a_status: APPROVED,
		o_status: APPROVED,
		notes: "",
		is_soil_amendment: "Yes",
		a_expiration: "December 2025",
		o_expiration: "December 2025",
		color: APPROVED_COLOR,
		renew_at:
			'Renew registrations at <a href="https://www.kellysolutions.com/erenewals/login.aspx?ReturnUrl=/erenewals/soil/default.aspx" target= "_blank"> Wyoming Renewal</a>',
	},
	{
		id: 5,
		state: "Nebraska",
		license_statues: APPROVED,
		a_status: APPROVED,
		o_status: APPROVED,
		notes: "We need to renew a fertilizer license to sell soil amendments",
		is_soil_amendment: "Yes",
		a_expiration: "December 2025",
		o_expiration: "December 2025",
		color: APPROVED_COLOR,
		renew_at:
			'Renew registrations at <a href="https://nda.nebraska.gov/online/ffal.html" target= "_blank"> Online Renewal</a> with ID #: 19181',
	},
	{
		id: 6,
		state: "Kansas",
		license_statues:
			"Requires Active and Inactive ingredient percentages totaling 100%.",
		a_status: "",
		o_status:
			"OPTION: https://www.verdantregulatory.com/soil-amendment-registration-services.",
		notes: "",
		a_expiration: "",
		o_expiration: "",
		color: REJECTED_COLOR,
	},
	{
		id: 7,
		state: "Florida",
		license_statues:
			"Must update product labels.  Emailed revised label on 9-25-24.",
		a_status: "Must update product labels. Emailed revised label on 9-25-24.",
		o_status: "Must update product labels. Emailed revised label on 9-25-24.",
		notes: "",
		a_expiration: "June 2025",
		o_expiration: "June 2025",
		color: PENDING_COLOR,
	},
	{
		id: 8,
		state: "Mississippi",
		license_statues: APPROVED,
		a_status: APPROVED,
		o_status: APPROVED,
		notes:
			"Just need soil amendment registration. Registered as soil amendment on 12-3-24",
		is_soil_amendment: "?",
		a_expiration: "June 2025",
		o_expiration: "June 2025",
		color: APPROVED_COLOR,
		renew_at:
			'Renew registrations at <a href="https://agnet.mdac.ms.gov/fflsp/" target= "_blank"> Mississippi Renewal</a>',
	},
	{
		id: 9,
		state: `Montana  \nMontana plants id: 002XT9 Montana Pin Id: 47800.`,
		license_statues: APPROVED,
		a_status: APPROVED,
		o_status: APPROVED,
		is_soil_amendment: "Yes",
		a_expiration: "December 2025",
		o_expiration: "December 2025",
		color: APPROVED_COLOR,
		renew_at:
			'Renew registrations at <a href="https://mtplants.mt.gov/OktaSSOLogin.aspx" target= "_blank"> Montana Renewal</a>  \nMontana plants id: 002XT9 Montana Pin Id: 47800.',
	},
	{
		id: 10,
		state: "Nevada",
		license_statues: APPROVED,
		a_status: NOREGISTRATIONREQUIRED,
		o_status: NOREGISTRATIONREQUIRED,
		notes: "",
		is_soil_amendment: "Yes",
		a_expiration: NOREGISTRATIONREQUIRED,
		o_expiration: NOREGISTRATIONREQUIRED,
		color: APPROVED_COLOR,
	},
	{
		id: 11,
		state: "New Mexico",
		license_statues: APPROVED,
		a_status: APPROVED,
		o_status: APPROVED,
		is_soil_amendment: "Yes",
		a_expiration: "December 2025",
		o_expiration: "December 2025",
		color: APPROVED_COLOR,
	},
	{
		id: 12,
		state: "Utah",
		license_statues: APPROVED,
		a_status: APPROVED,
		o_status: APPROVED,
		notes: "Fertilizer and Soil Amendment are lumped together",
		is_soil_amendment: "Yes",
		a_expiration: "December 2025",
		o_expiration: "December 2025",
		color: APPROVED_COLOR,
		renew_at:
			'Renew registrations at <a href="https://webapp.ag.utah.gov/productRegistration/registrant.jsp" target= "_blank">Utah Department of Agriculture and Food Online</a> with CUSTOMER No. 12245829 And PIN 221030',
	},
	{
		id: 13,
		state: "Idaho",
		license_statues: APPROVED,
		a_status: APPROVED,
		o_status: APPROVED,
		notes: "",
		is_soil_amendment: "Yes",
		a_expiration: "January 2025",
		o_expiration: "January 2025",
		color: APPROVED_COLOR,
		renew_at:
			'Renew registrations at <a href="https://www.isda.idaho.gov/ffs/" target= "_blank">Idaho Department of Agriculture</a>',
	},
	{
		id: 14,
		state: "Washington",
		license_statues: APPROVED,
		a_status: NOREGISTRATIONREQUIRED,
		o_status: NOREGISTRATIONREQUIRED,
		is_soil_amendment: "Yes",
		notes: "",
		a_expiration: NOREGISTRATIONREQUIRED,
		o_expiration: NOREGISTRATIONREQUIRED,
		color: APPROVED_COLOR,
	},
	{
		id: 15,
		state: "Indiana",
		license_statues: APPROVED,
		a_status: APPROVED,
		o_status: APPROVED,
		notes: "",
		is_soil_amendment: "Yes",
		a_expiration: "December 2025",
		o_expiration: "December 2025",
		color: APPROVED_COLOR,
	},
	{
		id: 16,
		state: `Arkansas \n Lic Reg#: 292`,
		license_statues: APPROVED,
		a_status: APPROVED,
		o_status: APPROVED,
		notes: "",
		is_soil_amendment: "Yes",
		a_expiration: "June 2025",
		o_expiration: "June 2025",
		color: APPROVED_COLOR,
	},
	{
		id: 17,
		state: `Delaware \n Company ID: 100257112 `,
		license_statues: APPROVED,
		a_status: APPROVED,
		o_status: APPROVED,
		notes: "",
		is_soil_amendment:
			"Yes, combined with fertilizer. The states combines fertilizer and soil amendments",
		a_expiration: "December 2025",
		o_expiration: "December 2025",
		color: APPROVED_COLOR,
		renew_at:
			'Renew registrations at <a href="https://www.kellysolutions.com/erenewals/login.aspx?ReturnUrl=/erenewals/Fertilizer/default.aspx" target= "_blank">Online</a>',
	},
	{
		id: 18,
		state: `Iowa \n Existing License # 17328`,
		license_statues: APPROVED,
		a_status: APPROVED,
		o_status: APPROVED,
		notes: "",
		is_soil_amendment: "Yes",
		a_expiration: "June 2026",
		o_expiration: "",
		color: APPROVED_COLOR,
		renew_at:
			'Renew registrations at <a href="https://iowadeptag.my.site.com/s/login/?amp=&ec=302" target= "_blank">Online at Iowa Department of Agriculture.</a>',
	},
	{
		id: 19,
		state: "Illinois",
		license_statues: "Analytical procedure(s) required.",
		a_status: "See documentation for details.",
		o_status:
			"OPTION: https://www.verdantregulatory.com/soil-amendment-registration-services.",
		notes: "",
		a_expiration: "",
		o_expiration: "",
		color: REJECTED_COLOR,
	},
	{
		id: 20,
		state: "Kentucky",
		license_statues: APPROVED,
		a_status: NOREGISTRATIONREQUIRED,
		o_status: NOREGISTRATIONREQUIRED,
		is_soil_amendment: "Yes",
		notes: "",
		a_expiration: NOREGISTRATIONREQUIRED,
		o_expiration: NOREGISTRATIONREQUIRED,
		color: APPROVED_COLOR,
	},
	{
		id: 21,
		state: "Maryland",
		license_statues: "Paul chose not to sell as of April 17, 2024.",
		a_status: "Paul chose not to sell as of April 17, 2024.",
		o_status: "Paul chose not to sell as of April 17, 2024.",
		notes: "",
		a_expiration: "",
		o_expiration: "",
		color: REJECTED_COLOR,
	},
	{
		id: 22,
		state: "Maine",
		license_statues: APPROVED,
		a_status: APPROVED,
		o_status: APPROVED,
		notes: "",
		is_soil_amendment: "Yes",
		a_expiration: "December 2024",
		o_expiration: "",
		color: APPROVED_COLOR,
	},
	{
		id: 23,
		state: "Michigan",
		license_statues: APPROVED,
		a_status: APPROVED,
		o_status: APPROVED,
		is_soil_amendment: "?",
		notes: "",
		a_expiration: "Sarah sent a check on 11-12-24",
		o_expiration: "Sarah sent a check on 11-12-24",
		color: APPROVED_COLOR,
	},
	{
		id: 24,
		state: `Minnesota \nLICENSE NUMBER: 20196669 `,
		license_statues: APPROVED,
		is_soil_amendment: "Yes",
		notes: "Do not update fertilizer license",
		a_status: APPROVED,
		o_status: APPROVED,
		notes:
			"Beginning January 1, 2026, a fertilizer, soil and plant amendment, or agricultural liming product manufacturer must annually provide a statement that a product contains no intentionally added PFAS.Beginning January 1, 2032, the commissioner may not register any fertilizers, soil and plant amendments, and agricultural liming materials product that contains intentionally added PFAS unless the commissioner determines that the use of PFAS is a currently unavoidable use. ",
		a_expiration: "December 2025",
		o_expiration: "December 2025",
		color: APPROVED_COLOR,
	},
	{
		id: 25,
		state: "Missouri",
		license_statues: APPROVED,
		a_status: NOREGISTRATIONREQUIRED,
		o_status: NOREGISTRATIONREQUIRED,
		is_soil_amendment: "Yes",
		notes: "",
		a_expiration: NOREGISTRATIONREQUIRED,
		o_expiration: NOREGISTRATIONREQUIRED,
		color: APPROVED_COLOR,
	},
	{
		id: 26,
		state: "New York",
		license_statues:
			"Requires Active and Inactive ingredient percentages totaling 100%.",
		a_status:
			"OPTION: https://www.verdantregulatory.com/soil-amendment-registration-services.",
		o_status: "",
		notes: "",
		a_expiration: "",
		o_expiration: "",
		color: REJECTED_COLOR,
	},
	{
		id: 27,
		state: "North Carolina",
		license_statues:
			"Requires Active and Inactive ingredient percentages totaling 100%.",
		a_status: "See documentation for details.",
		o_status: "",
		notes: "",
		a_expiration: "",
		o_expiration: "",
		color: REJECTED_COLOR,
	},
	{
		id: 28,
		state: "Ohio",
		license_statues:
			"Requires Active and Inactive ingredient percentages totaling 100%, plus micro-orgs by milliliter.",
		a_status:
			"OPTION: https://www.verdantregulatory.com/soil-amendment-registration-services.",
		o_status: "",
		notes: "",
		a_expiration: "",
		o_expiration: "",
		color: REJECTED_COLOR,
	},
	{
		id: 29,
		state: "Oklahoma",
		license_statues:
			"Requires Active and Inactive ingredient percentages totaling 100%, plus micro-orgs by milliliter plus cert of analysis of Micro-Orgs.",
		a_status: "",
		o_status:
			"OPTION: https://www.verdantregulatory.com/soil-amendment-registration-services.",
		notes: "",
		a_expiration: "",
		o_expiration: "",
		color: REJECTED_COLOR,
	},
	{
		id: 30,
		state: "Oregon",
		license_statues:
			"Requires Heavy Metal report dated within the previous 18 mos.",
		a_status:
			"OPTION: https://www.verdantregulatory.com/soil-amendment-registration-services.",
		o_status: "",
		notes: "",
		a_expiration: "",
		o_expiration: "",
		color: REJECTED_COLOR,
	},
	{
		id: 31,
		state: "Tennessee",
		license_statues:
			"No Individual Product Registration need just register the company. Per rane.j.sewell@tn.gov - filled out application and emailed 9-25-24.",
		a_status:
			"No Individual Product Registration need just register the company. Per rane.j.sewell@tn.gov - filled out application and emailed 9-25-24",
		o_status:
			"No Individual Product Registration need just register the company. Per rane.j.sewell@tn.gov - filled out application and emailed 9-25-24",
		notes: "",
		is_soil_amendment: "?",
		a_expiration: "",
		o_expiration: "",
		color: PENDING_COLOR,
	},
	{
		id: 32,
		state: "Virginia",
		license_statues: APPROVED,
		a_status: APPROVED,
		o_status: APPROVED,
		notes:
			"Need a fertilizer license and individual product registration renewals.",
		is_soil_amendment: "Yes",
		a_expiration: "June 2025",
		o_expiration: "June 2025",
		color: APPROVED_COLOR,
	},
	{
		id: 33,
		state: "Vermont",
		license_statues: APPROVED,
		a_status: APPROVED,
		o_status: APPROVED,
		notes: "USAPLANTS ID:  001DV8 PIN:  32796",
		is_soil_amendment: "Yes",
		a_expiration: "December 2025",
		o_expiration: "December 2025",
		color: APPROVED_COLOR,
		renew_at:
			'Renew registrations at <a href="https://usaplants.vermont.gov/usaplants/SecurityLogin.aspx" target= "_blank">Online</a>',
	},
	{
		id: 34,
		state: "Wisconsin",
		license_statues:
			"Requires Active and Inactive ingrsedient percentages totaling 100% PLUS method of analysis for each guaranteed active ingredient in the soil or plant additive.",
		a_status:
			"OPTION: https://www.verdantregulatory.com/soil-amendment-registration-services.",
		o_status: "",
		notes: "",
		a_expiration: "",
		o_expiration: "",
		color: REJECTED_COLOR,
	},
	{
		id: 35,
		state: `West Virginia, \nPlant ID: 001240 Pin ID: 43232 `,
		license_statues: APPROVED,
		a_status: APPROVED,
		o_status: APPROVED,
		notes: "",
		is_soil_amendment: "Yes",
		a_expiration: "June 2025",
		o_expiration: "June 2025",
		color: APPROVED_COLOR,
	},
	{
		id: 36,
		state: "Georgia",
		license_statues: APPROVED,
		a_status: APPROVED,
		o_status: APPROVED,
		notes: "",
		is_soil_amendment: "Need to register A and O",
		a_expiration: "June 2025",
		o_expiration: "June 2025",
		color: APPROVED_COLOR,
		how_to_submit:
			'Renew registrations at <a href="https://www.kellysolutions.com/erenewals/login.aspx?ReturnUrl=/erenewals/Soil/default_newreg.aspx" target= "_blank">Georgia DOA</a>',
	},
	{
		id: 37,
		state: "Pennsylvania",
		license_statues: APPROVED,
		a_status: APPROVED,
		o_status: APPROVED,
		notes: "",
		is_soil_amendment: "Yes",
		a_expiration: "June 2025",
		o_expiration: "June 2025",
		color: APPROVED_COLOR,
	},
	{
		id: 38,
		state: "North Dakota",
		license_statues: APPROVED,
		a_status: APPROVED,
		o_status: APPROVED,
		is_soil_amendment: "Yes",
		notes: "Fertilizer and Soil Amendment are lumped together",
		a_expiration: "June 2026",
		o_expiration: "June 2026",
		color: APPROVED_COLOR,
	},
];

export default statesRegData;
