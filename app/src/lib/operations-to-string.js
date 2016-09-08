export default function(operations) {
	let result = ''

	operations.map(operation => {
		const {name, value, more} = operation

		if (result.length) {
			result += '-/'
		}

		result += name

		if (value !== undefined) {
			result += `/${value}`
		}

		if (more !== undefined) {
			result += `/${more}`
		}

		result += '/'
	})

	return result
}
