import { Message } from '../interfaces/IMessages'

export function shuffleMessages(messages: Message[]) {
	let clone = [...messages]
	for (let i = clone.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1))
		;[clone[i], clone[j]] = [clone[j], clone[i]]
	}
	return clone
}

export function anonymize(name: any) {
	let names = name.toUpperCase().split(/[\s_-]+/) // space and underscore
	if (names.length) {
		names.forEach((element: string, index) => {
			names[index] = element.charAt(0) + '.'
		})
		return names.join(' ')
	}
	return ''
}
