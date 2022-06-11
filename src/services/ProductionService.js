import api from "../utils/api"
import ServiceBase from "./ServiceBase"

class Production extends ServiceBase {
	constructor() {
		super("production")
		this.routeBase = "production"
	}

	async getByFarm(farmId) {
		const response = await api.post(`${this.routeBase}/getByFarm`, { farmId })
		return response.data.result.data
	}
}

export default function ProductionService() {
	return new Production()
}
