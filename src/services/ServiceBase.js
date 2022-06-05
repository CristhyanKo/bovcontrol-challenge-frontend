import api from "../utils/api"

class Base {
	constructor(routeBase) {
		this.routeBase = routeBase
	}

	async getAll(page, limit) {
		const response = await api.get(`${this.routeBase}/getAll?page=${page || 1}&limit=${limit || 10}`)
		return response.data.result.data
	}
}

export default function ServiceBase(routeBase) {
	return new Base(routeBase)
}
