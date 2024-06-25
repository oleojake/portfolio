interface IConfig {
	me: {
		name: string;
		job: string;
		projectLink: string;
	};
	socials: {
		[name: string]: string;
	};
	projects: {
		[name: string]: {
			url: string;
			tags: string[];
		};
	};
}

export const Config: IConfig = {
	me: {
		name: "Pablo Marzal Garrigós",
		job: "multimedia engineer",
		projectLink: "https://github.com/oleojake",
	},
	socials: {
		linkedIn: "https://www.linkedin.com/in/pablo-marzal/",
		github: "https://github.com/oleojake",
	},
	projects: {
		"React (POS) Point Of Sale": {
			url: "https://github.com/oleojake/tpv-react",
			tags: ["react", "mui", "typescript"],
		},
		"Classic Pokédex": {
			url: "https://github.com/oleojake/Classic-Pokedex",
			tags: ["astro", "tailwind", "api"],
		},
		"React tic-tae-toe vs AI": {
			url: "https://github.com/oleojake/React-TicTaeToe-AI",
			tags: ["react", "ai", "chagtp"],
		},
		"weatherWhiz": {
			url: "https://github.com/oleojake/weather-app",
			tags: ["react", "mui", "typescript"],
		},
	},
};

import htmlSVG from "../public/icons/html.svg?raw";
import cssSVG from "../public/icons/css.svg?raw";
import jsSVG from "../public/icons/js.svg?raw";
import tsSVG from "../public/icons/ts.svg?raw";
import reactSVG from "../public/icons/react.svg?raw";
import gitSVG from "../public/icons/git.svg?raw";
import astroSVG from "../public/icons/astro.svg?raw";
import tailwindSVG from "../public/icons/tailwind.svg?raw";
import wordpressSVG from "../public/icons/wordpress.svg?raw";
import githubSVG from "../public/icons/github.svg?raw";
import figmaSVG from "../public/icons/figma.svg?raw";
import sassSVG from "../public/icons/sass.svg?raw";
import bootstrapSVG from "../public/icons/bootstrap.svg?raw";
import muiSVG from "../public/icons/mui.svg?raw";

interface Tool {
	title: string;
	icon: string;
}

export const tools: Tool[] = [
	{ title: "HTML", icon: htmlSVG },
	{ title: "CSS", icon: cssSVG },
	{ title: "JavaScript", icon: jsSVG },
	{ title: "TypeScript", icon: tsSVG },
	{ title: "React", icon: reactSVG },
	{ title: "Git", icon: gitSVG },
	{ title: "Astro", icon: astroSVG },
	{ title: "Tailwind", icon: tailwindSVG },
	{ title: "Sass", icon: sassSVG },
	{ title: "Bootstrap", icon: bootstrapSVG },
	{ title: "WordPress", icon: wordpressSVG },
	{ title: "GitHub", icon: githubSVG },
	{ title: "Figma", icon: figmaSVG },
	{ title: "MUI", icon: muiSVG },
];

interface Title {
	title: string;
	src: string;
}

export const titles : Title[]= [
	{
		title: "Multimedia Engineering Degree",
		src: "multimedia-engineering-degree",
	},
	{ title: "Master's Degree in front-end", src: "master-degree-frontend" },
	{ title: "Master's Degree in E-commerce", src: "master-degree-ecommerce" },
	{ title: "First Certificate in English", src: "first-certificate-english" },
];

interface Certifications {
	title: string;
	school: string;
	year: string;
}

export const certifications : Certifications[]= [
	{
		title: "Bootcamp JavaScript & TypeScript",
		school: "Lemoncode",
		year: "2024",
	},
	{ title: "HTML5 & CSS Course", school: "Open Bootcamp", year: "2024" },
	{ title: "JavaScript & JQuery Course", school: "Open Bootcamp", year: "2024" },
	{ title: "JavaScript Course", school: "aprendejavascript.dev", year: "2024" },
	{ title: "Git & GitHub Course", school: "/mouredev/hello-git", year: "2024" },
	{
		title: "Google Ads Search Certification",
		school: "Google Skillshop",
		year: "2023",
	},
	{
		title: "Google Ads Display Certification",
		school: "Google Skillshop",
		year: "2023",
	},
	{
		title: "Google Shopping Ads Certification",
		school: "Google Skillshop",
		year: "2023",
	},
	{
		title: "Google Analytics Certification",
		school: "Google Skillshop",
		year: "2023",
	},
	{
		title: "Inbound Marketing Certification",
		school: "Hubspot Academy",
		year: "2023",
	},
	{
		title: "Email Marketing Certification",
		school: "Hubspot Academy",
		year: "2023",
	},
];

interface Job {
	startYear: string;
	endYear: string;
	company: string;
	jobPosition: string;
	description: string;
}

export const jobs : Job[] = [
	{
		startYear: "2016",
		endYear: "2024",
		company: "Turronesydulces",
		jobPosition: "Ecommerce Manager",
		description:
			"Management of an Ecommerce developed in Magento and the supervision of other sales channels like Amazon, WordPress or Shopify among others. SEO Strategies, Advertising Campaigns, Emailmarketing, Automations, CRM Management, Web Development, KPIS Analysis, Logistics Management, Social Networks, Customer Service and other tasks related to the daily maintenance of an online store.",
	},
  {
		startYear: "2017",
		endYear: "2024",
		company: "Ecommaster.es School",
		jobPosition: "Digital Marketing & Head of Studies",
		description:
			"Digital Marketing tasks: Lead Generation, SEO, Facebook Ads, Content Creation, CRM, Invoicing, CRM Management, organization of online and in-person events among others. In addition, maintenance of the school's campus as well as the management of a community linked to digital marketing.",
	},
  {
		startYear: "2016",
		endYear: "2016",
		company: "Digital Latam",
		jobPosition: "Frontend & Elearning Developer",
		description:
			"Development of e-learning platforms using HTML, CSS and JavaScript. Design of interactive videos using 2D animations",
	},
];
