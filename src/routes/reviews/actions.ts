// Click Outside
export const clickOutside = (element: HTMLElement, callbackFunction: () => void) => {
  const handleClick = evt => {
    !element.contains(evt.target) && callbackFunction()
  }

  document.body.addEventListener('click', handleClick, { capture: true })

  return {
    destroy() {
      document.body.removeEventListener('click', handleClick)
    },
  }
}
