// Viewport
let intersectionObserver

const ensureIntersectionObserver = options => {
  if (intersectionObserver) return

  intersectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const eventName = entry.isIntersecting ? 'enterViewport' : 'exitViewport'
      entry.target.dispatchEvent(new CustomEvent(eventName))
    })
  }, options)
}

export const viewport = (element, options) => {
  ensureIntersectionObserver(options)

  intersectionObserver.observe(element)

  return {
    update(newOptions) {
      options = newOptions
    },

    destroy() {
      intersectionObserver.unobserve(element)
    },
  }
}
