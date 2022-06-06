module.exports = {
	reactStrictMode: true,
	images: {
		domains: ["unpkg.com"],
	},
	env: {
		API_URL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/v1/",
	},
}
