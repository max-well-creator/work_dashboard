// data/stateFrequencies.js

const QUARTERLY = "Jan 31\nApr 30\nJul 31\nOct 31";
const SEMI_ANNUALLY_DUE = "Jan 31\nJul 31";

const MONTHLY_HEADING = "Monthly";
const QUARTERLY_HEADING = "Quarterly";
const SEMI_ANNUALLY_HEADING = "Semi-Annually";
const YEARLY_HEADING = "Yearly";
const ONLINE = "Report Tonnage Online";

export const stateFrequencies = [
	//Monthly
	{
		state: "Arkansas",
		frequency: MONTHLY_HEADING,
		requires_county_in_tonnage: "No",
		notes:
			"If under 1 ton send a 0 ton report.\n\nStarting September 2024 keep a record of real tonnage and amount owed and then pay a lump sum in June per Mike Stage call on 12-13-24",
		how_to_submit:
			'Email zero ton report to <a href="mailto:fertilizer@agriculture.arkansas.gov">fertilizer@agriculture.arkansas.gov</a>.\n\n If there is tonnage pay <a href="https://payments.statesolutions.us/?AID=63236C49690A4EF484D709986A07A969 target="_blank" rel="noopener noreferrer"">online</a>',
		sepetember_2024_tonnage: ".02",
		october_2024_tonnage: ".01",
		november_2024_tonnage: ".01",
		inspection_fee: 0.375,
		due: "The 20th of every month",
		last_completed: "Jan 6, 2025",
	},
	{
		state: "Florida",
		frequency: MONTHLY_HEADING,
		notes: "",
		requires_county_in_tonnage: "Yes",
		how_to_submit: `<a href='https://www.fdacs.gov/Agriculture-Industry/Fertilizer-Licensing-and-Tonnage-Reporting'>Download forms online</a>\n\n<a href="https://lims.flaes.org/HomeNew.aspx?ReturnUrl=/" target="_blank" rel="noopener noreferrer">${ONLINE}</a>`,
		due: "Every month on the 15th",
		last_completed: "",
	},

	//Quarterly
	{
		state: "New Mexico",
		frequency: QUARTERLY_HEADING,
		notes: "",
		requires_county_in_tonnage: "No",
		how_to_submit: `<a href="https://nmag.nmsu.edu/USAPlants/SecurityLogin.aspx" target="_blank" rel="noopener noreferrer">${ONLINE}</a>`,
		due: QUARTERLY,
		last_completed: "Jan 6, 2025",
	},
	{
		state: "Florida",
		frequency: QUARTERLY_HEADING,
		notes: "",
		requires_county_in_tonnage: "No",
		how_to_submit: `<a href='https://www.fdacs.gov/Agriculture-Industry/Fertilizer-Licensing-and-Tonnage-Reporting'>Dowload Template</a>\n\n<a href="https://lims.flaes.org/HomeNew.aspx?ReturnUrl=/" target="_blank" rel="noopener noreferrer">${ONLINE}</a>`,
		due: QUARTERLY,
		last_completed: "Jan 6, 2024",
	},
	{
		state: "Arizona",
		frequency: QUARTERLY_HEADING,
		requires_county_in_tonnage: "Yes",
		notes: "",
		how_to_submit:
			"Dowload forms at <a href='https://agriculture.az.gov/download-forms'>Online</a>\n\nArizona Department of Agriculture 1802 W. Jackson St. #78 Phoenix, AZ 85007.\n\n Make check payable to Arizona Department of Agriculture.",
		due: QUARTERLY,
		last_completed: "Jan 9, 2025",
	},
	{
		state: "California - GroPal",
		notes: "Always list no sales.\n\nReport for two locations",
		frequency: QUARTERLY_HEADING,
		requires_county_in_tonnage: "No",
		how_to_submit: `<a href="https://inspect.cdfa.ca.gov/evj/ExtraView?killcache=-1515228896" target="_blank" rel="noopener noreferrer">${ONLINE}</a>`,
		due: QUARTERLY,
		last_completed: "Jan 7, 2025",
	},
	{
		state: "California - SoilMaxx",
		frequency: QUARTERLY_HEADING,
		notes: "",
		requires_county_in_tonnage: "No",
		how_to_submit: `<a href="https://inspect.cdfa.ca.gov/evj/ExtraView?killcache=-1515228896" target="_blank" rel="noopener noreferrer">${ONLINE}</a>`,
		due: QUARTERLY,
		last_completed: "Jan 7, 2025",
	},
	{
		state: "Georgia",
		frequency: QUARTERLY_HEADING,
		notes: "",
		requires_county_in_tonnage: "No",
		how_to_submit: `<a href="https://www.kellysolutions.com/ga/fert/tonnage/login.asp" target="_blank" rel="noopener noreferrer">${ONLINE}</a>`,
		due: QUARTERLY,
		last_completed: "Jan 13, 2025",
	},

	//Semi-Annually
	{
		state: "Delaware",
		frequency: SEMI_ANNUALLY_HEADING,
		notes: "",
		requires_county_in_tonnage: "No",
		how_to_submit:
			'If no tonnage, email <a href="mailto:DDA_AgCompliance@delaware.gov">DDA_AgCompliance@delaware.gov</a>.\n\n If tonnage, pay via <a href="https://www.velocitypayment.com/client/delaware/agriculture/agriculture/index.htm" target="_blank" rel="noopener noreferrer">Velocity Payment</a> and mail tonnage report and payment receipt to <a href="mailto:DDA_AgCompliance@delaware.gov">DDA_AgCompliance@delaware.gov</a>.',
		due: SEMI_ANNUALLY_DUE,
		last_completed: "Jan 2, 2025",
	},
	{
		state: "Iowa",
		frequency: SEMI_ANNUALLY_HEADING,
		requires_county_in_tonnage: "No",
		notes: "",
		how_to_submit: `<a href="https://iowadeptag.my.site.com/s/login/?amp=&ec=302" target= "_blank">${ONLINE}</a>`,
		point_of_contact_name: "Alan Keller",
		point_of_contact_phone: "515-281-8597",
		point_of_contact_email: "?",
		due: SEMI_ANNUALLY_DUE,
		last_completed: "Jan 2, 2025",
	},
	{
		state: "Indiana",
		frequency: SEMI_ANNUALLY_HEADING,
		requires_county_in_tonnage: "Yes",
		notes: "",
		how_to_submit:
			"Dowload forms at <a href='https://oisc.purdue.edu/fertilizer/forms.html'>Online</a>\n\nOffice of Indiana State Chemist\nPurdue University\n 175 S. University Street West\n Lafayette, IN 47907-206.",
		due: SEMI_ANNUALLY_DUE,
		last_completed: "Jan 10, 2025",
	},
	{
		state: "Pennsylvania",
		frequency: SEMI_ANNUALLY_HEADING,
		requires_county_in_tonnage: "Yes",
		notes: "",
		how_to_submit: `<a href="https://www.paplants.pa.gov/" target="_blank" rel="noopener noreferrer">${ONLINE}</a>`,
		due: SEMI_ANNUALLY_DUE,
		last_completed: "Jan 10, 2025",
	},

	{
		state: "California - SoilMaxx",
		frequency: SEMI_ANNUALLY_HEADING,
		notes: "",
		requires_county_in_tonnage: "Yes",
		how_to_submit: `<a href="https://inspect.cdfa.ca.gov/evj/ExtraView?killcache=-1515228896" target="_blank" rel="noopener noreferrer">${ONLINE}</a>`,
		due: SEMI_ANNUALLY_DUE,
		last_completed: "Jan 7, 2025",
	},

	{
		state: "California - GroPal",
		notes: "Always list no sales",
		frequency: SEMI_ANNUALLY_HEADING,
		requires_county_in_tonnage: "No",
		how_to_submit: `<a href="https://inspect.cdfa.ca.gov/evj/ExtraView?killcache=-1515228896" target="_blank" rel="noopener noreferrer">${ONLINE}</a>`,
		due: SEMI_ANNUALLY_DUE,
		last_completed: "Jan 7, 2025",
	},

	//Yearly
	{
		state: "Michigan",
		frequency: YEARLY_HEADING,
		notes: "",
		requires_county_in_tonnage: "No",
		how_to_submit: `<a href="https://www.michigan.gov/mdard/plant-pest/fertilizer/fertilizerinfo/reporting-fertilizer-tonnage" target="_blank" rel="noopener noreferrer">${ONLINE}</a>`,
		due: "Jan 31",
		last_completed: "Jan 7, 2024",
	},
	{
		state: "Minnesota",
		frequency: YEARLY_HEADING,
		requires_county_in_tonnage: "No",
		notes: "",
		how_to_submit:
			"MINNESOTA DEPARTMENT OF AGRICULTURE \n Attn: Cashier \n 625 Robert Street North\n Saint Paul, MN 55155-2538.",
		due: "July 31",
		last_completed: "September 20, 2024",
	},
	{
		state: "Vermont",
		frequency: YEARLY_HEADING,
		notes: "",
		requires_county_in_tonnage: "Yes",
		how_to_submit:
			'Email to <a href="mailto:agr.feedseedfert@vermont.gov" target="_blank" rel="noopener noreferrer">Vermont AG Email</a>',
		point_of_contact_name: "Lisa Fantelli",
		point_of_contact_phone: "802-828-5050",
		point_of_contact_email: "Lisa.fantelli@vermont.gov",
		due: "Jan 15",
		last_completed: "Jan 2, 2025",
	},
	{
		state: "Mississippi",
		frequency: YEARLY_HEADING,
		notes: "",
		requires_county_in_tonnage: "No",
		how_to_submit: `<a href="https://agnet.mdac.ms.gov/fflsp/account/login" target="_blank" rel="noopener noreferrer">${ONLINE}</a>`,
		due: "Jul 1",
		last_completed: "Jul 1",
	},
	{
		state: "Utah",
		frequency: YEARLY_HEADING,
		requires_county_in_tonnage: "Yes",
		how_to_submit: `<a href="https://webapp.ag.utah.gov/productRegistration/registrant.jsp" target="_blank" rel="noopener noreferrer">${ONLINE}</a>.\n\nMail a check to: Utah Department of Agriculture and Food and Plant Industry Division\n4315 South 2700 West TSOB South Building, Floor 2\n Taylorsville, UT 84129-21280`,
		notes:
			"Cover sheet for payment for for AG-USA is in dropbox under Utah Tonnage Reports",
		due: "Nov 15",
		last_completed: "Nov 1, 2024",
	},
	{
		state: "North Dakota",
		frequency: YEARLY_HEADING,
		notes: "",
		requires_county_in_tonnage: "No",
		how_to_submit: `<a href="https://www.kellysolutions.com/nd/FertDistribLicenses/tonnage/login.asp" target="_blank" rel="noopener noreferrer">${ONLINE}</a>`,
		point_of_contact_name: "Lukas Wagner",
		point_of_contact_phone: "701 328-4922",
		point_of_contact_email: "bkiefel@nd.gov",
		due: "Jan 31",
		last_completed: "Jan 2, 2025",
	},
];
