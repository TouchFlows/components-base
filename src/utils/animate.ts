export const animateCSS = (node: Element, animation: string, prefix: string = 'animate__') =>
  // We create a Promise and return it
  new Promise((resolve, _reject) => {
    const animationName = `${prefix}${animation}`

    node.classList.add(`${prefix}animated`, animationName)
    console.debug('animateCSS start', node.classList)

    // When the animation ends, we clean the classes and resolve the Promise
    const handleAnimationEnd = (event: Event) => {
      event.stopPropagation()
      console.debug('animateCSS end', node.classList)
      node.classList.remove(`${prefix}animated`, animationName)
      resolve('Animation ended')
    }

    node.addEventListener('animationend', handleAnimationEnd, { once: true })
  })
