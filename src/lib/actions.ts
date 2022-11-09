// Viewport
type IntersectionObserverOptions = { rootMargin?: string }

let intersectionObserver: IntersectionObserver

const ensureIntersectionObserver = (options: IntersectionObserverOptions) => {
  if (intersectionObserver) return

  intersectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const eventName = entry.isIntersecting ? 'enterViewport' : 'exitViewport'
      entry.target.dispatchEvent(new CustomEvent(eventName))
    })
  }, options)
}

export const viewport = (
  element: HTMLElement,
  options: IntersectionObserverOptions
) => {
  ensureIntersectionObserver(options)

  intersectionObserver.observe(element)

  return {
    update(newOptions: IntersectionObserverOptions) {
      options = newOptions
    },

    destroy() {
      intersectionObserver.unobserve(element)
    },
  }
}
