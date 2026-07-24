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
		job: "Front-End Developer",
		projectLink: "https://github.com/oleojake",
	},
	socials: {
		linkedIn: "https://www.linkedin.com/in/pablo-marzal/",
		github: "https://github.com/oleojake",
	},
	projects: {
		"QuickMock": {
			url: "https://github.com/Lemoncode/quickmock/tree/main",
			tags: ["react", "konva.js", "typescript"],
		},
		"Basic Pod Architecture React Template": {
			url: "https://github.com/oleojake/basic-pod-architecture-react-boiler-template",
			tags: ["react", "architecture", "webpack"],
		},
		"React (POS) Point Of Sale": {
			url: "https://github.com/oleojake/tpv-react",
			tags: ["react", "mui", "typescript"],
		},
		"FindMyGitHubId": {
			url: "https://github.com/oleojake/github-member-id",
			tags: ["react", "tailwind", "api"],
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
import symfony from "../public/icons/symfony.svg?raw";
import angular from "../public/icons/angular.svg?raw";

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
	{ title: "Symfony", icon: symfony },
	{ title: "Angular", icon: angular },
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

export const titles: Title[] = [
	{
		title: "Bachelor's Degree in Multimedia Engineering",
		src: "multimedia-engineering-degree",
	},
	{ title: "Master's in Frontend Development", src: "master-degree-frontend" },
	{ title: "Master's in Ecommerce and Digital Marketing", src: "master-degree-ecommerce" },
	{ title: "First Certificate in English", src: "first-certificate-english" },
];

interface Certifications {
	title: string;
	school: string;
	year: string;
}

export const certifications: Certifications[] = [
	{
		title: "Higher Technician in Web Applications Development",
		school: "IES San Vicente",
		year: "2025",
	},
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

export const jobs: Job[] = [
	{
		startYear: "2025",
		endYear: "Present",
		company: "Limenius",
		jobPosition: "Frontend Developer",
		description:
			"Develop and maintain web and mobile applications using React, React Native and Symfony, implementing new features and improving existing applications with a focus on scalability and usability.",
	},
	{
		startYear: "2024",
		endYear: "2025",
		company: "Quickmock",
		jobPosition: "Frontend Developer",
		description:
			"As a Frontend Developer, I contributed to an open-source wireframing tool built with TypeScript, React, and Konvajs, enabling users to quickly create basic wireframes with interactive and scalable UI elements. I collaborated with cross-functional teams in an agile environment.",
	},
	{
		startYear: "2023",
		endYear: "2024",
		company: "Ecommaster.es School",
		jobPosition: "Frontend Developer",
		description:
			"Developed corporate websites, landing pages and e-commerce platforms, building responsive interfaces aligned with business and marketing objectives.",
	},
	{
		startYear: "2016",
		endYear: "2024",
		company: "Turronesydulces",
		jobPosition: "Ecommerce & Digital Marketing Manager",
		description:
			"Managed the day-to-day operations of an e-commerce business, combining digital marketing, logistics, customer support and online sales across Magento, Shopify, Amazon and WordPress.",
	},
	{
		startYear: "2016",
		endYear: "2016",
		company: "Digital Latam",
		jobPosition: "Frontend & Elearning Developer",
		description:
			"Developed front-end solutions for corporate e-learning projects, creating interactive interfaces and learning content using HTML, CSS and JavaScript.",
	},
];
