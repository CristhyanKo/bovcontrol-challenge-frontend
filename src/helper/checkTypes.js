class CheckTypes {
	isBooelan(value) {
		return typeof value === "boolean"
	}

	isArray(value) {
		return !!value && value.constructor === Array
	}

	isObject(value) {
		return !!value && value.constructor === Object
	}
}

module.exports = new CheckTypes()
