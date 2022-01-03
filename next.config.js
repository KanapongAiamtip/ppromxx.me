/* eslint-disable */
const withImages = require("next-images");

module.exports = withImages({
	reactStrictMode: true,
	webpack(config) {
		// replace react with preact to reduce bundle size and faster DevServer
		Object.assign(config.resolve.alias, {
			"react-dom": "preact/compat",
			react: "preact/compat",
		});
		return config;
	},
	async redirects() {
		return [
			{
				source: "/github",
				destination: "https://github.com/KanapongAiamtip",
				permanent: true,
			},
			{
				source: "/instagram",
				destination: "https://www.instagram.com/_______knp___krit/",
				permanent: true,
			},
			{
				source: "/youtube",
				destination: "https://www.youtube.com/channel/UCsK6LK97jTdlgB6Lrmy9DJQ",
				permanent: true,
			},
			{
				source: "/discord",
				destination: "https://discord.com/invite/kaV7ARabHk",
				permanent: true,
			},
		];
	},
});
