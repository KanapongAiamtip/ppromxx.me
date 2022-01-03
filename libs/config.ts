import JS from "@assets/elements/js.svg";
import VUE from "@assets/stack/vue.svg";
import BUEFY from "@assets/stack/buefy.svg";
import VUETIFY from "@assets/stack/vuetify.svg";
import TYPESCRIPT from "@assets/stack/typescript.svg";
import { CONTACT, DISCORD_ID, SOCIALS } from "@libs/accounts";
import { STACKS } from "@libs/stack";

const NOW = new Date().getFullYear();
const STARTED_AT = 2019;
const EXPERIENCE = NOW - STARTED_AT;

export interface IFramework {
	name: string;
	color: string;
	experience: number;
	icon: string;
}

export const CONFIG = {
	NAME: "Teepakorn",
	SURNAME: "Khwanboon",
	NICK: "prom",
	EMAIL: "kannaphongi62@nu.ac.th",
	GITHUB_USERNAME: "KanapongAiamtip",
	AVATAR_URL: "https://avatars.githubusercontent.com/u/75485361?v=4", // dont forget to change next.config.js
	LANYARD_ID: DISCORD_ID,
	STARTED_AT,
	NOW,
	EXPERIENCE,
	TITLE: "I'm a software developer",
	BIO: `I am a student from Naresuan University who codes for fun. I have been in coding since ${STARTED_AT} and I'm a software developer from Phitsanulok Thailand.
	My Skill programing is Java HTML Python Swift Kotlin Typescript Vue Javascpit
	I am Developer Team Website Codee.Club
	I choose to study in BS IT because I am very fond of programming for ${EXPERIENCE} years.  Now I'm trying to produce lots of open source projects and working as freelancer.`,
	IMPORTANT_SKILLS: [
		"Java",
		"Python",
		"Swift",
		"Kotlin",
		"Ruby",
		"Scala",
		"Dart",
		"JavaScript (Node & Client-Side)",
		"TypeScript",
		"Fultter",
		"CSS SCSS",
		"Vue Buefy Vuetify",
		"Firebase",
		"SQL (Sqlite)",
	],
	FAVOURITE_FRAMEWORKS: [
		{
			name: "Javascript",
			color: "bg-yellow-300 dark:bg-yellow-400",
			experience: NOW - 2019,
			icon: JS,
		},
		{
			name: "TypeScript",
			color: "bg-blue-100 dark:bg-blue-800",
			experience: NOW - 2019,
			icon: TYPESCRIPT,
		},
		{
			name: "Vue",
			color: "bg-green-600 dark:bg-green-800",
			experience: NOW - 2019,
			icon: VUE,
		},
		{
			name: "Buefy",
			color: "bg-purple-800 dark:bg-purple-800",
			experience: NOW - 2019,
			icon: BUEFY,
		},
		{
			name: "Vuetify",
			color: "bg-blue-500 dark:bg-blue-800",
			experience: NOW - 2020,
			icon: VUETIFY,
		},
	] as IFramework[],
	INTERESTS: [
		{
			name: "TypeScript",
			color: "text-blue-600 dark:text-blue-400",
			href: "https://www.typescriptlang.org/",
		},
		{
			name: "Buefy",
			color: "text-red-600 dark:text-red-400",
			href: "https://buefy.org/",
		},
		{
			name: "ReactJS",
			color: "text-blue-600 dark:text-blue-400",
			href: "https://reactjs.org/",
		},
		{
			name: "Vuetify",
			color: "text-indigo-700 dark:text-indigo-300",
			href: "https://vuetifyjs.com/",
		},
	],
	CONTACT,
	SOCIALS,
	STACKS,
	DEV: process.env.NODE_ENV != "production",
};
