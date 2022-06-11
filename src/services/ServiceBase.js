import api from "../utils/api"

export class Base {
	constructor(routeBase) {
		this.routeBase = routeBase
	}

	async store(data) {
		const response = await api.post(`${this.routeBase}/store`, data)
		return response.data.result.data
	}

	async update(data) {
		const response = await api.post(`${this.routeBase}/update`, data)
		return response.data.result.data
	}

	async delete(data) {
		const response = await api.post(`${this.routeBase}/delete`, data)
		return response.data.result.data
	}

	async getAll(page, limit) {
		const response = await api.get(`${this.routeBase}/getAll?page=${page || 1}&limit=${limit || 10}`)
		return response.data.result.data
	}

	async getAllFull() {
		const response = await api.get(`${this.routeBase}/getAllFull`)
		return response.data.result.data
	}
}

export default function ServiceBase(routeBase) {
	return new Base(routeBase)
}
