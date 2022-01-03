import {
	faDiscord,
	faGithub,
	faInstagram,
	faSpotify,
	faStackOverflow,
	faSteam,
	faYoutube,
	faLinkedin,
	faLine
} from "@fortawesome/free-brands-svg-icons";
import { faDotCircle, faEnvelope } from "@fortawesome/free-regular-svg-icons";
//import { faGamepad, faMoneyBill } from "@fortawesome/free-solid-svg-icons";

export const DISCORD_ID = "528583057054236683";

export const CONTACT = [
	{
		href: "mailto:demirci.kannaphongi62@nu.ac.th",
		icon: faEnvelope,
		name: "E-Mail",
		value: "kannaphongi62@nu.ac.th",
		color: "text-red-500",
	},
	{
		href: "https://github.com/KanapongAiamtip",
		icon: faGithub,
		name: "github",
		value: "@ppromxx",
		color: "text-dark",
	},
	{
		href: "https://www.youtube.com/channel/UCsK6LK97jTdlgB6Lrmy9DJQ",
		icon: faYoutube,
		name: "YouTube",
		value: "pond ppnaravit",
		color: "text-red-500",
	},
	{
		href: "https://www.instagram.com/_______knp___krit/",
		icon: faInstagram,
		name: "Instagram",
		value: "@_______knp___krit",
		color: "text-pink-500",
	},
	{
		href: "https://discord.com/invite/kaV7ARabHk",
		icon: faDiscord,
		name: "Discord Server",
		value: "discord.gg/kaV7ARabHk",
		color: "text-blue-500",
	},
	{
		href: "",
		icon: faLine,
		name: "Line",
		value: "ID homesoda",
		color: "text-purple-500",
	},
];

export const SOCIALS = [
	{
		href: `discord://click-me/users/${DISCORD_ID}`,
		icon: faDiscord,
		name: "Discord Account",
		value: "ppromxx",
		color: "text-blue-500",
	},
	{
		href: "https://steamcommunity.com/profiles/76561198332210827/",
		icon: faSteam,
		name: "Steam",
		value: "ppromxx",
		color: "text-dark",
	},
	{
		href: "https://open.spotify.com/user/21cbckkv3tsomhvf3osbt5uby?si=24d735064831421c",
		icon: faSpotify,
		name: "Spotify",
		value: "ppromxx",
		color: "text-green-500",
	},
	{
		icon: faDotCircle,
		name: "Pokemon Unite",
		value: "C5MRC9A",
		color: "text-red-500",
	},
	{
		href: "https://stackoverflow.com/users/17437813/ppromxx",
		icon: faStackOverflow,
		name: "StackOverFlow",
		value: "ppromxx",
		color: "text-yellow-500",
	},
	{
		href: "https://www.linkedin.com/in/kannaphong-iamthip-4a8768226/",
		icon: faLinkedin,
		name: "Linkedin",
		value: "Kunapong Aiamtip",
		color: "text-blue-500",
	},
];
