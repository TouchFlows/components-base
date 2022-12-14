/**
 * Get a random item from an array
 * @param array
 * @returns
 */
export function getRandomValue(array: string | any[]) {
	return array[Math.floor(Math.random() * array.length)]
}

/**
 * Generate a unique identifier
 * @returns uid
 */
export function stringGen() {
	let text = ''
	const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

	for (var i = 0; i < 7; i++) text += possible.charAt(Math.floor(Math.random() * possible.length))

	return text
}

/**
 * Convert variable names to Camel Case
 * @param str
 * @returns camilized string
 */
export function camelize(str: string) {
	return str
		.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
			return index === 0 ? word.toLowerCase() : word.toUpperCase()
		})
		.replace(/\s+/g, '')
}
