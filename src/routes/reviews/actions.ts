export const closeModal = (element: HTMLDialogElement) => {
  const callback = (event: MouseEvent) => {
    const dialogElement = element.getBoundingClientRect()

    const isInDialog =
      dialogElement.top <= event.clientY &&
      event.clientY <= dialogElement.top + dialogElement.height &&
      dialogElement.left <= event.clientX &&
      event.clientX <= dialogElement.left + dialogElement.width

    !isInDialog && element.close()
    // document.body.style.position = 'unset'
  }

  element.addEventListener('click', callback)

  return {
    destroy() {
      element.removeEventListener('click', callback)
    },
  }
}
