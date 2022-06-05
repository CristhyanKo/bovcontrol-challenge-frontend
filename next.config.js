module.exports = {
	reactStrictMode: true,
	env: {
		API_URL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/v1/",
	},
}
