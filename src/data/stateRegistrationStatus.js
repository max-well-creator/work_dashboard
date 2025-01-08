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
		product_status: NOREGISTRATIONREQUIRED,
		notes: "",
		is_soil_amendment: "Yes",
		product_expiration: NOREGISTRATIONREQUIRED,
		color: APPROVED_COLOR,
		point_of_contact_name: "?",
		point_of_contact_phone: "?",
		point_of_contact_email: "?",
	},
	{
		id: 2,
		state: "Arizona",
		license_statues: APPROVED,
		product_status: `${APPROVED}\n Soil Amendment only need to be on file, no reg. process. Just email amendment labels to 'licensing@azda.gov'.`,
		notes: "",
		is_soil_amendment: "Yes",
		product_expiration: "June 2025",
		color: APPROVED_COLOR,
		point_of_contact_name: "Angelica Quezada",
		point_of_contact_phone: "602-542-3578",
		point_of_contact_email: "aquezada@azda.gov",
	},
	{
		id: 3,
		state: "Colorado",
		license_statues: APPROVED,
		product_status: APPROVED,
		notes: "",
		is_soil_amendment: "Yes",
		product_expiration: "January 2026",
		color: APPROVED_COLOR,
		renew_at:
			'Renew registrations at <a href="https://www.ag.state.co.us/eLicense/Logout.aspx?auto=True" target= "_blank"> Colorado Renewal</a>',
		point_of_contact_name: "Megan Winter",
		point_of_contact_phone: "303-869-9103",
		point_of_contact_email: "megan.winter@state.co.us",
	},
	{
		id: 4,
		state: "Wyoming",
		license_statues: APPROVED,
		product_status: APPROVED,
		notes: "",
		is_soil_amendment: "Yes",
		product_expiration: "December 2025",
		color: APPROVED_COLOR,
		renew_at:
			'Renew registrations at <a href="https://www.kellysolutions.com/erenewals/login.aspx?ReturnUrl=/erenewals/soil/default.aspx" target= "_blank"> Wyoming Renewal</a>',
		point_of_contact_name: "Wyoming Department of Agriculture",
		point_of_contact_phone: "307-777-6573",
		point_of_contact_email: "agri.productreg@wyo.gov",
	},
	{
		id: 5,
		state: "Nebraska",
		license_statues: APPROVED,
		product_status: APPROVED,
		notes: "We need to renew a fertilizer license to sell soil amendments",
		is_soil_amendment: "Yes",
		product_expiration: "December 2025",
		color: APPROVED_COLOR,
		renew_at:
			'Renew registrations at <a href="https://nda.nebraska.gov/online/ffal.html" target= "_blank"> Online Renewal</a> with ID #: 19181',
		point_of_contact_name: "Libby Smith",
		point_of_contact_phone: "402-471-6882",
		point_of_contact_email: "elizabeth.smith@nebraska.gov",
	},
	{
		id: 6,
		state: "Kansas",
		notes: "",
		license_statues:
			"Requires Active and Inactive ingredient percentages totaling 100%. OPTION: https://www.verdantregulatory.com/soil-amendment-registration-services.",
		product_status: "",
		product_expiration: "",
		point_of_contact_name: "",
		point_of_contact_phone: "",
		point_of_contact_email: "",
		color: REJECTED_COLOR,
	},
	{
		id: 7,
		state: "Florida",
		license_statues: "Paul said he is taking care of it on 12-9-24",
		product_status: "Paul said he is taking care of it on 12-9-24",
		notes: "",
		product_expiration: "June 2025",
		color: PENDING_COLOR,
		point_of_contact_name: "Brian Thompson",
		point_of_contact_phone: "850 - 617 - 7861",
		point_of_contact_email: "Brian.Thompson@FDACS.gov",
	},
	{
		id: 8,
		state: "Mississippi",
		license_statues: APPROVED,
		product_status: APPROVED,
		notes:
			"Just need soil amendment registration. Registered as soil amendment on 12-3-24",
		is_soil_amendment: "Yes",
		product_expiration: "June 2025",
		color: APPROVED_COLOR,
		renew_at:
			'Renew registrations at <a href="https://agnet.mdac.ms.gov/fflsp/" target= "_blank"> Mississippi Renewal</a>',
		point_of_contact_name: "Buddy Brannon",
		point_of_contact_phone: "662-325-7763",
		point_of_contact_email: "buddyb@mdac.ms.gov",
	},
	{
		id: 9,
		state: `Montana  \nMontana plants id: 002XT9 Montana Pin Id: 47800.`,
		license_statues: APPROVED,
		product_status: APPROVED,
		is_soil_amendment: "Yes",
		product_expiration: "December 2025",
		notes: "",
		color: APPROVED_COLOR,
		renew_at:
			'Renew registrations at <a href="https://mtplants.mt.gov/OktaSSOLogin.aspx" target= "_blank"> Montana Renewal</a>  \nMontana plants id: 002XT9 Montana Pin Id: 47800.',
		point_of_contact_name: "?",
		point_of_contact_phone: "?",
		point_of_contact_email: "?",
	},
	{
		id: 10,
		state: "Nevada",
		license_statues: APPROVED,
		product_status: APPROVED,
		notes: "Mycorr A renewed. Mycorr O pending",
		is_soil_amendment: "Yes",
		product_expiration: "December 2025",
		color: APPROVED_COLOR,
		point_of_contact_name: "Allison L. Kosturos",
		point_of_contact_phone: "775-353-3635",
		point_of_contact_email: "nvchem@agri.nv.gov",
	},
	{
		id: 11,
		state: "New Mexico",
		license_statues: APPROVED,
		product_status: APPROVED,
		notes: "",
		is_soil_amendment: "Yes",
		product_expiration: "December 2025",
		color: APPROVED_COLOR,
		point_of_contact_name: "Abby Bauer",
		point_of_contact_phone: "575-646-2765",
		point_of_contact_email: "abauer@nmda.nmsu.edu",
	},
	{
		id: 12,
		state: "Utah",
		license_statues: APPROVED,
		product_status: APPROVED,
		notes: "Fertilizer and Soil Amendment are lumped together",
		is_soil_amendment: "Yes",
		product_expiration: "December 2025",
		color: APPROVED_COLOR,
		renew_at:
			'Renew registrations at <a href="https://webapp.ag.utah.gov/productRegistration/registrant.jsp" target= "_blank">Utah Department of Agriculture and Food Online</a> with CUSTOMER No. 12245829 And PIN 221030',
		point_of_contact_name: "Summer Hobbs",
		point_of_contact_phone: "385-499-0424",
		point_of_contact_email: "udaf-fertilizer@utah.gov",
	},
	{
		id: 13,
		state: "Idaho",
		license_statues: APPROVED,
		product_status: APPROVED,
		notes: "",
		is_soil_amendment: "Yes",
		product_expiration:
			"Payment Pending for January 2025 and print Idaho certificate after payment is processed",
		color: APPROVED_COLOR,
		renew_at:
			'Renew registrations at <a href="https://www.isda.idaho.gov/ffs/" target= "_blank">Idaho Department of Agriculture</a>',
		point_of_contact_name: "Bailey Brunmeier",
		point_of_contact_phone: "208-332-8625",
		point_of_contact_email: "bailey.brunmeier@isda.idaho.gov",
	},
	{
		id: 14,
		state: "Washington",
		license_statues: APPROVED,
		product_status: NOREGISTRATIONREQUIRED,
		is_soil_amendment: "Yes",
		notes: "",
		product_expiration: NOREGISTRATIONREQUIRED,
		color: APPROVED_COLOR,
		point_of_contact_name: "Don McLain",
		point_of_contact_phone: "360-974-9753",
		point_of_contact_email: "dmclain@agr.wa.gov",
	},
	{
		id: 15,
		state: "Indiana",
		license_statues: APPROVED,
		product_status: APPROVED,
		notes: "",
		is_soil_amendment: "Yes",
		product_expiration: "December 2025",
		color: APPROVED_COLOR,
		point_of_contact_name: "Lisa Mermoud",
		point_of_contact_phone: "765-494-1548",
		point_of_contact_email: "lmermoud@purdue.edu",
	},
	{
		id: 16,
		state: `Arkansas \n Lic Reg#: 292`,
		license_statues: APPROVED,
		product_status: APPROVED,
		is_soil_amendment: "Yes",
		notes: "",
		product_expiration: "June 2025",
		color: APPROVED_COLOR,
		point_of_contact_name: "Mike Stage",
		point_of_contact_phone: "501-219-6338",
		point_of_contact_email: "mike.stage@agriculture.arkansas.gov",
	},
	{
		id: 17,
		state: `Delaware \n Company ID: 100257112 `,
		license_statues: APPROVED,
		product_status: APPROVED,
		notes: "",
		is_soil_amendment:
			"Yes, combined with fertilizer. The states combines fertilizer and soil amendments",
		product_expiration: "December 2025",
		color: APPROVED_COLOR,
		renew_at:
			'Renew registrations at <a href="https://www.kellysolutions.com/erenewals/login.aspx?ReturnUrl=/erenewals/Fertilizer/default.aspx" target= "_blank">Online</a>',
		point_of_contact_name: "Leanne Garrett",
		point_of_contact_phone: "302-698-4524",
		point_of_contact_email: "Leanne.Garrett@delaware.gov",
	},
	{
		id: 18,
		state: `Iowa \n Existing License # 17328`,
		license_statues: APPROVED,
		product_status: APPROVED,
		notes: "",
		is_soil_amendment: "Yes",
		product_expiration: "June 2026",
		color: APPROVED_COLOR,
		renew_at:
			'Renew registrations at <a href="https://iowadeptag.my.site.com/s/login/?amp=&ec=302" target= "_blank">Online at Iowa Department of Agriculture.</a>',
		point_of_contact_name: "?",
		point_of_contact_phone: "?",
		point_of_contact_email: "feed_and_fert@iowaagriculture.gov",
	},
	{
		id: 19,
		state: "Illinois",
		notes: "",
		license_statues:
			"Analytical procedure(s) required. OPTION: https://www.verdantregulatory.com/soil-amendment-registration-services.",
		product_status: "",
		product_expiration: "",
		point_of_contact_name: "",
		point_of_contact_phone: "",
		point_of_contact_email: "",
		color: REJECTED_COLOR,
	},
	{
		id: 20,
		state: "Kentucky",
		license_statues: APPROVED,
		product_status: NOREGISTRATIONREQUIRED,
		is_soil_amendment: "Yes",
		notes: "",
		product_expiration: NOREGISTRATIONREQUIRED,
		color: APPROVED_COLOR,
		point_of_contact_name: "Stephen McMurry",
		point_of_contact_phone: "859-257-2785",
		point_of_contact_email: "smcmurry@email.uky.edu",
	},
	{
		id: 21,
		state: "Maryland",
		notes: "",
		license_statues: "Paul chose not to sell as of April 17, 2024.",
		product_status: "",
		product_expiration: "",
		point_of_contact_name: "",
		point_of_contact_phone: "",
		point_of_contact_email: "",
		color: REJECTED_COLOR,
	},
	{
		id: 22,
		state: "Maine",
		license_statues: APPROVED,
		product_status: APPROVED,
		notes: "Emailed Sarah renewal form to 12-17-24 to send to Maine",
		is_soil_amendment: "Yes",
		product_expiration: "December 2024",
		color: APPROVED_COLOR,
		point_of_contact_name:
			"Michelle Newbegin | Process Systems Analyst Cordinator",
		point_of_contact_phone: "207-287-4516",
		point_of_contact_email: "michelle.newbegin@maine.gov",
		how_to_submit:
			"Email Maine Department of Agriculture, Conservation & Forestry Division of Quality Assurance and Regulations 28 State House Station Augusta, Maine 04333-0028",
	},
	{
		id: 23,
		state: "Michigan",
		license_statues: APPROVED,
		product_status: APPROVED,
		is_soil_amendment: "Yes",
		notes: "",
		product_expiration: "December 2025",
		color: APPROVED_COLOR,
		point_of_contact_name: "Lorli Curry",
		point_of_contact_phone: "?",
		point_of_contact_email: "curryl9@michigan.gov",
	},
	{
		id: 24,
		state: `Minnesota \nLICENSE NUMBER: 20196669 `,
		license_statues: APPROVED,
		is_soil_amendment: "Yes",
		notes: "Do not update fertilizer license",
		product_status: APPROVED,
		notes:
			"Beginning January 1, 2026, a fertilizer, soil and plant amendment, or agricultural liming product manufacturer must annually provide a statement that a product contains no intentionally added PFAS.Beginning January 1, 2032, the commissioner may not register any fertilizers, soil and plant amendments, and agricultural liming materials product that contains intentionally added PFAS unless the commissioner determines that the use of PFAS is a currently unavoidable use. Contact Minnesota to make sure that the online system is accessable with the soild ammendment licensing number right now it is under the fertilizer number as of December 20, 2024 ",
		product_expiration: "December 2025",
		color: APPROVED_COLOR,
		point_of_contact_name: "Lorinda Balfanz",
		point_of_contact_phone: "651-201-6092",
		point_of_contact_email: "lorinda.balfanz@state.mn.usv",
		how_to_submit:
			"Pay for licensing renewal <a href='https://www2.mda.state.mn.us/webapp/erenewal/login.jsp'>Online</a>",
	},
	{
		id: 25,
		state: "Missouri",
		license_statues: APPROVED,
		product_status: NOREGISTRATIONREQUIRED,
		is_soil_amendment: "Yes",
		notes: "",
		product_expiration: NOREGISTRATIONREQUIRED,
		color: APPROVED_COLOR,
		point_of_contact_name: "Mark Murphy",
		point_of_contact_phone: "573-636-6131",
		point_of_contact_email: "mofcb@mofcb.com",
	},
	{
		id: 26,
		state: "New York",
		notes: "",
		license_statues:
			"Requires Active and Inactive ingredient percentages totaling 100%. OPTION: https://www.verdantregulatory.com/soil-amendment-registration-services.",
		product_status: "",
		product_expiration: "",
		point_of_contact_name: "",
		point_of_contact_phone: "",
		point_of_contact_email: "",
		color: REJECTED_COLOR,
	},
	{
		id: 27,
		state: "North Carolina",
		notes: "",
		license_statues:
			"Requires Active and Inactive ingredient percentages totaling 100%.",
		product_status: "See documentation for details.",
		product_expiration: "",
		point_of_contact_name: "",
		point_of_contact_phone: "",
		point_of_contact_email: "",
		color: REJECTED_COLOR,
	},
	{
		id: 28,
		state: "Ohio",
		notes: "",
		license_statues:
			"Requires Active and Inactive ingredient percentages totaling 100%, plus micro-orgs by milliliter.  OPTION: https://www.verdantregulatory.com/soil-amendment-registration-services.",
		product_status: "",
		product_expiration: "",
		point_of_contact_name: "",
		point_of_contact_phone: "",
		point_of_contact_email: "",
		color: REJECTED_COLOR,
	},
	{
		id: 29,
		state: "Oklahoma",
		notes: "",
		license_statues:
			"Requires Active and Inactive ingredient percentages totaling 100%, plus micro-orgs by milliliter plus cert of analysis of Micro-Orgs. OPTION: https://www.verdantregulatory.com/soil-amendment-registration-services.",
		product_status: "",
		product_expiration: "",
		point_of_contact_name: "",
		point_of_contact_phone: "",
		point_of_contact_email: "",
		color: REJECTED_COLOR,
	},
	{
		id: 30,
		state: "Oregon",
		notes: "",
		license_statues:
			"Requires Heavy Metal report dated within the previous 18 mos. OPTION: https://www.verdantregulatory.com/soil-amendment-registration-services.",
		product_status: "",
		product_expiration: "",
		point_of_contact_name: "",
		point_of_contact_phone: "",
		point_of_contact_email: "",
		color: REJECTED_COLOR,
	},
	{
		id: 31,
		state: "Tennessee",
		product_status:
			"No Individual Product Registration need just register the company. Per rane.j.sewell@tn.gov - filled out application and emailed 9-25-24",
		notes: "",
		is_soil_amendment: "?",
		product_expiration: "",
		point_of_contact_name: "RANE’ SEWELL",
		point_of_contact_phone: "615-837-5513",
		point_of_contact_email: "rane.j.sewell@tn.gov",
		color: PENDING_COLOR,
	},
	{
		id: 32,
		state: "Virginia",
		license_statues: APPROVED,
		product_status: APPROVED,
		notes:
			"Need a fertilizer license and individual product registration renewals.",
		is_soil_amendment: "Yes",
		product_expiration: "June 2025",
		point_of_contact_name: "?",
		point_of_contact_phone: "?",
		point_of_contact_email: "?",
		color: APPROVED_COLOR,
	},
	{
		id: 33,
		state: "Vermont",
		license_statues: APPROVED,
		product_status: APPROVED,
		notes: "USAPLANTS ID:  001DV8 PIN:  32796",
		is_soil_amendment: "Yes",
		product_expiration: "December 2025",
		color: APPROVED_COLOR,
		point_of_contact_name: "?",
		point_of_contact_phone: "?",
		point_of_contact_email: "?",
		renew_at:
			'Renew registrations at <a href="https://usaplants.vermont.gov/usaplants/SecurityLogin.aspx" target= "_blank">Online</a>',
	},
	{
		id: 34,
		state: "Wisconsin",
		notes: "",
		license_statues:
			"Requires Active and Inactive ingrsedient percentages totaling 100% PLUS method of analysis for each guaranteed active ingredient in the soil or plant additive. OPTION: https://www.verdantregulatory.com/soil-amendment-registration-services.",
		product_status: "",
		product_expiration: "",
		point_of_contact_name: "",
		point_of_contact_phone: "",
		point_of_contact_email: "",
		color: REJECTED_COLOR,
	},
	{
		id: 35,
		state: `West Virginia, \nPlant ID: 001240 Pin ID: 43232 `,
		license_statues: APPROVED,
		product_status: APPROVED,
		notes: "",
		is_soil_amendment: "Yes",
		product_expiration: "June 2025",
		color: APPROVED_COLOR,
		point_of_contact_name: "Delaney Welling",
		point_of_contact_phone: "304-558-2227",
		point_of_contact_email: "delaneyparsons@wvda.us",
	},
	{
		id: 36,
		state: "Georgia",
		license_statues: APPROVED,
		product_status: APPROVED,
		notes: "",
		is_soil_amendment: "Need to register A and O",
		product_expiration: "June 2025",
		color: APPROVED_COLOR,
		point_of_contact_name:
			"GDA Licensing Division Georgia Department of Agriculture",
		point_of_contact_phone: "404-586-1411",
		point_of_contact_email: "gdalicensing@agr.georgia.gov",
		how_to_submit:
			'Renew registrations at <a href="https://www.kellysolutions.com/erenewals/login.aspx?ReturnUrl=/erenewals/Soil/default_newreg.aspx" target= "_blank">Georgia DOA</a>',
	},
	{
		id: 37,
		state: "Pennsylvania",
		license_statues: APPROVED,
		product_status: APPROVED,
		notes: "",
		is_soil_amendment: "Yes",
		product_expiration: "June 2025",
		color: APPROVED_COLOR,
		point_of_contact_name: "?",
		point_of_contact_phone: "?",
		point_of_contact_email: "?",
	},
	{
		id: 38,
		state: "North Dakota",
		license_statues: APPROVED,
		product_status: APPROVED,
		is_soil_amendment: "Yes",
		notes: "Fertilizer and Soil Amendment are lumped together",
		product_expiration: "June 2026",
		color: APPROVED_COLOR,
		point_of_contact_name:
			"GDA Licensing Division Georgia Department of Agriculture",
		point_of_contact_phone: "701-328-1500",
		point_of_contact_email: "reg@nd.com",
	},
	{
		id: 39,
		state: "SoilMaxx for California",
		license_statues: APPROVED,
		product_status: APPROVED,
		is_soil_amendment: "No",
		notes: "SoilMaxx is MyCorrPlus-O",
		product_expiration: "December 2026",
		color: APPROVED_COLOR,
		point_of_contact_name:
			"GDA Licensing Division Georgia Department of Agriculture",
		point_of_contact_phone: "701-328-1500",
		point_of_contact_email: "reg@nd.com",
	},
	{
		id: 40,
		state: "GroPal for California",
		license_statues: APPROVED,
		product_status: APPROVED,
		notes: "SoilMaxx is MyCorrPlus-O",
		is_soil_amendment: "Yes",
		product_expiration: "December 2026",
		color: APPROVED_COLOR,
		point_of_contact_name:
			"GDA Licensing Division Georgia Department of Agriculture",
		point_of_contact_phone: "701-328-1500",
		point_of_contact_email: "reg@nd.com",
	},
];

export default statesRegData;
