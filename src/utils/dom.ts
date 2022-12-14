/**
 * Get element to animate
 */
export const getElementToAnimate = (parent: HTMLElement): HTMLElement => {
	return parent.shadowRoot !== null
		? parent
		: ((parent.firstElementChild || (parent.children.length && parent.children[0]) || parent) as HTMLElement)
}

/**
 * Clear Container range contents of template code when the web component is connected to the DOM
 * @param myNode
 */
export const clearContents = (myNode: HTMLElement): void => {
	// using range as mostly we use the Host tag to encapsulate HTMLElements
	let range = document.createRange()
	range.selectNodeContents(myNode)
	range.deleteContents()
}
