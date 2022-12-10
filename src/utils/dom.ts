/**
 * Get element to animate
 */
export const getElementToAnimate = (parent: HTMLElement): HTMLElement => {
  return parent.shadowRoot !== null
    ? parent
    : ((parent.firstElementChild || (parent.children.length && parent.children[0]) || parent) as HTMLElement)
}

/**
 * Clear HTML contents
 * @param myNode
 */
export const clearContents = (myNode: HTMLElement): void => {
  // using range as mostly we use the Host tag to encapsulate HTMLElements
  let range = document.createRange()
  range.selectNodeContents(myNode)
  range.deleteContents()
}
