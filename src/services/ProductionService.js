import api from "../utils/api"
import { Base } from "./ServiceBase"

class Production extends Base {
	constructor(routeBase) {
		super(routeBase)
		this.routeBase = "production"
	}

	async getByFarm(farmId) {
		const response = await api.post(`${this.routeBase}/getByFarm`, { farmId })
		return response.data.result.data
	}
}

export default function ProductionService() {
	return new Production("production")
}
